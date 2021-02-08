const txt1 = 'Romário Romárior era um excelente jogador\n, mas hoje é um politico questionador'

console.log(txt1.match(/r/gi))  
console.log(txt1.match(/^r/gi)) //^ inicio da linha/string
console.log(txt1.match(/r$/gi)) // $ fim da linha/string
console.log(txt1.match(/^r.*r$/gi))

//teste
console.log(txt1.match(/^r[\wÀ-ú]+(r$)?/gi)) //começa com r , opcional terminar com r
console.log(txt1.match(/[\wÀ-ú]+r$/gi)) //termina com r , opcional começar com r
console.log(txt1.match(/[\s{1}][\wÀ-ú]+r/gi))
console.log(txt1.match(/[\wÀ-ú]+r/gi))
console.log(txt1.match(/^r?([\wÀ-ú])+r$/gi))
console.log(txt1.match(/(r\b)?[\wÀ-ú]+r\b/gi))