const txt1 = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!'

console.log(txt1.match(/[(abc)]/gi)) //não é um grupo
console.log(txt1.match(/([abc])/gi)) //é um grupo
console.log(txt1.match(/(abc)/gi))