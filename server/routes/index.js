const router = require("express").Router()
const routerAssets = require("./assets")
const routerAuth = require("./auth")
const routerCategories = require("./categories")

const auth = require("../middlewares/authentication")
const ControllerUser = require("../controllers/ControllerUser")

router.get("/", (req, res) => res.send("Hello World"))
router.use("/auth", routerAuth)
router.use("/assets", auth, routerAssets)
router.use("/categories", auth, routerCategories)
router.get("/logs", auth, ControllerUser.listLog)

module.exports = router