const express = require("express");
const app = express();
const connection = require("./database/connections");
const port = 3000;

app.listen(port, () => {
  console.log(`In ascolto in http://localhost ${port}`);
});

app.use(express.static("public"));
