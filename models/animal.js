//I think the below is good to go, but I guess we eventually need to associate the animals and users with a foreign key? Not sure how that will work.


const animal = sequelize.define("animal", {
    name: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    },
    completed: {
        type: Sequelize.BOOL
    }
});

module.exports = animal;