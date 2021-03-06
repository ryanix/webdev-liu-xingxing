module.exports = function(app) {
  var websiteModel = require('../model/website/website.model.server');

  app.get('/api/user/:userId/website', findAllWebsitesForUser);
  app.post('/api/user/:userId/website', createWebsite);
  app.get('/api/website/:websiteId', findWebsiteById);
  app.put('/api/website/:websiteId', updateWebsite);
  app.delete('/api/website/:websiteId', deleteWebsite);

  const websites = [
    { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
  ]

  function findAllWebsitesForUser(req, res) {
    var userId = req.params['userId'];
    websiteModel.findAllWebsitesForUser(userId)
      .then(function (webs) {
        res.json(webs)
      })
  }

  function createWebsite(req, res) {
    var userId = req.params['userId'];
    var web = req.body;
    websiteModel.createWebsiteForUser(userId,web)
      .then(function () {
        websiteModel.findAllWebsitesForUser(userId)
          .then(function (webs) {
            res.json(webs)
          })
      })
  }

  function findWebsiteById(req, res) {
    var webId = req.params['websiteId'];
    websiteModel.findWebsiteById(webId)
      .then(function (web) {
        if (Object.getOwnPropertyNames(web).length > 0) {
          res.json(web)
        } else {
          res.json({})
        }
      })
    // var web = websites.find(function (w) {
    //   return w._id === webId;
    // })
    // if (web) {
    //   res.json(web)
    // } else {
    //   res.json({})
    // }
  }

  function updateWebsite(req, res) {
    var webId = req.params['websiteId'];
    var web = req.body;
    websiteModel.updateWebsite(webId, web)
      .then(function (web) {
        if (Object.getOwnPropertyNames(web).length > 0) {
          res.json(web)
        } else {
          res.json({})
        }
      })
    // for (var i = 0; i < websites.length; i++) {
    //   if (websites[i]._id === webId) {
    //     websites[i] = web;
    //     res.json(web)
    //     return
    //   }
    // }
  }

  function deleteWebsite(req, res) {
    var webId = req.params['websiteId'];
    websiteModel.deleteWebsite(webId)
      .then(function (web) {
        if (Object.getOwnPropertyNames(web).length > 0) {
          res.json(web)
        } else {
          res.json({})
        }
      })
    // for (var i = 0; i < websites.length; i++) {
    //   if (websites[i]._id === webId) {
    //     websites.splice(i,1)
    //     res.json(websites);
    //     return
    //   }
    // }
  }
}
