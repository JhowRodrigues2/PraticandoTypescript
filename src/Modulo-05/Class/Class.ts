// exemple01
export{}
class Pessoa{
    nome:string; sobrenome:string

    constructor(nome:string, sobrenome:string) {
      this.nome=nome;
    this.sobrenome=sobrenome    
    }
    nomeCompleto():string{
        return `${this.nome} ${this.sobrenome}`
    }
}

const pessoa = new Pessoa('Jhow','Rodrigues')
console.log(pessoa.nomeCompleto())


  // ==> Exemplo 02 - Classes (com constructor)
  class Estudante_1 {
    codigoEstudante: number;
    nomeEstudante: string;
  
    // Definir o Construtor
    constructor(codigoEstudante: number, nomeEstudante: string) {
      this.codigoEstudante = codigoEstudante;
      this.nomeEstudante = nomeEstudante;
    }
  
    // Criar o método
    listarEstudante(): void {
      console.log('Código do Estudante...: ' + this.codigoEstudante);
      console.log('Nome do Estudante...: ' + this.nomeEstudante);
    }
  }
  
  // Acessar os campos:
  const estudante_1 = new Estudante_1(9845, 'Prince Lemos');
  console.log(
    'Lendo o atributo Código do Estudante...: ' + estudante_1.codigoEstudante,
  );
  console.log(
    'Lendo o atributo Nome do Estudante...: ' + estudante_1.nomeEstudante,
  );