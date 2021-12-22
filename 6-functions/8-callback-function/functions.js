//calback function
//é uma função que está passando como parâmetro para outra função

function sayMyName(name){
    console.log('antes de executar a callback')

    name()

    console.log('depois de executar e callback')

}

sayMyName(
    () => {
        console.log('estou em um callback')
    }
)

//sayMyName('Victor')

//callback em formato de funçaõ.
/*sayMyName({name: 'Josué',
           lastName: 'Victor',
           year: 21,
           color: 'blue'})*/