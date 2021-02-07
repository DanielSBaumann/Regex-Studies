const txt1 = 'O José Simão é muito engraçado... hehehehehe'

console.log(txt1.match(/(he)/g))

const txt2 = 'http://www.site.info www.escola.ninja.br   google.com.ag http://www.site.info.com.br'

console.log(txt2.match(/(http:\/\/)?(www\.)?\w+\.\w+(\.[a-z]{2})?/gi))