const express = require('express');
const app = express();

const productRoute = require('./routes/produtos');
app.use('/produtos',productRoute);

app.use('/teste',(req, res, next) => {
    res.status(200).send({
        msg: "ok deu certo"
    })
})

module.exports = app;