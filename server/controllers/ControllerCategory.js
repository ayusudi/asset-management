const { Category, Asset } = require("../models")
class ControllerCategory {
  static async list(req, res, next) {
    try {
      let data = await Category.findAll()
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
  static async create(req, res, next) {
    try {
      let { name } = req.body
      let data = await Category.create({
        categoryName: name
      })
      res.status(201).json(data)
    } catch (error) {
      next(error)
    }
  }
  static async read(req, res, next) {
    try {
      let { id } = req.params
      let data = await Category.findByPk(id, {
        include: [Asset]
      })
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
  static async delete(req, res, next) {
    try {
      let { id } = req.params
      let checkAsset = await Asset.findOne({ where: { CategoryId: id } })
      if (!checkAsset) {
        let deleteData = await Category.destroy({ where: { id } })
        res.status(200).json({ message: "Success" })
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ControllerCategory