// throw
function sayMyname(name = ''){
    if (name === ''){
       throw 'Nome é obrigatório'
    }
    console.log(name)
}
// try...catch
try{
    sayMyname('Victor')
} catch(e) {
    console.log(e)
}

console.log('após o try/catch')