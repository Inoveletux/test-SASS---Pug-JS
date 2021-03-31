var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
      //On passe en paramètre du render la variable pour pouvoir le lire
    res.render('contact');
});


module.exports = router;