/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
  */
    let somma=0;
    let Numero;
  for(let i=0;i<10;i++){
     Numero=prompt("Inserisci un numero: ");
     Numero=parseFloat(Numero);
     somma+=Numero; 
  }
document.getElementById('input').innerHTML =somma ;

