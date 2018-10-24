const User = require('../schema/user');
const jwt = require('jwt-simple');
const config = require('../../conf/config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat:timestamp }, config.secret);
}


exports.signin = function(req, res, next){
   //User has already has their email and password auth'd, we just need to give them a token
   res.send({ token: tokenForUser(req.user) });
}


exports.signup = function (req, res, next) {
    
   const param = req.body; //JSON.parse(Object.keys(req.body)[0]);

   const email = param.email;
   const password = param.password;
   console.log(`email: ${email} and password: ${password} for Signup request received.`)

   if(!email ||  !password){
      return res.status(422).send({ error: 'You must provide email and password'});
   }

    User.findOne({ email: email }, function(err, existingUser){
        if(err) {
            return next(err);
        }

        if(existingUser){
            return res.status(422).send({ error: 'email is in use'});
        }

        const user = new User({
           email: email,
           password: password
        });

        user.save(function(err){
            if(err) {
                return next(err);
            }
            
            res.json({token: tokenForUser(user)});
        });
        
    });
}