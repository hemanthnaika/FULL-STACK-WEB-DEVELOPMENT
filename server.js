//! How to  allowed and Blocked
const express = require('express')
const PORT = 3000
const app = express()


app.get('/', (req, res) => {
    console.log(req)
    if (req.headers['user-agent'] === "Thunder Client (https://www.thunderclient.io)") res.send('Server is GET')
    else res.send("BLOCKED")

})



app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})