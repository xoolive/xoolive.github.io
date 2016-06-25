---
layout: post
lang: en
tags: technical
title: My personal cheatsheet
---

Let me gather all the commands I (don't) use often (enough).  
*(The indicated date is the one of the latest edition.)*

# 1. Around Python

- **Upgrade all installed packages**  
  The two following command should be equivalent. Why would `pip` not provide such a function remains a mystery.

~~~
pip freeze -l | grep -v '^\-e' | cut -d = -f 1 | xargs -n1 pip install -U
~~~
~~~
pip install -U `pip list --outdated | awk '!/Could not|ignored/ {print $1}'`
~~~

- **Repair a broken `virtualenv`**  
  It may happen that after some upgrade in your system, your environments are broken. If your environment should still be safe to use with the new version, you may try to fix it.

~~~zsh
rm $VIRTUAL_ENV/**/*(@) # zsh specific: remove all symlinks
virtualenv $VIRTUAL_ENV --python=python3
~~~

# 2. Around git

- [How to rebase a pull request](https://github.com/edx/edx-platform/wiki/How-to-Rebase-a-Pull-Request)

# 3. Around Homebrew

- **List dependencies of a package**

~~~
brew deps <package>
brew deps --installed <package>
~~~

- **Switch to a different version of a package**  
  Note that this may help to not delete an old version of a package you like.

~~~
brew switch <package> <version>
~~~

- **Clean old versions of installed packages**  
  Remove the `-s` if you like what it prints.

~~~
brew cleanup -ns
~~~

- **Delete all archives in cache**  
  Homebrew keeps everything by default.

~~~
rm -rf $(brew --cache)
~~~

# 4. Around Vim

- **Insert a Unicode character**

~~~
<ctrl-v>U<code>
~~~

- **Fix errors with invisible characters**  
  Sometimes you get during compilations errors about "stray ‘\302’ in program":

~~~
:% s,\%o302,,g
~~~

- **When you forgot to sudo** (a classic!)

~~~
:w ! sudo tee %
~~~

