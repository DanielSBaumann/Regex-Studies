const txt1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(txt1.match(/\bdia\w*/gi))
console.log(txt1.match(/\w+dia\b/gi))
console.log(txt1.match(/\w*dia\w*/gi))
console.log(txt1.match(/\w+dia\w+/gi))
console.log(txt1.match(/\bdia\b/gi))

//  borda é não \w, que é [^A-Za-z0-9_]... temos problemas com acentos!

const txt2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'

console.log(txt2.match(/\bdia\b/gi))
console.log(txt2.match(/(\S*)?dia(\S*)?/gi))
console.log(txt2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi))


