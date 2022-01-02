---
layout: default
lang: en
title: Command line tools and cheatsheets
permalink: /cli/
---

# Command-line tools and cheatsheets

## Related posts

- [Introduction to command-line interface](/2022/01/02/introduction.html)
- [How to quit Vim? An introduction to Vim usage](/404.html) (soon)
- [Advanced Git usage patterns](/404.html) (soon)
- [Linux at the command line](/linux-tools)
- [Bindkeys](/bindkeys)

## Cheatsheets

I maintain a simple private cheatsheet as a repository for the [cheat tool](https://github.com/cheat/cheat). Among many tools for cheatsheets:

- [cht.sh]() is very comprehensive, it works based on very simple curl calls;
- [cheat](https://github.com/cheat/cheat) handles personal cheatsheets.

Details about configuration are to be found on the [cheat](https://github.com/cheat/cheat) documentation page  
[https://github.com/xoolive/cheatsheets](https://github.com/xoolive/cheatsheets)

You may set up many cheatsheet sources, with order of precedence and more.

```zsh
➜ cheat ncdu
# To save results to <file>:
ncdu -o <file>

# To read from <file>:
ncdu -f <file>

# To save results to a compressed file:
ncdu -o- | gzip > <file>

# To read from a compressed file:
zcat <file> | ncdu -f-
```

## Modern command line tools

With the recent hype around Go and Rust, a lot of common command line tools have been rewritten to benefit from the performance of the language. Of course, not all modern tools are written with these languages, but I find it still worth mentioning.

| Toolname                     | Implementation | Alternative      |
| ---------------------------- | -------------- | ---------------- |
| [exa](#exa-rust)             | Rust           | `ls`             |
| [bat](#bat-rust)             | Rust           | `cat`            |
| [autojump](#autojump-python) | Python         | `cd`             |
| [jq](#jq-c)                  | C              | `sed` (for JSON) |
| [neofetch](#neofetch-bash)   | Bash           |                  |
| [htop](#htop-c)              | C              | `top`            |
| [nvtop](#nvtop-c)            | C              | `nvidia-smi`     |
| [broot](#broot-c)            | Rust           | `ncdu`           |
| [fd](#fd-rust)               | Rust           | `find`           |
| [ag](#ag-c)                  | C              | `grep`           |
| [fzf](#fzf-go)               | Go             |                  |
| [dog](#dog-rust)             | Rust           | `dig`            |
| [xh](#xh-rust)               | Rust           | `curl`           |
| [tesseract](#tesseract-c)    | C++            |                  |

### Replacement tools

#### [exa](https://github.com/ogham/exa) (Rust)

A replacement for the `ls` command.

<img alt="exa screenshot" src="/images/cli/exa.png" class="screenshot"/>

#### [bat](https://github.com/sharkdp/bat) (Rust)

[bat](https://github.com/sharkdp/bat) is a cat clone with syntax highlighting and Git integration. It switches to your favourite pager when needed. [`bat`](https://github.com/sharkdp/bat) is a great addition in your toolbox for piping results from other tools.

```zsh
# Regular usage
bat readme.md
# Benefit from syntax highlighting
tail -f  /var/log/syslog | bat --paging=never -l log
# Pretty diff-ing
git diff --name-only --diff-filter=d | xargs bat --diff
# Preview window with fzf
fzf --preview 'bat --color=always --style=numbers --line-range=:500 {}'
```

#### [autojump](https://github.com/wting/autojump) (Python)

[`autojump`](https://github.com/wting/autojump) is a facility build around `cd`, which learns about the folder you often visit. It comes with few wrapper commands like `j` (jump), `jo` (jump and open file manager)

```zsh
➜ j fonts
/home/xo/.local/share/fonts
```

#### [jq](https://github.com/stedolan/jq) (C)

This command-line JSON processor allows to slice, filter and transform structured data. This is a whole language in itself, documented [here](https://stedolan.github.io/jq/)

<img alt="jq screenshot" src="/images/cli/jq.png" class="screenshot"/>

### System management tools

#### [neofetch](https://github.com/dylanaraps/neofetch) (Bash)

Command-line system information tool

<img alt="neofetch screenshot"
     src="/images/cli/neofetch.png" class="screenshot"/>

#### [htop](https://github.com/htop-dev/htop) (C)

An interactive process viewer

<img alt="htop screenshot"
     src="/images/cli/htop.png" class="screenshot"/>

#### [nvtop](https://github.com/Syllo/nvtop) (C)

A htop-like task monitor for NVIDIA GPU. It is particularly useful to monitor memory usage.

  <img alt="nvtop screenshot" src="/images/cli/nvtop.png" class="screenshot"/>

### Disk management and fuzzy finder

#### [broot](https://github.com/Canop/broot) (Rust)

This tool is a great complement to [ncdu](https://dev.yorhel.nl/ncdu), including fuzzy search and whale-spotting.

<img alt="Broot screenshot" src="/images/cli/broot.png" class="screenshot"/>

```zsh
# Start broot and with size info, dates and permissions
br -sdp
# Whale spotting (sort by size, ignored and hidden files)
br -w
# Once inside the application
:fs       # filesystem analysis
:ss       # sort by size
:sd       # sort by date
ctrl+left # open or preview in new pane
alt+enter # open with xdg-open
c/        # search a match in file content
```

#### [fd](https://github.com/sharkdp/fd) (Rust)

A simple, fast and user-friendly, alternative to 'find'

#### [ag](https://github.com/ggreer/the_silver_searcher), the silver searcher (C)

A code-searching tool similar to ack, but faster.

#### [fzf](https://github.com/junegunn/fzf) (Go)

Command-line fuzzy finder

### Network tools

#### [dog](https://github.com/ogham/dog) (Rust)

Command line DNS client (alternate dig)

#### [xh](https://github.com/ducaale/xh) (Rust)

Friendly and fast tool for sending HTTP requests

### Modern AI tools

#### [tesseract](https://github.com/tesseract-ocr/tesseract) (C++)

This is a performant command-line open-source OCR engine. The command-line tool wraps around the `libtesseract` library which includes top-notch ML models for line and character recognition.

<img alt="Find the anomalies"
     src="/images/cli/609.jpg" style="max-width: 60%;"/>

```zsh
xh https://www.xoolive.org/images/cli/609.jpg |\
tesseract stdin stdout |\
grep --color 609
```

<img alt="tesseract screenshot"
     src="/images/cli/tesseract.png" class="screenshot"/>
