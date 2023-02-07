const Product = require('../models/Product');

class ProductService {
  async create(id, title, brand, desc, chars, img, category, sex, size, price) {
    const product = new Product({
      id,
      title,
      brand,
      desc,
      chars,
      img,
      category,
      sex,
      size,
      price,
    });
    const savedProduct = await product.save();
    return savedProduct;
  }

  async update(id, title, desc, img, categories, size, price) {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: { title, desc, img, categories, size, price },
      },
      { new: true }
    );
    return updatedProduct;
  }

  async delete(id) {
    const deletedProduct = await Product.findByIdAndDelete(id);
    return deletedProduct;
  }

  async getOneProduct(id) {
    const product = await Product.findById(id);
    return product;
  }

  async getAllLatest() {
    const products = await Product.find().sort({ createdAt: -1 }).limit(5);
    return products;
  }

  async getAllByCategory(query) {
    const products = await Product.find({
      categories: {
        $in: [query],
      },
    });
    return products;
  }

  async getAll() {
    return await Product.find();
  }
}

module.exports = new ProductService();
