const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/', (req, res, next) => {
    res.status(200).send({
        msg: "usando GET na rota de produtos"
    })
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    mysql.getConnection((error, con) => {
        con.query('INSERT INTO products (name, price, id_product) VALUES(?,?);'),
            [req.body.name, req.body.price],

            (error, result, field) => {
                con.release();
                if (error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }
                res.status(201).send({
                    msg: "product created",
                    id_product: result.insertId
                })

            }
    });

});

router.get('/:id_produto', (req, res, next) => {
    let num = req.params.id_produto;
    if (num === "especial") {
        res.status(200).send({
            msg: "usando o get de apenas um produto super especial meesmo",
            id: num
        })
    } else {
        res.status(200).send({
            msg: "usando o get de apenas um produto",
            id: num
        })
    }
});

router.patch('/:id', (req, res, next) => {
    res.status(200).send({
        msg: "usando PATCH na rota de produtos"
    })
});

router.delete('/:id', (req, res, next) => {
    res.status(200).send({
        msg: "usando DELETE na rota de produtos"
    })
});

module.exports = router;