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

*Latest edition*: 3 November 2018 


# 1. Around Python

- **Upgrade all installed packages**  
  The two following command should be equivalent. Why would `pip` not provide
  such a function remains a mystery.

~~~zsh
pip freeze -l | grep -v '^\-e' | cut -d = -f 1 | xargs -n1 pip install -U
~~~
~~~zsh
pip install -U `pip list --outdated | awk '!/Could not|ignored/ {print $1}'`
~~~

- **Repair a broken `virtualenv`**  
  It may happen that after some upgrade in your system, your environments are
  broken. If your environment should still be safe to use with the new version,
  you may try to fix it.

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

- **How to list commits concerning one directory**

```
git log --format=oneline --no-merges master..dev $path  | cut -d " "  -f 1
```

- **How to list files impacted by a a specific commit**

```
git show --name-only --pretty="" $commit_hash | cat
```

- **How to split a commit into several smaller commits**

```
git rebase -i $commit_hash~
git reset HEAD~
# split the commits
git rebase --continue
```

- **How to reassign a commit**

```sh
#!/bin/sh

git filter-branch -f --env-filter '
OLD_EMAIL="irrelevant@provider.com"
CORRECT_NAME="Xavier Olive"
CORRECT_EMAIL="git@xoolive.org"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
```

# 3. MacOS specific

- **Reset default timezones in iCal**:

```
defaults read com.apple.iCal 'RecentlyUsedTimeZones'
defaults write com.apple.iCal 'RecentlyUsedTimeZones' '("Europe/Paris", "Asia/Tokyo")'
```

- **Force Mail to Unicode**:

```
defaults write com.apple.mail NSPreferredMailCharset "UTF-8"
```

- **Pipe SoftFM to sox**:

```
softfm  -f 98.3M -g 20.7 -b 0.1 -R - | play -t raw -esigned-integer -b16 -r 48000 -c 2 -
```

otherwise, there is always:

```
rtl_fm -M wbfm -f 103.5M -F 0 -g 37.5 -s 250k | play -r 32k -t raw -e s -b 16 -c 1 -V1 -
```



# 4. Around Homebrew

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

# 5. Around Vim

- **Insert a Unicode character**

~~~zsh
<ctrl-v>U<code>
~~~

- **Fix errors with invisible characters**  
  Sometimes you get during compilations errors mentioning `stray ‘\302’ in
  program`, which can be frustrating:

~~~zsh
:% s,\%o302,,g
~~~

- **When you forgot to sudo** (a classic!)

~~~zsh
:w ! sudo tee %
~~~

# 6. Miscellaneous

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

- **Crop a movie**:

```zsh
ffmpeg -i input.avi -vcodec copy -acodec copy -ss 01:00:00 -t 00:30:00 output.avi
```

- **Improve battery life when you forgot your charger** (Linux)

```zsh
sudo apt install cpufrequtils
sudo cpufreq-set -g powersave -c 0
sudo cpufreq-set -g powersave -c 1
sudo cpufreq-set -g powersave -c 2
sudo cpufreq-set -g powersave -c 3
```

- **Put window buttons to the left**

```zsh
gsettings set org.gnome.desktop.wm.preferences button-layout 'close,minimize,maximize:'
```

- **Reset USB ports** (Linux)

```zsh
for i in /sys/bus/pci/drivers/[uoex]hci_hcd/*:*; do
  echo "${i##*/}" > "${i%/*}/unbind"
  echo "${i##*/}" > "${i%/*}/bind"
done
```

- **Mount HFS+ disk** (Linux)

```
sudo mount -t hfsplus -o remount,force,rw /dev/sd<#id> </mounting/point>
```

- **Do not create such bookmark** so that you do not click on it when you have
  no access to an academic paper.

```
javascript:location.hostname += '.sci-hub.tw'
```
