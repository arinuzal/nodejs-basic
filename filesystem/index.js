const fs = require('fs')
const path = require('path')

// const pathText = path.resolve(__dirname, 'notes.txt');
const data = fs.readFileSync('./filesystem/notes.txt', 'UTF-8')
console.log(data)
