const url = require('url');
const adr =
  'http://localhost:8080/default.htm?firstName=Shubham&lastName=Jaiswal';
const q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

const qdata = q.query;
console.log(qdata.firstName);
console.log(qdata.lastName);
console.log(qdata);
