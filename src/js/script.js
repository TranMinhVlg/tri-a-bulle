var tab = new Array(12,3,4,0,9,2,32,11,2,5);

for (var i = tab.length-1; i >= 0;i--) 
{ 
  var temp; 
  
  for (var j = tab.length-1; j >= 0; j--) 
  { 
    if (tab[j] < tab[i]) 
    { 
      temp = tab[j]; 
      tab[j] = tab[i]; 
      tab[i] = temp; 
    } 
  } 

} 

for (var i = 0; i < tab.length;i++) 
{ 
  document.write(tab[i]+" ")
}