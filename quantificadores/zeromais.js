const txt = 'De longe eu avistei o fogo e uma pessoa gritando FOGOOOOOO'
const txt2 = 'There is a big fog in NYC'

// * -> representa zero ou mais (opcional)

const regex = /fogo*/gi

console.log(txt.match(regex))
console.log(txt2.match(regex))