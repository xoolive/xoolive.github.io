---
date: 2007-07-02 08:07:03+00:00
layout: post
lang: fr
title: LaTeX en japonais
---

C'est toujours un peu la lutte d'arriver à écrire des documents sous LaTeX en insérant des caractères japonais.

Le paquet `platex` permet bien de créer des documents exclusivement japonais, cependant, il ne permet pas de coupler ce document avec des spécificités d'une autre langue, je pense en particulier aux accents, cédilles et autres joyeusetés du français.

J'ai réussi à empaqueter une arborescence qui parvient à créer des documents japonais avec le minimum d'efforts. À un paramètre près, toute l'installation peut se faire en utilisateur.

Commencer d'abord par télécharger l'[archive](/extra/japanese_texmf.tar.bz2).


### Sous Linux,


Décompresser l'archive dans le répertoire utilisateur `~`, puis exécuter les commandes suivantes :

```sh
user$ texhash texmf
root$ cp texmf/fonts/map/cyberbit.map /usr/share/texmf/fonts/map/
```

Ensuite, rajouter la ligne suivante dans `/var/lib/texmf/web2c/updmap.cfg` :
`Map cyberbit.map`
Puis exécuter :

```sh
root$ updmap
```


### Sous MacOS,


Décompresser l'archive dans `~/Library/` (à la ligne de commande pour qu'il s'insère correctement dans l'arborescence déjà présente), puis exécuter les commandes suivantes :

```sh
$ texhash
$ sudo cp texmf/fonts/map/cyberbit.map /sw/share/texmf-dist/fonts/map/
```

Ensuite, rajouter la ligne suivante dans `/sw/share/texmf-dist/web2c/updmap.cfg` :
`Map cyberbit.map`
Puis exécuter :

```sh
$ sudo updmap
```


### Partie commune : test de l'installation


Créez un fichier encodé en unicode (utf8), avec les lignes suivantes en en-tête :

```latex
% Japanese input
\usepackage[utf8]{inputenc}
\usepackage{CJK}
\newcommand\japonais[1]{\begin{CJK*}{UTF8}{song}#1\end{CJK*}}
```

Ensuite dans le corps du document, tapez :

```latex
Ceci est un test avec des lettres accentuées.
\japonais{これは日本語のテキストである。}
```

Compilez et vérifiez que les lettres latines, accentuées, kanji, hiragana et katakana s'affichent correctement.


### Feedback


_Si vous voyez un moyen d'améliorer, ou d'alléger la procédure, n'hésitez pas à laisser des commentaires ! Je ferais de mon mieux pour éditer ce billet et proposer quelque chose qui marche enfin._

_De même, si vous avez des messages d'erreur, n'hésitez pas à les poster !_
