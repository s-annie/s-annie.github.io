---
layout: post
title: 【Unity】ML-Agents初探_1
categories: robotics unity tech
---

## ML-Agents简介
Unity推出的机器学习代理工具包（ML-Agents）是一个开源项目，利用游戏和模拟提供训练智能代理的环境。官方的入门指南中使用3D平衡球这个环境展示了如何进行训练。

## 安装
使用下面的指令将`ml-agents`git库下载到本地。
```bash
git clone --branch release_17 https://github.com/Unity-Technologies/ml-agents.git
```
根据[Installation](https://github.com/Unity-Technologies/ml-agents/blob/release_17_docs/docs/Getting-Started.md#installation)下载必要的库。之后打开`Assets/ML-Agents/Examples/3DBall/Scenes/3DBall`场景文件，就可以开始训练了。

## 3D平衡球环境简介
这个环境包含一些代理方块和球。每个方块都试图通过水平或垂直旋转来保持其球不掉下来。在这个环境中，一个代理方块即为一个代理。它每平衡一次球，就会得到一个奖励；而每掉一次球也会收到惩罚。训练过程的目标是让代理学会在头上平衡球。
代理是一个自主的行为者。它观察环境并与之互动。在Unity的上下文中，环境是包含一个或多个代理对象的场景。当然还有代理与之互动的其它实体（entities）。
在3D平衡球场景中包含多个代理方块。每个方块都是一个独立的代理，但它们共享一个行为。3D平衡球这样做是为了加快训练速度，所有的12个代理都是平行地对训练做出贡献。

### 代理(Agent)
代理是在环境中观察和采取行动的行为者。在3D平衡球环境中，代理组件被放置在12个“代理”游戏对象（GameObeject）上面。基础代理对象有一些影响其行为的属性：
- 行为参数：每个代理必须有一个行为。行为决定了代理如何做出决定。
- 最大步数：定义在代理情节（agent episode）结束之前可以发生多少模拟步数。在3D平衡球中，一个代理在5000步后重新开始。

#### 行为参数(Behaviour parameters)：矢量观察空间（vector observation space）
在做出决定之前，代理会收集其对世界上的状态的观察。观察向量是由浮点数组成的向量。其中包含代理人做出决定的相关信息。  
3D平衡球例子的行为参数使用的空间大小为8，这意味着包含代理观察的特征向量包含8个元素：代理立方体旋转的x和z分量，以及球的相对位置和速度的x，y和z分量。

#### 行为参数(Behaviour parameters)：行动(Action)
代理人是以行动的形式被赋予指令的。ML-Agents Toolkit将动作分为连续和离散两种类型。  
3D平衡球的例子被设定为使用连续动作。它是一个可以连续变化的浮点数字的矢量，更具体地说，它使用空间大小为2来控制应用于自身的x和z旋转量，以保持球在其头上的平衡。

## 运行预训练模型(Running a pre-trained model)
我们将为3D球的例子使用预训练的模型（.onnx文件）。
1. 在项目窗口，进入Assets/ML-Agents/Examples/3DBall/Prefabs文件夹。展开3DBall，点击`Agent`。然后在将位于Assets/ML-Agents/Examples/3DBall/TFModels的3DBall模型拖入Inspector窗口中Behavior Parameters的模型属性。
2. 想要同时操作多个模型的话，可以在层次窗口的搜索栏中输入`Agent`，然后按住Shift选择多个模型。
3. 将模型使用的推论设备设置为CPU。之后点击Unity Editor的Play按钮，就可以看到平台使用预先训练好的模型来平衡球了。
![image](/assets/3dball_1.gif)
