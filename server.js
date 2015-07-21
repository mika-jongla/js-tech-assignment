var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;

  console.log("path: ", path);

  if (path.indexOf('list') > -1 || path.indexOf('detail') > -1) {

    res.writeHeader(200, {"Content-Type": "text/plain"});

    if (path === '/list') {
      chars = ['a', 'b', 'c'];
      num = Math.floor(Math.random() * 3);
      c = chars[num];
      num = Math.floor(Math.random() * 3);
      c += chars[num];

      console.info("/list ", c);

      res.write(c);

    } else if (path === '/detail/a') {
      num = Math.floor(Math.random() * 3);
      c = 'a' + num;

      console.info("/detail/a ", c);

      res.write(c);
    } else if (path === '/detail/b') {
      num = Math.floor(Math.random() * 3);
      c = 'b' + num;

      console.info("/detail/b ", c);

      res.write(c);
    } else if (path === '/detail/c') {
      num = Math.floor(Math.random() * 3);
      c = 'c' + num;

      console.info("/detail/c ", c);

      res.write(c);
    }

    res.end();

  } else {

    console.info("serving static file");

    fs.readFile("." + path, function(error, content) {

      if (path.indexOf('html') > -1) {
        res.writeHeader(200, {"Content-Type": "text/html"});
      } else {
        res.writeHeader(200, {"Content-Type": "application/javascript"});
      }

      res.end(content, 'utf-8');
    });
  }


}).listen(8080);

console.info("Server is running on port 8080");
