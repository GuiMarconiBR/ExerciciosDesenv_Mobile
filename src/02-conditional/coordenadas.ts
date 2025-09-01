//Problema "coordenadas" (adaptado de URI 1041)  
/*Leia os valores das coordenadas X e Y de um ponto no plano cartesiano. A 
seguir, determine qual o quadrante ao qual pertence o ponto (Q1, Q2, Q3 
ou Q4). Se o ponto estiver na origem, escreva a mensagem “Origem”. Se 
o  ponto  estiver  sobre  um  dos  eixos  escreva  “Eixo  X”  ou  “Eixo  Y”, 
conforme for a situação.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const x = Number(prompt('X: '));
const y = Number(prompt('Y: '));

if (x > 0 && y > 0) {
    console.log('Quadrante Q1');
} else if (x < 0 && y > 0) {
    console.log('Quadrante Q2');
} else if (x < 0 && y < 0) {
    console.log(' Quadrante Q3');
} else if (x == 0 && y == 0) {
    console.log('Origem');
} else if(x > 0 || x < 0 && y == 0) {
    console.log('Eixo X')
} else if (x == 0 && y > 0 || y < 0) {
    console.log('Eixo Y')
}else {
    console.log('Quadrante Q4');
};