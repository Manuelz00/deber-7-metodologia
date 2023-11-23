'use strict'
function multiplicar(valorMultiplicando, valorMultiplicador){
    let suma = 0;
    for(let i = 0; i < valorMultiplicador; i++){
        suma = suma + valorMultiplicando;
    }
    return suma;
}

let multipli01 = Number(prompt("Valor del multiplicando:"));
let multipli02 = Number(prompt("Valor del multiplicador:"));

let resultado = multiplicar(multipli01, multipli02);
alert('El resultado es: ' + resultado);