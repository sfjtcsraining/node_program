
const indexController = require('../controllers/index.controller')

module.exports = function (app) {
    app.get('/', indexController.index)
}


