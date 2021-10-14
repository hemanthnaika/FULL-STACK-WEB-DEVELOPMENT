//!How to manke get post patch delete request
const express = require('express')
const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    res.send('Server is GET')
})

app.post('/', (req, res) => {
    res.send('Server is POST')
})



app.delete('/', (req, res) => {
    res.send('Server is DELETE')
})

app.patch('/', (req, res) => {
    res.send('Server is PATCH')
})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})