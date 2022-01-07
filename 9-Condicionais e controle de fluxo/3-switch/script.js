function calculate (number1, operator, number2){
    let result

    switch (operator) {
        case '+':
            console.log(number1 + number2)
            break;
        case '-':
            console.log(number1 - number2)
            break; 
        case '*':
            console.log(number1 * number2)
            break;
        case '/':
            console.log(number1 / number2)
            break
        default:
            console.log('Não implementado')
            break;
    }
    return result
} 
console.log(calculate(5, '+', 10))

