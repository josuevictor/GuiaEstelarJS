//função dentro de uma variável
//function expression
//function anonymous

//parâmetros da função (parameters)
const sum = function(number1, number2){
    let total = (number1 + number2) //declaração da variável sempre acompanhada do let. Caso contrário, causrá problemas com a var fora do escopo.
    return total

}

let number1 = 34
let number2 = 25

//console.log(`o número 1 é ${number1}`)
//console.log(`o número 2 é ${number2}`)
console.log(`O total é ${sum(number1, number2)}`)
console.log(total)


//sum(2, 3) //Arguments - Argumentos

/*===3-retornando_valores_dentro_da_funcao===*/ 

