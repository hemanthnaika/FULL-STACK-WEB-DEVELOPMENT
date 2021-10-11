//!To crate The Data and display In Display
const table = document.querySelector('table')
const createRow = (user) => {
    let newRow = document.createElement('tr')
    let element = `  
    <td>${user.id}</td>
   <td>${user.name}</td>
   <td>${user.email}</td>
   <td>${user.Username}</td>`
    newRow.innerHTML = element
    return newRow
}
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(user => {

            table.appendChild(createRow(user))

        })
    })








// .then(resp=>resp.json()).then(data=>{
//     console.log(data)
//     append_data=(element)=>{
//         lielement=document.createElement("li")
//         user_detail=element['name']+element['username']+element['email']
//     textNode=document.createTextNode(user_detail)
//     lielement.appendChi
//     }
// })
// const list = document.querySelector('ul')