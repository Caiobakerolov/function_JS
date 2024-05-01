const nome = 'Luiz';

function falaNome() {  
  console.log(nome);
}

function usarFalaNome() {
  const nome = 'Caio';
  falaNome();  
}
usarFalaNome();