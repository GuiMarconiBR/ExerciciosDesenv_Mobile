//Problema "quadrante" (adaptado de URI 1115)  
/*Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no 
sistema cartesiano. Para cada ponto escrever o quadrante a que ele pertence (Q1, Q2, Q3 ou Q4). O 
algoritmo será encerrado quando pelo menos uma de duas coordenadas for NULA (nesta situação sem 
escrever mensagem alguma).*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

var x :String = '0';
var y :String = '0';

while (String(x) != "" && String(y) != "") {
    x = prompt('X:');
    y = prompt('Y: ');
    
    if (x == "" || y == "") {
        console.log('Programa encerrado!');
    } else if (Number(x) > 0 && Number(y) > 0) {
        console.log('Quadrante: Q1')
    } else if (Number(x) < 0 && Number(y) > 0) {
        console.log('Quadrante: Q2')
    } else if (Number(x) < 0 && Number(y) < 0) {
        console.log('Quadrante: Q3')
    } else {
        console.log('Quadrante: Q4')
    };
};