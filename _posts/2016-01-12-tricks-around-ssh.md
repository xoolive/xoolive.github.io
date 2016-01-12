---
layout: post
tags: technical
title: Tricks around SSH
---

`ssh` sure is a powerful tool for securely transferring files over a network.  
For my own reference, I referenced two tricks than happen to be useful on a daily basis.

# Transfer numerous files over SSH

If you transfer a big number of files over `ssh`, one connection is opened per file. Issues may arise as your connection may be interrupted by the server policy.

You can use `tar` to make a single file of a directory, compress it if need be, and send it through `ssh` before piping it to a file or to the converse `tar` command to decompress it. Creating a file and then sending it may be an option which can be tedious if your disk quota on the server is limited.

When you send files to a server:

```sh
tar cvzf - dir_to_copy/ | ssh user@host "cat > /path/to/archive.tar.gz"
tar cvzf - dir_to_copy/ | ssh user@host "tar xvzf - -C /path/to/dir"
```

When you send files from a server:

```sh
ssh user@host "tar cvzf - dir_to_copy/" | cat > /path/to/archive.tar.gz
ssh user@host "tar cvzf - dir_to_copy/" | tar xvzf - -C /path/to/dir
```

Note the `-C` option to `tar` that would decompress the file to the proper directory.  
As for the single `-`, it causes `tar` to read/write from `stdin/stdout`.

# Connection through a proxy/gateway and `.ssh/config`

When I connect to my account on some university I am related with, I need to create a `tty` terminal on a gateway before connecting another server (say `student01`) where I have a proper account. Only the gateway is visible from outside.

The recommended way to connect is:
```sh
ssh -t gateway.university.edu student01
```

This is quite inconvenient, esp. when I want to transfer files with `scp`. The following configuration can be put in a `.ssh/config` if you happen to need to deal with such configuration:

```
Host gateway
Hostname gateway.university.edu
User olive
#ForwardX11 yes

Host university
Hostname student01
User olive
ProxyCommand ssh gateway nc %h %p
#ForwardX11 yes
```

`scp` and also `ssh-copy-id` work properly now, and I only have one password left to type (on `gateway`) when I connect there.
