---
layout: post
title: 【代码设计】抽象基类
categories: tech
---
抽象基类(abstract base class, ABC)，即为定义了纯虚成员函数的类。纯虚函数一般只提供了接口^[1]，并不会做具体实现。实现由它的派生类去重写。  

抽象基类有以下两个目的：
1. 检测代码实现
2. 检测接口

假设我们需要保证每个类中都含有Push函数，可以先创建一个Pushable基类。
```python
from abc imort ABCMeta, abstractmethod

class Pushable(metaclass=ABCMeta):
    @abstractmethod
    def push(self, x):
        """ Push no matter what x is
        """
```
使用这个Pushable基类在具体类的实现时可以检测出缺失。例如利用Pushable实现下面两个类。
```python
class DummyPushable(Pushable):
    def push(self, x):
        return

class IncompletePushable(Pushable):
    pass
```
当IncompletePushable实体化的时候，因为没有实现push函数，就会出现TypeError。

[^1]: 接口是定义规范的一种方式。和抽象基类一样，它是抽象方法的集合，不负责具体实现。
