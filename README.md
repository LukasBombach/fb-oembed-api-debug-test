# fb-oembed-api-debug-test

This is a demonstration of the bug as reported at https://developers.facebook.com/bugs/1120612631391034/

When you query Facebooks oEmbed API using node, you will get an error page telling you to upgrade your browser. 
The problem can be worked around by setting the `User-Agent` to fake a supported browser.

## Description

This project uses the popular node library [request](https://www.npmjs.com/package/request) and performs a simple 
`GET` request to [https://www.facebook.com/plugins/post/oembed.json/?url=https://www.facebook.com/FacebookforDevelopers/posts/10154088773123553](https://www.facebook.com/plugins/post/oembed.json/?url=https://www.facebook.com/FacebookforDevelopers/posts/10154088773123553).
It then logs the returned response body to the console.

If you open the URL in the browser, you will see an oEmbed-response JSON. The logged result will be a pile of HTML—the 
error page telling you to upgrade your browser.

To initialize the project do

    npm install

To run the test that logs the error page run

    npm run query-api

This npm task will run `index.js` using node.

To demonstrate the User-Agent issue, do

    npm run query-api-with-user-agent

which will run `index-with-useragent.js` using node. This is an exact copy of `index.js` with the only difference that 
the User-Agent has been set to fake the latest version of Chrome.
