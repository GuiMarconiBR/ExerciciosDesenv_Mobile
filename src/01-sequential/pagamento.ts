//Problema pagamento
/*Fazer um programa para ler o nome de um(a) funcionário(a), o valor que ele(a) recebe por hora, e a 
quantidade de horas trabalhadas por ele(a). Ao final, mostrar o valor do pagamento do funcionário com 
uma mensagem explicativa, conforme exemplo.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const nome = String(prompt('Funcionário: '))
const vlr = Number(prompt('Valor por hora: '))
const hrs = Number(prompt('Horas trabalhadas: '))
console.clear();
const pagamento = vlr * hrs
console.log(`O pagamento para ${nome} deve ser R$${pagamento.toFixed(2)}.`)