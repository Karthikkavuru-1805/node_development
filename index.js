const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let date = new Date()
  response.send(`Today date is ${date}`);
});

const port = 3000;
app.listen(port);
console.log(`server is runnning at ${port}`);
console.log(`hello world`)


