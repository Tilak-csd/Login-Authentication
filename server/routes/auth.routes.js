const express = require("express");
const router = express.Router();

//impoting 
const {login} = require("../controllers/auth.controllers")


// Routes
router.post('/login', login)
// router.post('/register', register)

module.exports = router;