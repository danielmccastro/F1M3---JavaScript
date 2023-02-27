const prompt = require('prompt-sync')();

var intIdade = parseInt(prompt("Digite sua idade: "));
var intTempo = parseInt(prompt("Digite seu tempo de serviço: "));
var decSalario = parseFloat(prompt("Digite seu salário: "));

// Implementar o comando de decisão para verificar se o cidadão pode, ou não, se aposentar
if ((intIdade >= 65) || (intTempo >= 30) || (intIdade >= 60 && intTempo >= 25)) {
  console.log("Você pode se aposentar!");
  // Implementar os comandos de decisão aninhados para calcular o salário de aposentadoria (80% ou 60%)
  var decAposentadoria = decSalario * 0.8;
  if (intTempo <= 20) {
    var decAposentadoria = decSalario * 0.6;
  }
  // Implementar os comandos de decisão aninhados para garantir o salário de aposentadoria dentro dos limites inferior (R$ 1212,00) e superior (R$ 7087,22)
  if (decAposentadoria < 1212.00) {
    var decAposentadoria = 1212.00;
  }
  else if (decAposentadoria > 7087.22) {
    var decAposentadoria = 7087.22;
  }
  console.log("Seu salário de aposentado será: R$", decAposentadoria);
}
else {
  console.log("Você não pode se aposentar!");
}