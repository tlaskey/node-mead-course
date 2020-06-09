const fs = require('fs')

const stringJSON = fs.readFileSync('1-json.json').toString()
const objectJSON = JSON.parse(stringJSON)

objectJSON.name = 'Tyler'
objectJSON.age = 23

fs.writeFileSync('1-json.json', JSON.stringify(objectJSON))


// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)