const database = require('../database/db')
const express = require('express')
    // const { category } = require('../database/db')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

router.get('/all', (req, res) => {

    try {
        res.status(200).json({
            categories: database.categories,
            message: "Success Fetched",
            status: "success"
        })


    } catch (error) {
        res.status(200).json({
            categories: [],
            message: error.message,
            status: "Failed"
        })
    }
})
router.post('/add', (req, res) => {
        try {
            const { name } = req.body
            let newCategory = {
                name,
                id: uuidv4()
            }
            database.categories.push(newCategory)
            res.status(200).json({
                category: category,
                message: error.message,
                status: "Success"
            })
        } catch (error) {
            res.status(200).json({
                category: category,
                message: error.message,
                status: "Failed"
            })
        }
    })
    //Exports the Router
module.exports = router