const express = require('express');
const app = express();

// Database Connectivity:
const db = require('./models/index');
const Role = db.role;

// force: true, will drop tables if it already exists.
db.sequelize.sync({ force: true })
    .then(() => { console.log('Connected..!!'); })
    .catch((error) => { console.log('There is some error: ' + error); });


app.get('/', (req, res) => {
    res.send('Project Started..!!');
})

app.listen(3000, () => {
    console.log('Application is running at port 3000!!')
})