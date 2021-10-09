//!Calculator
const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]
const add = document.querySelector('#add')
const sub = document.querySelector('#sub')
const multiply = document.querySelector('#multiply')
const resultBox = document.querySelector('.result')
    // const sum = () => {
    //     //!parseInt: it is connvert String into Number
    //     const result = parseInt(a.value) + parseInt(b.value)
    //     console.log(result)
    //         //!To connvert result into Html page
    //     resultBox.innerHTML = result
    // }
    // const subt = () => {
    //     //!parseInt: it is connvert String into Number
    //     const result = parseInt(a.value) - parseInt(b.value)
    //         // console.log(result)
    //         //         //!To connvert result into Html page
    //     resultBox.innerHTML = result
    // }

// const multi = () => {
//     //!parseInt: it is connvert String into Number
//     const result = parseInt(a.value) * parseInt(b.value)
//     console.log(result)
//         //         //!To connvert result into Html page
//     resultBox.innerHTML = result
// }
const calculator = (event, operation) => {
    console.log(event.target)
        // console.log(event)
        // if (operation == 'add') {
        //     console.log('adding')

    // } else if (operation == 'multiply') {
    //     console.log('multiply')
    // }
    switch (operation) {
        case "add":
            resultBox.innerHTML = parseInt(a.value) + parseInt(b.value)
            break
        case "multiply":
            resultBox.innerHTML = parseInt(a.value) * parseInt(b.value)
            break
        case "sub":
            resultBox.innerHTML = parseInt(a.value) - parseInt(b.value)
            break
        default:
            resultBox.innerHTML = "Not A valid"
    }
}

add.addEventListener('click', (event) => calculator(event, 'add'))
multiply.addEventListener('click', (event) => calculator(event, 'multiply'))
sub.addEventListener('click', (event) => calculator(event, 'sub'))