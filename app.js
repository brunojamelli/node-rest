const express = require('express');
const app = express();
const morgan = require('morgan');


const productRoute = require('./routes/produtos');
const orderRoute = require('./routes/pedidos');

app.use(morgan('dev'));
app.use('/produtos',productRoute);
app.use('/pedidos',orderRoute);

app.use((req,res,next) => {
    const erro = new Error("Não encontrado");
    erro.status = 404;
    next(erro);
})

app.use((error,req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro:{
            message: error.message
        }
    })
})

app.use('/teste',(req, res, next) => {
    res.status(200).send({
        msg: "ok deu certo"
    })
})

module.exports = app;