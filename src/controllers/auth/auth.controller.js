const config = require("../../config/config");
const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authController = {};

authController.login = (req, res) => {
  User.findOne({ userName: req.body.userName }, (err, user) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!user) {
      return res.status(404).json({
        ok: false,
        msg: "username/password invalid",
      });
    }

    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(404).json({
        ok: false,
        msg: "username/password invalid",
      });
    }

    let token = jwt.sign({ data: user }, config.SECRET_KEY, {
      expiresIn: "2d",
    });

    return res.status(201).json({
      ok: true,
      user,
      token,
    });
  });
};

module.exports = authController;
