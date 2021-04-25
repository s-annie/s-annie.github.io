RobotModel和RobotState这两个类是解决机器人动力学的核心。  
RobotModel类中包含了链接（Links）和关节（Joints）的关系，以及从URDF中加载的关节极限（joint limit）属性。RobotModel还将机器人的链接和关节分离成SRDF中定义的规划组。  
RobotState则包含了机器人在每一个时间点上的信息，例如关节位置的向量，可选择的速度和加速度等。这些信息取决于机器人的当前状态，比如说末端执行器的雅各布系数。RobotState还包含辅助函数，用于根据末端执行器位置（笛卡尔姿势）设置手臂位置，以及计算笛卡尔轨迹。  
(最后这段话里的雅各布系数，笛卡尔轨迹的都是些什么鬼东西)

Anyway，上面这段说明是MoveIt官方网站上对于RobotModel和RobotState的解释。下面分步骤来看看如何在代码里建立RobotModel实体。

### Start

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
