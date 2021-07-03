---
layout: post
title: 2021-07-03-【Algorithm】Bubble Sort 冒泡排序
---
## 冒泡排序
依次比较排序对象元素列相邻的两个元素, 如果两个元素的顺序错误就把它们交换过来。  
最大计算量为O(n2)。其算法实现容易，且适用于多线程处理，因而经常被使用。

## 算法实现
### 使用STL容器swap
swap: https://zh.cppreference.com/w/cpp/container/array/swap
```cpp
#include <iostream>
int N, A[99999];

int main() {
  for (i = 0; i < N; i ++) cin >> A[i];
  
  // 降序排列
  for (i = 0; i < N ; i++) {
    for (j = 0; j < N - i; j++) {
      if (A[j + 1] > A[j] ) swap (A[j], A[j + 1]);
  }
  
  // 输出元素列
  for (i = 0; i < N; i++) cout << A[i];
  return 0;
}
```
