const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insira a velocidade do carro: ", (velocidade) => {
  if (parseInt(velocidade) <= 80) {
    console.log(`Você está dentro do limite de velocidade`);
  } else {
    let multa = (parseInt(velocidade) - 80) * 5;
    console.log(
      `Você está acima do limite de velocidade você terá uma multa de R$${multa}`
    );
  }

  rl.close();
});
