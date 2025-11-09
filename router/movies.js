const express = require("express");
const router = express.Router();
//collegamento con le query
const query = require("../database/query");
//rotta index
router.get("/", query.index);
//rotta show
router.get("/:id", query.show);

module.exports = router;
