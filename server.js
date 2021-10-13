//!To create server using Express
const express = require('express')
const app = express()
app.get('/Login', (req, res) => {
    console.log(req)
    console.log(req.url)
    res.send('This is login')
})
app.get('/signup', (req, res) => {
        // console.log(req)
        // console.log(req.url)
        res.send('This is signup')
    })
    //!To create server
app.listen(3000, () => {
    console.log("Server Listening at pore 3000")
})