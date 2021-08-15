---
layout: post
title: 【机器学习】Sigmoid函数与Softmax函数
categories: Machine-Learning
---
## Sigmoid函数
Sigmoid函数是指一类S型曲线函数，为两端饱和函数[^1]。常用的Sigmoid型函数有Logistic函数和Tanh函数。

[^1]: 对于函数$f(x)$，若$x\to-\infty$，其导数$f(x)^{\prime} \to 0$，则称其为左饱和。若$x\to+\infty$时，其导数$f(x)^{\prime} \to 0$，则称其为右饱和。同时满足左右饱和时，就称为两端饱和。
### Logistic函数
Logistic函数的定义

$$\sigma(x)=\frac{1}{1+e^{-x}}$$

Logistic函数可以看成是一个“挤压”函数，把一个实数域的输入“挤压”到（0，1）。当输入值在0附近时，Sigmoid型函数近似为线性函数；当输入值靠近两端是，对输入进行抑制。输入越小，越接近0；输入越大，越接近1。

### Tanh函数
Tanh函数也是一种Sigmoid型函数。其定义为

$$tanh(x)=\frac{e^{x}-e^{-x}}{e^{x}+e^{-x}}$$

Tanh函数可以看作放大并平移的Logistic函数，其值域是$(-1, 1)$。

### Sigmoid函数图
$x$为$[-10, 10]$范围内步长为0.1的数列。定义Logistic函数和Tanh函数并绘制其图像，如下所示

```python
import math
import numpy as np
import matplotlib.pyplot as plt

def logistic(x):
    return 1 / (1 + math.e**(-x))

def tanh(x):
    return (math.e**(x) - math.e**(-x)) / (math.e**(x) + math.e**(-x))

x = np.arange(-10, 10, 0.1)
y_l = logistic(x)
y_t = tanh(x)

plt.plot(x, y_l, c="red", label="Logistic")
plt.plot(x, y_t, c="orange", label="Tanh")
plt.axvline(x=0, c="grey")
plt.axhline(y=0, c="grey")
plt.text(10.0, 0.1, 'x')
plt.text(0.5, 1.0, 'y')
plt.legend()
```


<img src="/assets/post/2021-08-15/1.png">



## Softmax函数
Softmax函数可以将多个标量映射为一个概率分布。对于$K$个标量$x1,...,x_{k}$, Softmax函数定义为

$$z_{k}=softmax(x_{k})=\frac{e^{x_{k}}}{\sum^{K}_{i=1}e^{x_{i}}}$$

这样，我们可将$K$个标量$x1,...,x_{k}$转换为一个分布$z1,...,z_{k}$，满足

$$z_{k}\in(0, 1) \\
\sum^{K}_{k=1}z_{k}=1$$

为了简便起见，用$K$维向量$\boldsymbol x=[x1;...x_{k}]$来表示Softmax函数的输入。Softmax函数可以简写为

$$\begin{aligned} \\
\hat{\boldsymbol z} &= softmax(x) \\
&=\frac{1}{\sum^{K}_{k=1}e^{x_{k}}}\left[
\begin{matrix}
e^{x_{1}} \\
\vdots\\
e^{x_{k}} \\ 
\end{matrix}\right] \\
&= \frac{e^{\boldsymbol x}}{\sum^{K}_{k=1}e^{x_{k}}} \\
&= \frac{e^{\boldsymbol x}}{\boldsymbol 1^{T}_{K}e^{\boldsymbol x}}
\end{aligned}$$

其中$\boldsymbol 1_{K}$是$K$维的全1向量。

## 区别与应用
简单来说，Sigmoid是输出为两个节点的二分类，针对**二项分布**；而Softmax是将这个二分类推广成拥有n个输出节点的n分类问题，针对**多项分布**。
Softmax同样适用于二分类问题，此时两个函数的公式完全相同，只是在输出的意义上存在着差异：考虑这样一个分辨正误的二分问题。Sigmoid的输出为“分到正确的和未分到正确的概率”，而Softmax的输出为“分到正确的和分到错误的概率”。

### 参考书籍
《神经网络与深度学习》P95，P402
