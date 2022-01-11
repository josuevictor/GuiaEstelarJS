/* Transformar notas escolares

Crie um algorítmo que transforme as notas numéricas
para o sistema de notas em caracteres tipo A B C.

* de 90 pra cima -  A
* entre 80 e 89  -  B
* entre 70 e 79  -  C 
* entre 60 e 69  -  D
* menor que 60   -  F

*/

function ConverteNota(nota){
    
    if(nota >= 90 && nota <= 100){
        console.log('Nota: A')
    }else if(nota >= 80 && nota <= 89){
        console.log('Nota: B')
    }else if(nota >= 70 && nota <= 79){
        console.log('Nota: C')
    }else if(nota >= 60 && nota <= 69){
        console.log('Nota: D')
    }else if(nota < 60 && nota >= 0){
        console.log('Nota: F' + ' Reprovado :(')
    }else{
        console.log('Nota inválida')
    }
}
ConverteNota(100)
ConverteNota(60)
ConverteNota(1000)
ConverteNota(80)
ConverteNota(50)
ConverteNota(30)
ConverteNota(0)


/*--------------------------------------------------------------*/