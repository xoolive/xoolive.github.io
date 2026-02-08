---
layout: post
lang: en
tags: technical python
logo: fab fa-python
title: Python private constructors
---


There is no such thing as Python private constructors.

However, as I worked on wrapping some C-based code with Cython, I ended up with the following pattern. Some (boring) technical issues do not allow me to just have the `make_foo` processing in the constructor.

~~~python
cdef class Foo(object):
    """Documentation for class Foo.

    Use `make_foo` to create such object.
    """

    cdef long value

    def __cinit__(self, value):
        self.value = value

    def __repr__(self):
        return "Foo: #{}".format(self.get_id())

    def get_id(self):
        return foo_id(self.value)

def make_foo(idx):
    """Build a Foo object from an id.

    >>> make_foo(12)
    Foo: #12
    """
    value = build_foo(idx)
    return Foo(value)
~~~

So, I expect the user to only call `make_foo` and I would love that the constructor raises a `ValueError` when it is called by the user and processes silently when it is called by authorised functions in the module.


Here is a suggestion to reach this goal.

Because of its double-underscore prefix, `__SECRET__` is not available from outside the module, and as a basic `object()`, it is not possible to imitate it and try to fool the constructor of `Foo`. However, the `make_foo` function being part of the module knows the `__SECRET__` and can safely pass it to the constructor.

~~~python
__SECRET__ = object()

cdef class Foo(object):
    """Documentation for class Foo.

    The constructor raises a ValueError if called directly.
    >>> Foo(12)
    Traceback (most recent call last):
        ...
    ValueError: Use `make_foo` instead.
    """

    cdef long value

    def __cinit__(self, value, secret):
        if (secret != __SECRET__):
            raise ValueError("Use `make_foo` instead.")
        self.value = value

    def __repr__(self):
        return "Foo: #{}".format(self.get_id())

    def get_id(self):
        return foo_id(self.value)

def make_foo(idx):
    """Build a Foo object from an id.

    >>> make_foo(12)
    Foo: #12
    """
    value = build_foo(idx)
    return Foo(value, __SECRET__)
~~~



