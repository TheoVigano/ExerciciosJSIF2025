const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o primeiro segmento de reta : ", (seg1) =>
  rl.question("Digite o segundo segmento de reta : ", (seg2) =>
    rl.question("Digite o terceiro segmento de reta : ", (seg3) => {
      let s1 = parseFloat(seg1);
      let s2 = parseFloat(seg2);
      let s3 = parseFloat(seg3);
      if (s1 < s2 + s3) {
        console.log(`É possível formar um triângulo!`);
      } else {
        console.log(`Não é possível formar um triângulo!`);
      }

      rl.close();
    })
  )
);
