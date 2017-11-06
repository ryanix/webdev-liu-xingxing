module.exports = function(app) {
  var pageModel = require('../model/page/page.model.server');

  app.post('/api/website/:websiteId/page', createPage);
  app.get('/api/website/:websiteId/page', findAllPagesForWebsites);
  app.get('/api/page/:pageId',findPageById);
  app.put('/api/page/:pageId',updatePage);
  app.delete('/api/page/:pageId',deletePage);

  var pages = [
    { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
  ]

  function createPage(req, res) {
    var webId = req.params['websiteId'];
    var page = req.body;
    page.websiteId = webId;
    pageModel.createPage(webId,page)
      .then(function () {
       return pageModel.findAllPagesForWebsite(webId)
          .then(function (pages) {
            res.json(pages)
          })
      })
  }

  function findAllPagesForWebsites(req, res) {
    var webId = req.params['websiteId'];
    pageModel.findAllPagesForWebsite(webId)
      .then(function (pages) {
        res.json(pages)
      })
    // var ps = pages.filter(function (p) {
    //   return p.websiteId === webId
    // });
    // res.json(ps);
  }

  function findPageById(req, res) {
    var pageId = req.params['pageId'];
    pageModel.findPageById(pageId)
      .then(function (page) {
        res.json(page)
      })
    // var page = pages.find(function (p) {
    //   return p._id === pageId;
    // })
    // if(page) {
    //   res.json(page)
    // } else {
    //   res.json({})
    // }
  }

  function updatePage(req, res) {
    var pageId = req.params['pageId'];
    var page = req.body;
    pageModel.update({_id: pageId}, page)
      .then(function (page) {
        if (Object.getOwnPropertyNames(page).length > 0) {
          res.json(page)
        } else {
          res.json({})
        }
      })
    // for (var i = 0; i < pages.length; i++ ) {
    //   if (pages[i]._id === pageId) {
    //     pages[i] = page;
    //     res.json(page)
    //     return
    //   }
    // }
  }

  function deletePage(req, res) {
    var pageId = req.params['pageId'];
    pageModel.deletePage(pageId)
      .then(function (page) {
        res.json(page)
      })
    // for (var i = 0; i < pages.length; i++) {
    //   if (pages[i]._id === pageId) {
    //     pages.splice(i, 1);
    //     res.json(pages);
    //     return
    //   }
    // }
  }
}
