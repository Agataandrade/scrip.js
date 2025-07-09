import ler = require("readline-sync");

// Entrada de dados
let salario = ler.questionInt("Digite o valor do salário: ");
let abono = ler.questionInt("Digite o valor do abono: ");

// Cálculo do novo salário
let novoSalario = salario + abono;

// Resultado final
console.log("O novo salário é: R$ " + novoSalario.toFixed(2));
