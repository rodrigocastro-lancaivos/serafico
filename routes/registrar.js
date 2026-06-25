var express = require('express');
var router = express.Router();
const authController = require("../controllers/authController");

// Rota POST para /registrar
router.post("/", authController.registrar);

module.exports = router;