var express = require('express');
var router  = express.Router();

var property_controller = require('../controllers/property-controller');
router.get('/', property_controller.getProperties);

module.exports = router;