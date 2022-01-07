// for...in

//criar um loop em cima de onjeto.

let person = {
    name: 'victor',
    age: 21,
    weight: 85

}
for (let property in person){
    console.log(property)
    console.log(person[property])
}