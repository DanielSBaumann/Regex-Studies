const txt = '1,2,3,a.b c!d?e[f'

console.log(txt.match(/\D/g))
console.log(txt.match(/[^0-9]/g))
console.log(txt.match(/[^\d]/g))
console.log(txt.match(/[^\d!\?\[\s,\.]/g))

const txt2 = '1: !"#$&\'()*+,-./ 2: :;<=>?@'

console.log(txt2.match(/[^!-/:-@\s]/g))