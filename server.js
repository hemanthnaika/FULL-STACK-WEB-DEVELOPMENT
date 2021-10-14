//!How to manke get and post request
const express = require('express')
const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    res.send('Server is running')
})

app.post('/', (req, res) => {
    res.send('login Form')
})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})