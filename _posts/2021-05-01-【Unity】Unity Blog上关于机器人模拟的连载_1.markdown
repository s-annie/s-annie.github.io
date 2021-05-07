---
layout: post
categories: Robotics
tags: Simulation Unity
---
这篇文章发表在2020年11月份，也就是半年前，主要介绍了Unity-Robotics-Hub这个库。Unity-Robotics-Hub提供了一个pick-and-place的实践教程。这是个很基本的任务，我们将它细分成几个工作流程，然后看看Unity在每步中所起到的作用。

原文：[Robotics simulation in Unity is as easy as 1, 2, 3!](https://blogs.unity3d.com/2020/11/19/robotics-simulation-in-unity-is-as-easy-as-1-2-3/)

1. Defining the robot‘s task / 定义机器人的任务  
这个教程里的任务很简单，即利用机器臂抓起一个物体然后将它放在指定的位置上。环境同样很简单，一个空屋子，一个放机器臂的桌子和一个正方体。我们使用MoveIt这个库来进行动作规划。**模拟器将机器臂的各轴角度，正方体的坐标，以及目标位置的坐标发送给MoveIt。MoveIt会计算出动作轨迹，然后将其发送回模拟器由其执行。**  
问题已经明确了，接下来看看如何在这个工作流程中使用Unity。

2. Bringing your robot into simulation / 机器人模拟器  
机器人模拟需要建立假想环境。在Unity中可以很容易创建假想环境，问题是如何将机器人带入这个环境？  
描述机器人物理性质可以使用[Universal Robot Description Format (URDF](http://wiki.ros.org/urdf)这种记述方式。用过ROS的应该都很熟悉了。Unity中有一个叫做[URDF Importer](https://github.com/Unity-Technologies/URDF-Importer)的包，可以用来将URDF文件导入场景之中。

3. Connecting your simulation to ROS / 连接ROS和模拟器
将机器人导入场景之后，接下来就要测试动作规划算法了。Unity需要向ROS传递机器人的姿势，目标物体等状态消息，ROS则需要向Unity传回规划后的动作轨迹。  
这里提供了两个新的包，ROS-TCP-Connector和ROS-TCP-Endpoint. ROS-TCP-Connector可用于转换ROS.msg 和.srv文件，以及在Unity这边pub/sub消息。ROS-TCP-Endpoint则创建了一个endpoint，使ROS和Unity之间可以相互通信。
pick-and-place的实践教程中，ROS和Unity之间的通信是这样实现的。首先，使用ROS-TCP-Connector在Unity中创建一个Publisher，通过TCP将姿势坐标发送给ROS。ROS这边则建立起一个ROS-TCP-Endpoint来接受这些信息。Unity上用一个按钮，当其被按下的时候触发事件从而向ROS发出计算要求。ROS将计算出的轨迹发挥给Unity，然后Unity代码使用ArticulationBody APIS在机器臂上执行这个轨迹。  
之前我以为连接Unity和ROS需要用ROS#和ROSBridge。ROS-TCP-Connector包fork自ROS#，而ROS-TCP-Endpoint代替了ROSBridge。ROS#和ROSBridge的原理是，ROS#将C#信息转换成json对象，所以ROSBridge那边需要将其重新恢复成ROS信息。而这两个新的包则省去了中间转换的麻烦，所以通信速度快了许多。

