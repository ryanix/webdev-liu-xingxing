var mongoose = require('mongoose');
var PageSchema = require('./page.schema.server');
var PageModel = mongoose.model('PageModel', PageSchema)
var websiteModel = require('../website/website.model.server');

PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;

module.exports = PageModel;

function createPage(websiteId, page){
  return PageModel.create(page)
    .then(function (page) {
      newPage = page;
      websiteModel.findWebsiteById(websiteId)
        .then(function(web) {
          web.pages.push(newPage._id)
          return web.save()
        })
    })
}

function findAllPagesForWebsite(websiteId) {
  return PageModel.find({_website: websiteId})
    .populate('_website', 'name')
    .exec()
}

function findPageById(pageId) {
  return PageModel.findOne({_id: pageId})
}

function updatePage(pageId, page) {
  return PageModel.update({_id: pageId}, page)
}

function deletePage(pageId) {
  return PageModel.remove({_id: pageId})
}
