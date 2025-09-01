//Problema "combustivel" (adaptado de URI 1134)  
/*Um posto de combustíveis deseja determinar qual de seus produtos tem a preferência de seus clientes. 
Escreva  um  algoritmo  para  ler  o  tipo  de  combustível  abastecido  (codificado  da  seguinte  forma: 
1.Álcool 2.Gasolina 3.Diesel 4.Fim). Caso o usuário informe um código inválido (fora da faixa de 1 a 
4) deve ser solicitado um novo código (até que seja válido). O programa será encerrado quando o 
código informado for o número 4, devendo então mostrar a mensagem "MUITO OBRIGADO", bem 
como as quantidades de cada combustível.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

var alcool = Number(0);
var gasolina = Number(0);
var diesel = Number(0);

var cont = Number(0);

while (cont != 4) {
    cont = Number(prompt('Informe um codigo (1, 2, 3) ou 4 para parar: '));
    if (cont == 1) {
        alcool++
    } else if (cont == 2) {
        gasolina++
    } else if (cont == 3) {
        diesel++
    } else if (cont == 4) {
        console.log('MUITO OBRIGADO!')
    };
};

console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);

