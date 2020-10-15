const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    res.status(200).send({
        msg: "usando get na rota de produtos"
    })
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        msg: "usando post na rota de produtos"
    })
});

module.exports = router;