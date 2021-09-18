---
layout: post
lang: en
tags: til technical
logo: fab fa-git
title: Create a git branch for every pull request your get on GitHub
---

Edit your `.git/config` file as follows:

```conf
[remote "origin"]
    url = git@github.com:...
    fetch = +refs/heads/*:refs/remotes/origin/*
    # add the following line
    fetch = +refs/pull/*/head:refs/remotes/origin/pr/*
    gh-resolved = base
```

This allows you to get the content of a git branch as follows:

```sh
git checkout pr/144
```

If you need to push modifications to the remote branch, you need to set the `remote` properly, and synchronise branches properly (confusing tbh):

```sh
git remote add jack git@github.com:jack/repository
```

After committing, you may push along the following lines. Be careful not to forget the `:` between the two branch names (been there 😱)

```sh
git push jack pr/144:name_of_the_remote_branch
```
