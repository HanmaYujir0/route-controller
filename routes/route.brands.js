const { Router } = require("express");

const router = Router();

router.get('/brands', (req, res) => {
    res.json('/brands выполнил')
})
router.post('/brands', (req, res) => {
    res.json('/brands изменил')
}),
router.delete('brands', (req, res) => {
    res.json('/brands удалил')
})