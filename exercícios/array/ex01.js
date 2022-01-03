/*01. Crie uma função que recebe um array de 2 
números e coloque eles em ordem crescente. 
Não use o método sort.*/



function bubbleSort(items){
   let length = items.length
   for (let i = 0; i < length; i++){
      for (let j = 0; j < (length - i - 1 ); j++){
         if(items[j] > items[j+1]){
            let tmp = items[j]
            items[j] = items[j+1]
            items[j+1] = tmp
         }
      }
   }
}

let array = [3, 2, 1]
bubbleSort(array)

console.log(array)




