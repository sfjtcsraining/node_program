
module.exports = function (app) {
    app.get('/auth/message', (req, res) => {
        res.send('Hello from Auth Route!!')
    })
}