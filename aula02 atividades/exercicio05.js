const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Distância que deseja percorrer (em KM) : ", (distanciaD) => {
  distanciaD = parseFloat(distanciaD);
  let precoP;
  if (distanciaD <= 200) {
    precoP = distanciaD * 0.5;
  } else {
    precoP = distanciaD * 0.45;
  }

  console.log(`O valor da passagem será ${precoP}R$.`);

  rl.close();
});
