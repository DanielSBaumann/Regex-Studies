const txt = ' O João recebeu 120 milhões apostando 6 9 21 23 45 46'

//para definir um quantificador usa chaves {}
console.log(txt.match(/\d{1,2}/g))
console.log(txt.match(/[0-9]{2}/g))
console.log(txt.match(/\d{1,}/g))
console.log(txt.match(/[0-9]{1,2}/g))

console.log(txt.match(/\w{7}/g))
console.log(txt.match(/[\wõâ]{7,}/g))

//no futuro...
console.log(txt.match(/\b\d{1,2}\b/g))
console.log(txt.match(/\b[\wõâ]{7}\b/g))
console.log(txt.match(/\b[\wõâ]{7,}\b/g))
