/*
Crea una funzione chiamata mediaAritmetica che prende in input un
array di 10 numeri e restituisca la media aritmetica dei numeri contenuti
nell'array.
Utilizzare la funzione sommaNumeri precedentemente creata per
calcolare la media dei 10 numeri che vanno chiesti all'utente attraverso
dei promp
*/
function sommaNumeri(Arr){
    let total=0;
    for (let i=0;i<Arr.length;i++) {
      total =total + Arr[i]; }
      console.log(total);
 return total;
}
function mediaAritmetica(Ar){
    let somma=0;
    let cont=0;
    let media;
    for(let i=0;i<Ar.length;i++){
        somma= somma + Ar[i];
        cont =cont+1;
    }
    media = somma/cont;
    return media;
}
let numer;
let arr=[];
for(let i=0;i<3;i++){
    numer=prompt("Inserisci un numero: ");
    numer=parseFloat(numer);
    arr.push(numer);
}
document.getElementById('input').innerHTML ='somma:' + sommaNumeri(arr)+', '+'media'+ mediaAritmetica(arr);