const express = require('express');
const app = express();

const message = (req, res, next) => {
    console.log('Something Here..');
    next();
}

app.use(message);

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/courses', (req, res) => {
    res.send('List of Courses Here');
})

app.listen(5000, () => {
    console.log('The server is running at 5000!!');
})