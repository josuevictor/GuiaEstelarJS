//calback function
//é uma função que está passando como parâmetro para outra função

function sayMyName(name){
    console.log('antes de executar a callback')

    name()

    console.log('depois de executar e callback')

    return name

}

//sayMyName('Victor')

//callback em formato de funçaõ.
/*sayMyName({name: 'Josué',
           lastName: 'Victor',
           year: 21,
           color: 'blue'})*/

sayMyName(
    () => {
        console.log('estou em um callback')
    }
)