module.exports = function(app) {
  var userModel = require('../model/user/user.model.server');

  var bcrypt = require('bcrypt-nodejs');

  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var FacebookStrategy = require('passport-facebook').Strategy;

  const facebookConfig = {
    clientID     : process.env.FACEBOOK_CLIENT_ID,
    clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL  : process.env.FACEBOOK_CALLBACK_URL
  }


  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new LocalStrategy(localStrategy));
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));


  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/register', register);
  app.post('/api/loggedin', loggedIn);
  app.post('/api/logout', logout);
  app.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/#/profile',
      failureRedirect: '/#/login'
    }));
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.delete('/api/user/:userId', deleteUser);
  app.post('/api/user', createUser);
  app.get('/api/user', findUsers);



  var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
  ]
  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel.crewateUser(user)
      .then(
        function (user) {
          if(user)
            req.login(user, function(err) {
              if(err) {
                res.status(400).send(err)
              } else {
                res.json(user)
              }
            });
        }
      );
  }

  function logout(req, res) {
    req.logOut();
    res.sendStatus(200);
  }

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel.findUserById(user._id)
      .then(
        function (user) {
          done(null, user);
        },
        function (err) {
          done(err,null);
        });
  }

  function localStrategy(username, password, done) {
    userModel.findUserByCreadentials(username, password)
      .then(
        function (user) {
          if(user.username == username && bcrypt(password, user.password)) {
            return done(null, user);
          }else {
            return done(null, false);
          }
        },
        function (err) {
          return done(err, null);
        }
      );
  }

  function facebookStrategy(token, refreshToken, profile, done) {
    console.log(token, refreshToken, profile);
    userModel.findUserByFacebookId(profile.id)
      .then(
        function( user ) {
          if (!user) {
            userModel.crewateUser(profile)
          }
          return done(null, user)
        },
        function (err) {
          return done(err, null)
        }
      )
  }

  function findUsers(req, res) {
    var username = req.query['username']
    var password = req.query['password']
    var user = {}
    if (username && password) {
      userModel.findUserByCreadentials(username, password)
        .then(function (users) {
          res.json(users)
        })
    }else if (username) {
      userModel.findUserByUsername(username)
        .then(function(users) {
          res.json(users)
        })
    }
  }

  function createUser(req, res) {
    var newUser = req.body;
    delete newUser._id;
    userModel.crewateUser(newUser)
      .then(function (user) {
        res.json(user)
      })
  }


  function findUserById(req, res) {
    var userId = req.params['userId']
    userModel.findUserById(userId)
      .then(function (user) {
        if (user) {
          res.json(user)
        } else {
          res.json({})
        }
      })
  }

  function updateUser(req, res) {
    var user = req.body;
    var userId = req.params['userId'];
    userModel.updateUser(userId, user)
      .then(function (user) {
        if(user){
          res.json(user)
        }else{
          res.json({})
        }
      })
    // for (var i = 0; i < users.length; i++) {
    //   if(users[i]._id === userId) {
    //     users[i] = user;
    //     res.json(user);
    //     return;
    //   }
    // }
  }

  function deleteUser(req, res) {
    var user = req.body;
    var userId = req.params['userId'];
    userModel.deleteUser(userId)
      .then(function (user) {
        res.json(user)
      })
    // for (var i = 0; i < users.length; i++) {
    //   if(users[i]._id === userId) {
    //     users.splice(i,1);
    //     res.json({});
    //     return;
    //   }
    // }
  }
}
