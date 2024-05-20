const { Asset, Category } = require("../models")
const UserId = 1
class ControllerAsset {
  static async create(req, res, next) {
    try {
      let { name, description, cost, imageUrl, currentLocation, CategoryId } = req.body
      let data = await Asset.create({
        assetName: name,
        description,
        cost,
        imageUrl,
        status: "active",
        currentLocation,
        CategoryId,
        UserId,
        AssignedToId: UserId
      })
      res.status(201).json(data)
    } catch (error) {
      next(error)
    }
  }
  static async list(req, res, next) {
    try {
      let data = await Asset.findAll({
        include: [Category]
      })
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
  static async read(req, res, next) {
    try {
      let data = await Asset.findByPk(req.params.id)
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
  static async update(req, res, next) {
    try {
      let { name, description, cost, imageUrl, status, currentLocation, UserId, CategoryId } = req.body
      let { id } = req.params
      let update = await Asset.update({
        assetName: name,
        description,
        cost,
        imageUrl,
        status,
        currentLocation,
        CategoryId,
        AssignedToId: UserId
      }, {
        where: { id }
      })
      res.status(200).json({ message: "Success" })
    } catch (error) {
      next(error)
    }
  }
  static async delete(req, res, next) {
    try {
      let deleteData = await Asset.destroy({
        where: {
          id: req.params.id
        }
      })
      res.status(200).json({ message: "Success" })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ControllerAsset