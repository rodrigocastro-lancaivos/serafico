var express = require('express');
var router = express.Router();
const coroinhasController = require("../controllers/coroinhasController");

router.post("/", async function(req, res) {

    const coroinha = await coroinhasController.adicionar(req.body);

    res.redirect("/coroinhas");

});

module.exports = router;