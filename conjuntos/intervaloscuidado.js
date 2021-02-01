const txt = 'ABC [abc] a-c 1234'

console.log(txt.match(/[a-c]/g))
console.log(txt.match(/a-c/g))  //Não define um range 

console.log(txt.match(/[A-z]/g))
/*
    intervalos usam a ordem da tabela UNICODE
    Tem que respeitar a ordem da tabela UNICODE
*/
//console.log(txt.match(/[a-Z]/g)) erro de execução
//console.log(txt.match(/[4-1]/g)) erro de execução