---
layout: post
tags: technical
title: Building libpython34.a for Windows
---

This trick is already to be found at many places around the net, but I never happen to find it when I need it. So, here goes:

```batch
gendef python34.dll
dlltool --dllname python34.dll --def python34.def --output-lib libpython34.a
```

Another related useful piece of information concerns how Python has been built. You can find what you need on the second line after running Python.

```
Python 3.4.3 (default, Nov  8 2015, 21:37:19)
[MSC v.1600 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>>
```
Look  here: `[MSC v.1600 ...]`. For Windows, here is how to decode this line:

| Version of Visual C++       | Compiler version |
|:----------------------------|:----------------:|
| `Visual C++ 4.x`            | `MSC_VER=1000`   |
| `Visual C++ 5`              | `MSC_VER=1100`   |
| `Visual C++ 6`              | `MSC_VER=1200`   |
| `Visual C++ .NET`           | `MSC_VER=1300`   |
| `Visual C++ .NET 2003`      | `MSC_VER=1310`   |
| `Visual C++ 2005  (8.0)`    | `MSC_VER=1400`   |
| `Visual C++ 2008  (9.0)`    | `MSC_VER=1500`   |
| `Visual C++ 2010 (10.0)`    | `MSC_VER=1600`   |
| `Visual C++ 2012 (11.0)`    | `MSC_VER=1700`   |
| `Visual C++ 2013 (12.0)`    | `MSC_VER=1800`   |
| `Visual C++ 2015 (14.0)`    | `MSC_VER=1900`   |

Then, in order to find its proper MSVC version, `distutils` looks at  environment variables: `VS90COMNTOOLS` (for Python 2.7), `VS100COMNTOOLS` (for Python 3.4), etc.
