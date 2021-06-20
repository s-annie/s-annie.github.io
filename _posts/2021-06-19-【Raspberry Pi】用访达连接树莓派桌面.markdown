---
layout: post
title: 【Raspberry Pi】使用Macbook的Finder连接树莓派
categories: tech RaspberryPi
---
突发奇想把家中搁置的显示屏和树莓派4翻了出来。记得MacBook的Finder是可以连接到树莓派的桌面的，可惜忘记怎么弄，又查了好一阵子资料。

### 前提条件：从terminal可以ssh远程连接到树莓派。这一步骤就不详细介绍了。

### 1. 安装`tightvncserver`
```bash
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install tightvncserver
```

### 2.设置远程连接时的密码
```bash
vncserver
```
接着按照提示输入密码就可以了。密码要求最少8个文字。  
注意在被询问viewonly？的时候要坚定地选择no。

### 3. 从Finder连接至树莓派
鼠标右键+control打开Finder的菜单，点击“连接服务器”。
![image]("/assets/post/2021-6/8.png")

点击后出现如下画面。服务器是`vnc://<IP>:5901`的格式。5901时tigntvnc所用端口。
![image]("/assets/post/2021-6/9.png")

点击连接，输入刚才设定的密码，就可以看到树莓派的桌面出现在Macbook的上面了，非常方便。
