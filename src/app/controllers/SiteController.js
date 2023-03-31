const Product = require('../models/Product');

class SiteController {
    // GET/home
    async home(req, res) {
        const model = await Product.find({});
        res.json(model);
        // res.render('home');
    }

    // GET/search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
