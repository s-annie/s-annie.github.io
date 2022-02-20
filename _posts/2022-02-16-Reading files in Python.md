---
layout: post
title: Reading files in Python
categories: [python]
---
## Overview

### Opening the files
There are two methods to open and close the files, `open()`&`close()`, `with`&`open()`. `with` statement automatically takes care of closing the file once it leaved the block. So mainly I will use this one.

```python
path = '/data/test.txt'
with open(path, encoding='utf_8') as f:
    print(type(f))
# <class '_io.TextIOWrapper'>
```

#### `open()`mode argument
The mode argument represents how you want to open the file.  
The default and most common is 'r', which represents opening the file in read-only mode.
Commonly used ones are the following: 

|Character|Meaning|
|:--:|:--:|
|'r'|(default)Open for reading|
|'w'|Open for writing|
|'rb' or 'wb'|Open in binary mode|

### Reading the files
`read()`, `readlines()` and `readlines()` are used to read a file.  
`read()` gets all the contents in the file as type <str>.
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
While `readlines()` reads the entire file as <list>.
```python
with open(path) as f:
    l = f.readlines()
    print(type(l))
    print(l)
# <class 'list'>
# ['line 1\n', 'line 2\n', 'line 3\n',]

# \n can be deleted by using strip()
with open(path) as f:
    l_strip = [s.strip() for s in f.readlines()]
    print(l_strip)
# ['line 1', 'line 2', 'line 3']

# Or you can just create a list out of the file object by using list()
f = open(path)
list(f)
```
Using `readline()` with argument can read at most size number of chracters from the line.
```python
with open(path) as f:
    l = f.readline1(3)
    print(l)
# lin
```
### Example: Iterating over each line in the file
```python
with open(file_path) as f:
    for line in f:
        print(line, end='')
```
