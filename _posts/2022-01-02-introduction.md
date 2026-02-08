---
layout: post
lang: en
title: Introduction to the command-line interface
tags: technical cheatsheet cli
permalink: /cli-intro
---

This basic introduction to the command-line interface is designed for people with no previous experience of the terminal. It does not go very much in depth in all the possibilities of the terminal, but provides only a survival kit to the command line.

The command line usually refers to a textual interface to a program, and consists of a series of characters running a program with parameters as input, possibly modifying files in your system and printing output as a series of characters, inside the terminal.

The _shell_ is a program providing a [Read-Evaluate-Print-Loop (REPL)](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop):

1. it reads commands passed as inputs;
2. it evaluates[^1] that input as a builtin or external program with parameters;
3. it prints the result as an output;
4. then loops again to step 1.

[^1]: Note that the program may modify the environment, the contents of files, send or receive data from the Internet, play the music or more, _without printing any output to the terminal_.

The most common shell program is bash, but other shells do a similar job with various flavours, e.g. zsh or fish.

## Starting the terminal

When you open a new session without any graphic interface, open a session on a remote computer though a terminal, or simply run the `Terminal` program locally[^2], you are welcomed by a _prompt_:

```bash
xo@midnight:~$
```

[^2]: `Ctrl+Shift+T` is a common shortcut in many distributions, but it is not standard either, so you may have to set it up yourself.

This slightly verbose prompt displays information about the user you are logged in as (here `xo`) and the name of the host machine (here `midnight`).

The reader should run the commands in a terminal on his local computer. In order to facilitate copy-paste, I will not reproduce the prompt in the following examples, unless I need to highlight something specific in the output.

For instance, I can refer to the following command which prints the user you are logged in as:

```bash
whoami
```

When the output is of importance, the input command will be prefixed by a lightweight prompt: `$` ; before output is printed:

```bash
$ whoami  # just in case, comments start with a # character
xo
```

The name of the host machine can be printed with

```bash
hostname
```

By default, the shell starts in your home directory. The command to confirm your current directory goes as:

```bash
$ pwd
/home/xo
```

