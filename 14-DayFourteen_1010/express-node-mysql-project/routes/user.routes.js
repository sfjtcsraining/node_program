
const { authJwt } = require('../middlewares');

module.exports = function (app) {

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    })

    app.get('/api/all', (req, res) => {
        res.send('All can access.')
    });

    app.get('/api/user', [authJwt.verifyToken], (req, res) => {
        res.send('Only user role can access.')
    });

    app.get('/api/mod', [authJwt.verifyToken, authJwt.isModerator], (req, res) => {
        res.send('Only moderator role can access.')
    })

    app.get('/api/admin', [authJwt.verifyToken, authJwt.isAdmin], (req, res) => {
        res.send('only admin role can access')
    })

}