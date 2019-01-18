const router = require("express").Router();
const animalRoutes = require("./animals");

//Animal routes
router.use("/animals", animalRoutes);

module.exports = router;