const { Router } = require("express");

const router = Router();

router.get('/products', (req, res) => {
    res.json('/products выполнил')
}),
router.get('/products/:id', (req, res) => {
    res.json('/products/:id выполнил')
})
router.post('/products', (req, res) => {
    res.json('/products изменил')
}),
router.delete('/products/:id', (req, res) => {
    res.json('/products/:id удалил')
})

module.exports = router;