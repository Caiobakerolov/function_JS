// IIFE -> immediately invoked function expression(expressão de função invocada imediatamente)
(function(idade, peso, altura) {
  
  const sobrenome = 'Bakerolov';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Caio'));
  }

  falaNome();
  console.log(idade, peso, altura)

})(31,94,1.84);
