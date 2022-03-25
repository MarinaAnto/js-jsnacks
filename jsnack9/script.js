/*
Crea una funzione chiamata mediaAritmetica che prende in input un
array di 10 numeri e restituisca la media aritmetica dei numeri contenuti
nell'array.
Utilizzare la funzione sommaNumeri precedentemente creata per
calcolare la media dei 10 numeri che vanno chiesti all'utente attraverso
dei promp
*/
function mediaAritmetica(Ar){
    for(let i=0;i<Ar.length;i++){
        let somma= somma+Ar[i];
        let cont =cont+1;
    }
    let media = somma/cont;
    return media;
}
let numer;
let arr=[];
for(let i=0;i<10;i++){
    numer=prompt("Inserisci un numero: ");
    numer=parseFloat(numer);
    arr.push(numer);
}
document.getElementById('input').innerHTML = sommaNumeri(arr)+', '+ mediaAritmetica(arr);