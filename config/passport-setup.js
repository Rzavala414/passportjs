const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys')
passport.use(
    new GoogleStrategy({
        //options for the google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: "http://localhost:3000/auth/google/redirect"
    }, () => {
        //passport callback
    })
);