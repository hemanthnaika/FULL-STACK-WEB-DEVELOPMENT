// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         data.forEach(user => {

//             console.log(data)

//         })
//     })
//!To conver Data into async And Await is only work in async
const fetchData = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(response)
    const data = await response.json()
    console.log(data)
}
fetchData()