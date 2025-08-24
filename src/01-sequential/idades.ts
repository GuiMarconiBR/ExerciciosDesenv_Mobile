//Problema idades
/*Fazer um programa para ler o nome e idade de duas pessoas. Ao final mostrar uma mensagem com os 
nomes e a idade média entre essas pessoas, com uma casa decimal, conforme exemplo.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();
const limpar = console.clear;

limpar();
console.log('----------------------------------------------------------------')
console.log('Dados da primeira pessoa!');
const nome1 = String(prompt('Informe o nome da primeira pessoa: '));
const idade1 = Number(prompt('Informe a idade da primeira pessoa: '));
limpar();
console.log('----------------------------------------------------------------')
console.log('Dados da segunda pessoa!');
const nome2 = String(prompt('Informme o  nome da segunda pessoa: '));
const idade2 = Number(prompt('Informe a idade da segunda pessoa: '));
console.log('-----------------------------------------------------------------')
limpar();
const media = (idade1 + idade2) / 2
console.log(`A idade média entre ${nome1} e ${nome2} é ${media.toFixed(1)} `)