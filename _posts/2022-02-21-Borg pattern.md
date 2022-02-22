---
layout: post
title: About Singleton and Borg pattern
categories: [design pattern, python]
---
Singleton design pattern is used to create only one instance of data throughout the lifetime of a program. There is classic singleton and the borg singleton. In a classic Singleton pattern there is only one instance of a class, but in the Borg pattern, the focus is on sharing state instead of sharing instance identity.

### A classic singleton
#### Implementation sample
```python
class SingletonClass(object):
    def __new__(cls):
        if not hasattr(cls, 'instance'):
            cls.instance = super(SingletonClass, cls).__new__(cls)
        return cls.instance
```

### The borg singleton
In the borg pattern, all of the instances are diffrent, but they share the same state. In the sample code below, the shared satte is maintained in the `__shared_state__` attribute, and all new instances of the Borg class will have this state as defined in the __new__ class method.
#### Implementation sample
```python
class Borg(Object):
    _shared_stats = []

    def __new__(cls, **args **kwargs):
        obj = super(Borg, cls).__new__(cls, *args, **kwargs)
        obj.__dict__ = cls._shared_stats
        return obj

class Child(Borg):
    pass

class AnotherChild(Borg):
    # Inheriting Borg class but with different state
    _shared_stats = []
```
```bash
borg = Borg()
child = Child()
borg.var  = 'I`m the only one var'
print(child.var)
>>> 'I`m the only one var'
another_child = AnotherChild()
print(another_child.var)
>>> AttributeError: AnotherChild instance has no attribute 'shared_state'
```

### Refenrences
- https://github.com/faif/python-patterns/blob/master/patterns/creational/borg.py
- Learning Python Design Patterns 2013 Gennadiy Zlobin Chapter 2
