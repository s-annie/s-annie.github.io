---
layout: post
title: Templates in C++
categories: [C++]
---
## What is Templates in C++?
Templates in c++ is defined as a blueprint or formula for creating a generic class or a function. You can create a single function/class to work with different data types using templates.

Thera are two types of templates in C++, class templates and function templates.

### function template example
```cpp
template<class T>
T max(T d1, T d2)
{
  if (d1 < d2)
    return d1;
  return d2;
}

int main() {
  float f = max(3.5, 8.7);
  int i = max(100, 800);
  char ch = max('A', 'Q');
}
```
`template` can alse be used on some special occasions.   
For example, using the `max` function above to compare character strings in C.
```cpp
  const char *name1 = "Able";
  const char *name2 = "Baker";
  std::cout << max(name1, name2) << "\n";
```
Here is the problem. In the function `max`, the pointer of `name1` and `name2` will be compared instead of the data. We would like to use `strcmp` on this case. Another `max` for this special occasion can be added like this.
```cpp
const char *const max(const char *const d1, const char * const d2) {
    if (std::strcmp(d1, d2) > 0)
      return d1;
    return d2;
}
```

### class template example
```cpp
#include <cstdlib>
#include <iostream>
#include <assert.h>

const int STACK_SIZE = 100;

template<class T>
class stack {
    private:
      int count;
      T data[STACK_SIZE];
    public:
      stack() {
          count = 0;
      }
      void push(const T item) {
          assert(count >= 0);
          assert(count < static_cast<int>(sizeof(data)/sizeof(data[0])));
          data[count] = item;
          ++count;
      }
      T pop() {
          --count;
          assert(count >= 0);
          assert(count < static_cast<int>(sizeof(data)/sizeof(data[0])));
          return data[count]
      }

};
```
The instance should be declared like this.
```cpp
stack<T> a_stack;
```
And if you want to implement a public memeber function outside the class, it should be like this.
```cpp
template<class T>
inline void stack<T>::push(const T item)
{
    // pass
}
```
