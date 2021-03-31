var express = require('express');
var router = express.Router();
let fs = require('fs');
/* GET home page. */

//On demande de lire le fichier JSON qui contient ma variable, en UTF8 pour les caractères spéciaux
fs.readFile( 'views/includes/vars.json', 'utf8', 
  //Renvois l'erreur en cas de soucis sinon renvois les datas encore pas parsés
    (err, dataEnString) => {
        if (err)
            throw err;
        //renvois mon JSON mais non parse
        //console.log(dataEnString)
        let dataEnObjet = JSON.parse(dataEnString)
        //Renvois mon JSON parsé
        //console.log(dataEnObjet)
      
        
        router.get('/', function(req, res, next) {
          //On passe en paramètre du render la variable pour pouvoir le lire
        res.render('index', { title: 'Express', monMenu:dataEnObjet });
});
    }
);



module.exports = router;
