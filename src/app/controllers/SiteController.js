const Product = require('../models/Product');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // GET/home
    home(req, res, next) {
        Product.find({})
            .then((products) => {
                res.render('home', {
                    products: multipleMongooseToObject(products),
                });
            })
            .catch(next);
        // res.json(model);
        // res.render('home');
    }

    // GET/search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
