const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/message', (req, res, next) => {
    next(new Error('I am passing you an error.'));
})

app.use((err, req, res, next) => {
    // console.log(err);
    if (!res.headersSent) {
        res.status(500).send('Error Message: ' + err.message);
    }
})

app.listen(5000, () => {
    console.log('The server is running at 5000!!');
})