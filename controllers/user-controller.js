

const db = require("../models");

//main login page
exports.login = function(req, res) {
    res.render('users/login', 
                {
                    layout: "main-login"
                });
};

//Registration page
exports.registration = function (req, res) {
    res.render('users/registration', {
        layout: "main-registration"
    });
};

//Logout redirect to index page
exports.signOutUser = function(req,res) {
    req.logout();
    res.redirect("/");
};

//Login - sends back json for window.location.replace()
exports.loginUser = function(req, res) {
    console.log("was in user-controller/loginUser");
    console.log(req);
    console.log(res);
    res.json("/");
};

//Register a User
exports.signUpUser = function(req,res) {
    db.User.findAll({
    where: {username: req.body.username}
    }).then(function(users) {
    if (users.length > 0) {
        res.json({
        duplicateUser: true
        });
    } else {
        db.User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
        }).then(function() {
        res.send({redirect: '/'});
        }).catch(function(err) {
        res.json(err);
        });
    }
    })
};