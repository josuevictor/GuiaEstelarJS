/* Transformar notas escolares

Crie um algorítmo que transforme as notas numéricas
para o sistema de notas em caracteres tipo A B C.

* de 90 pra cima -  A
* entre 80 e 89  -  B
* entre 70 e 79  -  C 
* entre 60 e 69  -  D
* menor que 60   -  F

*/
/*
let nota = 100
function ConverteNota(){
    
    switch (nota) {
        case nota <= 100 && nota >= 90:
            console.log('Nota: A')            
            break;
        case nota = 90:
            console.log('Nota: B')
            break
        default:
            console.log('Error')
            break;
    }
}
ConverteNota()
console.log(nota)
*/
let nota = 100
switch (nota) {
    case nota >= 90 && nota <= 100:
        console.log('Nota: A')            
        break;
    case nota >= 80 && nota <= 89:
        console.log('Nota: B')
        break
    default:
        console.log('Error')
        break;
}