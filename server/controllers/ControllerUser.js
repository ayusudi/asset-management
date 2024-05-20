const { User, HistoryLog } = require("../models")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const secret = "RAHASIA"
class ControllerUser {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body
      let passwordEncrypted = bcrypt.hashSync(password, 12)
      let data = await User.create({
        email,
        password: passwordEncrypted,
        profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        RoleId: 1
      })
      res.status(201).json({
        message: `User ${email} has been created with ID ${data.id}.`
      })
    } catch (error) {
      next(error)
    }
  }
  static async login(req, res, next) {
    try {
      let { email, password } = req.body
      let user = await User.findOne({ where: { email } })
      let check = bcrypt.compareSync(password, user.password)
      let token
      if (check) {
        token = jwt.sign({
          id: user.id,
          role: user.RoleId
        }, secret)
      }
      res.status(200).json({
        access_token: token,
        email: user.email,
        role: user.RoleId
      })
    } catch (error) {
      next(error)
    }
  }
  static async listLog(req, res, next) {
    try {
      let data = await HistoryLog.findAll({
        include: [User]
      })
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ControllerUser