const txt1 = 'supermercado hipermercado minimercado mercado'

console.log(txt1.match(/(super|hiper|mini)?mercado/gi))
console.log(txt1.match(/((hi|su)per|mini)?mercado/gi))