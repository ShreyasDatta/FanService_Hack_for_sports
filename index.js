const express = require('express');

const app = express()
const ejs = require('ejs');
const fs = require("fs");

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})


app.post('/', (req, res) => {
    res.send('Test Website')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})