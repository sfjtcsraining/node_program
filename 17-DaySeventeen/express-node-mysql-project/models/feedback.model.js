module.exports = (sequelize, Sequelize) => {
    const Feedback = sequelize.define("feedbacks", {
        name: {
            type: Sequelize.STRING
        },
        desc: {
            type: Sequelize.STRING
        },
        rating: {
            type: Sequelize.STRING
        }
    })
    return Feedback;
}