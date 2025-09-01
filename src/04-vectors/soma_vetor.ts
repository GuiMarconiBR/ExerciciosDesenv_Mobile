//Problema "soma_vetor"   
/*Faça um programa que leia N números reais e armazene-os em um vetor. Em seguida:  
- Imprimir todos os elementos do vetor  
- Mostrar na tela a soma e a média dos elementos do vetor.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const qtd = Number(prompt('Quantos numeros voce vai digitar?'));

var vet:number[] = [];

for (let i = 0; i < qtd; i++) {
    let n = Number(prompt('Digite um numero: '));
    vet.push(n);
};

let soma = Number(0);

for (let i of vet) {
    soma +=  i; 
};

let media = soma / qtd;


console.log(`VALORES: ${vet}`);
console.log(`SOMA= ${soma.toFixed(2)}`);
console.log(`SOMA= ${media.toFixed(2)}`);

