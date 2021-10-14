//!How to manke get post patch delete request
const express = require('express')
const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    //!headers is a Object
    //!To find the user agent or which is give to request using headers key
    //! Exeter using header detail
    console.log(req.headers)
    res.send('Server is GET')
})



app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})