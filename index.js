const express = require('express');

const PORT = process.env.PORT || 8080;

// Create a new express application instance
const app = express();

app.use(function (req, res, next){
    var resObj = {
        protocol: req.protocol,
        port: PORT,
        httpVersion: req.httpVersion,
        secure: req.secure,
        subdomains: req.subdomains,
        hostname: req.hostname,
        originalUrl: req.originalUrl,
        path: req.path,
        baseUrl: req.baseUrl,
        params: req.params,
        query: req.query
    };

    var html = "";

    for (property in resObj) {
        html += "<p><b>" + property + ":</b> " + JSON.stringify(resObj[property]) + "</p>"
    }

    res.send(html);
});

//start
app.listen(PORT, function () {
    console.log('Listening on port: ' + PORT);
  });
