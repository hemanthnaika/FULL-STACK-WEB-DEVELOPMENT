// console.log(module)
//!Imports using require 
// console.log(require('./index'))
//! To create Import require is key word
// const stuff = require('./index')
// console.log(stuff)


//!To import from utils.js
const { add, subtract, multiply, divide, message } = require('./utils')

add()
subtract()
multiply()
divide()

console.log(message)