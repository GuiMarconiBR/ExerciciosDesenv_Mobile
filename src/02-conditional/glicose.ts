//Problema "glicose"  
/*Fazer um programa para ler a quantidade de glicose  no 
sangue  de  uma  pessoa  e  depois  mostrar  na  tela  a  
classificação  desta  glicose  de  acordo  com  a  tabela  de  
referência ao lado.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const qtdGlicose = Number(prompt('Quantidade de glicose no sangue: '));

if(qtdGlicose <= 100) {
    console.log('Classificação: Normal')
} else if(qtdGlicose > 100 && qtdGlicose <= 140) {
    console.log('Classificação: Elevada')
} else{
    console.log('Classificação: Diabetes')
};