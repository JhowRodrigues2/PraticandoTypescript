"use strict";
// exemplo básico do uso do  Type Object
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa = {
    nome: 'Jhow',
    sobrenome: 'Rodrigues',
    funciton: 'Developer Front-End'
};
// exemplo Object como parâmetro de função(podem ser anônimos)
const onBoarding01 = (funcionario) => {
    return `Seja bem-vindo ${funcionario.nome}`;
};
console.log(onBoarding01({ nome: 'Thawany Krettli' }));
const onBoarding02 = (pessoa) => {
    return (`seja bem-vinda ${pessoa.nome}, sua função aqui na empresa será ${pessoa.funcao}`);
};
console.log(onBoarding02({ nome: 'Thawany', funcao: 'Enfermeira Chefe' }));
const onBoarding03 = (pessoa) => {
    return (`seja bem-vinda ${pessoa.nome}, sua função aqui na empresa será ${pessoa.funcao} você trabalhará com ${pessoa.linguagem}`);
};
console.log(onBoarding03({ nome: 'Jhonatta Rodrigues', funcao: 'Enfermeira Chefe', linguagem: 'Javascript' }));
const onBoarding04 = (pessoa) => {
    return (`seja bem-vinda ${pessoa.nome}, sua função aqui na empresa será ${pessoa.funcao} você trabalhará com ${pessoa.linguagem}`);
};
const onBoarding05 = (pessoa) => {
    return (`seja bem-vinda ${pessoa.nome}, sua função aqui 
    na empresa será ${pessoa.funcao} você trabalhará com ${pessoa.linguagem}
    seu email será ${pessoa.email}
    `);
};
const filho = {
    nome: 'Jhow',
    sobrenome: 'Rodrigues',
    idade: 35
};
const usuario = {
    nome: 'Jhow Rodrigues',
    email: 'jhow@gmail.com'
};
const admin = {
    nome: 'Jhow Rodrigues',
    email: 'jhow@gmail.com',
    admin: true
};
// A funcao irá aceitar tanto as informações do type user quanto do Adm
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(usuario));
console.log(acessarSistema(admin));
