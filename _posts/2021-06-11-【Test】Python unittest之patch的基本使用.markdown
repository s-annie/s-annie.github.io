接着上次写的[unittest之mock的基本使用](https://s-annie.github.io/2021/06/10/Test-Python-unittest之mock的基本使用.html)，这次写下如何使用unittest.mock.patch为mock打补丁。

## 关于patch
使用mock可以将某个类，变量或者函数整体封装起来。而有些时候我们不希望将它们全部黑盒化，这时候就需要用patch（打补丁）来实现。mock提供三种装饰器：patch(), patch.object(), patch.dict(）。patch.dict()我还没有用过，所以只写一下patch()和patch.object()这两种。

### patch（）
patch（）接受格式为`package.module.ClassName`补丁目标的文字列。在函数与语句的正文中，目标被打上一个新的对象。当函数和语句退出时补丁被撤销。
```bash
>>> @patch('__main__.SomeClass')
... def function(normal_argument, mock_class):
...     print(mock_class is SomeClass)

>>> function(None)
True
```
patch的开始与结束也可以通过start()和stop()来实现。个人觉得有时这种方法更加好用。
```bash
>>> thing = object()
>>> patcher = patch('__main__'.thing, first='one', second='two')
>>> mock_thing = patcher.start()
>>> mock_thing.first()
'one'
>>> mock_thing.second()
'two'
```
patch也可以使用return_value和side_effect。以这些属性为关键词的字典可以通过**扩展到patch()的调用中。
```bash
>>> config = {'method.return_value': 3, 'other.side_effect': KeyError}
>>> patch = patch('__main__.thing', **config)
>>> mock_thing = patcher.start()
>>> mock_thing.method()
3
>>> mock_thing.other()
Traceback (most recent call last):
  ...
KeyError
```
patch中有个`TEST_PREFIX`属性，可以用来设定补丁所适用的前缀。
```bash
>>> patch.TEST_PREFIX = "foo"
>>> value = 3
>>> @patch('__main__.value', 'not three')
... class Thing:
...     def foo_one(self):
            print(value)
...     def two(self):
...         print(value)
>>> Thing().foo_one()
'not three'
>>> Thing().two()
3
```
### patch.object
patch.object可以为某个特定类的变量或函数打补丁。和patch大同小异，在我看来就是参数的不同而已。
（而且我觉得它并不实用，因为我很少用到类变量或是类函数,更多的是通过实体。而有些时候需要在实体初始化的时候，直接为外部的类打上补丁，所以还是用patch更多。）
```bash
# 变量
>>> @patch.object(SomeClass, 'attribute', sentinel.attribute)
... def test_attribute():
...    assert SomeClass.attribute == sentinel.attribute

# 函数
>>> @patch.object(SomeClass, 'static_method')
... def test_method(mock_method):
...    SomeClass.static_method()
...    mock_method.assert_called_with()
```
