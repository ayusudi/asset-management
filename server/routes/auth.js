const ControllerUser = require("../controllers/ControllerUser")

const router = require("express").Router()

router
  .post("/login", ControllerUser.login)
  .post("/register", ControllerUser.register)

module.exports = router