RobotModel和RobotState这两个类是解决机器人动力学的核心。  
RobotModel类中包含了链接（Links）和关节（Joints）的关系，以及从URDF中加载的关节极限（joint limit）属性。RobotModel还将机器人的链接和关节分离成SRDF中定义的规划组。  
RobotState则包含了机器人在每一个时间点上的信息，例如关节位置的向量，可选择的速度和加速度等。这些信息取决于机器人的当前状态，比如说末端执行器的雅各布系数。RobotState还包含辅助函数，用于根据末端执行器位置（笛卡尔姿势）设置手臂位置，以及计算笛卡尔轨迹。  
(最后这段话里的雅各布系数，笛卡尔轨迹的都是些什么鬼东西)

Anyway，上面这段说明是MoveIt官方网站上对于RobotModel和RobotState的解释。下面分步骤来看看如何在代码里使用这两个类。

### Start
初始化`RobotModelLoader`对象，加载ROS pamameter server上的`robot_description`，可返回一个`RobotModel`的共享指针。
```cpp
// loop up the robot description on the ROS parameter
robot_model_loader::RobotModelLoader robot_model_loader("robot_description");

// construct a RobotModel to use
robot_model::RobotModelPtr kinematic_model = robot_model_loader.getModel();
ROS_INFO("Model frame: %s", kinematic_model->getModelFrame().c_str());

// construct a RobotState that maintains the configuration of the robot
robot_state::RobotStatePtr kinematic_state(new robot_state::RobotState(kinematic_model));
// set all joints in the states to the default values
kinematic_state->setToDefaultValues();

// get a JointModelGroup, which represent the robot modle for a particular group
const robot_state JointModelGroup" joint_model_group = kinematic_model->getJointModelGroup("panda_arm");
const std::vector&lt;std::string>&amp; joint_names = joint_model_group->getVariableNames();
```

### Get Joint Values
获取Panda Arm各关节的角度.
```cpp
std::vector<double> joint_values;
kinematic_state->copyJointGroupPosiions(joint_model_group, joint_values);
for (std::size_t i = 0; i < joint_names.size(); ++i)
{
  ROS_INFO("Joint %s: %f", joint_names[i].c_str(), joint_values[i]);
}
```

### Joint Limits
关节极限可以通过`enforceBounds()`来设置.
```cpp
// Set one joint in the Panda Arm outside its joint limit
joint_values[0] = 5.57;
kinematic_state->setJointGroupPositions(joint_model_group, joint_values);

// Check whether any joint is outside its joint limits
ROS_INFO_STREAM("Current state is " << (kinematic_sate->satisfiesBounds() ? "valid" : "not valid"));

// Enforce the joint limits for this state and check again
kinematic_state->enforceBounds();
ROS_INFO_STREAM("Current state is " << (kinematic_state->satisfiesBounds() ? "valid" : "not valid"));
```

### Forward Kinematics
接下来随机设置一组关节角度，利用正运动学计算出Panda Arm末端链接“panda_link8”的姿势。
```cpp
kinematic_state->setToRandomPositions(joint_model_group);
const Eigen::Isometry3d& end_effector_state = kinematic_state->getGlobalLinkTransform("panda_link8");

// Print end-effector pose. Remember that this is in the model frame
ROS_INFO_STREAM("Translation: ¥n" << end_effector_state.translation() << "¥n");
ROS_INFO_STREAM("Rotation: ¥n" << end_effector_state.rotation() << "¥n");
```

### Inverse Kinematics
解决Panda Arm的逆运动学需要以下两个条件：
1. 末端执行器的期望姿势。这里使用在正运动学中解出的`end_effector_state`
2. timeout: 0.1s

```cpp
double timeout = 0.1;
bool found_ik = kinematic_state->setFromIK(joint_model_group, end_effector_state, timeout);

if (found_ik)
{
  kinematic_state->copyJointGroupPositions(joint_model_group, joint_values);
  for (std::size_t i = 0; i < joint_names.size(); ++i)
  {
    ROS_INFO("Joint %s: %f", joint_names[i].c_str(), joint_values[i]);
  }
}
else
{
  ROS_INFO("Did not find IK solution");
}
```
