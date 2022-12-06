"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    sobrenome;
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
const pessoa = new Pessoa('Jhow', 'Rodrigues');
console.log(pessoa.nomeCompleto());
// ==> Exemplo 02 - Classes (com constructor)
class Estudante_1 {
    codigoEstudante;
    nomeEstudante;
    // Definir o Construtor
    constructor(codigoEstudante, nomeEstudante) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
    // Criar o método
    listarEstudante() {
        console.log('Código do Estudante...: ' + this.codigoEstudante);
        console.log('Nome do Estudante...: ' + this.nomeEstudante);
    }
}
// Acessar os campos:
const estudante_1 = new Estudante_1(9845, 'Prince Lemos');
console.log('Lendo o atributo Código do Estudante...: ' + estudante_1.codigoEstudante);
console.log('Lendo o atributo Nome do Estudante...: ' + estudante_1.nomeEstudante);
