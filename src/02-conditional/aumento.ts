//Problema  "aumento"  (adaptado  de  URI  1048)   
/*Uma empresa vai conceder um aumento percentual de  salário 
aos seus funcionários dependendo de quanto cada pessoa 
ganha, conforme tabela ao lado. Fazer um programa para 
ler o salário de uma pessoa, daí mostrar qual o novo salário 
desta pessoa depois do aumento, quanto foi o aumento e 
qual foi a porcentagem de aumento.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const sal = Number(prompt('Digite o salário da pessoa: '));

if (sal <= 1000) {
    const aumento = (sal * 0.20) + sal;
    const vAumento = sal * 0.20;
    console.log(`Aumneto ${vAumento}`)
    console.log(`Novo salário: ${aumento}`);
    console.log(`Porcentagem: 20%`);
} else if(sal >1000 && sal <=3000 ) {
    const aumento = (sal * 0.15) + sal;
    const vAumento = sal * 0.15;
    console.log(`Aumneto ${vAumento}`)
    console.log(`Novo salário: ${aumento}`);
    console.log(`Porcentagem: 15%`);
} else if(sal > 3000 && sal <= 8000) {
    const aumento = (sal * 0.10) + sal;
    const vAumento = sal * 0.10;
    console.log(`Aumneto ${vAumento}`)
    console.log(`Novo salário: ${aumento}`);
    console.log(`Porcentagem: 10%`);
} else {
    const aumento = (sal * 0.05) + sal;
    const vAumento = sal * 0.05;
    console.log(`Aumneto ${vAumento}`)
    console.log(`Novo salário: ${aumento}`);
    console.log(`Porcentagem: 5%`);
};