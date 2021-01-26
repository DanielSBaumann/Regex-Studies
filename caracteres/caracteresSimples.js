const txt = '1,2,3,4,5,6,a.b c!d?e'

const regVirgula = /,/
console.log(txt.split(regVirgula))
console.log(txt.match(regVirgula))
console.log(txt.match(/,/g))
console.log(txt.match(/A/i))
console.log(txt.match(/A/gi))
console.log(txt.match(/2/g))
console.log(txt.match(/b c!d/))