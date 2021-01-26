/*
        meta    mnemônico
        ------------------------------
        .       ponto
        []      lista
        [^]     lista negada
        ?       opcional
        *       asterisco
        +       mais
        {}      chaves
        ^       circunflexo
        $       cifrão
        \b      borda
        \       escape
        |       ou
        ()      grupo
        \1      retrovisor
        */
       
// . ? * + - | [] {} \ :

const txt ='1,2,3,4,5,6,a.b c!d?e'

// nesse caso '.' ponto utilizado de forma literal
//e nao como metacaracter
const regPonto = /\./g
console.log(txt.split(regPonto))

//nesse caso '.' ponto representa o metaaracter de
//qualquer caracter
console.log(txt.split(/./g))

//utilizando exemplos o caracter '.' precisa usar scape'\'
//assim com '?' tambem precisa de scape'\'
const regSimbolos = /,|\.|\?|!| /g
console.log(txt.split(regSimbolos))

