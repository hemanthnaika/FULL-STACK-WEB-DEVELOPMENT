//! TO CREATE AUTHORIZE UNAUTHORIZE OR  ADMIN USING THUNDER CLIENT
//!IN HEADER IS ADMIN OR NOT
const express = require('express')
const PORT = 3000
const app = express()

const isAdmin = (req, res, next) => {
    if (req.headers.admin === 'true') next()
    else res.send("UNAUTHORIZE")
}
app.get('/public', (req, res) => {
    console.log(req.headers)
    res.send(`I'm public rout`)
})

app.get('/private', isAdmin, (req, res) => {
    res.send(`I'm Admin rout`)
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})