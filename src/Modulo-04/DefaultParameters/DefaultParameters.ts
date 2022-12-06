// exemple01 - desconto ja está explicito o seu valor, parametros rest e default devem vim por último
function descontoCompra(preco:number, desconto=0.08){
    return preco *(1-desconto)
}
console.log(descontoCompra(100))

//exemple02 
function exibirMSG(msg:string, saudar = 'fala,pessoal!'){
    return saudar+' '+ msg
}

//exemple03
function exibirNome(nome:string, sobrenome='Rodrigues'){
return nome + ' ' + sobrenome
}