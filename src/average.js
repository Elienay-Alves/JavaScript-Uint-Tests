/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

// Partiu codar
// Essa função recebe um array e verifica seu tamanho com o .length e retorna undefined caso ele esteja vazio, depois verfica se o tipo de cada posição do array é number e caso não seja retorna undefined. Por ultimo, caso o parâmetro seja um array de números a função incrementa em sum o valor contido em value divido pelo tamanho do array e retorna o valor inteiro mais próximo aproximado de sum utilizando math.round():

const average = (array) => {
  let sum = 0;

  if (array.length === 0) {
    return undefined;
  }
  for (let value of array) {
    if (typeof value !== 'number') {
      return undefined;
    }
    sum += value / array.length;
  }
  return Math.round(sum);
};

module.exports = average;
