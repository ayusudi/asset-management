const router = require("express").Router()

router
  .get("/", (req, res) => res.send("Hello World"))
  .post("/", (req, res) => res.send("Hello World"))
  .get("/:id", (req, res) => res.send("Hello World"))
  .put("/:id", (req, res) => res.send("Hello World"))
  .delete("/:id", (req, res) => res.send("Hello World"))

module.exports = router