var tab = new Array(10,7,1,6,2,5,4,1,3,8); //jinitialise le tableau

for (var i = tab.length-1; i >= 0;i--)  //parcours du tableau de la droite vers la gauche indice i
{ 
  var temp; 
  for (var j = tab.length-1; j >= 0; j--) //parcours du tab de la gauche vers la droite avec un autre indice j
  { 
    if (tab[j] < tab[i]) // si la valeur contenue dans tab[j] inférieure à tab[i]
    { 
      temp = tab[j]; //les 3 lignes suivantes permettent de permuter/échanger les valeurs
      tab[j] = tab[i]; 
      tab[i] = temp; 
    } 
  } // On est à la fin du 2ème for avec j donc j = j-1 càd on est pas à la dernière case du tab mais à l'avant dernière. Ensuite on compare tab[i] et tab [j] et on permute ou non.
}  // On est à la fin du 1er for avec i = i-1 càd on passe à l'avant dernière case du tab. On recommence les comparaisons avec j dernière case puis j avant dernière case

for (var i = 0; i < tab.length;i++) 
{ 
  document.write(tab[i]+" ") // affiche le tableau trié 
}
