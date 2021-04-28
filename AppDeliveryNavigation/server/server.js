const http = require('http');
const app = require('./app');

// const hostname = '192.168.1.clear';
const hostname = '192.168.8.100';
const port = 3010;

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
