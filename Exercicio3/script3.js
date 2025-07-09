import ler = require("readline-sync");

// Entrada de dados
let salarioBruto = ler.questionFloat("Digite o valor do salário bruto: ");
let adicionalNoturno = ler.questionFloat("Digite o valor do adicional noturno: ");
let horaExtras = ler.questionFloat("Digite o valor da hora extra: ");
let descontos = ler.questionFloat("Digite o valor dos descontos: ");

// Soma de todos os valores
let salarioLiquido = salarioBruto + adicionalNoturno + (horaExtras * 5) - descontos;
// Resultado final
console.log("Salário Líquido: " + salarioLiquido);
