const http = require('http');
const url = require('url');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const q = url.parse(req.url, true).query;
    const text = q.firstName + ' ' + q.lastName;
    res.end(text);
  })
  .listen(8080);
