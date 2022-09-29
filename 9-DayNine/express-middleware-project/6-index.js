const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
})


app.listen(5000, () => {
    console.log('The server is running at 5000!!');
})