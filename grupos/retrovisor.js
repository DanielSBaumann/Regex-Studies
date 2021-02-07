const txt1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'

console.log(txt1.match(/<(\w+)>.*<\/\1>/gi))

const txt2 = 'Lentamente é mente muito lenta.'

console.log(txt2.match(/(lenta)(mente).*\2.*\1\./gi))

console.log(txt2.match(/(?:lenta)(mente).*\1/gi))  // ?: não guarda o retrovisor

console.log(txt2.replace(/(lenta)(mente)/gi,'$2'))

const txt3 = 'abcdefghijkll'

console.log(txt3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/gi))