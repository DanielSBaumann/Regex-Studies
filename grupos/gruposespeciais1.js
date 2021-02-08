const txt1 = 'João é calmo, mas no transito fica nervoso.'

//meu exemplo para pegar toda expressao
console.log(txt1.match(/[\w\sÀ-Ú,\.]+/gi))

console.log(txt1.match(/[\wÀ-Ú]+/gi))

//positive lookahead
console.log(txt1.match(/[\wÀ-Ú]+(?=,)/gi))
console.log(txt1.match(/[\wÀ-Ú]+(?=\.)/gi))

//negative lookahead
console.log(txt1.match(/[\wÀ-ú]+\b(?!,)/gi))
console.log(txt1.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))

//teste
const txt2 = 'Eu, Tu, Ele, Nos, Vos, Eles.'

//positive lookahead
console.log('\nPositive lookahead')
console.log(txt2.match(/\w+(?=,)/gi))
//negative lookahead
console.log('\nNegative lookahead')
console.log(txt2.match(/[\w]+[\s|\.](?!,)/gi))
