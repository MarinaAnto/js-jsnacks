let PrimaParola=prompt("Qual'è la prima parola?");
let SecondaParola=prompt("Qual'è la seconda parola?");
let Ris;
if (PrimaParola.length<SecondaParola.length){
       Ris=PrimaParola +', '+ SecondaParola;
}else if(PrimaParola.length()>SecondaParola.length()){
    Ris=SecondaParola +', '+ PrimaParola;
}else{
    Ris=SecondaParola +', '+ PrimaParola;
}
document.getElementById('minore').innerHTML = Ris;