---
date: 2008-04-03 07:27:47+00:00
layout: post
tags: technical
title: Fonts in LaTeX
---

For anyone using LaTeX, it is sometimes appreciable to be able to change the font. Thus, some packages will change everything for you, like palatino package. If you add `\usepackage{palatino}` in your header, then the font will be changed. But personally, I like the original sans-serif font , and I do not like seeing it replaced.

So let us have a look at the `palatino.sty` file.

```latex
\renewcommand{\rmdefault}{ppl}
\renewcommand{\sfdefault}{phv}
\renewcommand{\ttdefault}{pcr}
```

Actually, only the first line redefines the roman style to Palatino. Because of next lines, sans-serif style will be also changed to Helvetica, and typewriter style will be changed to Courrier.

Therefore, it is possible to redefine the font of any style, the default one being

```latex
{\rmdefault}{cmr}
{\ttdefault}{cmtt}
{\sfdefault}{cmss}
{\mddefault}{m}
{\bfdefault}{bx}
{\updefault}{n}
{\itdefault}{it}
{\scdefault}{sc}
{\sldefault}{sl}
```

if we refer to the list hereunder:

```
bch         Charter
lmr         Latin Modern Roman
lmss        Latin Modern Sans Serif
lmssq       Latin Modern Sans Serif extended
lmtt        Latin Modern Typewriter
lmvtt       Latin Modern Typewriter proportional
pag         Avant Garde
pbk         Bookman
pcr         Courier
phv         Helvetica
pnc         New Century Schoolbook
ppl         Palatino
ptm         Times
put         Utopia
pzc         Zapf Chancery
```

I would keep a very simple header for my files:

```latex
\usepackage[T1]{fontenc}       % for the font family, the accents
\usepackage[utf8]{inputenc}    % for the utf8 encoding
\renewcommand{\rmdefault}{ppl} % for the Palatino font
\usepackage{mathpazo}          % for the math fonts in Palatino
```
