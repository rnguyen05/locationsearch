
const db = require("../models");


exports.getProperties = function(req, res) {
    console.log(req);
    db.Property.findAll({
        where: {zipcode: req.body.zipcode}
      }).then(function(results){
        console.log(results);
        res.json(results);
    });
};