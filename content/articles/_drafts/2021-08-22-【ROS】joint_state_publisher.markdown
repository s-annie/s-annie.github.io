---
layout: post
title: 【ROS】joint_state_publisher与robot_state_publish, tf
categories: ROS, robotics, tech
---
最近工作上在joint_state_publisher的使用遇到了一些问题，所以来系统地复习一下这部分。

## joint_state_publisher简介与作用
joint_state_publisher这个包负责给机器人发送sensor_msgs/JointState话题。它读取robot—description的参数，找到所有非固定joints然后发布一个定义所有关节的JointState信息。
