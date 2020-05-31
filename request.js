const request = require("request");
const url = "https://my-json-server.typicode.com/typicode/demo/db";
request.get(url, (error, response, body) => {
let json = JSON.parse(body);
console.log(body);
});