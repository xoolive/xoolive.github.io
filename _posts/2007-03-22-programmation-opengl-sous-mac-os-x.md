---
date: 2007-03-22 19:58:13+00:00
layout: post
tags: technical
lang: fr
title: Programmation OpenGL sous Mac OS X
---

Venant de passer sous MacOS X, j'ai rencontré quelques problèmes de compatibilités de mes projets faisant appel aux librairies OpenGL. Il faut savoir que l'OpenGL est installé de base sur tous les systèmes Darwin.

Cependant, il convient d'adapter les `#include` et l'édition de lien.

~~~c
#include <OpenGL/gl.h>
#include <OpenGL/glu.h>
#include <GLUT/glut.h>
~~~

Lors de l'édition de lien, il faudra ajouter les drapeaux:

~~~
-framework OpenGL -framework GLUT
~~~

Sur mes projets, certes simples, ceci a suffit.  
Pour les instructions `#ifdef`, le test à faire est sur la variable `__APPLE__`.
