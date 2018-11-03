var express = require('express');
var router = express.Router();


const porcupine = require('pv-porcupine').default;

const detector = new porcupine.Porcupine('node_modules/pv-porcupine/Porcupine/lib/common/porcupine_params.pv', 'keywords/Wake up_mac.ppn');

const buffer = Buffer.alloc(2 * porcupine.frameLength());
// Fill the buffer with audio data...
console.log(detector.process(buffer));

// When done, call destroy to free resources
detector.destroy();

/* GET home page. */
router.get('/', function(req, res, next) {


  // res.render('index', { title: 'Express' });
});

module.exports = router;
