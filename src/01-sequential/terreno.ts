//Problema terreno
/*Fazer um programa para ler as medidas da largura e comprimento de um terreno retangular com uma 
casa decimal, bem como o valor do metro quadrado do terreno com duas casas decimais. Em seguida, 
o programa deve mostrar o valor da área do terreno, bem como o valor do preço do terreno, ambos com 
duas casas decimais, conforme exemplo.*/

//Importação do prompt via método promptSync
import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log('Vamos calcular ');
const  largura = Number(prompt('Insira a largura do terreno '));
const comprimento = Number(prompt('Insira o comprimento do terreno'));
const area = largura * comprimento
const mq = Number(prompt('Informe o valor do metro quadrado'))
const preco = area * mq

console.log(`A área do terreno é ${area.toFixed(2)}m\u00B2`) 
console.log(`O preço do terreno é ${preco.toFixed(2)}`)