const txt = `
123456
cod3r
QUASE123
#OpA1
#essaSenhaEGrande1234

#OpA1?
Foi123!
`

console.log(txt.match(/^.{6,20}$/gm))
console.log(txt.match(/^(?=.*[A-Z]).{6,20}$/gm))
console.log(txt.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!&*]).{6,20}$/gm))