// Task 1: Basic Node.js Server
// Create a simple Node.js server that listens on port 3000 and responds with "Hello, World!" for all incoming HTTP requests. You can use any library or framework of your choice.

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


//Using raw node js only