// constructor function


function criaPessoa(nome, sobrenome, altura , peso) {
  return {
    nome, 
    sobrenome,

    //getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    fala(assunto = 'falando sobre NADA') {
      return `${this.nome} esta ${assunto}.`;
    },   

    //setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
      // console.log(valor[0]);
      console.log(valor);
    },

    altura: altura,
    peso: peso,
    //getter
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
const p2 = criaPessoa('Joao', 'carlos', 1.8, 100);
const p3 = criaPessoa('maria', 'francesca', 1.6, 70);
console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
