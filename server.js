// //!To create server using Express
// const express = require('express')
// const PORT = 3000
// const app = express()
//     // console.log(express)
//     // app.post('/', (req, res) => {
//     //     res.send("Server is running")
//     // })

// // app.post('/', (req, res) => {
// //     res.send("login From")
// // })
// // app.patch('/', (req, res) => {
// //     res.send("login From")
// // })
// // app.delete('/', (req, res) => {
// //     res.send("login From")
// // })

// const verify = (req, res, next) => {
//         if (req.headers['user-agent'] === "http://localhost:3000/"
//             next()
//             else res.send("Blocked")
//         }
//   app.get('/', verify, (req, res) => {
//             res.send("HIII")
//      })

//         // app.get('/', (req, res) => {
//         //             // console.log(req.headers.['user-agent'])
//         //             if (req.headers['user-agent'] === ("thander") res.send('GET')
//         //                 else res.send("Blocked")

//         //             }) 
//         app.listen(PORT, () => {
//             console.log(`Server Listening at port `)
//         })

const express = require('express')
const PORT = 3000
const app = express()


const verify = (req, res, next) => {
    if (req.headers['user-agent'] === "Thunder Client (https://www.thunderclient.io)") next()
    else res.send("BLOCKED")
}

app.get('/', verify, (req, res) => {
    res.send('VERIFIED')

})



app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})