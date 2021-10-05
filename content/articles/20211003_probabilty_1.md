---
title: 【统计】随机变量与概率分布
date: 2021/10/01
tags: 
- 统计
- 概率学
---
## 概率
事件A出现可能性大小的数值为$P(A)$, $P(A)$称为事件A的概率。

## 随机变量与概率函数
假设事件A的每个可能性的数值为$X$，具有确定概率$P(X)$。  
$X$称为$P(X)$的随机变量，$P(X)$为随机变量的概率函数。

## 概率分布
### 离散型随机变量的概率分布
$$ P(X=x_{k})=f(x_{k}) （k=1,2...）$$
### 连续型随机变量的概率分布
$$ P(a \leqq X  \leqq b )= \int^{a}_{b}f(x)dx$$

## 概率密度函数
对于连续性随机变量，$f(x)$为$X$的概率密度函数（probalility density function）。
概率密度函数满足如下条件：

$$ f(x) \geqq 0, and \ \int^{\infty}_{-\infty}f(x)dx=1 $$

## 累积分布函数
随机变量$X$为$x$以下的概率为
$$ F(x)=\int^{x}_{-\infty}f(u)du$$

### 累积分布函数的性质
1. 单调性

$$ if\ x_{1}<x_{2}, then \; F(x_{1}) \leqq F(x_{2})$$

2. 有界性

$$ when \; x \to \infty, \ F(x) \to 1$$
$$ when \; x \to -\infty, \ F(x) \to 0$$

3. 右连续性

$$ if \ \epsilon \downarrow0, F(x+\epsilon)\to F(x) $$

## 连续性随机变量的例子
### 指数分布

- 概率密度函数
$$ f(x)=\lambda e^{-\lambda x}   (\lambda>0)$$
对于所有$x\geqq0$，$f(x)\geqq0$，且 $\int^{\infty}_{-\infty}f(x)dx=\int^{\infty}\_{0}\lambda e^{-\lambda x}dx=1$
- 概率分布
$$ P(a\leqq X\leqq b)=\int^{a}_{b}\lambda e^{-\lambda x}dx=e^{-\lambda a}-e^{-\lambda b} $$

- 累积分布函数
$$ F(x) =\int^{x}_{\infty}f(u)du = \int^{x}\_{0} \lambda e^{-\lambda u}du=1-e^{-\lambda x},x \geqq 0$$
