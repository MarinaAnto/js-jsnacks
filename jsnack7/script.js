/*
Creare una funzione che stampa il cubo dei primi N numeri, dove N è un
numero indicato dall’utente.
Una volta creata la funzione chiedere all'utente di inserire N con un
prompt e richiamate la funzione per dare la risposta all'utente.
*/
function cubo(N){
    return N**3;
}
let Quantita=prompt("Quanti numeri vuoi inserire?");
parseInt(Quantita);
let numeri;
let risultato=[];
for(let i=0;i<Quantita;i++){
    numeri=prompt("Inserisci i numeri: ");
    parseFloat(numeri);
    risultato.push(cubo(numeri));
}
document.getElementById('cubo').innerHTML = risultato;
