// para se definir classe (ou conjunto) de caracteres usa colchete []
const txt = '1,2,3,4,5,6,a.b c!d?e[f'
const regexPares = /[02468]/g
console.log(txt.match(regexPares))

//ex-02

const txt2 = 'João não vai passear na moto.'
const regex2 = /n[aã]/g
console.log(txt2.match(regex2))