const txt = 'lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'

console.log(txt.match(/\.mp3/g))

//in future 
console.log(txt.match(/\w+\.mp3/g))