/*
Fate generare un numero random da 0 a 10 al computer, e chiedete
all'utente di inserire un suo numero. Se il numero scelto dall'utente è
uguale al numero del computer informate l'utente che ha vinto, altrimenti
ha perso. 
A questo punto fate giocare l'utente, fintanto che non vince la partita
contro il PC :)

*/
let NumeroComputer = Math.round(Math.random() * 10);
let TuoNumero=prompt("Inserire un numero: ");
let Indovinato="";
if(NumeroComputer==TuoNumero){
    Indovinato="Hai indovinato !!!"
}else{
    Indovinato="Hai perso..."
}
document.getElementById('random').innerHTML = Indovinato;
 