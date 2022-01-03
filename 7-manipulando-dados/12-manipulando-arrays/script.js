//Manipulando arrays

let techs = ['html','css','js']

//adcionar um item no fim
techs.push('Vuejs')

//adcionar no começo
techs.unshift('sql') 

//remover do fim 
//techs.pop()

//remover do começo
//techs.shift()

//pegar soomente alguns elementos do array
//console.log(techs.slice(1, 2))

//remover 1 ou mais itens de qualquer posição do array
//techs.splice(1, 2)

//encontar a posição de um elemento no array
let index = techs.indexOf('css')

//colocando array em ordem crescente
let array = [1, 5, 8, 9, 4, 3, 2, 7, 6]
array.sort()



console.log(array)