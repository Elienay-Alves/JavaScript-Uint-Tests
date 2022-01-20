/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/
// Criamos uma função abaixo uma função que recebe o nome do estudante e retorana um objeto contendo na primeira chave o nome passado como parâmetro e na segunda o feedback que uma função que retorna a frase 'Eita pessoa boa!'
const createStudent = (yourName) => ({
    name: yourName,
    feedback: () => 'Eita pessoa boa!',
  });
console.log(createStudent('João'));
module.exports = createStudent;
