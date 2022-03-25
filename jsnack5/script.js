/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. Stampa l'array alla fine.
*/
let arr=[];
let Num;
for(let i=0;i<6;i++){
   Num=prompt("Inserisci un numero: ");
   Num=parseFloat(Num);
   if(Num%2==1){
    arr.push(Num);
   }
}
document.getElementById('array').innerHTML = arr;