const db = require("../../models");
const passport = require("../../config/passport");
const router = require("express").Router();
const { logger } = require("./../../logger");

router.route("/login").post(passport.authenticate("local"), (req, res) => {
  // you can place req.body here, but then you log the password to console...bad call.
  logger.info("login route hit");
  const { username, password } = req.body;

  console.log("user login");
  res.json({
    isAuth: true
  });
});

router.route("/signup").post((req, res) => {
  logger.info("signup route hit");
  const { username, password, age, phone } = req.body;
  db.User.create({
    username,
    password,
    age,
    phone
  })
    .then(() => {
      res.redirect(307, "/api/auth/login");
    })
    .catch(err => {
      console.log(err);
      res.send("error" + err);
    });
});

router.route("/logout").get((req, res) => {
  console.log(req + "this is my /logout req");
  req.logout();
  const resObj = { success: false };
  if (!req.user) {
    resObj.success = true;
  }

  res.send(resObj);
});

// router.route("/login").post(passport.authenticate("local"), (req, res) => {
//   const { body } = req;
//   const { username, email, password, age } = body;

//   if (!username) {
//     return res.send({
//       success: false,
//       message: "Error: Please enter a username."
//     });
//   }
//   if (!email) {
//     return res.send({
//       success: false,
//       message: "Error: Please enter your email address."
//     });
//   }
//   if (!password) {
//     return res.send({
//       success: false,
//       message: "Error: Please enter a password."
//     });
//   }
//   if (!age) {
//     return res.send({
//       success: false,
//       message: "Error: Please enter an age."
//     });
//   }

//   console.log("before user");
//   db.User.findOne({
//     where: {
//       email: req.body.email
//     }
//   })
//     .then(user => {
//       if (!user) {
//         db.User.create({
//           name: req.body.username,
//           email: req.body.email,
//           password: req.body.password,
//           age: req.body.age
//         })
//           .then(() => {
//             res.send(user + "created");
//           })
//           .catch(function(err) {
//             console.log(err);
//             res.json(err);
//           });
//       } else {
//         res.send("Error: User already exists");
//       }
//     })
//     .catch(err => {
//       res.send("error" + err);
//     });
// });

module.exports = router;
