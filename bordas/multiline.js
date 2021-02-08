const txt = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`
console.log(txt.match(/\n/g))
console.log(txt.match(/^(\w).+\1$/gi))
console.log(txt.match(/^(\w).+\1$/gim))