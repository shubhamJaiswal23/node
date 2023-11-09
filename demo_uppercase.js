//using ES Module

//Example-1

// import http from 'http';
// import { upperCase } from 'upper-case';

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(upperCase('Hello World!'));
//     res.end();
//   })
//   .listen(8080);

//Example-2

import http from 'http';
import { upperCase } from 'upper-case';

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(upperCase('Shubham Jaiswal!'));
    res.end();
  })
  .listen(8080);
