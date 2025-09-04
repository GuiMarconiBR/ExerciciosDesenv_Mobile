//Problema "alturas"   
/*Fazer um programa para ler nome, idade e altura de N pessoas, conforme exemplo. Depois, mostrar na 
tela a altura média das pessoas, e mostrar também a porcentagem de pessoas com menos de 16 anos, 
bem como os nomes dessas pessoas caso houver.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

interface Pessoa {
    nome: string;
    idade: number;
    altura: number;
};

const pessoas: Pessoa[] = [];

const qtd = Number(prompt('Quantas pessoas serão digitadas? '));

for (let i = 0; i < qtd; i++) {
    console.log(`Informações da ${i + 1}° Pessoa:\n `);

    const nome = String(prompt('Nome: '));
    const idade = Number(prompt('Idade: '));
    const altura = Number(prompt('Altura: '));

    pessoas.push({nome, idade, altura});
};

const somaAlturas = pessoas.reduce((soma, Pessoa) => soma + Pessoa.altura, 0);
const alturaMedia = somaAlturas / qtd;
console.log(`Altura Média: ${alturaMedia.toFixed(2)}`);


let menor = Number(0);

for (let i of pessoas) {
    if (i.idade < 16) {
        menor = menor + 1;
        console.log(`Menor de 16: ${i.nome}`)
    };
};
const porc = (menor / qtd) * 100;
console.log(`Porcentagem dos menores de 16 anos de idade: ${porc.toFixed(2)}`);


