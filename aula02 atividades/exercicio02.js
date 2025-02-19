const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insira o ano: ", (ano) => {
  if (parseInt(ano) / 4) {
    console.log(`Esse ano é bissexto`);
  } else {
    console.log(`Esse ano não é bissexto`);
  }

  rl.close();
});
