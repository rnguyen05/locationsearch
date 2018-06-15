

const express = require('express');
const router  = express.Router();
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const user_controller = require('../controllers/user-controller');

//main login page route
router.get('/', user_controller.login);
//login route
router.post('/login', passport.authenticate("local"), user_controller.loginUser);
//register route
router.get('/registration', user_controller.registration);

//Facebook
router.get('/auth/facebook', passport.authenticate('facebook', {scope:"email"}));

router.get('/auth/facebook/callback', passport.authenticate('facebook', 
{ successRedirect: '/', failureRedirect: '/login' }));


module.exports = router;