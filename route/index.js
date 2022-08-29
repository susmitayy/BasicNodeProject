const express = require('express')
const router = express.Router()


//controller  file access
const indexController = require('./../controller/index')


//get request
router.get('/',indexController.getIndex)

module.exports = router
