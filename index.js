const express = require("express");
const app = express();
const moviesRouter = require("./router/movies");
const connection = require("./database/connections");

const port = 3000;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`In ascolto in http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Benvenuto nel mio Server!");
});

app.use("/movies", moviesRouter);
