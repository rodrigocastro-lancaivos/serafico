var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.render('escala', {paginaAtiva: "escala", perfil: ""});
});

module.exports = router;
