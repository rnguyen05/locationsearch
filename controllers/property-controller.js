const db = require("../models");


exports.index = function (req, res) {
    // console.log("inside property-controller");
    // console.log(req.params.location);
    db.Property.findAll({
        where: {
          zipcode: req.params.location
        },
        raw:true
      }).then(function(dbProperty) {
        console.log(dbProperty);
        res.render('properties/properties'
        , {
          layout: "main-properties"
          ,
          property: dbProperty
        }
        
      );
      
      });
};




