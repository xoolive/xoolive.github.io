---
layout: post
lang: fr
tags: technical notebook
title: Le rolling shutter
---

> *L'envie m'a prise de tenter de publier régulièrement une série de petites expériences codées dans des notebooks [Jupyter](http://jupyter.org). Le billet est alors généré de manière semi-automatique en Markdown par le convertisseur embarqué.*

Le *rolling shutter* est un artefact produit par un appareil photographique qui fixe une image par déroulement. Il engendre des déformations sur l'image capturée.

Les appareils photo numériques capturent chaque ligne successivement. Si la vitesse de déplacement ou de rotation de l'engin est proche de la vitesse de capture de l'image, alors des artefacts apparaissent.

On trouve notamment beaucoup d'images d'hélices de turbopropulseurs en rotation avec des artefacts caractéristiques.  
Le morceau de code Python ci-dessous permet de simuler ces déformations.


~~~python
%matplotlib inline
import numpy as np
import matplotlib.pyplot as plt
~~~

On choisit de modéliser une hélice à $$n$$ pales par l'équation polaire $$r = sin(n\cdot\theta)$$.  
Par exemple, on peut représenter ainsi une hélice à 7 pales.


~~~python
theta = np.linspace(0, 2 * np.pi, 500)
r = 5 * np.sin(7 * theta)
plt.polar(theta, r, '.')
~~~


![Modélisation d'une hélice par une équation polaire](/images/rolling_shutter_3_0.png){:width="35%" style="margin: 0px 4em;"}


On construit une image en manipulant une grille d'une résolution donnée.  
On retrouve les coordonnées polaires de chaque point et on module l'argument de chaque ligne par la vitesse de rotation.


~~~python
def propellers(nb_prob, speed, ax, resolution=1000):
    # Construction de la grille
    x = np.arange(resolution)
    y = np.arange(resolution)
    xx, yy = np.meshgrid(x, y)
    
    # Centrage de la grille
    xx = xx - resolution/2
    yy = yy - resolution/2
    
    # Le 2e terme simule la capture ligne par ligne lors de la rotation
    theta = np.arctan2(yy, xx) + speed * yy
    r = np.sqrt(xx * xx + yy * yy)
    
    # Colormap à peu près lisible
    ax.imshow(r - 4 * resolution / 10 * np.sin(nb_prop * theta) <= 1,
              cmap=plt.cm.Blues)
    ax.set_title("Vitesse : {}".format(speed))

fig, ax = plt.subplots(ncols=2, nrows=2, figsize=(10, 10))

propellers(5, 0,    ax[0, 0])
propellers(5, .003, ax[0, 1])
propellers(5, .01,  ax[1, 0])
propellers(5, .03,  ax[1, 1])
~~~

![Artefacts pour plusieurs vitesses de rotation](/images/rolling_shutter_5_0.png){:width="80%" style="margin: 0px 4em;"}

[#]: vim: spelllang=fr
