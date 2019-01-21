
const router = require("express").Router();
const animalsController = require("../../client/controllers/animalsController");

router.route("/api/test")
    .get(animalsController.findAll);

    module.exports = router;