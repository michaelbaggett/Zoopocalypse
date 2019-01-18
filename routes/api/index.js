const router = require("express").Router();
const loginRoutes = require("./login");

router.use("/auth", loginRoutes);

module.exports = router;