You may notice here that the usual pattern for the home directory starts with the `/home/` prefix. Here the aborescence of your file system is printed with the `/` character as a separator. Unlike with Windows, there is no such thing as _drives_ (`C:\`, `D:\`, etc.) in Linux, and the aborescence starts at the root `/`.

The `ls` command lets you _list_ all what is inside the current directory:

- with option `-a`, hidden files are also included;
- with option `-l`, a detailed output is produced;
- if you append a path, that directory is listed.

```bash
$ ls
(truncated)
$ ls -a
(truncated)
$ ls -l
total 80K
drwxr-xr-x  2 xo xo 4,0K sept.  9 21:14 Desktop/
drwxr-xr-x 22 xo xo 4,0K déc.   9 16:09 Documents/
drwxr-xr-x 15 xo xo  12K déc.  21 15:33 Downloads/
drwxr-xr-x 41 xo xo 4,0K mai   12  2021 Music/
drwxr-xr-x 20 xo xo  12K déc.  14 00:00 Pictures/
drwxr-xr-x  2 xo xo 4,0K mai   12  2021 Public/
drwx------ 19 xo xo 4,0K déc.  17 18:12 snap/
drwxr-xr-x  2 xo xo 4,0K mai   12  2021 Templates/
drwxr-xr-x  8 xo xo 4,0K mai   12  2021 Videos/
-rw-r--r--  1 xo xo 2862 mai   16  2021 readme.md
```

You do not need to understand all columns, but there are still some patterns to remember:

- `xo xo` denotes the owner and the group associated with the file or directory; this is related to permissions;
- `-rw-r--r--` refers to permissions: the first character may be a `d` if we refer to a directory, then imagine groups of `rwx` (for `r`ead, `w`rite, e`x`ecute): the first block refers to permissions for the `u`ser, the second block for the `g`roup and the last block for `o`thers.

So `rw-r--r--` means everybody can read the file, but only the user `xo` can modify it. Directories being _executed_ `drwxr-xr-x` means we can enter them. When a directory is executable but not readable, it means it is still possible to go through the aborescence but you must know the path you are going because it is not possible to list the content of those directories.

```bash
$ ls /
bin@    dev/   lib@    libx32@      mnt/   root/  snap/     sys/  var/
boot/   etc/   lib32@  lost+found/  opt/   run/   srv/      tmp/
cdrom/  home/  lib64@  media/       proc/  sbin@  swapfile  usr/
```

Listing the root directory may look cryptic for beginners: you however see here a traditional Unix structure:

- `/boot` contains files necessary to start up the system;
- `/etc` contains configuration files for the system
- `/home` hosts the home folder for all users
- `/media` and `/mnt` are the path where external drives are usually _mounted_ (there is no _drive_ in Linux, if you plug an external hard disk, it will be mounted in your aborescence)
- etc.

Finally the `cd` command changes directory:

- name the directory where you are going to: the path can be relative or absolute (starts with a `/`);
- `..` goes to the parent directory;
- `.` stays in the same directory;
- `-` goes back to the previous directory;
- `~` goes your home directory (same as `$HOME` or as no argument)
- `~john` goes to `john`'s home directory

Try the following commands at home:

```bash
cd Documents
pwd
ls
cd Dropbox  # or any other directory
cd ..  # comes back
pwd
cd .
cd Dropbox
cd -
cd
cd Documents/Dropbox
ls ~
ls $HOME
cd $HOME/Documents
```

## Short summary

| command |                                     |
| :------ | :---------------------------------- |
| `pwd`   | **P**rint **W**orking **D**irectory |
| `ls`    | **L**i**S**t directory              |
| `cd`    | **C**hange **D**irectory            |

| shortcuts |                                            |
| :-------- | :----------------------------------------- |
| `/`       | the _root_ directory                       |
| `.`       | the _current_ directory                    |
| `..`      | the _parent_ directory                     |
| `~`       | the _home_ directory, aka `$HOME`          |
| `-`       | **only with `cd`**: the previous directory |

## Create files and directories

The command to create a directory is called `mkdir`, which stands for "make directory". Let's enter that directory for our experiments:

```bash
mkdir test_dir
cd test_dir
```

There is a first way to create empty files with the `touch` command. You can also use the `touch` command on an existing file and see its modification time updated:

```bash
touch test1
touch test2
ls -l  # check the modification, then wait for a few minutes and repeat
```

The most common way to create files though would be to redirect the output of the terminal to a file with the `>` operator:

```bash
ls > test3
```

You can check the content of the `test3` file with the `cat` command:

```bash
cat test3  # did you notice that test3 existed when ls was executed?
```

Usually, the `>` operator creates a new file, but you can append content to an existing file with the `>>` operator:

```bash
ls >> test3
```

Observe the new content with the `cat` command.

You can also add any content to the file thanks to the `echo` command which only repeats what comes next, text or variables:

```bash
$ echo echo
echo
$ echo $HOME
/home/xo
```

So let's add more now:

```bash
echo many test files >> test3
```

## Short summary

| command |                                               |
| :------ | :-------------------------------------------- |
| `mkdir` | Create a new directory                        |
| `touch` | Create a file or update its modification time |
| `cat`   | Print the content of a file                   |
| `echo`  | echo                                          |

## The `pipe` operator `|`

The `pipe` operator `|` is used to redirect the output of a program to a new program. This is a very convenient tool in the Unix ecosystem which provides many simple, efficient and specialised tools.

Let's have a look at two new commands:

- the `grep` command is used to select lines in a file matching a pattern:
  ```bash
  $ grep many test3
  many test files
  ```
- the `sed` **s**tream **ed**itor is a very powerful tool to edit long streams of text. The most widely used command is the _replace_ command `s/`:

  ```bash
  $ sed 's/t/z/' test3  # replace t with z
  zest1
  zest2
  zest3
  zest1
  zest2
  zest3
  many zest files
  ```

  Did you notice only the first `t` got replaced? We can add a `g` switch (for **g**lobal) at the end of our `sed` command:

  ```bash
  $ sed 's/t/z/g' test3
  zest1
  zest2
  zest3
  zest1
  zest2
  zest3
  many zesz files
  ```

Now let's look how we can pipe things:

```bash
$ cat test3 | grep 'many' | sed 's/t/z/'
many zest files
$ cat test3 | grep -v 'many' | sed 's/t/z/' | sort
zest1
zest1
zest2
zest2
zest3
zest3
$ cat test3 | grep '[12]' | sort | uniq
test1
test2
$ # How many different lines do we have with test1, test2, etc. ?
$ cat test3 | grep 'test[1-9]' | sort | uniq | wc -l
       3
```

## Short summary

| command |                                                               |
| :------ | :------------------------------------------------------------ |
| `grep`  | Only display lines matching a pattern (`-v` for the opposite) |
| `sed`   | Stream editor, commonly used for "search & replace"           |
| `sort`  | Well... sort!                                                 |
| `uniq`  | Remove consecutive duplicated lines                           |
| `wc`    | Word count, option `-l` for counting lines                    |

| operator |                                              |
| :------- | :------------------------------------------- |
| `>`      | Redirect output to a new file                |
| `>>`     | Redirect output to an existing file (append) |
| \|       | Redirect output to the input of next program |

## Run programs

It is very common to write script files and to execute them.

Let's make a program of our last command:

```bash
echo "cat \$1 | grep 'test[1-9]' | sort | uniq | wc -l" > count.sh
cat count.sh
bash count.sh test3
```

The first way to execute a script is to run it with the bash command. But first, we replace `test3` with the `$1` alias, which means "the first argument passed to the program". As we echoed the line, it was important to escape the `$` with `\$` otherwise `$1` would have been interpreted before being written into `count.sh`. (Try to remove it to convice yourself)

If we want to avoid typing `bash` first, we can make our program executable:

```bash
ls -l count.sh
chmod +x count.sh  # make the file executable
ls -l count.sh  # look at the difference
```

But now:

```bash
$ count.sh test3
bash: count.sh : command not found
```

The thing is that, _for security reasons_ we cannot execute programs which are not located in a list of specified directories. If you want to execute a program located anywhere, you need to specify its full path (relative or absolute). Both option work:

```bash
./count.sh test3
/home/xo/test_dir/count.sh test3
```

There is a way to know what the full path to an executable we know well:

```bash
$ which cat
/usr/bin/cat
$ which sed
/usr/bin/sed
$ which count.sh
count.sh not found
```

The list of allowed directories is specified in the `$PATH` variable:

```bash
echo $PATH
```

You may edit the variable with a new folder if need be. This kind of settings is usually located in your Bash settings files (`.bashrc` or `.bashenv`)

```bash
export PATH=$HOME/.local/bin:$PATH
```

If you copy or move your program to that directory, then you can execute it from anywhere:

```bash
$ cp count.sh $HOME/.local/bin
$ mv count.sh $HOME/.local/bin
$ which count.sh
/home/xo/.local/bin/count.sh
$ count.sh test3
       3
```

## Short summary

| command  |                                                                |
| :------- | :------------------------------------------------------------- |
| `chmod`  | Change permissions                                             |
| `which`  | Displays the full path to an executable in your `$PATH`        |
| `export` | Set an environment variable                                    |
| `cp`     | Copy a file or directory (Use the `-r` option for directories) |
| `mv`     | Move a file or directory                                       |
| `rm`     | Remove a file or directory                                     |

```bash
cd
rm -rf test_dir
```

## Advice for going further

The command line interface paves the way to many possibilities in the terminal. You can access content from the internet (with `curl` or `wget`), play music or videos, process images, command your printer, rename, compress and organise batches of files, and much more.

When you find yourself doing some very tedious task on your computer, consider that you can probably program it with few pipes. Look at Google, [stack overflow](https://stackoverflow.com/) and more resources to see if anybody did that before. There are also many great tools on [GitHub](https://github.com) written by fellow users who share their work.

Be curious, look at how people write their scripts. If you find nice combinations of commands, consider writing them down and sharing them with the community too!
