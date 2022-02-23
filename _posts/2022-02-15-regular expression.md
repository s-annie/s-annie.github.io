---
layout: post
title: Regular expression
categories: [linux, bash]
---
I really can`t remember regular expression...

### POSIX basic
|Metacharacter|Description|
|:---:|:--:|
|`^`|Matches the starting position within the string.|
|`.`|Matches any single character.|
|`[ ]`|Matched a single character that is contained within the brackets.|
|`[^ ]`|Matched a single character that is NOT contained within the brackets.|
|`$`|Matches the ending position of the string or the position just before a string-ending newline.|
|`( )`|Defines a marked subexpression.|
|`\n`|Matches what the nth marked subexpression matched, where n is a digit form 1 to 9.|
|`*`|Matches the preceding element zero or more times.|
|`{m,n}`|Matches the preceding element at least m and not more than n times.|

#### Examples
- `a.c` matches abc, `[a.c]` matches only "a", "." or "c".
- `[a-z]` specifies a range which matches any lowercase letter from "a" to "z".
- `(ab)*` matches "", "ab", "abab" and so on.
- `a{3, 5}` matches "aaa", "aaaa" and "aaaaa".
- `[hc]at` matches hat and cat.
- `[^hc]at` matches all string matched by `.at` other than "hat" and "cat".
- `^[hc]at` matches "hat" and "cat", but only at the beginning of the string or line.
- `[hc]at$` matches "hat" and "cat", but only at the end of the string or line.

### POSIX extended
|Metacharacter|Description|
|:---:|:--:|
|`?`|Matches the preceding element zero or one time.|
|`+`|Matches the preceding element one or more times.|
|`|`|The choice operator matches either the expression before or the expression after the operator.|

#### Examples
- `[hc]?at` matches "at", "hat" and "cat".
- `[hc]*at` matches "at", "hat", "hhat" and so on.
- `[hc]+at` matches "hat", "cat", "hhat", "chat".
- `cat|dog` matches "dog", "cat".

POSIX extended regular expression can often be used with modern Unix utilities by including the command line flag -E.
