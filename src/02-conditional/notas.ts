//Problema notas
/*Fazer um programa para ler as duas notas que um aluno obteve no primeiro e segundo semestres de 
uma disciplina anual. Em seguida, mostrar a nota final que o aluno obteve (com uma casa decimal) no 
ano juntamente com um texto explicativo. Caso a nota final do aluno seja inferior a 60.00, mostrar a 
mensagem "REPROVADO", conforme exemplos.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const n1 = Number(prompt('nota 1: '));
const n2 = Number(prompt('nota 2: '));
const total = n1 + n2;
console.clear();
console.log('NOTA FINAL: ' + total)
if(total < 60){
    console.log('REPROVADO!')
}