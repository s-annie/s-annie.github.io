---
layout: post
title: 【tips】ROS noetic无法显示RViz
categories: Web
---
写在前面：此问题仍未解决。
今天下决心用Macbook的Parallel Desktop搭建Ubuntu+ROS环境。Parallel Desktop提供Ubunt20.04的下载，想着正好趁这个机会试用一下Ubuntu20.04+ROS noetic。  
结果安装之后就遇到了问题：RViz由于Segfaulment Error无法正常显示。  
折腾了半天无果，于是重新下载Ubuntu18.04的镜像并安装ROS melodic。忐忑地启动RViz，嗯，正常启动了。

## 键盘配置的变更
Noetic下载安装之后，既定的键盘配置是US，用起来有些不方便。使用下面的指令可以设定和自己机器相符的键盘配置。
```bash
sudo dpkg-reconfigure keyboard-configuration
```
Apple系列的机器可以到这里去看自己是哪种键盘。
https://support.apple.com/en-us/HT201794

```
sudo apt install tilix
sudo update-alternatives --config x-terminal-emulator
```

$ ssh-keygen -t rsa -b 4096 -C "hogehoge@fuga.com"
# -t 暗号化方式を指定
# -b 暗号化強度を指定
# -C コメントを設定 

cat ~/.ssh/id_rsa.pub | xsel -bi
