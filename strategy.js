const config = require('./config');
const auth0strategy = require('passport-auth0');

module.exports = new auth0strategy({
    domain: config.domain,
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: '/login'
}, function(accessToken, refreshToken, extraParams, profile, done){
    return done(null, profile)
}) 