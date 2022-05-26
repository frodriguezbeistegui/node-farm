const fs = require('fs')

// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

// console.log(textIn)

// const textOut = `This is What we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOut)

// console.log('the file was written')

const textIn = fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
    console.log(data)
    const textOut = `This is What we know about the avocado: ${data}.\nCreated on ${Date.now()}`
    fs.writeFileSync('./txt/output.txt', textOut)
})
console.log("text is loading")