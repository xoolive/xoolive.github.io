---
date: 2015-03-22 22:24:13+00:00
layout: post
tags: technical
title: Kernels for iPython
---

## For the R kernel

Depending on the operating system:

- Ubuntu:

```sh
sudo apt-get install libzmq3-dev libcurl4-openssl-dev
```

- Homebrew

```sh
brew install zmq
# or upgrade
brew update
brew upgrade zmq
```

We need development versions of several packages from Github for now, due to recent fixes. First, you need to make sure you have the `devtools` R package available.  
If you don't, at the R console type:

```r
install.packages("devtools")
```


Then, you can install the necessary development dependencies with:

```r
# Need RCurl for install_github
install.packages("RCurl")
library(devtools)
install_github("armstrtw/rzmq")
install_github("takluyver/IRdisplay")
install_github("takluyver/IRkernel")

# Only if you have IPython 3 or above installed:
IRkernel::installspec()
```



## For the Julia kernel


Run in your Julia session:

```julia
Pkg.add("IJulia")
```

## For the Bash kernel


Run in your terminal:

```sh
pip install git+https://github.com/takluyver/bash_kernel
```
