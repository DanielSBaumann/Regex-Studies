const txt = `Lista telefonica
            -(11) 98756-1212
            -98765-4321 
            -(21) 97694-0402
            -(31)98877-2549
            -2490-3177 ...
`

const regex = /(\([0-9]{2}\))?\s?[0-9]{4,5}-[0-9]{4}/g
const regex2 = /(\([0-9]{2}\))?\s?[0-9]{4,5}.[0-9]{4}/g
const regex3 = /(\(\d{2}\))?\s?\d{4,5}.\d{4}/g

console.log(txt.match(regex))
console.log(txt.match(regex2))
console.log(txt.match(regex3))