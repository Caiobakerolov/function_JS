// return
// retorna um valor
// termina a funcao

function soma(a, b) {
  return a + b;
}
console.log(soma(5,8));


console.log('------------------');


function criaPessoa(nome, sobrenome, idade) {
  return {nome, sobrenome, idade};
}

const p1 = criaPessoa('Luiz', 'Otavio', 30);
const p2 = {
  nome: 'Joao',
  sobrenome: 'Oliveira'
};

console.log(p1);
console.log(p2);


console.log('------------------');


function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto;
  }
  return falaResto;
}

const fala = falaFrase('ola');
const resto = fala('mundo!')
console.log(resto);


console.log('------------------');


function duplica(n) {
  return n * 2;
}

function triplica(n) {
  return n * 3;
}

function quadriplica(n) {
  return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));


console.log('------------------');


function criaMultiplicador(multiplicador) {
  // multiplicador
  return function (n) {
    return n * multiplicador;
  }  
}

const duplica1 = criaMultiplicador(2);
const triplica1 = criaMultiplicador(3);
const quadriplica1 = criaMultiplicador(4);
console.log(duplica1(10));
console.log(triplica1(10));
console.log(quadriplica1(10));


console.log('------------------');