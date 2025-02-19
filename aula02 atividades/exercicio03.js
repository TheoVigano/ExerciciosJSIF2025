const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insira a data dce nascimento: ", (nascimento) => {
  let idade = 2025 - parseInt(nascimento);
  if (idade < 18) {
    let falta = 18 - parseInt(idade);
    console.log(`Falta ${falta} anos para seu alistamento`);
  } else {
    let passou = parseInt(idade) - 18;
    console.log(`Já passou ${passou} anos do alistamento`);
  }

  rl.close();
});
