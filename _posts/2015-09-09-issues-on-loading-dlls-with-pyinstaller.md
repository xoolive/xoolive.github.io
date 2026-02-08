---
layout: post
tags: technical python
logo: fab fa-python
title: Issues on loading DLLs with pyinstaller
---

There seems to be issues upon loading some DLLs when running an executable produced with `pyinstaller`, esp. with the `--onefile` option.  
Some DLLs seem not to be wrapped and found by the executable.

You can manually add them in the generated spec file: for each DLL file `f`, append the following to `a.binaries`.

~~~python
a.binaries += (f, os.path.join(path_to_f, f), 'BINARY')
~~~

This is not enough for Python to find where the DLLs are located.  
The following lines are then to be put before importing the problematic modules (or loading the problematic DLLs). Upon unwrapping/launching the application, `sys._MEIPASS` contains the path to the directory where the executable is unwrapped, with the DLLs inside.

~~~python
try:
    import sys, win32api
    win32api.SetDllDirectory(sys._MEIPASS)
except:
    pass
~~~

Noteworthy reference:

- Microsoft API documentation for [`SetDllDirectory`](https://msdn.microsoft.com/en-us/library/windows/desktop/ms686203%28v=vs.85%29.aspx).
