var http = require('http'),
    fs   = require('fs');

function serveStaticFile(res, path, contentType, responseCode){
  if(!responseCode) responseCode = 200;
  fs.readFile(__dirname + path, function(err, data){
    console.log(__dirname + path);
    console.log(err);
    if (err){
      res.writeHead(500, {'Content-Type': 'text-plain'});
      res.end('500 - internal Error');
    }
    else{
      res.writeHead(responseCode, {'Content-Type': contentType});
      res.end(data);
    }
  });
}

http.createServer(function(req,res){
  var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

  switch (path) {
    case '':
      serveStaticFile(res, '/public/home.html', 'text/html');
      break;
    case '/about':
      serveStaticFile(res, '/public/about.html', 'text/html');
      break;
    case '/img/js.png':
      serveStaticFile(res, '/public/images/js.png', 'image/png');
      break;
    default:
      serveStaticFile(res, '/public/404.html', 'text/html', 404);
      break;
  }

}).listen(3000);
