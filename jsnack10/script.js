/*
Chiedi un numero di 4 cifre all’utente. Crea e usa una funzione che calcola
la somma di tutte le cifre che compongono il numero e ritorni il risultato.
Usa questa funzione per stampare poi a video il risultato ottenuto
*/
function CifreSomma(value){
    let tot=0;
    while (value) {
    tot += value % 10;
    value = Math.floor(value / 10);
}
    return tot;
}
let cifra=prompt("Inserire un numero di 4 cifre: ");
document.getElementById('cifre').innerHTML = CifreSomma(cifra) ;