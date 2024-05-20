const { User } = require("../models")
const secret = "RAHASIA"

module.exports = async (req, res, next) => {
  try {
    let { access_token } = req.headers
    if (!access_token) throw { status: 401 }
    let { id, RoleId } = require("jsonwebtoken").verify(access_token, secret)
    if (!id && !RoleId) throw { status: 401 }
    let data = await User.findByPk(id)
    if (!data) throw { status: 401 }
    res.user = data
    next()
  } catch (error) {
    console.log("here");
    next(error)
  }
}