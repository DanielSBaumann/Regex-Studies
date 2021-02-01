const txt = `1,2,3,4,5,6a.b c!d?e   -
f_g`

//  shorthand \d representa 0-9
console.log(txt.match(/\d/g))

//  shorthand \D representa tudo aquilo NÂO NÙMERO!!!
//  Ou......[^0-9] ->conjunto negado
console.log(txt.match(/\D/g))

/*  
    shorthand \w representa
    [a-z] && [A-Z] && [0-9] && _ (Underline)   

*/
console.log(txt.match(/\w/g))

/*  
    shorthand \W representa
    Os não caracteres
    [^a-z] && [^A-Z] && [^0-9] && ^_ (Underline)   

*/
console.log(txt.match(/\W/g))

//  shorthand \s espaços && [\t\n\r\f]
console.log(txt.match(/\s/g))
//  shorthand \S tudo aquilo que não é espaço && [^\t\n\r\f]
console.log(txt.match(/\S/g))

//  \b && \B Bordar de palavras! 


console.log('_'.match(/\w[^_]/g) ? true : false)