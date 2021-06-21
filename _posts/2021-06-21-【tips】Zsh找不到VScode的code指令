---
layout: post
title: 【tips】tips】zsh找不到VScode的code指令
categories: VSCode tips tech
---

### 问题描述
Macbook上输入`code`指令时会出现`zsh： command not found`的提示。

### 解决
在`~/.zshrc`的末尾添加以下内容，保存。
```
export PATH="$PATH:/Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/bin"
```
(在VScode的界面上输入Shift+Command+P，实行`Shell Command: Install 'code' command in PATH`也可以解决问题。不过在我的环境中，这种方法每隔一段时间就会失效。原因不明。
)
