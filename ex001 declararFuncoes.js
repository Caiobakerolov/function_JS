// declaracao de funcao
// first-class objects (objetos de primeira classe)

falaOi();
function falaOi() {
  console.log('Oie');
}

console.log('-------------');

//function expression
const souUmDado = function() {
  console.log('Sou um dado.');
} 
souUmDado();

console.log('-------------');

// arrow function
const funcaoArrow = () => {
  console.log('Sou uma arrow function');
}
funcaoArrow();

console.log('-------------');

// dentro de um objeto

const obj = {
  falar() {
    console.log('estou falando...');
  }
}
obj.falar();