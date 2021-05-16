`PlanningScene`类主要提供碰撞检查（collision check）和制约检查（constrain check）的接口。这篇文章为MoveIt官方教程的整理与实践内容。  
原文：[MoveIt Tutorials: Planning Scene](http://docs.ros.org/en/melodic/api/moveit_tutorials/html/doc/planning_scene/planning_scene_tutorial.html)


## Setup
`PlanningScene`可通过RobotModel，URDF或者SRDF来配置。

```cpp
robot_model_loader::RobotModelLoader robot_model_loader("robot_description");
robot_model::RobotModelPrt kinematic_model = robot_model_loader.getModel();
planning_scene::PlanningScene planning_scene(kinematic_model);
```

## Collision Checking  碰撞检查

### Self-collision checking 自我碰撞检查
首先我们要检查当前状态下的机器人是否处于自我碰撞状态。我们构建一个CollisionRequest对象和一个CollisionResult对象，并将它们传递给碰撞检查函数。检查的对象为URDF中提供的碰撞网络。
```cpp
collision_detection::CollisiontRequest collisiion_request;
collision_detection::CollisionResult collision_result;
planning_scene.checkSelfCollision(collision_request, collision_result);
```
如果只对Panda的手进行碰撞检查，可以通过在碰撞请求中添加组名来具体要求。
```cpp
collision_request.group_name = "hand";
current_state.setToRandomPositions();
collision_result.clear();
planning_scene.checkSelfCollision(collision_request, collision_result);
```

###  AllowedCollisionMatrix（ACM） 允许碰撞矩阵
ACM告诉碰撞世界**忽略**某些对象之间的碰撞。
```cpp
collision_detection::AllowedCollisionMatrix acm = planning_scene.getAllowedCollisionMatrix();
robot_state::RobotState copied_state = planning_scene.getCurrentState();

collision_detection::CollisionResult::ContactMap::const_iterator it2;
for (it2 = collision_result.contacts.begin(); it2 != collision_result.contacts.end(); ++it2)
{
	acm.setEntry(it2->first.first, it2->first,second, true);
}
collision_result.clear();
planning_scene.checkSelfCollision(collision_request, collision_result, copied_state, acm);
```

### Full Collision Checking  环境碰撞检查
我们可以使用`checkCollision`来同时检查自我碰撞与环境碰撞，有助于使机器人进一步远离环境中的障碍物。代码在这里就省略了。


## 制约检查
`PlanningScene`可以调用检查制约条件的函数。这些制约可以是两种类型。（a）从运动学制约`KinematicContraint`集合中选择，即`JointConstraint`，`PositionContraint`，`OrientationConstraint`和`VisibilityConstraint`（b）通过回调指定的用户定义制约。

我们首先看一个简单的运动学制约的例子。

### 运动学制约
我们在panda_arm组的末端执行器上定义一个简单的位置和方向制约。`moveit_core`的`kinematic_constraints`目录下的`utils.h`文件中有一些函数可供使用。
```cpp
std::string end_effector_name = joint_model_group->getLintModelNames().back();

geometry_msgs::PoseStamped desired_pose;
desired_pose.pose.orient.w = 1.0;
desired_pose.pose.position.x = 0.3;
desired_pose.pose.position.y = -0.185;
desired_pose.pose.position.z = 0.5;
desired_pose.header.frame_id = "panda_link0";

moveit_msgs::Contraints goal_constraint = kinematic_constraints::constructGoalConstraints(end_effetor_name, desired_pose);
```
现在，我们可以使用`PlanningScene`类中的`isStateConstrained`函数来检查一个状态与这个制约。
```cpp
copied_state.setToRandomPositions();
copied_state.update();
bool constrained  = planing_scene.isStateConstrained(copied_state, goal_contraint);
ROS_INFO_STREAM("Random state is " << (constrained ? "constrained" : "not constrained"));
```
还有一种更有效的检查制约的方法（比如在计划器内反复检查同一个制约）我们首先构建一个`KinematicConstrainSet`，对ROS的制约信息进行预处理，并将其设置为快速处理。


### 用户定义的制约
给PlanningScene类指定自定义制约，可以通过使用`setStateFeasibilityPredicte`函数指定一个回调来实现。下面这个例子是检查panda_joint1处于正还是负的角度。
```cpp
bool stateFeasibilityTestExample(const robot_state::RobotState& kinematic_state, bool verbose)
{
	const double* joint_values = kinematic_state.getJointPositions("panda_joint1");
	return (joint_values[0] > 0.0);
}

planning_scene.setStateFeasibilityPredicte(stateFeasibilityTestExample);
```
现在，只要调用isStateFeasible，这个用户定义的回调就会被调用。
```cpp
bool state_feasible = planning_scene.isStateFeasible(copied_state);
ROS_INFO_STREAM("Random state is " << (state_feasible ? "vible" : "not feasible"));
```
每当调用`isStateValid`时，都会进行三次检查。（a）碰撞检查（b）制约检查和（c）使用用户定义的回调的可行性检查。
