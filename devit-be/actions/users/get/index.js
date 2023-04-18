const UserModel = require('../../../models').UserModel;

const getUsers = (req, res) => {
  return UserModel
  .find()
  .then((users) => res.status(200).json(users))
  .catch((err) => res.status(500).json(err))
  }

  module.exports = getUsers