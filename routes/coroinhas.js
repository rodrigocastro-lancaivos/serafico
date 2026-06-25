var express = require('express');
var router = express.Router();
const coroinhasController = require('../controllers/coroinhasController')

/* GET users listing. */
router.get('/', async function(req, res, next) {

  const coroinhas = await coroinhasController.exibir()
  
  res.render('coroinhas', {
    paginaAtiva: "coroinhas",
    perfil: "",
    coroinhas: coroinhas});
});

module.exports = router;