const passport = require('passport');
const User = require('../schema/user');
const config = require('../../conf/config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');


//Create local strategy [FOR FIRST-TIME LOGIN SCHENARIO]
//By-default, it assumes 'username' and 'password' as passed field. however we have email instead of username. so need clarify on localOptions
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done){
   //verify email and password. call 'done' with user if correct email(i.e. username) and password. otherwise call done with false
   User.findOne({ email: email}, function(err, user){
     if(err){
         return done(err);
     }
     if(!user){
         return done(null, false);
     }

     //compare passwords - is 'password' equal to decoded (user.password)
     user.comparePassword(password, function(err, isMatch){
        if(err){
            return done(err);
        }
        if(!isMatch){
            return done(null, false);
        }
        return done(null, user);
     });
   });

});



//Setup options for JWT strategy[FOR SIGN-UP SCHENARIO]
const jwtOptions = {
    //Extract the token called 'authorization' from header (whenever the request comes)
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

//Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){

   //see if the userId in the payload exists in our database, If it does, call 'done' with that. 
   //Otherwise, call 'done' without a user object
   User.findById(payload.sub, function(err, user){
      if(err){
          return done(err, false);
      }

      if(user){
          done(null, user);
      }
      else {
          done(null, false);
      }

   });
});


//Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);