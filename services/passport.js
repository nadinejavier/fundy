const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');


passport.use( new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('acccessToken', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile);
      console.log('done:', done);
    }
  )
);