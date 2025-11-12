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
  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: "query fallita" });
    if (results.length === 0)
      return res.status(404).json({ error: "id query non trovato, riprova!" });
    res.json(results);
  });
}

function destroy(req, res) {
  const id = req.params.id;
  const sql = `DELETE FROM movies WHERE id = ?`;
  connection.query(sql, [id], (err) => {
    if (err)
      return res.status(500).json({ error: "Eliminazione film non riuscita!" });
    res.sendStatus(204);
  });
}

module.exports = { index, show, destroy };
