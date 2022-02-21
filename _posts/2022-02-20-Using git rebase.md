---
layout: post
title: Using git rebase to combine commits
categories: [git]
---
Last week I wanted to combine some commits in my repository. And I found `git rebase` to do this. It is called 'squash one commit to another.'
```bash
git rebase -i HEAD~2   # combine 2 commits from the HEAD
```
After this, terminal shows like this. Just like when we commit.  
Instead commit message, the verb beform commit ID represents diffrent meanings.
```bash
    pick y761t57 commit 1
    pick h94daf5 commit 2                                                                                                                               
    #
    # Commands:
    # p, pick <commit> = use commit
    # r, reword <commit> = use commit, but edit the commit message
    # e, edit <commit> = use commit, but stop for amending
    # s, squash <commit> = use commit, but meld into previous commit
    ...
```
I want to combine commit 2 to commit 1, so I changed `pick h94daf5 commit 2` to `squash h94daf5 commit 2`, or simply `s` is OK.
```bash
pick y761t57 commit 1
pick h94daf5 commit 2
```
