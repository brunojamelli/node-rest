const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    res.status(200).send({
        msg: "usando GET na rota de pedidos"
    })
});

router.post('/', (req, res, next) => {
    const order = {
        product_id: req.body.product_id
    }
    res.status(201).send({
        msg: "order created"
    })
});

router.get('/:id_ped', (req, res, next) => {
    let num = req.params.idped;
    if (num === "especial") {
        res.status(200).send({
            msg: "usando o get de apenas um pedidos super especial",
            id: num
        })
    } else {
        res.status(200).send({
            msg: "usando o get de apenas um pedidos",
            id: num
        })
    }
});

router.delete('/:id', (req, res, next) => {
    res.status(200).send({
        msg: "usando DELETE na rota de pedidos"
    })
});

module.exports = router;