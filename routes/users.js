

const express = require('express');
const router  = express.Router();
const passport = require("../config/passport");

const user_controller = require('../controllers/user-controller');
const isAuthenticated = require("../config/middleware/isAuthenticated");


/////////////// Local Routes ///////////////
//main login page route
router.get('/', user_controller.index);

//login route
router.post('/', passport.authenticate("local"), user_controller.loginUser);

//Registration page route
//router.get('/signup', user_controller.registrationPage);

//Sign up new user route
//router.post('/signup',user_controller.signUpUser);

//Sign out route
//router.get('/sign-out', users_controller.signOutUser);

/////////////// Facebook Routes /////////////
// app.get('/login',
// function(req, res){
//   res.render('login');
// });

// app.get('/login/facebook',
// passport.authenticate('facebook'));

// app.get('/login/facebook/return', 
// passport.authenticate('facebook', { failureRedirect: '/login' }),
// function(req, res) {
//   res.redirect('/');
// });

// app.get('/profile',
// require('connect-ensure-login').ensureLoggedIn(),
// function(req, res){
//   res.render('profile', { user: req.user });
// });




module.exports = router;