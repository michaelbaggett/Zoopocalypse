const db = require("../../models");
const passport = require("../../config/passport");
const router = require("express").Router();

router.route("/login").post(passport.authenticate("local"), req, res => {
  const { body } = req;
  const { username, email, password, age } = body;

  if (!username) {
    return res.send({
      success: false,
      message: "Error: Please enter a username."
    });
  }
  if (!email) {
    return res.send({
      success: false,
      message: "Error: Please enter your email address."
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: "Error: Please enter a password."
    });
  }
  if (!age) {
    return res.send({
      success: false,
      message: "Error: Please enter an age."
    });
  }

  console.log("before user");
  db.User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        db.User.create({
          name: req.body.username,
          email: req.body.email,
          password: req.body.password,
          age: req.body.age
        })
          .then(() => {
            res.send(user + "created");
          })
          .catch(function(err) {
            console.log(err);
            res.json(err);
          });
      } else {
        res.send("Error: User already exists");
      }
    })
    .catch(err => {
      res.send("error" + err);
    });
});

export default router;
