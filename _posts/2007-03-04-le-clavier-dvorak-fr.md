---
date: 2007-03-04 19:20:45+00:00
layout: post
lang: fr
title: Le clavier dvorak-fr
---


### Pourquoi un nouveau clavier ?


Les dispositions de clavier que nous connaissons tous, quel que soit notre pays  sont dérivées de la disposition connue sous le nom de "qwerty" en référence aux  premières lettres de la première ligne de ce clavier. C'est Christopher Latham  Shores, le créateur de la machine à écrire, qui l'a conçu afin d'éviter que les  digrammes les plus courants (en anglais) soient les plus éloignés possibles,  évitant alors que les marteaux alors lourds et lents à manipuler ne se  croisent.

Une fois les premiers prototypes vendus, Shores voulut repenser sa disposition  de clavier, ayant déjà amélioré les soucis techniques de vitesse des marteaux.  Mais la loi de l'immobilisme a sévi. Alors même qu'on venait de prouver leur  inadéquation, les claviers qwerty ont été gardés et la disposition a été  mémorisée par des milliers de personnes.

C'est alors qu'entre en scène le docteur Auguste Dvorak, psychologue et  professeur à l'université de Seattle. Il a commencé par observer les habitudes  des utilisateurs sur un clavier, et a couplé cette étude à celle des mots,  digraphes et lettres les plus courants en anglais.

Il a commencé par remarquer que la position de repos pour les mains était  d'avoir les doigts sur la deuxième ligne. Les autres touches sont atteintes en  déplaçant les mains. En tapant en anglais sur un clavier qwerty, 30% des  touches utilisées sont sur la deuxième ligne. Dvorak a alors placé sur cette  ligne les lettres les plus utilisées de la langue anglaise, permettant de taper  alors 70% des touches sans bouger les mains. Cette ligne contient toutes les  voyelles et les consonnes les plus utilisées.

Pour pouvoir taper plus vite et plus efficacement, il a aussi remarqué qu'il  fallait alterner autant que possible la main à utiliser pour enchaîner les  touches. Il a donc placé les voyelles sous la main gauche et les consonnes les  plus utilisées sous la main droite, permettant ainsi d'alterner autant que  possible les mains.

Les bénéfices de cette disposition sont indéniables en précision, fluidité de  la frappe. L'apprentissage pour un novice du clavier est plus rapide et on note  que un expert du clavier qwerty met environ 50 heures à retrouver son rythme de  frappe habituel.


### Le clavier dvorak-fr


Ces dispositions précédemment énoncées sont valables pour taper efficacement en  langue anglaise. Il a fallu aussi développer de nouvelles dispositions pour les  autres langues comme le suédois, l'espagnol ou le français.

Concernant le français, il n'existe pas de disposition officielle : tout le  monde y est allé de sa petite modification. Je vous recommande cependant  d'utiliser la disposition adoptée par X.org (les serveurs graphiques sous les  systèmes *nix) présentée ci-dessous :

<img alt="Le clavier dvorak-fr" src="/images/clavier-dvorak-fr.png" width=80% style="margin: 0px 4em;"/>

### Et pour l'utiliser ?


**Sous les systèmes *nix récents,** il suffit de taper la commande  suivante:  
```setxkbmap -layout fr -variant dvorak```

Si le système est plus vieux – ou plus précisément si la version du  serveur graphique est plus vieille –, inversez `layout` et `dvorak` dans la  commande précédente.

**Sous Mac OS**, ajouter le fichier [`.layout`](/extra/dvorak-fr.keylayout) dans le dossier `~/Library/Keyboard Layouts`.

**Pour les produits Windows,** un outil est fourni sur le site de  Microsoft. Faites une rapide recherche Google pour télécharger _Microsoft  Keyboard Layout Creator_ – je ne fournis pas de lien vers ce logiciel  pour garantir que vous téléchargiez la version la plus à jour.

Vous pouvez télécharger ensuite le fichier [dv-fr.klc](/extra/dv-fr.klc), l'éditer pour adapter éventuellement le  layout à vos besoins. Le clavier joint n'est pas rigoureusement conforme à  l'original, le ç étant placé en AltGr+c, à la place du © ; les claviers pc104 ont une touche en moins, sur laquelle est positionnée le ç pour un clavier pc105.

Vous pouvez sinon télécharger l'archive [dv-fr.zip](/extra/dv-fr.zip), la décompresser et utiliser l'installeur (.exe) fourni dans l'archive.

### Bibliographie

Je recommande aux anglophones la lecture de [http://dvzine.org/](http://dvzine.org/).


### Remerciements

[Xavier Miller](http://www.xaviermiller.be/), pour la correction d'un bug dans le pilote Windows.
