class Pessoa {
nome: string;
idade: number;
constructor(nome: string, idade: number) {
this.nome = "Estela";
this.idade = 20;
}
apresentar(): void {
console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
}
}
// Instanciando um objeto da classe Pessoa
let pessoa1 = new Pessoa("Marcelli", 17);
pessoa1.apresentar();
let pessoa2 = new Pessoa("Livia", 18);
pessoa2.apresentar();