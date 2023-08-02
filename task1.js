const http = require('http');
const PORT = 3000
const TIMEOUT = 5000;


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});


server.listen(process.env.PORT || 3000, () =>
  console.log("Server running on Port ", process.env.PORT || 3000)
);


setTimeout(() => {
  server.close(() => {
    console.log('Server has been stopped.');
  });
}, TIMEOUT);


