"use strict";
// exemple01 = Optional Parameter
function DadosPessoa(idPessoa, nome, email) {
    console.log(`ID de Cadrasto: ${idPessoa}, Nome: ${nome}`);
    if (email != undefined)
        console.log(`E-mail ${email}`);
}
DadosPessoa(3131, 'Jhow Rodrigues');
DadosPessoa(4444, 'Thawany Krettli', 'thaw@gmail.com');
// exemple02
function msgLog(mensagem, userID) {
    const horaLog = new Date().toDateString();
    console.log(horaLog, mensagem, userID || 'Usuário não conectado(a)');
}
msgLog('Atualizar Página');
msgLog('Usuário Logado', 10);
let p;
p = {
    idFuncionario: 10,
    nome: 'Jhow Rodrigues'
};
console.log(p);
