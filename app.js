const express = require('express');
const app = express();

const productRoute = require('./routes/produtos');
const orderRoute = require('./routes/pedidos');

app.use('/produtos',productRoute);
app.use('/pedidos',orderRoute);


app.use('/teste',(req, res, next) => {
    res.status(200).send({
        msg: "ok deu certo"
    })
})

module.exports = app;