---
date: 2008-01-18 07:08:13+00:00
layout: post
tags: technical dvorak japanese
lang: fr
title: Le dvorak-fr sur un clavier japonais
---

J'utilise depuis quelques temps déjà le layout [dvorak-fr](/2007/03/04/le-clavier-dvorak-fr.html) sur mon ordinateur personnel, et également sur mon lieu de travail. Depuis que je suis au Japon cependant, la présence de clavier japonais est inévitable.

La forme du clavier étant différente :

- pas de touche "ç" (du clavier dvorak-fr),
- une touche en plus à côté du "Backspace",
- une touche en plus à côté de la touche "Shift" de droite,
- une touche 無変化,
- une touche 変化,
- et une touche カタカナ・ひらがな ;


le layout dvorak-fr n'est alors pas facile d'accès.

Je propose donc de déplacer pour ce clavier le "ç" sur la touche entre le "j" est le "Shift" de droite (ろ), et d'activer les autres touches supplémentaires, que l'on pourra ainsi configurer pour des raccourcis clavier.

Sous un système Linux, ajouter les lignes suivantes dans le fichier `/usr/share/X11/xkb/symbols/fr`, à la rubrique de la description du clavier "dvorak-fr".

~~~
key <HZTG> {
  type[Group1]="PC_SYSRQ",
  symbols[Group1]= [ Zenkaku_Hankaku, Kanji ]
};
key <NFER> { [ Muhenkan ]   };
key <XFER> {
  type[Group1]="PC_SYSRQ",
  symbols[Group1]= [ Henkan, Mode_switch ]
};
key <HKTG> {
  type[Group1]="PC_SYSRQ",
  symbols[Group1]= [ Hiragana_Katakana, Romaji ]
};
key <AB11>  { [ ccedilla, Ccedilla ] };
key <AC12>  { [     ugrave,   Ugrave,       masculine,    ordfeminine ] };`
~~~
