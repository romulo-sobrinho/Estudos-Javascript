// todos os números até certo número, ex: 3! = 3x2x1, resolva: 1.
// Crie um array contendo todos os valores de fatoriais de 0 até 9; 2.
// Considerando o valor de 500 mil como inicial, retorne o valor final após
// subtrair o valor inicial por cada valor dentro do array.

// const main = (params) => {
// }

const main = (params) => {
  const numFatoriais = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
  const resultado = [];
  for(let i=0; i<numFatoriais.length; i++) {
      resultado.push(500000 - numFatoriais[i]);
      console.log(`Resultado ${resultado}`);
      console.log(`Resultado ${i} ${resultado[i]}`);
  }
  const resultadoFinal = resultado.reduce((a, b) => {
    console.log(`Valor a ${a}, valor b ${b}`);
    return a - b;
  });
  console.log(resultadoFinal);
}
main();
