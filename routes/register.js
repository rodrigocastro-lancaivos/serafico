var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('register', {paginaAtiva: '', perfil: ''});
});

module.exports = router;