module.exports = function (app) {
  app.post('/api/flickr/search', searchForPhoto);

  var request = require('request');

  const key = process.env.FLICKR_KEY
  const secret = process.env.FLICKR_SECRET
  const baseUrl = process.env.FLICKR_BASE_URL

  function searchForPhoto(req, res) {
    const searchTerm = req.body
    const url = baseUrl
      .replace('API_KEY', key)
      .replace('TEXT', searchTerm);
    request.get(url ,function (error, response, body) {
      res.send(body)
    })
  }
}
