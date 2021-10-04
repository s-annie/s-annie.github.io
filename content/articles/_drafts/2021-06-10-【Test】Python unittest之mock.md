---
layout: post
title: 【Test】Python unittest之mock
categories: python test tech
---

最近写测试代码的重担又落到了我的肩上...而且这次的难度还升级了，需要熟练使用mock。去年11月积攒的那些关于unittest和mock的知识全部都忘记了，当时又没有做总结，只好再从头捡起来。找遍全网没有发现特别好的资料，直接看Python的公式网站了([unittest.mock上手指南](https://docs.python.org/zh-cn/3/library/unittest.mock-examples.html))

## 关于mock
mock顾名思义，用于在测试中模拟某些变量或者函数。比如说在嵌入式软件中想要测试某个函数，而这个函数中有一个步骤是与硬件的通信，我们就可以通过模仿这一步骤而达到测试其余部分的目的。

## mock的基本使用

### 模仿某个函数或者对象
```python
class ProductionClass:
    def closer(self, something):
        something.close()
```
```bash
>>> real = ProductionClass()
>>> mock = MagicMock()
>>> real.closer(mock)
>>> mock.close.assert_called_with()  # assert_called_with（）用于测试是否被正确呼出
```

### 模仿某个类
```python
def some_function():
    instance = module.Foo()
    return instance.method()

with patch('module.Foo') as mock:
    instance = mock.return_value
    instance.method.return_value = 'the result'
    result = some_function()
    assert result == 'the result'
```

### 模仿的命名与呼出记录
`mock_calls`记录mock被呼出的次数，可以用来与期待值做比较。
```bash
>>> mock = MagicMock(name='foo')
>>> mock
<MagicMock name='foo' id='...'>
>>> mock.method()
<MagicMock name='mock.method()' id='...'>

>>> mock.attribute.method(10, x=53)
<MagicMock name='mock.attribute.method()' id='...'>

>>> mock.mock_calls
[call.method(), call.attribute.method(10, x=53)]
>>> expected = [call.method(), call.attribute.method(10, x=53)]
>>> mock.mock_calls == expected
True
```

### 设置模仿的返回值和属性
下面这个例子是一个关于`mock.connection.cursor().execute("SELECT 1")`返回值的测试。
相关知识：[`call`的使用](https://docs.python.org/3.5/library/unittest.mock.html#unittest.mock.call)
```bash
>>> mock = MagicMock()
>>> cursor = mock.connection.cursor.return_value
>>> cursor.execute.return_value = ['foo']
>>> mock.connection.cursor().execute('SELECT 1')
['foo']
>>> expected = call.connection.cursor().execute('SELECT 1').call_list()
>>> mock.mock_calls
[call.connection.cursor(), call.connection.cursor().execute('SELECT 1')]
>>> mock.mock_calls == expected
True
```

### 设置模仿的例外
`side_effect`是一个很好用的属性。比如说这里可以设置函数的例外。
```bash
>>> mock = Mock(side_effect=Exception('Boom!'))
>>> mock()
Traceback (most recent call last):
  ...
Exception: Boom!
```

### 动态设定模仿的返回值
如果想让mock每次被呼出时返回不同值，同样可以使用`side_effect`.
```bash
>>> mock = MagicMock(side_effect=[4, 5, 6])
>>> mock()
4
>>> mock()
5
>>> mock()
6
```
`side_effect`同样可以使mock根据不同参数返回不同值。
```bash
>>> vals = {(1, 2): 1, (2, 3): 2}
>>> def side_effect(*args):
...     return vals[args]
...
>>> mock = MagicMock(side_effect=side_effect)
>>> mock(1, 2)
1
>>> mock(2, 3)
2
```

太困了，先写到这里吧。
