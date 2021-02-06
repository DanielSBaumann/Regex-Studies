const txt = `CPF dos aprovados
            -600.567.890-12
            -765.998.345-23
            -12.123.123-56 ...
            `

const regex = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/g
const regex2 = /[0-9]{3}.[0-9]{3}.[0-9]{3}.[0-9]{2}/g
const regex3 = /\d{3}\.\d{3}\.\d{3}-\d{2}/g

console.log(txt.match(regex))
console.log(txt.match(regex2))
console.log(txt.match(regex3))