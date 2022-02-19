---
layout: post
title: Sed command in linux
categories: [linux, bash]
---
`sed` is a stream editor, it filters and transforms text.  
The sed utility reads the specifiled files, or the standard input if no files are specified, modifying the input as specified by a list of commands. The input is then written to the standard output.

### Mostly used options

-e [command] 
    Append the editing commands specified by the command argument to the list of commands.
    The form of a sed command is as follows:
        [address[,address]]function[arguments]

-i [extension]
    Edit files in-place, saving backups with the specified extension.

```bash
cat hoge.txt | sed -e 's/xxx/XXX/g'
sed -e 's/xxx/XXX/g' ./hoge.txt > ./hoge_new.txt
<<<<<<< HEAD
sed -i -e 's/xxx/XXX/g' ./hoge.txt ./hoge2.txt    # multiple files can be seletec
=======
sed -i -e 's/xxx/XXX/g' ./hoge.txt /hoge2.txt    # multiple files can be selected
>>>>>>> d96dae5... add regular expression
```

#### Functions and address

s/regular expression/replacement flags
    Substitute the replacement string for the first instance of the regular expression in the pattern space.  
    The value of flags in the substitute function is zero or more of the following.  
        g: Make the substitution for all non-overlapping matches of the regular expression, not just the first one.  

d: Delete the pattern space and start the next cycle.  
p: Write the pattern space to standard output.  

An address is not required, but if specified must be a number, a dollar character that addressed the last line of input, or a context address(which consists of a regular expression preceded and followed by a delimeter).

```bash
sed -n -e 1p         # Ouput the first line. 
sed -n -e \$p        # Ouput the last line. 
sed -n -e 6,15p      # Ouput line6~15. 
sed -n -e 1~5p       # Output line1, 6, 11...
sed -n -e '\%xxx%p'  # Output the lines that matches the regular expression.
```
