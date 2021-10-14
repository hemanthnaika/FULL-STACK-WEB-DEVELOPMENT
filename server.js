//!To send the POST USING JSON OBJECT
const express = require('express')
const PORT = 3000
const app = express()
    //!Express convert into stream using express.json
app.use(express.json())

app.post('/signup', (req, res) => {
    console.log(req.body)
    res.send("Successfully")
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})