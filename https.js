const https = require("https");
const url = "https://my-json-server.typicode.com/typicode/demo/db";
https.get(url, res => {
res.setEncoding("utf8");
let body = "";
res.on("data", data => {
body += data;
});
res.on("end", () => {
body = JSON.parse(body);
console.log(body);
});
});