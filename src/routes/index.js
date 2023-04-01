const newsRouter = require('./news');
const siteRouter = require('./site');
const productRouter = require('./product');

function route(app) {
    app.use('/product', productRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);

    // app.get('/', (req, res) => {
    //     res.render('home');
    // })
}
module.exports = route;
