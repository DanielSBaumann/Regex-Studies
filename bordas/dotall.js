const txt1 = 'Romário era um excelente jogador\n, mas hoje é um politico questionador'

console.log(txt1.match(/^r.*r$/gi))
console.log(txt1.match(/^r[\s\S]*r$/gi))
