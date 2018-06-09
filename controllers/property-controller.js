
const db = require("../models");

exports.index = function(req, res) {
    console.log("zzzzz---inside controllers/property-controller.js");
    db.Property.findAll({
      where: {
        zipcode: req.params.location
      }
    }).then(function(dbProperty) {
      console.log(dbProperty);
      res.render('properties/properties'
    //   , {
    //     layout: 'main-properties',
    //     property: dbProperty
    //   }
    );
    });
};
