const express = require('express')
const app = express()
const PORT = 3000
const database = require('./database/db')
app.use(express.json())

app.get('/', (req, res) => {
    try {
        console.log(document)
    } catch (error) {
        res.send(error.message)
    }

})


app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})