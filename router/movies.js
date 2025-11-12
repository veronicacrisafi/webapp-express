const express = require("express");
const query = require("../controllers/query");
const router = express.Router();

//rotta index
router.get("/", query.index);
//rotta show
router.get("/:id", query.show);
//rotta destroy
router.delete("/:id", query.destroy);
//rotta store
router.post("/", query.storeMovies);

module.exports = router;
