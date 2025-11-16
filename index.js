const express = require("express");
const app = express();
const cors = require("cors");
const moviesRouter = require("./router/movies");
const connection = require("./database/connections");

const port = 3000;

app.use(cors, {
  origin: "http://localhost:5173/",
  credentials: true,
});
app.use(express.static("public"));
app.use(express.json());

app.listen(port, () => {
  console.log(`In ascolto in http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Benvenuto nel mio Server!");
});

app.use("/movies", moviesRouter);
