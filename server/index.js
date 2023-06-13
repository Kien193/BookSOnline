//CLI: npm install express body-parser --save
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT,'192.168.101.2', () => {
    console.log(`Server is running on port ${PORT}.`);
});
// middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
// simple route API
app.get('/hello', (req, res) => {
    res.json({ message: 'Welcome to HELL.' });
});

// apis
app.use('/api/admin', require('./api/admin.js'));
app.use('/api/customer', require('./api/customer.js'));