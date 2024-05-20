const express = require("express")
const cors = require("cors")
const router = require("./routes")
const errorhandler = require("./middlewares/errorhandler")
const port = 3000
const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)
app.use(errorhandler)

app.listen(port, () => {
  console.log(`It's running http://localhost:${port}`);
})