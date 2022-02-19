---
layout: post
categories: [python]
---
# Overview

## Opening the files
There are two methods to open and close the files, `open()`&`close()`, `with`&`open()`. `with` statement automatically takes care of closing the file once it leaved the block. So mainly I will use this one.

```python
path = '/data/test.txt'
with open(path, encoding='utf_8') as f:
    print(type(f))
# <class '_io.TextIOWrapper'>
```
Read with [Getting file path in python]

### `open()`mode argument
The mode argunent represents how you want to open the file.  
The default and most common is 'r', which represents opening the file in read-only mode.
Commonly used ones are the following: 
|Character|Meaning|
|:--|:--|
|'r'|(default)Open for reading|
|'w'|Open for writing|
|'rb' or 'wb'|Open in binary mode|

## Reading the files
```python
path = '/data/test.txt'
with open(path, 'r') as f:
    s = f.read()
    print(type(s))
    print(s)
# <class 'str'>
# line 1
# line 2
# line 3
```