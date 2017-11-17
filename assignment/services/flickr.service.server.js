module.exports = function (app) {
  app.post('/api/flickr/search', searchForPhoto);

  var http = require('http');

  const key = process.env.FLICKR_KEY
  const secret = process.env.FLICKR_SECRET
  const baseUrl = process.env.FLICKR_BASE_URL

  function searchForPhoto(req, res) {
    const searchTerm = req.body
    const url = urlBase
      .replace('API_KEY', key)
      .replace('TEXT', searchTerm);
    return this.http.get(url);
  }
}
