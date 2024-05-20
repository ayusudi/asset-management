const ControllerCategory = require("../controllers/ControllerCategory")

const router = require("express").Router()

router
  .get("/", ControllerCategory.list)
  .post("/", ControllerCategory.create)
  .get("/:id", ControllerCategory.read)
  .delete("/:id", ControllerCategory.delete)

module.exports = router