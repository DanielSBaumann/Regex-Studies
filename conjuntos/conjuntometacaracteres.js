const txt = '.$+*?-'

//  não precisa de escape dentro do conjunto
console.log(txt.match(/[+.?*$]/g))
console.log(txt.match(/[$-?]/g))    //isso é um intervalo [$-?]

//não é um intervalo
console.log(txt.match(/[$\-?]/g))
console.log(txt.match(/[-?]/g))
console.log(txt.match(/[$\-?]/g) ? true : false)