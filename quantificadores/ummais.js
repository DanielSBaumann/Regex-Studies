const txt = 'De longe eu avistei o fogo e uma pessoa gritando FOGOOOOOO'
const txt2 = 'There is a big fog in NYC'

// + -> representa um ou mais (opcional)

const regex = /fogo+/gi

console.log(txt.match(regex))
console.log(txt2.match(regex))

const txt3 = 'Os números: 0123456789.'

console.log(txt3.match(/[0-9]/gi))
console.log(txt3.match(/[0-9]+/gi))