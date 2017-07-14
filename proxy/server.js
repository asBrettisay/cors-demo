const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log(req.headers);

  res.end('stuff');
});

server.listen(3001, () => {
  console.log('Listening on 3001');
});