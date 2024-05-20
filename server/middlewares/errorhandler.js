

module.exports = async (req, res, next) => {
  return res.status(500).json({ message: "Internal server error" })
}