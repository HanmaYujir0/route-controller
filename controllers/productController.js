module.exports.productController = {
    getProduct: (req, res) => {
        res.json('Hello!')
    },
    getProductId: (req, res) => {
        res.json('id!')
    }, postProduct: (req, res) => {
        res.json('postProducts')
    }, deleteid: (req, res) => {
        res.json('Products id')
    },
}