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

  const sqlMovies = `SELECT * FROM movies WHERE id= ?`;
  const sqlReviews = `SELECT * FROM reviews WHERE movie_id = ?`;

  connection.query(sqlMovies, [id], (errMovies, resultMovies) => {
    if (errMovies)
      return res.status(500).json({ error: "query movies fallita" });
    if (resultMovies.length === 0)
      return res
        .status(404)
        .json({ error: "id query movies non trovato, riprova!" });

    connection.query(sqlReviews, [id], (errReviews, resultReviews) => {
      if (errReviews)
        return res.status(500).json({ error: "query reviews fallita" });

      const movieRev = { ...resultMovies[0], reviews: resultReviews };

      res.json(movieRev);
    });
  });
}

function storeMovies(req, res) {
  const { title, director, genre, release_year, abstract, image } = req.body;
  const sql = `INSERT INTO movies (title, director, genre, release_year, abstract, image) VALUES (?,?,?,?,?,?)`;
  connection.query(
    sql,
    [title, director, genre, release_year, abstract, image],
    (err, results) => {
      if (err)
        return res
          .status(500)
          .json({ error: "Non è stato possibile inserire il nuovo film" });

      res.status(201).json({
        message: "film inserito!",
        id: results.insertId,
      });
    }
  );
}

function storeReviews(req, res) {
  const { name, vote, text } = req.body;
  const movie_id = req.params.id;
  const sql = `INSERT INTO reviews (movie_id,name,vote,text) VALUES (?,?,?,?)`;

  connection.query(
    sql,
    [movie_id, name, vote, text],
    (errReviews, resultsReviews) => {
      if (errReviews)
        return res.status(500).json({
          error: "Non è stato possibile inserire la nuova recensione",
        });
      res.status(201).json({
        message: "recensione inserita!",
        id: resultsReviews.insertId,
      });
    }
  );
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

module.exports = { index, show, destroy, storeMovies, storeReviews };
