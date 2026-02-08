---
date: 2006-12-16 11:04:14+00:00
layout: post
lang: fr
tags: rambling typography
title: Les lettres œ, æ, É, etc.
---

Idée reçue numéro 1 : l'informatique dispense d'orthographier correctement. Un clavier de base ne contient pas le œ, donc on serait dispensé de le taper. On serait autorisé à écrire « une soeur » et « un oeuf », graphie à laquelle réagissent tous les correcteurs orthographiques. Dans un logiciel de traitement de texte, un clic droit permet de corriger rapidement mais tous les logiciels n'en sont pas munis.


Faites par exemple une recherche sur le titre de film *Deux sœurs* et vous verrez que la première page de résultats ne contient aucune orthographe correcte. La première réaction serait alors de dire que la valeur du œ est purement esthétique mais comment alors distinguer la prononciation de œuf et de coefficient (qui ne s'écrit en aucun cas « cœfficient »...)  
**La valeur du œ est phonétique**. Il est aussi absurde de ne pas écrire le œ que de remplacer tous les ê d'un texte par des é: pourquoi n'apprendrions-nous pas la conjugaison de l'auxiliaire étre à ce rythme ?

De même, la dispense des accents sur les majuscules est un héritage de l'imprimerie mécanique où l'accent sur une lettre accentuée était situé au delà de la hauteur maximale des lettres. « Etant » est une faute d'orthographe, on ne prononce pas ce mot « eutant ».

La variante `latin9` du clavier azerty sous des systèmes Linux contient ces majuscules et le œ (situé à la place du ²), de même pour le [clavier dvorak-fr de X](/2007/03/04/le-clavier-dvorak-fr.html). En LaTeX, taper `\oe{}` permet d'accéder à ce caractère. Microsoft permet de taper ces caractères avec une combinaison `Alt+0xxx`, ce qui est anti-_user-friendly_, et pire (pour l'utilisateur lambda) permet de redéfinir la disposition de son clavier avec le _Microsoft Keyboard Layout Creator_ pour pouvoir les taper. Expliquez à votre grand-tante les concepts de _scan code_ et _virtual key_...

Cependant, en lisant la documentation Microsoft, on lit qu'avant de définir une disposition, il faut penser au pays pour lequel on le définit. Apparemment, ils n'ont pas pensé à définir un clavier français pour les français. C'est bien dommage, mais rattrapable. Souhaitons qu'un vrai clavier français soit un jour attaché à leur système d'exploitation et faisons notre possible pour que nos lettres ne disparaissent pas à cause de l'informatique !
