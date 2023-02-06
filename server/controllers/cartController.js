const CartService = require('../services/cartService');

class CartController {
  async addToCart(req, res, next) {
    try {
      const { productId, quantity } = req.body;
      const userId = req.user.id;
      const cartData = await CartService.addToCart(userId, productId, quantity);
      return res.json(cartData);
    } catch (error) {
      next(error);
    }
  }

  async deleteProductFromCart(req, res, next) {
    try {
      const { productId, quantity } = req.body;
      const userId = req.user.id;
      const cartData = await CartService.deleteProductFromCart(userId, productId, quantity);
      return res.json(cartData);
    } catch (error) {
      next(error);
    }
  }

  async getUserCart(req, res, next) {
    try {
      const userId = req.user.id;
      const cart = await CartService.getUserCart(userId);
      return res.json(cart);
    } catch (error) {
      next(error);
    }
  }

  async clearCart(req, res, next) {
    try {
      const userId = req.user.id;
      const cart = await CartService.clearCart(userId);
      return res.json(cart);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CartController();
