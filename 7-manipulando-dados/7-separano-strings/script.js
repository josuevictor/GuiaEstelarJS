//manipulando strings e array

/*
Separando um texto que contem espaços, em um novo array
onde cada texto é uma posilçao do array. Depoia disso,
transforme o array em um texto e onnde eram espaços, 
coloque _
*/

let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ")//transformou em array
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")//tranformou em string
console.log(phraseWithUnderscore.toUpperCase())