//!To create fetch API
// let response = fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//     })

//!To create Which user click in console
const list = document.querySelector('ul')
let arr = ['one', 'Two', 'Three', 'Four']
    // console.log(list)

arr.forEach(chore => {
    const element = document.createElement('li')
    const textNode = document.createTextNode(chore)
    element.appendChild(textNode)
    element.addEventListener('click', (e) => {
        //!To Give the Prompt To user Are sure
        const userInput = window.prompt(`Are you sure that you want to delete "${chore}"`)
        if (userInput == 'YES') e.target.remove()
            // console.log(e.target.innerHTML)
            //     //!To Remove An Element
            // e.target.remove()
    })
    list.appendChild(element)

})