//Problema consumo
/*Fazer um programa para ler a distância total (em km) percorrida por um carro, bem como o total de 
combustível gasto por este carro ao percorrer tal distância. Seu programa deve mostrar o consumo 
médio do carro, com três casas decimais*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const km = Number(prompt('Quantos Kilometros percorridos: '));
const litros = Number(prompt('Quantos litros foram gastos nessa viagem: '));
const consumo = km / litros;
console.clear();
console.log('Consumo médio: ' + consumo.toFixed(3))