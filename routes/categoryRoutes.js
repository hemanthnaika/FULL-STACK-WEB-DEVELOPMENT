const database = require('../database/db')
const express = require('express')
const router = express.Router()

router.get('/all', (req, res) => {
    //!To check error or not 
    try {
        categories: database.category,
        mseeage: "success fetch",
        status: "success"

    }
    catch (error) {
        res.json({
            category: [],
            message: error.message,
            status: "Failed"
        })
    }
})