const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.headers);

  // res.setHeader('Access-Control-Allow-Origin', 'null');

  res.end();
});

server.on('clientError', (err, res) => {
  res.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(3001);