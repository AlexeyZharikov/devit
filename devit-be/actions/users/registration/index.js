const UserModel = require('../../../models').UserModel;
const bcrypt = require('bcrypt');

const registration = async (req, res) => {
  try{
    const {name, email, password} = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with such email is exist' });
    }

    const hashedPassword = await bcrypt.hash(password, 3);
    const user = new UserModel({
      name,
      email,
      password: hashedPassword
    })
    await user.save();
    res.status(201).json({ message: 'User cReAtEd' });
  } catch (err){
    console.log(err)
  }
}

module.exports = registration;