---
title: 【ROS】元包（metapackage）
date: 2021/08/21
tags: 
- ROS
- robotics
---
元包可以将多个包组合成一个逻辑包，在`package.xml`中带有以下的导出标签。
```xml
 <export>
   <metapackage />
 </export>
```
除了对catkin的一个必要的`<buildtool_depends>`依赖外，元包只能对它们分组的包有执行依赖性。  
<!--more-->

元包有一个模版式的CMakeLists.txt文件。
```xml
cmake_minimum_required(VERSION 2.8.3)
project(<PACKAGE_NAME>)  <!-- 将PACKAGE_NAME 替换成元包的名字 --> 
find_package(catkin REQUIRED)
catkin_metapackage()
```

参考：http://wiki.ros.org/catkin/package.xml#Metapackages
