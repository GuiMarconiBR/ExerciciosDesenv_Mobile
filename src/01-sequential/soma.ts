//Problema soma
/*Fazer um programa para ler dois valores inteiros X e Y, e depois mostrar na tela o valor da soma destes 
números.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();
const limpar = console.clear;

console.log('Vamos somar dois números')
console.log('------------------------------------------')
const x = Number(prompt('Informe o primeiro número: '))
console.log('------------------------------------------')
limpar();
console.log('------------------------------------------')
const y = Number(prompt('Informe o segundo número: '))
console.log('------------------------------------------')
limpar();
console.log(`A soma entre ${x} e ${y} é ${x + y}`)