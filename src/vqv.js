/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

// Criamos uma função que verifica se nome e idade são undefined e se não forem retorna a template literal. Resolvi não identar pois toda vez que identava adicionava espaço na minha template e não passava nos testes (sei que poderia usar o \n porém pra isso ia ter que usar concatenação né, ou não? Vou testar. Tentei aqui e o Lint saiu gritando kkk pelo visto o jeito é não identar).
const vqv = (nome, idade) => {
if (nome !== undefined && idade !== undefined) {
return `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
}
};
module.exports = vqv;
