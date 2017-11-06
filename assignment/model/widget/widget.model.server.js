var mongoose = require('mongoose');
var WidgetSchema = require('./widget.schema.server');
var WidgetModel = mongoose.model('WidgetModel', WidgetSchema)
var pageModel = require('../page/page.model.server');


WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.reorderWidget = reorderWidget;

module.exports = WidgetModel;


function createWidget(pageId, widget) {
  return WidgetModel.create(widget)
    .then(function (widget) {
      newWidget = widget;
      return pageModel.findPageById(pageId)
        .then(function (page) {
          page.widgets.push(newWidget);
          return page.save();
        })
    })
}
function findAllWidgetsForPage(pageId) {
  return pageModel.findOne({_id: pageId})
    .populate('widgets')
    .exec()
}

function findWidgetById(widgetId) {
  return WidgetModel.findOne({_id: widgetId})
}

function updateWidget(widgetId, widget) {
  return WidgetModel.update({_id: widgetId}, widget)
}

function deleteWidget(widgetId) {
  return WidgetModel.remove({_id: widgetId})
}

function reorderWidget(pageId, start, end) {
  return pageModel.findPageById(pageId)
    .then(function (page) {
      page.widgets.splice(end, 0, page.widgets.splice(start, 1)[0]);
      return page.save();
    })
}
