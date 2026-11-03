// peça um numero ao usuario 

let numero = Number(prompt(`digite um número para ver a tabuada:`)) //numner
let referencia = 1;

while (referencia <= 10) {
    //console.log();
    alert(`${numero} x ${referencia} = ${numero * referencia}`);
    referencia++
}