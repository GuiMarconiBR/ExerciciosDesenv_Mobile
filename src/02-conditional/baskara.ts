//Problema Baskara
/*Fazer um programa para ler os três coeficientes de uma equação do segundo grau. Usando a fórmula 
de Baskara, calcular e mostrar os valores das raízes x1 e x2 da equação com quatro casas decimais, 
conforme exemplo. Se a equação não possuir raízes reais, mostrar uma mensagem. */


import promptSync from 'prompt-sync';
const prompt = promptSync();

//Coletando os valores de equação
const a = Number(prompt('Informe o valor de A: '));
const b = Number(prompt('Informe o valor de b: '));
const c = Number(prompt('Informe o valor de C: '));

/*Calculando o delta, aqui verificamos se a equação possui raízes reais. Caso não, informamos e o programa termina aqui.*/
const delta = (b**2) - (4 * a * c);
console.log(`DELTA: ${delta}`);

/*Se delta conter uma raíz real(delta >  0 || delta == 0) o programa continua*/
if(delta < 0) {
    console.clear();
    console.log('Essa equação não possui raízes reais!');
}else {
    console.clear();
    //Calculando as raízes x1 e x2
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    //Mostrando os valores das raízes x1 e x2
    console.log(`X1: ${x1.toFixed(4)}`);
    console.log(`X2: ${x2.toFixed(4)}`);
};

