import * as fs from "node:fs";

const AnimeInfo = `
    name: Dragon Ball z \n
    author: Akira Toriyama \n
    year: 1975 \n
    movies: Dragon Ball super broly \n
    arc: Cell saga \n
    fan favorite: Goku \n
`

const fileName = 'Information.txt'
const fileLocation = `./NodeJS/03_FileHandling/Demo/${fileName}`

fs.writeFileSync(fileLocation, 'Prithvi')
fs.writeFileSync(fileLocation, AnimeInfo)

fs.appendFileSync(fileLocation,'series: Dragon ball super beerus')

const readValue = fs.readFileSync(fileLocation,"utf-8")
console.log(readValue)

const newFileName =  `./NodeJS/03_FileHandling/Demo/DragonBall.txt`
fs.rename(fileLocation,newFileName,(error) => {})

fs.writeFileSync(`./NodeJS/03_FileHandling/Demo/new.txt`,readValue)
fs.unlink(newFileName,(err) => {
    if (err) {
        console.log('Error')
    }
})

fs.mkdir(`./NodeJS/03_FileHandling/Demo/MyTests/child/childOfChild`, {recursive: true},(err) => {})

const code = `function add(a,b){return a+b}`

fs.writeFileSync('./NodeJS/03_FileHandling/Demo/MyTests/child/child.js', code)

fs.readdir('./NodeJS/03_FileHandling/Demo/MyTests',(err, file) => {
    console.log(file)
})