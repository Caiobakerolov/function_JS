// factory function

function criaPessoa(nome, sobrenome, altura , peso) {
  return {
    nome, 
    sobrenome,
    fala(assunto) {
      return `${this.nome} esta ${assunto}.`;
    },   
    altura: altura,
    peso: peso,
    imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
console.log(p1.imc());
const p2 = criaPessoa('Caio', 'Bakerolov', 1.84, 94);
console.log(p2.fala('falando sobre Js'));
console.log(p2.imc());