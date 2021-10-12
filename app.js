//?Extname
//!To find the extname
const path = require('path')
    // console.log(path.extname('./app.js'))

//?Dirname
//!It give directory name
// console.log(path.dirname('./temp/utils.js'))

//?__Dirname 
//!It give correct Path
// console.log(__dirname)

//?Path Join
//!To connect To Path or file
console.log(path.join(__dirname, 'app.js'))