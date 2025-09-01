//Problema "pares_consecutivos" (adaptado de URI 1159)  
/*O programa deve ler um valor inteiro X indefinidas vezes. (O programa irá parar quando o valor de X 
for igual a 0). Para cada X lido, imprima a soma dos 5 pares consecutivos a partir de X, inclusive o X 
, se for par. Se o valor de entrada for 4, por exemplo, a saída deve ser 40, que é o resultado da operação: 
4+6+8+10+12, enquanto que se o valor de entrada for 11, por exempo, a saída deve ser 80, que é a 
soma de 12+14+16+18+20.*/

import PromptSync from "prompt-sync";
const prompt = PromptSync();

var cont = Number(prompt('Digite um numero inteiro: '));
var soma = Number(0);
var times = Number(0);

while (cont != 0 && times < 5) {
    if (cont % 2 == 0) { 
        soma = soma + cont;
    } else{
        cont = cont +1;
        soma = soma + cont;
    };
    times++;
    cont = cont + 2;
};

if(cont == 0) {
    console.log(`Programa encerrado, o valor informado foi ${0}`)
} else {
console.log(`SOMA = ${soma}`)
};
