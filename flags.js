console.log('Flag\'s');

//#################################################
//##########            Flag's     ################
//#################################################

// g - global
// i - ignore case

const txt = 'Carlos assinou o abaixo assinado';
console.log(txt.match(/C|ab/));
console.log(txt.match(/c|ab/));
console.log(txt.match(/c|ab/i));
console.log(txt.match(/ab|c/gi));