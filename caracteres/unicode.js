//  no inicio...
//  Um byte (8 bits) -256 caracteres
//  Simbolos, Pontuação, A-Z, a-z, 0-9

//  Dois Bytes (16 bits) - 65500+ caracteres
//  +Simbolos, Pontuação, A-Z, a-z, 0-9

//  Unicode
//  Quantidade de Bytes Variável - Expansível
//  Suporta mais de 1 milhão de caracteres
//  Atualmente tem mais de 100.000 caracteres atribuidos

//  http://unicode-table.com/pt/

const txt = 'aʬc௵d';

console.log(txt.match(/\u02AC|\u0BF5/gi))

