module.exports = function(app) {
  var mime = require('mime');
  var crypto = require('crypto');
  var multer = require('multer'); // npm install multer --save
  // var storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, __dirname+'/../../src/assets/uploads')
  //   },
  //   filename: function (req, file, cb) {
  //     crypto.pseudoRandomBytes(16, function (err, raw) {
  //       cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
  //     });
  //   }
  // });
  // var upload = multer({ storage: storage });

  var upload = multer({ dest: __dirname+'/../../src/assets/uploads' });

  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);
  app.put('/page/:pageId/widget', reOrderWidgets);
  app.post ("/api/upload", upload.single('myFile'), uploadImage);

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

  function createWidget(req, res) {
    var pageId = req.params['pageId'];
    var widget = req.body;
    var id = (widgets.length + 1).toString();
    widget._id = id;
    widget.developerId = pageId;
    widgets.push(widget);
    res.json(widget)
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params['pageId'];
    var ws = widgets.map( function(w) {
      if(w.pageId === pageId) {
        return w
      }
    });
    res.json(ws);
  }

  function findWidgetById(req, res) {
    var widgetId = req.params['widgetId'];
    var widget = widgets.find( function (w) {
      return w._id === widgetId;
    });
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
        res.json(widget);
        return
      }
    }
  }

  function deleteWidget(req, res) {
    var widgetId = req.params['widgetId'];
    var widget = req.body;
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        widgets.splice(i,1);
        res.json(widgets);
        return
      }
    }
  }

  function reOrderWidgets(req, res) {
    var pageId = req.params['pageId'];
    var start = req.query['initial'];
    var end = req.query['final'];
    widgets.splice(end, 0, widgets.splice(start, 1)[0]);
    res.json(widgets)
  }

  function uploadImage(req, res) {

    var myFile        = req.file;

    var widgetId      = req.body.widgetId;
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    widget = getWidgetById(widgetId);
    widget.url = 'assets/uploads/' + filename;

    var callbackUrl   = "/user/"+userId+"/website/"+websiteId+"/page/" + pageId + '/widget/' + widgetId;

    res.redirect(callbackUrl);

  }

  function getWidgetById(wid) {
    return widgets.find(function (w) {
      return w._id === wid;
    })
  }
}

