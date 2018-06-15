

var express = require('express');
var router  = express.Router();

var property_controller = require('../controllers/property-controller');

router.get('/:location', property_controller.index);


module.exports = router;