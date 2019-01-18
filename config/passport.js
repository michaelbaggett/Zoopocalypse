var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(
  new LocalStrategy(function(username, password, done) {
    db.User.findOne({
      where: {
        username: username
      }
    })
      .then(function(dbUser) {
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect username"
          });
        } else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "incorrect password"
          });
        }
        return done(null, dbUser);
      })
      .catch(err => console.log("Passport findOne err: ", err));
  })
);

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
