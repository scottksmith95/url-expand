var request = require('request');

module.exports = function (shortUrl, callback) {
  request( { method: "HEAD", url: shortUrl, followAllRedirects: true },
    function (error, response) {
      if (error) { 
        callback(error, null);
      } else {
        callback(null, response.request.href);
      }
  });
};