const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyPr = require('body-parser');

const productRoute = require('./routes/produtos');
const orderRoute = require('./routes/pedidos');

app.use(morgan('dev'));
app.use(bodyPr.urlencoded({ extended: false }));
app.use(bodyPr.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
})

app.use('/produtos', productRoute);
app.use('/pedidos', orderRoute);

app.use((req, res, next) => {
    const erro = new Error("Não encontrado");
    erro.status = 404;
    next(erro);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            message: error.message
        }
    })
})

app.use('/teste', (req, res, next) => {
    res.status(200).send({
        msg: "ok deu certo"
    })
})

module.exports = app;