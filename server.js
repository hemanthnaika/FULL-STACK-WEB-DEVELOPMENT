const express = require('express')
const app = express()
const PORT = 3000
const database = require('./database/db')
    //!Import the router
const cateegoryRoutes = require('./routes/categoryRoutes')
console.log(cateegoryRoutes.stack)
app.use(express.json())
    //http://3000/temp/routes
app.use('/temp', cateegoryRoutes)
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