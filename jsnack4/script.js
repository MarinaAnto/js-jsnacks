/*
In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.
*/
let Utente=prompt("Inserisci il tuo nome utente: ");
const Invitati=['Simone','Luca','Federica','Jessica','Sebastian'];
let risposta="";
if(Invitati.includes(Utente)){
    risposta="Puoi partecipare, accomodati";
}else{
    risposta="Mi spiace non sei invitato";
}
document.getElementById('festa').innerHTML = risposta;