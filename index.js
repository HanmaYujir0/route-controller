const express = require('express');

const app = express();
const port = 4000;

app.use(require('./routes/route.brands'))
app.use(require('./routes/route.products'))

app.get('/', (req, res) => {
    res.send('Легче чем казалось')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});









