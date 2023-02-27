const prompt = require('prompt-sync')();

alturas = []

// Implementar a entrada de dados
for (i = 0; i <= 9; i++) {
  alturas.push(parseFloat(prompt("Digite a altura: ")));
}

// Implementar o processamento de dados
for (var i = 0; i < alturas.length; i++) {
  var soma = 0;
  // Fazer for dentro de for
  for (var j = 0; j < alturas.length; j++) {
    if (alturas[i] > alturas[j]) {
      soma = soma + 1;
    }
  }
  // Implementar a saída de dados
  console.log("Aluno " + (i + 1) + ": maior que " + soma + " aluno(s)");
}