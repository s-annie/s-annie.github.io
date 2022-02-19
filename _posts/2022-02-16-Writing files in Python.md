---
layout: post
categories: [python]
---
### Writing to a file
`open()` a file with mode argument 'w'. If the file does not exist the directory, a new file will be created. If the file already exists, it will be overwritten.
```python
path_w = '/data/src/test_w.txt'
s = 'New file'
with open(path_w, mode='w') as f:
    f.write(s) 
```
A file object has two method for writing. `write()` and `writelines()`.  
`write()` only takes string as argument, while `writelines()` can be passed with list.  
If you want to start a new line of each element in the list, below is an example.
```python
l = ['One', 'Two', 'Three']
with open(path_w, mode='w') as :
    f.write('\n'.join(l))
```
### Writing to a new and only new file.
Because using 'w' writes to any file specified in the path, overwritting mistakes are easily made. 
Using mode 'x' can avoid it happens. Only when a file does not exist, a new one will be created and written.
```python
try:
    with open(path_w, mode='x') as f:
        f.write(s)
except FileExistsError:
    pass
```
### Adding to a file
Using mode 'a' adds to the specified file.
```python
with open(path_w, mode='a') as f:
    f.write('\nTest')   # \n starts a new line
```
#### Example: Adding to a specified line in the file
```python
target_line = 5
with open(path_w, mode="r+") as f:
    lines = f.readlines()
    lines.insert(5, "This is a new line\n")
    f.writelines(lines)
```
