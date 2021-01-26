//desafio : regex que identifique 3 espacoes em branco
const txt = 'a   b'

console.log(txt.match(/a\s\s\sb/))
console.log(txt.match(/a   b/))

//in future
console.log(txt.match(/a\s+b/))
console.log(txt.match(/a {3}b/))
console.log(txt.match(/a\s{3}b/))