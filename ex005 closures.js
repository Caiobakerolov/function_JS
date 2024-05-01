// global

// o closures tem habilidade em acessar o escopo lexico que no caso e o global e o dentro da funcao

function retornaFuncao(nome) {  
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao('Luiz');
const funcao1 = retornaFuncao('Caio');
console.log(funcao(), funcao1());