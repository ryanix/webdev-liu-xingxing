module.exports = function(app) {
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

  function findUsers(req, res) {
    var username = req.query['username']
    var password = req.query['password']
    var user = {}
    if (username && password) {
      user = users.find(function (u) {
        return u.username === username && u.password === password
      })
    }else if (username) {
      user = users.find( function (u) {
        return u.username === username
      })
    }
    res.json(user)
  }

  function createUser(req, res) {
    var user = req.body;
    const id = (users.length + 1).toString();
    user._id = id;
    users.push(user)
    res.json(user);
  }


  function findUserById(req, res) {
    var userId = req.params['userId']
    var user = users.find(function (u) {
      return u._id === userId
    });
    if (user) {
      res.json(user)
    } else {
      res.json({})
    }
  }

  function updateUser(req, res) {
    var user = req.body;
    var userId = req.params['userId'];
    for (var i = 0; i < users.length; i++) {
      if(users[i]._id === userId) {
        users[i] = user;
        res.json(user);
        return;
      }
    }
  }

  function deleteUser(req, res) {
    var user = req.body;
    var userId = req.params['userId'];
    for (var i = 0; i < users.length; i++) {
      if(users[i]._id === userId) {
        users.splice(i,1);
        res.json({});
        return;
      }
    }
  }
}
