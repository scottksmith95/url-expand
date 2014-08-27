var request = require('request');
var tough = require('tough-cookie');

module.exports = function (shortUrl, callback) {
  var useragent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36';
  var jar = request.jar();
    
  var options = {
    method: 'GET',
    url: shortUrl,
    followAllRedirects: true,
    headers: { 
      'User-Agent': useragent
    },
    jar: jar
  };

  request(options, function (error, response) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, response.request.href);
    }
  });
};