//#################################################
//##########   Regex in javascript  ###############
//#################################################

const txt = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f';

const regNove = RegExp('9');

console.log('Metodos da RegExp...');
console.log(regNove.test(txt));
console.log(regNove.exec(txt));
console.log(txt.replace(regNove,'Achei'));

const regLetras = /[a-f]/g;
console.log('Metodos da String');
console.log(txt.match(regLetras));
console.log(txt.search(regLetras));
console.log(txt.replace(regLetras,'Achei'));
console.log(txt.split(regLetras));