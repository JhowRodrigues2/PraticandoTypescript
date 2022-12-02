// Never - Não contem valores, não podemos atribuir valor a ele. Representa um tipo de valor que nunca ocorrerá
// o Never não pode ter nenhum valor atribuido a ele.
// exemplo - Throw Exception
const error = (msg:string): never => {
    throw new Error(msg)
}

console.log(error('Mensagem de erro - 01'))


