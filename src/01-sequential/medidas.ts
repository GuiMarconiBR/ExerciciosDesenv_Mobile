//problema medidas
/*Fazer um programa para ler três medidas A, B e C. Em seguida, calcular e mostrar (imprimir os dados 
com quatro casas decimais):  
a) a área do quadrado que tem lado A  
b) a área do triângulo retângulo que base A e altura B  
c) a área do trapézio que tem bases A e B, e altura C*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const a = Number(prompt('Digite a medida A: '))
const b = Number(prompt('Digite a medida B: '))
const c = Number(prompt('Digite a medida C: '))
const quadrado = a * a
const triangulo = (a * b) / 2
const trapezio = (a + b) * c / 2
console.log(`Área do quadrado: ${quadrado.toFixed(4)} `)
console.log(`Área do triangulo: ${triangulo.toFixed(4)}`)
console.log(`Área do trapezio: ${trapezio.toFixed(4)}`)