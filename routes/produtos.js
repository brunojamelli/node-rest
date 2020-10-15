const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    res.status(200).send({
        msg: "usando GET na rota de produtos"
    })
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        msg: "usando POST na rota de produtos"
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