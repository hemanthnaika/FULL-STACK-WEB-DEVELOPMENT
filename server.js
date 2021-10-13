const express = require('express')
const PORT = 3000
const app = express()

app.unsubscribe(express.json())
app.post('/signup', (req, res) => {
    console.log(req.body)
    res.send('daaaaaa')
})


app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})