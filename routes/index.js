var express = require('express');
var router = express.Router();
let fs = require('fs');
/* GET home page. */
fs.readFile( 'views/includes/vars.json', 'utf8', 
    (err, dataEnString) => {
        if (err)
            throw err;
        console.log(dataEnString)
        let dataEnObjet = JSON.parse(dataEnString)
        console.log(dataEnObjet)
      
        
        router.get('/', function(req, res, next) {
        res.render('index', { title: 'Express', monMenu:dataEnObjet });
});
    }
);



module.exports = router;
