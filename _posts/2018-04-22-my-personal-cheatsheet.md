---
layout: post
lang: en
tags: technical
date: 2016-06-25
title: My personal cheatsheet
permalink: /cheatsheet/
---

My favourite Linux command line tools are described [here](/linux-tools/).  
All what doesn't fit there comes on this more dynamic page.

*Latest edition*: 22 April 2018 


# 1. Around Python

- **Upgrade all installed packages**  
  The two following command should be equivalent. Why would `pip` not provide such a function remains a mystery.

~~~zsh
pip freeze -l | grep -v '^\-e' | cut -d = -f 1 | xargs -n1 pip install -U
~~~
~~~zsh
pip install -U `pip list --outdated | awk '!/Could not|ignored/ {print $1}'`
~~~

- **Repair a broken `virtualenv`**  
  It may happen that after some upgrade in your system, your environments are broken. If your environment should still be safe to use with the new version, you may try to fix it.

~~~zsh
rm $VIRTUAL_ENV/**/*(@) # zsh specific: remove all symlinks
virtualenv $VIRTUAL_ENV --python=python3
~~~

- **Activate widgets on Jupyter Lab**

```zsh
pip install ipywidgets
# for notebooks
jupyter nbextension enable --py --sys-prefix widgetsnbextension
# for Jupyter Lab
jupyter labextension install @jupyter-widgets/jupyterlab-manager
```

- **Upload wheels to PyPI**

```zsh
twine upload dist/*.whl
```

# 2. Around git

- [How to rebase a pull request](https://github.com/edx/edx-platform/wiki/How-to-Rebase-a-Pull-Request)

- **Remove files mistakenly added in previous commit**:

```zsh
git reset --soft HEAD~1
git reset HEAD path/to/unwanted_file
git commit -c ORIG_HEAD
```


# 3. Around Homebrew

- **List dependencies of a package**

~~~zsh
brew deps <package>
brew deps --installed <package>
~~~

- **Switch to a different version of a package**  
  Note that this may help to not delete an old version of a package you like.

~~~zsh
brew switch <package> <version>
~~~

- **Clean old versions of installed packages**  
  Remove the `-s` if you like what it prints.

~~~zsh
brew cleanup -ns
~~~

- **Delete all archives in cache**  
  Homebrew keeps everything by default.

~~~zsh
rm -rf $(brew --cache)
~~~

# 4. Around Vim

- **Insert a Unicode character**

~~~zsh
<ctrl-v>U<code>
~~~

- **Fix errors with invisible characters**  
  Sometimes you get during compilations errors mentioning `stray ‘\302’ in program`, which can be frustrating:

~~~zsh
:% s,\%o302,,g
~~~

- **When you forgot to sudo** (a classic!)

~~~zsh
:w ! sudo tee %
~~~

# 5. Miscellaneous

- **Remove empty directories**

```zsh
find . -type d -empty -delete
```

- **Crop a pdf file to hide/reveal part of it**

```zsh
pdfcrop --margins '0 0 0 -620' --clip private_information.pdf
```

- **Search for files with identical content**

```zsh
fdupes .  # first checks checksums then byte-by-byte
```

- **Improve battery life when you forgot your charger** (Linux)

```zsh
sudo apt install cpufrequtils
sudo cpufreq-set -g powersave -c 0
sudo cpufreq-set -g powersave -c 1
sudo cpufreq-set -g powersave -c 2
sudo cpufreq-set -g powersave -c 3
```