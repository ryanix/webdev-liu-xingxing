module.exports = function(app) {
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);
  app.put('/page/:pageId/widget?initial=index1&final=index2', reOrderWidgets);

  var widgets = [
    { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
      "url": "http://lorempixel.com/400/200/"},
    { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
      "url": "https://youtu.be/AM2Ivdi9c4E" },
    { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
  ]
  function reOrderWidgets(req, res) {
    
  }

  function createWidget(req, res) {
    var pageId = req.params['pageId']
    var widget = req.body;
    var id = (widgets.length + 1).toString()
    widget._id = id;
    widget.developerId = pageId;
    widgets.push(widget)
    res.json(widget)
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params['pageId']
    var ws = widgets.map( function(w) {
      if(w.pageId === pageId) {
        return w
      }
    });
    res.json(ws);
  }

  function findWidgetById(req, res) {
    var widgetId = req.params['widgetId']
    var widget = widgets.find( function (w) {
      return w._id === widgetId;
    })
    if (widget) {
      res.json(widget)
    } else {
      res.json({})
    }
  }

  function updateWidget(req, res) {
    var widgetId = req.params['widgetId']
    var widget = req.body;
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i]._id ===widgetId) {
        widgets[i] = widget;
        res.json(widget)
        return
      }
    }
  }

  function deleteWidget(req, res) {
    var widgetId = req.params['widgetId']
    var widget = req.body;
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        widgets.splice(i,1);
        res.json(widgets)
        return
      }
    }
  }

}
