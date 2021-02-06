const txt = ' <div>Conteudo 01</div><div>Conteudo 02</div>'

//  quantificadores SAO gulosos (greedy)...
console.log("\nGreedy")
console.log(txt.match(/<div>.+<\/div>/g))
console.log(txt.match(/<div>.*<\/div>/g))
console.log(txt.match(/<div>.{0,100}<\/div>/g))

//  quantificadores NAO gulosos (Lazy)...
console.log("\nLazy")
console.log(txt.match(/<div>.+?<\/div>/g))
console.log(txt.match(/<div>.*?<\/div>/g))
console.log(txt.match(/<div>.{0,100}?<\/div>/g))

//testando split com REGEX
console.log("\nTeste split com regex")
let div = txt.split(/<div>.{0,22}?<\/div>/g)
console.log(div)