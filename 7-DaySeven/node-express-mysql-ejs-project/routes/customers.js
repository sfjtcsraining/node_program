
var express = require('express');
var router = express.Router();
var dbConn = require('../configs/db.config');

// Getting All Customers from Database
// GET API Request URL: http://localhost:3000/customers 
router.get('/', (req, res) => {
    dbConn.query("SELECT * FROM customers", (err, result) => {
        if (err) throw err;
        // res.send(result);
        res.render('customers', {
            title: "Customer List Here",
            customers: result
        });
    })
});

router.get('/:id', (req, res) => {
    dbConn.query(`SELECT * FROM customers WHERE id = ${req.params.id}`, (err, result) => {
        if (err) throw err;
        res.render(`customer-detail`, {
            id: result[0].id,
            name: result[0].name
        });
    })
})


// Getting Form to Add New Customer
// GET API Request URL: http://localhost:3000/customers/customer-add
router.get('/customer-add', (req, res, next) => {
    res.render('customer-add', {
        id: 0, name: ''
    });
})

// Add New Customer to Database
// POST API Request URL: http://localhost:3000/customers/
// Content-Type: application/json
// Request Body need to pass.
router.post('/', (req, res) => {
    let customer_data = {
        id: req.body.id,
        name: req.body.name
    };
    dbConn.query(`INSERT INTO customers SET ?`, customer_data, (err) => {
        if (err) throw err;
        // res.send('Customer Added successfully.');
        res.redirect('/customers');
    })
})

router.get('/customer-edit/:id', (req, res) => {
    dbConn.query(`SELECT * FROM customers WHERE id = ${req.params.id}`, (err, result) => {
        if (err) throw err;
        res.render(`customer-edit`, {
            id: result[0].id,
            name: result[0].name
        });
    })
})

router.post('/customer-update/:id', (req, res) => {
    let customer_update_data = {
        id: req.body.id,
        name: req.body.name
    }
    dbConn.query(`UPDATE customers SET ? WHERE id = ${req.params.id}`, customer_update_data, (err) => {
        if (err) throw err;
        res.redirect('/customers');
    })
})

router.get('/customer-delete/:id', (req, res) => {
    dbConn.query(`DELETE FROM customers WHERE id = ${req.params.id}`, (err) => {
        if (err) throw err;
        res.redirect('/customers');
        // console.log('done')
    })

})

module.exports = router;