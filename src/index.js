const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.send('Olá. Minha primeira API!');
});

app.listen(3333);