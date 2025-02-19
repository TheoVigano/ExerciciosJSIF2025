const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite seu nome: ", (nome) =>
  rl.question("Insira seu sexo: ", (sexo) =>
    rl.question("Insira o valor da compra: ", (valor) => {
      if (sexo == "feminino") {
        let descFem = parseFloat(valor) * 0.87;
        console.log(
          `Parabéns pelo dia da mulher sua compra receberá um desconto de R$${valor} para R$${descFem}`
        );
      } else if (sexo == "masculino") {
        let descMas = parseFloat(valor) * 0.95;
        console.log(
          `Obrigado pela sua compra, ela recebrá um desconto de R$${valor} para R$${descMas}`
        );
      } else {
        console.log(`Dados inseridos incorretamente`);
      }
      rl.close();
    })
  )
);
