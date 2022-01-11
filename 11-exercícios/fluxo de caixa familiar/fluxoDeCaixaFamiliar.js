/*                  ###Sistema de gastos familiar###

Crie um objeto que pussuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e
despesas e irá mostrar se a família está com o saldo positivo 
ou negativo, seguido do valor do saldo. 

*/


function controlBalance(){
    let balance = {

        income: [5005, 2550, 1550],
            
        expense: [750, 320, 1252],
    
    }

    let sumIncome = balance.income.reduce(function (sumIncome, i){
        return sumIncome + i
    });

    let SumExpense = balance.expense.reduce(function (SumExpense, i) {
        return SumExpense + i
    });
    console.log(`Income(+R$): ${sumIncome}`)
    console.log(`Expense(-R$): ${SumExpense}`)
    let totalBalance = (sumIncome - SumExpense)

    if (totalBalance > 0){
        console.log(`Positive balance: ${totalBalance}`)
    }else if(totalBalance < 0){
        console.log(`Negative balance: ${totalBalance}`)
    }
    
}
controlBalance()


/*
    if (result > 0){
        console.log(`Saldo positivo. Seu saldo é de: R$ ${result}`)
    }else{
        console.log(`Saldo negativo. Você possui uma dívida de: : R$ ${(result) * (-1)}`)
    }
    */
/*
PERCORRE O ARRAY

balance.income.forEach(function (incomeValues){
    console.log(incomeValues);
});
*/