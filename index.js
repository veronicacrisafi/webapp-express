const express = require("express");
const app = express();
const connection = require("./database/connections");

const port = 3000;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`In ascolto in http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Benvenuto nel mio Server!");
});

//collegamento con le query
const query = require("./database/query");
//rotta index
app.get("/index", query.index);
//rotta show
app.get("/index/:id", query.show);
