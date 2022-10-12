

const db = require('../models');
const Category = db.categories;

module.exports = function (app) {
    app.get('/categories', (req, res) => {
        res.send('Categories Here')
    })

    app.post('/categories/add', (req, res) => {
        Category.create({
            name: req.body.name,
            desc: req.body.desc
        })
            .then((category) => {
                res.send(category);
            })
            .catch((err) => {
                console.log(err.message);
            })
    })
}


