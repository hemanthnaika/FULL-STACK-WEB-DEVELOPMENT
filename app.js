//?Resolve
// const path = require('path')
//!To find the Path relative path into absolute path Ex \user\desktop\  into E:\user\desktop
//!The key word is resolve
// console.log(path.resolve('./app.js'))

//?Relative
const path = require('path')
    //!To find the Path relative path Ex E:\user\desktop into css\temp\utils.js
    //!The key word is relative
console.log(path.relative('../', "./temp/utils.js"))