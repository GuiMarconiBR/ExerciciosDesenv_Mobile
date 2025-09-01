//Problema "experiencias" (adaptado de URI 1094)  
/*Maria acabou de iniciar seu curso de graduação na faculdade de medicina e precisa de sua ajuda para 
organizar os experimentos de um laboratório o qual ela é responsável. Ela quer saber no final do ano, 
quantas cobaias foram utilizadas no laboratório e o percentual de cada tipo de cobaia utilizada. Este 
laboratório  em  especial  utiliza  três  tipos  de  cobaias:  sapos,  ratos  e  coelhos.  Para  obter  estas informações, ela sabe exatamente o número de experimentos que foram realizados, o tipo de cobaia 
utilizada e a quantidade de cobaias utilizadas em cada experimento. Faça um programa que leia um 
valor inteiro N que indica os vários casos de teste que vem a seguir. Cada caso de teste contém um 
inteiro que representa a quantidade de cobaias utilizadas e uma letra ('C', 'R' ou 'S'), indicando o tipo 
de cobaia (R:Rato S:Sapo C:Coelho). Apresente o total de cobaias utilizadas, o total de cada tipo de 
cobaia utilizada e o percentual de cada uma em relação ao total de cobaias utilizadas, sendo que o 
percentual deve ser apresentado com dois dígitos após o ponto.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const qtd = Number(prompt('Quantos casos de teste serao digitados? '));
var qtdCobaia
var tipo = String('')
var totCobaias = Number(0)
var s = Number(0)
var r = Number(0)
var c = Number(0)
for (let i = 1; i <= qtd; i++) {

    qtdCobaia = Number(prompt('Quantidade de cobaias: '));

    do {
        tipo = String(prompt('Tipo de cobaia: ')).toUpperCase();
    } while (String(tipo) != 'C' && String(tipo) != 'R' && String(tipo) != 'S');

    if (tipo == 'S') {
        s += qtdCobaia;
    } else if (tipo == 'R') {
        r += qtdCobaia;
    } else {
        c += qtdCobaia;
    };

    totCobaias += qtdCobaia;

};

const percS = (s / totCobaias) * 100;
const percR = (r / totCobaias) * 100;
const percC = (c / totCobaias) * 100;
console.clear();
console.log(`Total de cobaias: ${totCobaias}`)
console.log(`Total de coelhos: ${c}`);
console.log(`Total de ratos: ${r}`);
console.log(`Total de sapos: ${s}`);
console.log(`Percentual de coelhos:${percC.toFixed(2)}`);
console.log(`Percentual de ratos: ${percR.toFixed(2)}`);
console.log(`Percentual de sapos: ${percS.toFixed(2)}`);

