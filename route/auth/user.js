const express = require("express")
const router = express.Router();

const app = express();

// controller
const authController = require("../../controller/auth/login")

router.get('/login', authController.getLogin)

router.post('/login', authController.postLogin)

module.exports = router; 