const ProductService = require('../services/productService');

class ProductController {
  async create(req, res, next) {
    try {
      const { title, desc, img, categories, size, price } = req.body;
      const productData = await ProductService.create(title, desc, img, categories, size, price);
      return res.json(productData);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const id = req.params.id;
      const { title, desc, img, categories, size, price } = req.body;
      const updatedProduct = await ProductService.update(
        id,
        title,
        desc,
        img,
        categories,
        size,
        price
      );
      return res.json(updatedProduct);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const id = req.params.id;
      await ProductService.delete(id);
      return res.json('deleted');
    } catch (error) {
      next(error);
    }
  }

  async getOneProduct(req, res, next) {
    try {
      const id = req.params.id;
      const product = await ProductService.getOneProduct(id);
      return res.json(product);
    } catch (error) {
      next(error);
    }
  }
  async getAllProducts(req, res, next) {
    try {
      const queryCategory = req.query.category;
      const queryLatest = req.query.latest;
      console.log(queryCategory);
      console.log(queryLatest);

      let products;
      if (queryLatest) {
        products = await ProductService.getAllLatest();
      } else if (queryCategory) {
        products = await ProductService.getAllByCategory(queryCategory);
      } else {
        products = await ProductService.getAll();
      }

      return res.json(products);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductController();
