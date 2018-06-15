
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "username"
  },
  function(username, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        username: username
      }
    }).then(function(dbUser) {
      // If there's no user with the given username
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      // If there is a user with the given username, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));


// //Facebook Authentication
// clientID: credentials.facebook.app_id,
// clientSecret: credentials.facebook.app_secret,
// callbackURL: credentials.facebook.callback,
passport.use(new FacebookStrategy({
	clientID: "202065647087620",
	clientSecret: "77c213b28e805272002ed465854d3cca",
	callbackURL: 'http://localhost:3000/login/facebook/return',
	profileFields:['id','displayName','emails']
	}, function(accessToken, refreshToken, profile, done) {
		console.log(profile);
		var me = new user({
			email:profile.emails[0].value,
			name:profile.displayName
		});

		/* save if new */
		user.findOne({email:me.email}, function(err, u) {
			if(!u) {
				me.save(function(err, me) {
					if(err) return done(err);
					done(null,me);
				});
			} else {
				console.log(u);
				done(null, u);
			}
		});
  }
));






// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;