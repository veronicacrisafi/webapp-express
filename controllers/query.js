const connection = require("../database/connections");

function index(req, res) {
  const sql = `SELECT * FROM movies`;
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "database query fallita" });
    res.json(results);
  });
}

function show(req, res) {
  const id = req.params.id;

  const sql = `SELECT * FROM movies LEFT JOIN reviews ON reviews.movie_id = movies.id WHERE movies.id = ?`;
  connection.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: "query fallita" });
    res.json(result);
  });
}

module.exports = { index, show };
