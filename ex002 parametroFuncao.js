function funcao() {
  console.log(arguments[10]);
}
funcao('Valor', 1,2,3,4,5,6,7,8,9);


console.log('----------------------');

// a funcao definida com a palavra function tem uma variavel especial que chama argumentos que sustenta todos os argumentos enviados

function funcao1() {
  let total = 0;
  for(let argumento of arguments) {
    total += argumento;
  }
  console.log(total);  
}
funcao1(1,2,3,4,5,6,7,8,9);


console.log('----------------------');


function funcao2(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}
funcao2(1,2,3);


console.log('----------------------');


function funcao3(a, b) {
  b = b || 2;  // nao se usar mais desta maneira
  console.log(a + b);
}
funcao3(2);


console.log('----------------------');


function funcao4(a, b = 2, c = 5) {  
  console.log(a + b + c);
}
funcao4(2, 10, 3); 
funcao4(2, undefined, 3);
funcao4(2, 'dsad', 3);// se eu passar uma string aqui dentro ele soma nao concatena
funcao4(2, '', 3);// se eu passar uma string aqui dentro ele soma nao concatena


console.log('----------------------');


function funcao5 ({nome, sobrenome, idade}) {
  console.log(nome, sobrenome, idade);
}
funcao5({nome: 'Caio', sobrenome: 'Bakerolov', idade: 20});


console.log('----------------------');


function funcao6({nome1, sobrenome1, idade1}) {
  console.log(nome1, sobrenome1, idade1);
}
let obj = {nome1: 'Caio', sobrenome1: 'Bakerolov', idade1: 20};
funcao6(obj);


console.log('----------------------');


function funcao7([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}
funcao7(['Caio', 'Bakerolov', 30]);


console.log('----------------------');


function conta(operador, acumulador, ...numeros) {
  for(let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '*') acumulador *= numero;
    if (operador === '/') acumulador /= numero;
  }
  console.log(acumulador);
}
conta('+', 1, 20, 30, 40, 50);


console.log('----------------------');


const conta1 = function(operador1, acumulador1, ...numeros1) {
  for(let numero1 of numeros1) {
    if (operador1 === '+') acumulador1 += numero1;
    if (operador1 === '-') acumulador1 -= numero1;
    if (operador1 === '*') acumulador1 *= numero1;
    if (operador1 === '/') acumulador1 /= numero1;
  }
  console.log(acumulador1);
};
conta1('+', 1, 20, 30, 40, 50);


console.log('----------------------');


const conta2 = function(operador2, acumulador2, ...numeros2) {
  console.log(operador2, acumulador2,numeros2);
};

conta2('+', 1, 20, 30, 40, 50);


console.log('----------------------');


const conta3 = (operador3, acumulador3, ...numeros3) => { console.log(operador3, acumulador3,numeros3) };
conta3('+', 1, 20, 30, 40, 50);


console.log('----------------------');


const conta4 = (...args) => { console.log(args) };
conta4('+', 1, 20, 30, 40, 50);
