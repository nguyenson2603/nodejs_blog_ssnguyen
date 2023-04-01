const Product = require('../models/Product');
const { mongooseToObject } = require('../../util/mongoose');

class ProductController {
    // GET/index
    index(req, res, next) {
        res.send('Products');
    }

    // GET/product/:slug
    detailProduct(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .then((product) => {
                res.render('product/detail', {
                    product: mongooseToObject(product),
                });
            })
            .catch(next);
    }

    // GET/product/create
    create(req, res, next) {
        res.render('product/create');
    }

    // POST/product/store
    store(req, res, next) {
        const data = req.body;
        const model = new Product(data);
        model
            .save()
            .then(() => {
                res.redirect('/');
            })
            .catch(next);
    }
}

module.exports = new ProductController();
