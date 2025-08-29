//Problema "operadora"  
/*Uma operadora de telefonia cobra R$ 50.00 por um plano básico que dá direito a 100 minutos de 
telefone. Cada minuto que exceder a franquia de 100 minutos custa R$ 2.00. Fazer um programa para 
ler a quantidade de minutos que uma pessoa consumiu, daí mostrar o valor a ser pago.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const minPlano = Number(100) // Tempo em minutos - Minutos padrão do plano básico
const plano = Number(50.00) //dá direito aos 100 minutos do plano básico
const minCliente = Number(prompt('Minutos utilizados: '));


if(minCliente < minPlano ) {
    console.log(`Valor a pagar: ${plano}`);
} else if(minCliente > minPlano) {
    let contaCliente = Math.abs((minCliente - minPlano) * 2) + plano;
    console.log(`Valor a pagar:${contaCliente}`);
}