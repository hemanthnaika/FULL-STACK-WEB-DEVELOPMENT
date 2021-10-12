//     //!To clear The localStorage
// localStorage.clear
const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')
    //!To get input when we reload and It show preys
div.innerHTML = localStorage.getItem('InputValue')
button.addEventListener('click', (req, res) => {
    localStorage.setItem('InputValue', input.value)
    div.innerHTML = input.value


})