// Câmeras digitais

const prompt = require('prompt-sync')();
var array_cameras = [];

do {
  console.log("Sistema de Cadastro de Câmeras Digitais");
  console.log("1 - Inserir câmera digital");
  console.log("2 - Excluir câmera digital");
  console.log("3 - Listar câmeras digitais");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Câmera Digital...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let marca = prompt("Digite a marca da Câmera Digital: ");
    let modelo = prompt("Digite o modelo da Câmera Digital: ");
    let megapixel = prompt("Digite a resolução (megapixels): ");
    let zoom = prompt("Digite o tipo de zoom (óptico ou digital): ");

    // Neste trecho estamos declarando um objeto
    const camera = {
      codigo: codigo,
      marca: marca,
      modelo: modelo,
      megapixel: megapixel,
      zoom: zoom
    }
    // Chamar a função inserir
    inserir_camera(camera);
  } else if (opcao == 2) {
    console.log("\n\nExcluindo Câmera Digital...\n");
    let codigo = prompt("Digite o código da Câmera Digital: ");
    // Chamar a função excluir
    excluir_camera(codigo);
  } else if (opcao == 3) {
    console.log("\n\nListando Câmeras Digitais...\n");
    // Chamar a função listar
    listar_camera();
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_camera(camera) {
  // Implementar corpo da função
  array_cameras.push(camera);
}

function excluir_camera(codigo) {
  // Implementar corpo da função
  for (var i = 0; i < array_cameras.length; i++) {
    if (codigo == array_cameras[i].codigo) {
      array_cameras.splice(i, 1);
    }
  }
}

function listar_camera() {
  for (var i = 0; i < array_cameras.length; i++) {
    for (var j = 0; j < array_cameras.length; j++) {
      if (i == j) {
        console.log(array_cameras[i].codigo + ": " + array_cameras[i].marca + " - " + array_cameras[i].modelo + " - " + array_cameras[i].megapixel + " megapixel(s)" + " - zoom " + array_cameras[i].zoom);
      }
    }
    // Implementar corpo da função
  }
}
