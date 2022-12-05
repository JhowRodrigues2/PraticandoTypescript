// exemple01 = Optional Parameter

function DadosPessoa( idPessoa:number, nome:string, email?:string){

    console.log(`ID de Cadrasto: ${idPessoa}, Nome: ${nome}`)

    if(email!=undefined) console.log(`E-mail ${email}`)
}
DadosPessoa(3131,'Jhow Rodrigues')
DadosPessoa(4444,'Thawany Krettli', 'thaw@gmail.com')

// exemple02

function msgLog(mensagem:string, userID?:number){

    const horaLog = new Date().toDateString()
    console.log(horaLog,mensagem,userID || 'Usuário não conectado(a)')
}
msgLog('Atualizar Página')
msgLog('Usuário Logado',10)

type Pessoa = {
    idFuncionario:number,
    nome:string,
    idade?:number,
    email?:string
}
let p:Pessoa ;

p={
    idFuncionario:10,
    nome:'Jhow Rodrigues'
}
console.log(p)