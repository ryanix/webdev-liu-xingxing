module.exports = function(app)
{

    app.get('/api', function(req, res) {
      res.send('App works');
    });
    app.get("/api/test", findAllMessages);
    app.post("/api/test", createMessage);
    app.delete("/api/test/:id", deleteMessage);


  var connectionString = 'mongodb://127.0.0.1:27017/test'; // for local
  if(process.env.MLAB_WEBDEV_USERNAME) { // check if running remotely
    var username = process.env.MLAB_WEBDEV_USERNAME; // get from environment
    var password = process.env.MLAB_WEBDEV_PASSWORD;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds133104.mlab.com:33104/heroku_9t4lvlcb'; // use yours
  }

  var mongoose = require("mongoose");
    mongoose.connect(connectionString,{useMongoClient:true});

    var TestSchema = mongoose.Schema({
        message: String
    });

    var TestModel = mongoose.model("TestModel", TestSchema);

    function findAllMessages(req, res) {

        TestModel
            .find()
            .then(
                function(tests) {
                    res.json(tests);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function createMessage(req, res) {
        console.log("in app");
        TestModel
            .create(req.body)
            .then(
                function(test) {
                    res.json(test);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function deleteMessage(req, res) {
        TestModel
            .remove({_id: req.params.id})
            .then(
                function(result) {
                    res.json(result);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }
};
