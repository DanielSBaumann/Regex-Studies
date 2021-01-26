const txt = 'Voce precisa responder sim ,não ou não sei'

console.log(txt.match(/sim|não sei|não/gi)) //alternativa (OU ||)
console.log(txt.match(/sim|n.o sei|n.o/gi)) //alternativa (OU ||)