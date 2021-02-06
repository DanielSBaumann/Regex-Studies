const txt = `Os emails dos convidados são
            -fulano@cod3r.com.br
            -xico@gmail.com 
            -$$$@mail.com
            -joao@empresa.info.br
            -maria_silva@gmail.com
            ...
`

const regex = /(\w+)@(\w+)\.com(\.[a-z]{2})?/g
const regex2 = /\w+@/g

console.log(txt.match(regex))
console.log(txt.match(regex2))