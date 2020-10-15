const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/', (req, res, next) => {

    // res.status(200).send({
    //     msg: "usando GET na rota de produtos"
    // });

    mysql.getConnection((error, conn) => {
        conn.query(
            'SELECT * FROM products',
            (error, result, field) => {
                conn.release();
                if (error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }
                res.status(200).send({
                    response: result
                })
            }
        )
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO products (name, price) VALUES(?,?)',
            [req.body.name, req.body.price],
            (error, result, field) => {
                conn.release();
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
        )
    });


});

router.get('/:id_produto', (req, res, next) => {
   
    mysql.getConnection((error, conn) => {
        conn.query(
            'SELECT * FROM products where productId = ?;',
            [req.params.id_produto],
            (error, result, field) => {
                conn.release();
                if (error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }
                res.status(200).send({
                    response: result
                })
            }
        )
    });
});

router.patch('/:id', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO products (name, price) VALUES(?,?)',
            [req.body.name, req.body.price],
            (error, result, field) => {
                conn.release();
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
        )
    });
});

router.delete('/:id', (req, res, next) => {
    res.status(200).send({
        msg: "usando DELETE na rota de produtos"
    })
});

module.exports = router;