---
layout: default
lang: en
title: Command line tools and cheatsheets
permalink: /cli/
---

# Command-line tools and cheatsheets

## Related posts

- [Introduction to command-line interface](/404.html)
- [How to quit Vim? An introduction on Vim usage](/404.html)
- [Advanced Git usage patterns](/404.html)
- [Linux at the command line](/linux-tools)

## Cheatsheets

I maintain a simple private cheatsheet as a repository for the [cheat tool](https://github.com/cheat/cheat). Among many tools for cheatsheets:

- [cht.sh]() is very comprehensive, it works based on very simple curl calls;
- [cheat](https://github.com/cheat/cheat) handles personal cheatsheets.

Details about configuration are to be found on the [cheat](https://github.com/cheat/cheat) documentation page  
[https://github.com/xoolive/cheatsheets](https://github.com/xoolive/cheatsheets)

You may set up many cheatsheet sources, with order of precedence and more.

```zsh
➜ cheat jq  # [content clipped]
# To pretty print the json:
jq "." < filename.json

# To access the value at key "foo":
jq '.foo'

# To access first list item:
jq '.[0]'
```

## Modern command line tools
