var somaPares = 0;
var somaImpares = 0;

for (var i = 1; i <= 20; i++) {
  var decMultiplos = i * i;
  console.log(decMultiplos);

  if ((i % 2) == 0) {
  somaPares += decMultiplos;
  }

  else {
  somaImpares += decMultiplos;
  }
}

console.log("A soma dos quadrados pares: ", somaPares);
console.log("A soma dos quadrados ímpares: ", somaImpares);