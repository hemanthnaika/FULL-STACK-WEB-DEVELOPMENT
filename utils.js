const add = () => {
    console.log('I Add stuff')
}

const subtract = () => {
    console.log('I subtract stuff')
}

const multiply = () => {
    console.log('I multiply stuff')
}

const divide = () => {
        console.log('I divide stuff')
    }
    //!To exports to app.js file
module.exports.add = add
module.exports.subtract = subtract
module.exports.multiply = multiply
module.exports.divide = divide
    // console.log(module)
module.exports.message = "message"
    // MESSAGe