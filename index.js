var request = require('request');

var oEmbedApiEndpoint = 'https://www.facebook.com/plugins/post/oembed.json/?url=';
var postUrl = 'https://www.facebook.com/FacebookforDevelopers/posts/10154088773123553';

console.log('Requesting', oEmbedApiEndpoint + postUrl, '\n\n\n\n');

request.get(oEmbedApiEndpoint + postUrl, function(err, res, body) {
  console.log(body);
});
