const database = require('../database/db')
const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

/*
ROUTE: http://localhost:3001/products/all
METHOD: GET
*/

router.get('/all', (req, res) => {

    try {
        res.json({
            products: database.products,
            message: "Successfully fetched products",
            status: "SUCCESS"
        })
    } catch (error) {
        console.log(error)
        res.json({
            products: [],
            message: error.message,
            status: "FAILED"
        })
    }

})

/*
ROUTE: http://localhost:3001/products/add
METHOD: POST
*/

router.post('/add', (req, res) => {

        const { name, price, category } = req.body

        if (!database.categories.find(item => item.name === category)) {
            // create a category if it doesn't already exist
            let newCategory = { name: category, id: uuidv4() }
            database.categories.push(newCategory)
                // create a product & add it
            const newProduct = {
                id: uuidv4(),
                name,
                price,
                category: category
            }
            database.products.push(newProduct)
        } else {
            const newProduct = {
                id: uuidv4(),
                name,
                price,
                category: category
            }
            database.products.push(newProduct)
        }

        try {
            res.json({
                products: database.products,

                message: "Successfully add products",
                status: "SUCCESS"
            })
        } catch (error) {
            console.log(error)
            res.json({
                products: [],
                message: error.message,
                status: "FAILED"
            })
        }

    })
    // ----------Product Delete
router.delete('/delete/:id', (req, res) => {
        try {
            const { id } = req.params
            const newProducts = database.products.filter(item => item.id !== id)
            database.products = newProducts


            res.json({
                products: newProducts,
                message: "Successfully removed products",
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
    // -----Update Router
router.post('/update', (req, res) => {
    let new_details = req.body
    const { id } = new_details
    let product = database.products.find((product) => product.id === id)
    let attributes = Object.keys(new_details)
    attributes.forEach((key) => {
        console.log(product[key], new_details[key])
        product[key] = new_details[key]
    })
    console.log(product)
    try {
        res.status(200).json({
            product: database.products,
            message: "Product updated successfully",
            status: "Success"
        })
    } catch (error) {
        res.json(200).json({
            product: [],
            massage: error.message,
            status: "Failed"
        })
    }
})
module.exports = router