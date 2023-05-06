---
layout: post
title: Linux终端仿真器Terminator
tags:
  - Ubuntu
  - tools
---
Linux操作系统上的终端仿真器不少，我最习惯用的是Terminator。其最显著的特点是方便的画面分割功能，使用户可以同时在一个窗口中使用多个终端。
Terminator还支持自定义快捷键，字体和颜色配置，使用户可以根据自己的需求进行个性化的定制。
## 安装
```bash
sudo apt install terminator
```

## 将Terminator设定为默认终端
设定后的好处就是可以通过`ctrl+alt+t`直接调出Terminator画面。
```bash
sudo update-alternative --config x-terminal-emulator
```

## 安装后一些设定
### 画面分割快捷键
### 隐藏title
### 淡化分割线
### starship的安装
