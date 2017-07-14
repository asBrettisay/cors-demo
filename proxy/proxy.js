const http = require('http');
const fs = require('fs');
const { parse } = require('url');
const {promisify} = require('util');
const fetch = promisify(http.get);

const server = http.createServer();

server.on('request', (req, res) => {
  const path = parse(req.url).path;

  switch (path) {
    case '/':
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'X-Foo': 'Bar'
      })

      fs.createReadStream(__dirname + '/index.html').pipe(res);
      break;
    
    case '/api/stuff':
      http.get('http://localhost:3001/api/stuff', _res => {
        _res.pipe(res);
      });

  }


});

server.on('clientError', (req, res) => {
  console.log(req.headers);
  res.statusCode = 500;

  res.end('client error');
})

server.listen(3000, () => {
  console.log('Listening on 3000');
});