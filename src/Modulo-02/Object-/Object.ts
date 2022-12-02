// exemplo básico do uso do  Type Object

export {};
const pessoa={
    nome:'Jhow',
    sobrenome:'Rodrigues',
    funciton:'Developer Front-End'
}
// exemplo Object como parâmetro de função(podem ser anônimos)

const onBoarding01=(funcionario:{nome:string})=>{
return `Seja bem-vindo ${funcionario.nome}`
}
console.log(onBoarding01({nome:'Thawany Krettli'}))

// object Nomeados
 interface Pessoa {
nome:string
funcao:string
 }
 const onBoarding02=(pessoa:Pessoa)=>{
   return(`seja bem-vinda ${pessoa.nome}, sua função aqui na empresa será ${pessoa.funcao}`)

}
console.log(onBoarding02({nome:'Thawany',funcao:'Enfermeira Chefe'}))

// object com type alias

type PessoaType={
nome:string,
funcao:string,
linguagem:string
} 
const onBoarding03=(pessoa:PessoaType)=>{
    return(`seja bem-vinda ${pessoa.nome}, sua função aqui na empresa será ${pessoa.funcao} você trabalhará com ${pessoa.linguagem}`)
}
console.log(onBoarding03({nome:'Jhonatta Rodrigues',funcao:'Enfermeira Chefe', linguagem:'Javascript'}))

// Optional Object
interface Pessoa04{
    nome:string,
funcao:string,
linguagem:string
email?:string // campo opcional 
}
const onBoarding04=(pessoa:Pessoa04)=>{
    return(`seja bem-vinda ${pessoa.nome}, sua função aqui na empresa será ${pessoa.funcao} você trabalhará com ${pessoa.linguagem}`)
}

// Propriedade 'readonly' se deseja proibir que os devs nao modifiquei determinado objeto utilize o readonly
interface Pessoa05{
    nome:string,
funcao:string,
linguagem:string
readonly email:string // não pode sofrer alteração
}
const onBoarding05=(pessoa:Pessoa05)=>{
    return(`seja bem-vinda ${pessoa.nome}, sua função aqui 
    na empresa será ${pessoa.funcao} você trabalhará com ${pessoa.linguagem}
    seu email será ${pessoa.email}
    `)
}

// Heranças

interface Mae{
nome:string
}
interface Pai{
    sobrenome:string
}

interface Filho extends Mae, Pai{
    idade:number
}
const filho:Filho={
    nome:'Jhow',
    sobrenome:'Rodrigues',
    idade:35
}

// Generic Objects

type User={
    nome:string,
    email:string
}
type Admin ={
    nome:string,
    email:string,
    admin:true
}


const usuario: User = {
    nome:'Jhow Rodrigues',
    email:'jhow@gmail.com'
}


const admin: Admin = {
    nome:'Jhow Rodrigues',
    email:'jhow@gmail.com',
    admin:true
}

// A funcao irá aceitar tanto as informações do type user quanto do Adm
function acessarSistema<T>(usuario:T):T{
return usuario
}
console.log(acessarSistema<User>(usuario))
console.log(acessarSistema<Admin>(admin))