//Problema "soma_impares" (adaptado de URI 1071)  
/*Leia 2 valores inteiros X e Y (em qualquer ordem). A seguir, calcule e mostre a soma dos números 
impares entre eles.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

var x = Number(prompt('X: '))
var y = Number(prompt('Y: '))
var soma = Number(0);
if (x > y) {
   var aux = x
   x = y
   y = aux
};


for (let cont = x + 1; cont < y; cont++) {
    if (cont % 2 !== 0) {
        soma += cont;
    };
};
console.log(`Soma dos Ímpares = ${soma}`);