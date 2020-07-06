const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
    new GoogleStrategy({
        //options for the google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: "/auth/google/redirect"
    }, (accessToken, refreshToken, profile, done) => {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
          return cb(err, user);
        });
    })
);