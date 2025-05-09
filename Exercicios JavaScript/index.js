//importação de biblioteca
const prompt = require('prompt-sync')();

//declaração de variaveis
let soma,a,b;

console.log("Bem vindo a calculadora!!!\n");

a = prompt("Digite o primeiro valor:");
b = prompt("Digite o segundo valor:");

soma = parseInt(a)+parseInt(b);

console.log("O valor da soma de ", a, "e", b, "é de", soma, ".")
