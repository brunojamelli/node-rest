const express = require('express');
const router = express.Router();
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
    res.status(201).send({
        msg: "product created",
        productCreated: product
    })
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