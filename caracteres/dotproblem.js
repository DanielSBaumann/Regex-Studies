const txt = 'Bom\ndia'
const txt2 = 'Bom\tdia'

console.log(txt.match(/./gi))
console.log(txt2.match(/.../gi))
console.log(txt2.match(/..../gi))   //o ponto nao engloba o \n
console.log(txt2.match(/ {3}/gi))

// dotall - algumas linguagens temum flag (exemplo: /s ) mas JS NÂO!!!