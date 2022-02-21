---
layout: post
title: Using git rebase to integrate commits
categories: [git]
---
Last week I wanted to integrate some commits in my repository. I found `git rebase` to do this. It is called 'squash the commits into one single commit' in the official documentation.  
First, choose the commits that you would like to integrate.  
```bash
git rebase -i HEAD~2   # combine 2 commits from the HEAD
```
Then terminal shows like this. A little similar to `commit`, but in `rebase` the verb before commit ID represents diffrent meanings.
```bash
    pick y761t57 commit1
    pick h94daf5 commit2
    # Commands:
    # p, pick <commit> = use commit
    # r, reword <commit> = use commit, but edit the commit message
    # e, edit <commit> = use commit, but stop for amending
    # s, squash <commit> = use commit, but meld into previous commit
    ...
```
I would like to squash commit2 to commit1, so I changed line `pick h94daf5 commit 2` to `squash h94daf5 commit 2`, or simply `s` is OK.
```bash
pick y761t57 commit 1
s h94daf5 commit 2
```
If there is no problem, `Successfully rebased` will show up, otherwise it will tell you where goes wrong.   Follow the instruction to solve the error. Then using `git push -u origin **` to push the rebased commits.  
※ Adding `-f` option with push if necessary. Use it careful.
