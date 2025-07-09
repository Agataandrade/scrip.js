import ler = require("readline-sync");

// Nota do aluno
let nota1 = ler.questionFloat("Digite a nota 1: ");
let nota2 = ler.questionFloat("Digite a nota 2: ");
let nota3 = ler.questionFloat("Digite a nota 3: ");
let nota4 = ler.questionFloat("Digite a nota 4: ");
// Soma de todas as notas
let mediaFinal = ((nota1 + nota2 + nota3 + nota4) /4);
//Resultado final
console.log(" A medía final é : " + mediaFinal);
