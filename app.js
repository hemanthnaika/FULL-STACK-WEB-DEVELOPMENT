//!Creating Add even listener And Take the input form the user
var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul')

const callbackfunc = (event) => {
    // console.log(event.target)
    // console.log(input.value)
    const user = input.value
    const element = document.createElement('li')
    const textNode = document.createTextNode(user)
    element.appendChild(textNode)
    list.appendChild(element)
}
button.addEventListener('click', callbackfunc)