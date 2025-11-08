const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`In ascolto in http://localhost ${port}`);
});

app.use(express.static("public"));

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
