const fs = require('fs')
    //!To convert Buffer into data using utf-8 key
    // fs.readFile('./test.txt', 'utf-8', (error, data) => {
    //     if (error) console.log(error)
    //     else console.log(data)
    // })

//? To convert Async to sync
// console.log(fs.readFileSync('./test.txt', 'utf8'))
// console.log('Im A Random log')


//?To write File
fs.writeFile('./test.txt', "Hi", (error, data) => {
    if (error) console.log(error)
    else console.log(data)
})