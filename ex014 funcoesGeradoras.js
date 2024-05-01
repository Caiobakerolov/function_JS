function* geradora1() {
  yield 'valor 1';
  yield 'valor 2';
  yield 'valor 3';
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());

console.log('-------------------');

function* geradora2() {
  yield 'valor 1';
  yield 'valor 2';
  yield 'valor 3';
}

const g2 = geradora2();
for (let valor of g2) {
  console.log(valor);
}

console.log('-------------------');

function* geradora4() {
  let i = 0;

  while(true) {
    yield i;
    i++;
  }
}

const g3 = geradora4();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);

console.log('-------------------');

function* geradora5() {
  yield 0;
  yield 1;
  yield 2; 
}

function* geradora6() {
  yield* geradora5();
  yield 3 ;
  yield 4;
  yield 5;
}

const g4 = geradora6();
for(let valor of g4) {
  console.log(valor);
}

console.log('-------------------');

function* geradora9() {
  yield function() {
    console.log('Vim do y1');
  }

  // se colocar o return aqui, a funcao abaixo fica nula, por isso foi alterada para yield
  yield function () {
    console.log('Vim do return')
  }

  yield function() {
    console.log('Vim do y2');
  }
}

const g6 = geradora9();
const func1 = g6.next().value;
const func2 = g6.next().value;
const func3 = g6.next().value;

func1();
func2();
func3();
