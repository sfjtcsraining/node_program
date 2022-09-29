const express = require('express');
const app = express();

const requireJSONContent = () => {
    return (req, res, next) => {
        console.log(req.headers);
        if (req.headers['content-type'] !== 'application/json') {
            res.status(400).send('Server requires application/json');
        } if (req.headers['content-type'] == 'application/json')
            next();
    }
}

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/courses', (req, res) => {
    res.send('List of Courses Here');
});

app.post('/add-course', (req, res) => {
    res.send('Adding New Course');

})

app.listen(5000, () => {
    console.log('The server is running at 5000!!');
})