const database = require('../database/db')
const express = require('express')
const router = express.Router()
const { v4: uuid4 } = require('uuid')
const { categories } = require('../database/db')
const product = require('./productRoutes')

router.get('/all', (req, res) => {

    try {
        res.json({
            orders: database.products,
            // orders: database.orders,
            message: "Successfully fetched Orders",
            status: "SUCCESS"
        })
    } catch (error) {
        console.log(error)
        res.json({
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }

})
module.exports = router