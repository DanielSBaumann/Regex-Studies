const textoUmaLinha = '...'  //aspas simples ou duplas

//varias linhas utilize crase -> ` ` <-
const textoMultiLinha = ` 
        linha 1
        linha 2
`
//cuidado com tab
console.log('   '.match(/\s/g)) //3 espacos
console.log('   '.match(/\s/g)) //com tab
console.log(''.match(/\s/g))    //sem espaco

