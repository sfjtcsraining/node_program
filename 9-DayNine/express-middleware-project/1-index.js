const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('Something Here..');
    next();
})

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/courses', (req, res) => {
    res.send('List of Courses Here');
})

app.listen(5000, () => {
    console.log('The server is running at 5000!!');
})