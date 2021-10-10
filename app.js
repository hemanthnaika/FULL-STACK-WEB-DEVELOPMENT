//! Frist log the one, Two etc and next settimeout is log
// console.log('one')
// console.log('Two')
//     //?To crate SetTimeout
// setTimeout(() => {
//     console.log('hi')
// }, 5000)
// console.log('Three')

//!To create the Promise
//?new= It is a Key word to create a new promosie
// let value = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello')
//     }, 3000)
// })
// console.log(value)
// setTimeout(() => {
//     console.log(value)
// }, 4000)

//! To create A Fetch API
//!then is key word of callbackof
//!data is not key word
let response = fetch('https://jsonplaceholder.typicode.com/users').then(data => {
    let parsedData = data.json()
    console.log(parsedData)
    return (parsedData)
        //!book not a keyword
}).then(book => { console.log(book) })


// console.log(response)
// setTimeout(() => {
//     console.log(response)
//     const data = response.json()
//     console.log(data)
// }, 2000)