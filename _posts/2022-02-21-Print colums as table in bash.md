---
layout: post
title: Print columns as a table in bash
categories: [bash]
---
`column` is used to do this.  
Here is a example txt file.
```bash
# test.txt
name size
f1    1kb
ff1   20kb
fff2  5kb
```
And it can be output as table on terminal like this.
```bash
cat test.txt | sed 's/\t/,|,/g' | column -s ',' -t. 
```
