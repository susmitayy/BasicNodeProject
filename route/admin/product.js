// const { Router } = require('express')
const express = require('express')
const route = express.Router()

//contorller
const productController = require('./../../controller/admin/product')

//get product
route.get('/view-products', productController.getViewProduct)
route.get('/add-product' ,productController.getAddProduct)
route.get('/edit-product/:id' ,productController.getEditProduct)
route.get('/delete-product/:id', productController.getDeleteProduct)

//post product
route.post('/add-product', productController.postAddProduct)
route.post('/edit-product/:id', productController.postEditProduct)


module.exports = route

