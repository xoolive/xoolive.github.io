---
date: 2018-07-18
layout: post
lang: en
tag: technical
title: Good smell for code
---

## The code must be ready for demo.

Prepare a portfolio, be ready to show what the project is all about: show how it helps with useless yet fun basic examples, then how it serves with nice success stories.

## Part of the code should be open source.

Opening your code does not make it excellent, but it forces you to make it presentable, to clean and purge dirty tricks and hacks. It is not about users needing to understand every line of code, but publishing (on Github?) brings a lot in many aspects.

Build a portfolio, keep track of your bugs, show your project is alive and still flexible. If you need to close some part of the code (which is fair), think about maintaining the core functionalities open, and proposing a plugin system for keeping critical parts away.

## Show me the documentation.

Nobody enjoys writing documentation, but writing it forces you to push your code to its limits. As you write it, you may realise what basic aspects of your API you forgot to implement... and do the additions!

It is not fun, so transcend the rules: do not docstring every single parameter, but tell a story. Likewise, I encourage people to bypass the unit testing if they have strong integration tests (why not in your documentation!)

## Do the install for me.

It should not be more complicated than one of the following:

```sh
# the old fashioned way
./configure; make; make run
# the hipster way
mkdir build; cd build; cmake ..; make; make run
# the pythonic way
pip/conda install project; project --help
```

Having some dependencies is fine. But do the job for the user. I believe users don't want to care for developers problems.

## What I like to find in code.

Of course, all projects have their peculiarities. Yet I appreciate

- finding both an executable and a library that I can call from another program;
- being able to extend the current code without breaking it (plugins are an option);
- understanding why you chose this programming paradigm/language/style.

## My two cents for Python projects

There is the [Zen of Python](https://www.python.org/dev/peps/pep-0020/), then my own little list:

- Use the latest Python version, and know why you do so;
- Write a `setup.py`;
- Use environments for every project (consider virtualenv or conda environments).  
  Do not install Python packages at the system level. This keeps your project environment isolated and reproducible;
- Use destructuring assignment, not indices.  
  For multiple assignment write `first, second, *_ = (1, 2, 3, 4)`; namedtuple (and soon dataclasses) are also an option as `name = a.name` is better than `name = a[11]`;
- Avoid `*args, **kwargs` unless you know you need them: it makes your function signatures hard to read, and code-completion less helpful.  
*How much do you hate matplotlib when you try to find possible arguments for `plt.plot`?*
- `range(len(thing))` is often a code smell: you probably should use `enumerate` and/or `zip`.  
  *Read the official pages about `itertools`*;
- `.open()` or `.close()` is another bad signal.  
  *Learn about context managers and `with` blocks*;
- Understand when to use multiprocessing and when to use threading;
- Understand lists in Python, learn to avoid them, unless you know why;
- Understand dictionaries in Python.  
  *Check other kind of dictionaries in the `collections` module*;
- `typing` is great. It helps you write a better, more robust and it documents your code.

In general, test your code in a REPL environment or Jupyter notebook. I find it a good practice to subclass structures from your library under development and quickly debug your methods and functions before moving the code back in the project when you consider the feature ready.
