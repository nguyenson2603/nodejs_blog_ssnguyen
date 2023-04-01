const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Product = new Schema(
    {
        name: { type: String },
        description: { type: String },
        thumb: { type: String },
        slug: { type: String, slug: 'name' },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Product', Product);
