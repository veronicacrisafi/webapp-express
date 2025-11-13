const express = require("express");
const query = require("../controllers/query");
const router = express.Router();

//rotta index
router.get("/", query.index);
//rotta show
router.get("/:id", query.show);
//rotta destroy
router.delete("/:id", query.destroy);
//rotta store movies
router.post("/", query.storeMovies);
//rotta store reviews
router.post("/:id/reviews", query.storeReviews);

module.exports = router;
