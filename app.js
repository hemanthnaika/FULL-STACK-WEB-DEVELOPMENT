//!Creating Add even listener And Take the input form the user
var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul')

var chores = []
var deleteItem = (value) => {
        //!Find the index of User Give The Input
        const index = chores.indexOf(value)
            //!Delete The Item
        chores.splice(index, 1)
        console.log(chores)
    }
    // var chores = ['GYM']
    //!To find element is in list or not
    // console.log(chores.includes('GYM'))

const callbackfunc = (event) => {
    // console.log(event.target)
    // console.log(input.value)
    const user = input.value
    if (chores.includes(input.value)) { console.log('Already Exists') } else {
        chores.push(user)
        const element = document.createElement('li')
        const textNode = document.createTextNode(user)
        element.appendChild(textNode)
        list.appendChild(element)
            //!To find the what we click
            // element.addEventListener('click', (e) => { console.log(e.target.innerHTML) })
        element.addEventListener('click', (e) => { e.target.remove() })

    }
    // const user = input.value

}
button.addEventListener('click', callbackfunc)