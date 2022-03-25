let Num1=prompt("Scegli il primo numero: ");
let Num2=prompt("Scegli il secondo numero: ");
let risposta="";
Num1=parseFloat(Num1);
Num2=parseFloat(Num2);
if(Num1<Num2){
    risposta="Il primo numero è minore del secondo";
}else if(Num1==Num2){
    risposta="Il primo numero è uguale alsecondo";
}else{
   risposta="Il primo numero è maggiore del secondo";
}
document.getElementById('ris').innerHTML = risposta;
