//     //!To clear The localStorage
// localStorage.clear

const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')
const arr = [1, 2, 3, 4, 5]
    // console.log(arr)
    //     //!Arr convert into string Use stringify key
    // console.log(JSON.stringify(arr))
localStorage.setItem('val', JSON.stringify(arr))
    //!To convert string into arr use JSON.parse key
console.log(JSON.parse(localStorage.getItem('val')))