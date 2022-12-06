export{}
// exemple 01 - Usado quando tem inumeras declarações do mesmo tipo, evitando a repetição

function somarNum(...numeros:number[]){
    let total = 0
    numeros.forEach((numero)=>(total+=numero))
    return total
}
console.log(somarNum(50,40,66,40,11,2))


// exemple02 