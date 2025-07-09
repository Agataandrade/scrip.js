import ler = require("readline-sync");

// Primeiro exemplo
console.log("Primeiro exemplo:");
let numero1 = ler.questionFloat("Digite o valor de numero1: ");
let numero2 = ler.questionFloat("Digite o valor de numero2: ");
let numero3 = ler.questionFloat("Digite o valor de numero3: ");
let numero4 = ler.questionFloat("Digite o valor de numero4: ");

//Soma dos valores
let calculo = (numero1 * numero2) - (numero3 * numero4);
// Resultado final com a diferença entre os numeros 1,2 para os numeros 3,4
console.log("Diferença: " + calculo);

//Valores de cada numero do exemplo 1
let n1 = 5.0;
let n2 = 6.0;
let n3 = -7.0;
let n4 = 8.0;

//Soma dos valores
calculo = (n1 * n2) - (n3 * n4);
// Resultado final com a diferença entre os numeros 1,2 para os numeros 3,4
console.log("Diferença: " + calculo);
