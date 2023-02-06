const ErrorHandler = require('../error/ErrorHandler');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

class CartService {
  async addToCart(userId, productId, quantity) {
    const cart = await Cart.findOne({ userId });
    const product = await Product.findOne({ productId });

    if (!product) {
      throw ErrorHandler.badRequest(`product not found`);
    }
    const price = product.price;
    const name = product.name;

    if (cart) {
      const productIndex = cart.products.findIndex((product) => product.productId == productId);
      if (productIndex > -1) {
        let product = cart.products[productIndex];
        product.quantity += quantity;
        cart.bill = cart.products.reduce((acc, curr) => {
          return acc + curr.quantity * curr.price;
        }, 0);
        cart.products[productIndex] = product;
        const savedCart = await cart.save();
        return savedCart;
      } else {
        cart.products.push({ productId, name, quantity, price });
        cart.bill = cart.products.reduce((acc, curr) => {
          return acc + curr.quantity * curr.price;
        }, 0);
        const savedCart = await cart.save();
        return savedCart;
      }
    } else {
      const newCart = await Cart.create({
        userId,
        products: [{ productId, name, quantity, price }],
        bill: quantity * price,
      });
      return newCart;
    }
  }

  async deleteProductFromCart(userId, productId, quantity) {
    let cart = await Cart.findOne({ userId });
    const productIndex = cart.products.findIndex((product) => product.productId == productId);

    if (productIndex > -1) {
      let product = cart.products[productIndex];
      cart.bill -= quantity * product.price;
      if (cart.bill < 0) {
        cart.bill = 0;
      }
      if (quantity == product.quantity) {
        cart.products.splice(productIndex, 1);
      }
      product.quantity -= quantity;
      cart.bill = cart.products.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price;
      }, 0);
      cart = await cart.save();
      return cart;
    } else {
      throw ErrorHandler.badRequest(`product not found`);
    }
  }

  async getUserCart(userId) {
    const cart = await Cart.findOne({ userId });
    return cart;
  }

  async clearCart(userId) {
    const cart = await Cart.findOne({ userId });
    if (cart) {
      cart.products = [];
      cart.bill = 0;
      await cart.save();
      return cart;
    } else {
      return null;
    }
  }
}

module.exports = new CartService();
