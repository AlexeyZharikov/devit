const UserModel = require('../../../models').UserModel;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  try{
    const {email, password } = req.body;
    const user = await UserModel.findOne({email});
    if (!user) {
      return res.status(401).json({ msg: "wrong email or password"})
    }
    const isPassCorrect = await bcrypt.compare(password, user.password);
    if (!isPassCorrect) {
      return res.status(401).json({ msg: "wrong password or email"})
    }
    const token = jwt.sign({userId: user._id}, 'secretKey');
    res.status(200).send({ token });
  }
  catch (err){
    console.log(err);
    res.status(500).json({ message: err });
  }
}

module.exports = login;