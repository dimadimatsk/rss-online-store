const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    brand: { type: String, required: true },
    desc: { type: String, required: true },
    chars: { type: Array, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    sex: { type: String },
    size: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
