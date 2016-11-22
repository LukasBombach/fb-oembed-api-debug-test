var request = require('request');

var oEmbedApiEndpoint = 'https://www.facebook.com/plugins/post/oembed.json/?url=';
var postUrl = 'https://www.facebook.com/FacebookforDevelopers/posts/10154088773123553';
var headers = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36' }

console.log('Requesting', oEmbedApiEndpoint + postUrl, 'with chrome user agent', '\n\n\n\n');

request.get({ url: oEmbedApiEndpoint + postUrl, headers: headers }, function(err, res, body) {
  console.log(body);
});
