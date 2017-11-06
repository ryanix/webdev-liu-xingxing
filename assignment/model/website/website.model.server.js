var mongoose = require('mongoose');
var WebsiteSchema = require('./website.schema.server');
var WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);
var userModel = require('../user/user.model.server');

WebsiteModel.createWebsiteForUser = createWebsiteForUser;
WebsiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.deleteWebsite = deleteWebsite;

module.exports = WebsiteModel;

function createWebsiteForUser(userId, website) {
  return WebsiteModel.create(website)
    .then(function (web) {
      newWeb = web;
      userModel.findUserById(userId)
        .then(function(user) {
          user.websites.push(newWeb._id)
          return user.save()
        })
    })
}
function findAllWebsitesForUser(userId) {
  return WebsiteModel.find({_user:userId})
    .populate('_user', 'username')
    .exec();
}
function findWebsiteById(websiteId) {
  return WebsiteModel.findOne({_id: websiteId})
}
function updateWebsite(websiteId, website) {
  return WebsiteModel.update({_id: websiteId}, website)
}
function deleteWebsite(websiteId) {
  return WebsiteModel.remove({_id: websiteId})
}





