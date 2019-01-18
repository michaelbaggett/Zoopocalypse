const Sequelize = require("sequelize");
const db = require("../config/database");

const animal = db.define("animal", {
    name: {
        type: Sequelize.STRING
    }
});

module.exports = animal;