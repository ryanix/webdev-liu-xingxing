module.exports = function(app) {
  app.post('/api/website/:websiteId/page', createPage);
  app.get('/api/website/:websiteId/page', findAllPagesForWebsites);
  app.get('/api/page/:pageId',findPageById);
  app.put('/api/page/:pageId',udpatePage);
  app.delete('/api/page/:pageId',deletePage);

  var pages = [
    { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
  ]

  function createPage(req, res) {
    var webId = req.params['websiteId'];
    var id = (pages.length + 1).toString();
    var page = req.body;
    page._id = id;
    page.websiteId = webId;
    pages.push(page);
    res.json(page);
  }

  function findAllPagesForWebsites(req, res) {
    var webId = req.params['websiteId'];
    var ps = pages.map(function (p) {
      if (p.websiteId === webId) {
        return p;
      }
    });
    res.json(ps);
  }

  function findPageById(req, res) {
    var pageId = req.params['pageId'];
    var page = pages.find(function (p) {
      return p._id = pageId;
    })
    if(page) {
      res.json(page)
    } else {
      res.json({})
    }
  }

  function udpatePage(req, res) {
    var pageId = req.params['pageId'];
    var page = req.body;
    for (var i = 0; i < pages.length; i++ ) {
      if (pages[i]._id === pageId) {
        pages[i] = page;
        res.json(page)
        return
      }
    }
  }

  function deletePage(req, res) {
    var pageId = req.params['pageId'];
    for (var i = 0; i < pages.length; i++) {
      if (pages[i]._id === pageId) {
        pages.slice(i, 1);
        res.json(pages);
        return
      }
    }
  }
}
