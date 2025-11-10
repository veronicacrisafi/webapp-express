const express = require("express");
const query = require("../controllers/query");
const router = express.Router();

//rotta index
router.get("/", query.index);
//rotta show
router.get("/:id", query.show);

module.exports = router;
