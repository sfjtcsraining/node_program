const express = require('express');
const app = express();

// Routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// Database Connectivity:
const db = require('./models/index');
const Role = db.role;

// force: true, will drop tables if it already exists.
db.sequelize.sync({})
    .then(() => {
        console.log('Connected..!!');
        //initialRoles();
    })
    .catch((error) => { console.log('There is some error: ' + error); });


app.get('/', (req, res) => {
    res.send('Project Started..!!');
})

app.listen(3000, () => {
    console.log('Application is running at port 3000!!')
})

function initialRoles() {
    Role.create({ id: 1, name: 'User' });
    Role.create({ id: 2, name: 'Admin' });
    Role.create({ id: 3, name: 'Moderator' });
}