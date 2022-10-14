
const db = require('../models');
const Feedback = db.feedbacks;

module.exports = function (app) {
    app.get('/feedbacks/all/:id', (req, res) => {
        Feedback.get({ id: req.params.id }, (err, result) => {
            if (err) throw err;
            res.send(result);
        })
    })

    app.post('/feedbacks/add', (req, res) => {
        const feedback = new Feedback();
        feedback.name = req.body.name;
        feedback.desc = req.body.desc;
        feedback.rating = req.body.rating;
        Feedback.create(feedback, (err, result) => {
            if (err) throw err;
            res.send('Feedback Added Successfully.');
        })
    })
}


