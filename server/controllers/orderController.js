const OrderService = require('../services/orderService');
const CartService = require('../services/cartService');

class OrderController {
  async createOrder(req, res, next) {
    try {
      const userId = req.user.id;
      const newOrder = await CartService.getUserCart(userId);
      const { address, status } = req.body;
      console.log({ userId, address, status, ...newOrder });
      const orderData = await OrderService.createOrder({ userId, address, status, products: newOrder.products, bill: newOrder.bill });
      return res.json(orderData);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const id = req.params.id;
      const updated = req.body;
      const updatedOrder = await OrderService.update(id, updated);
      return res.json(updatedOrder);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const id = req.params.id;
      await OrderService.delete(id);
      return res.json('deleted');
    } catch (error) {
      next(error);
    }
  }

  async getUserOrder(req, res, next) {
    try {
      const orderId = req.params.orderId;
      const order = await OrderService.getUserOrder(orderId);
      return res.json(order);
    } catch (error) {
      next(error);
    }
  }

  async getAllUserOrders(req, res, next) {
    try {
      const userId = req.user.id;
      const orders = await OrderService.getAllUserOrders(userId);
      return res.json(orders);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new OrderController();
