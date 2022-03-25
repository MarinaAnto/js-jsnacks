/*
Crea una funzione chiamata sommaNumeri che dato un array di 10
numeri definito da voi nel codice, ne calcoli la loro somma e la restituisca
come risultato.
Utilizzare la funzione sommaNumeri per stampare il risultato ottenuto
*/
function sommaNumeri(Arr){
    let total=0;
    for (let i=0;i<Arr.length;i++) {
      total =total + Arr[i]; }
      console.log(total);
 return total;
}
let myArr=[5,7,6,3,4,5,3];
document.getElementById('somma').innerHTML = 'somma'+ sommaNumeri(myArr) ;

