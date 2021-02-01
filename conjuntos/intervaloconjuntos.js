const txt = 'áéíóú àèìòù âêîôû ç ãõ û'

console.log(txt.match(/[Â-û]/gi))
console.log(txt.match(/[â-ç]/gi))
console.log(txt.match(/[Â-Û]/gi))