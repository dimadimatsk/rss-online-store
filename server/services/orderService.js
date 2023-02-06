const Order = require('../models/Order');
const CartService = require('../services/cartService');

class OrderService {
  async createOrder({ userId, products, bill, address, status }) {
    const order = new Order({
      userId,
      products,
      bill,
      address,
      status,
    });
    const savedOrder = await order.save();
    await CartService.clearCart(userId);
    return savedOrder;
  }

  async update(id, params) {
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      {
        $set: params,
      },
      { new: true }
    );
    return updatedOrder;
  }

  async delete(id) {
    const deletedOrder = await Order.findByIdAndDelete(id);
    return deletedOrder;
  }

  async getUserOrder(orderId) {
    const order = await Order.findById(orderId);
    return order;
  }

  async getAllUserOrders(userId) {
    const order = await Order.find({ userId });
    return order;
  }
}

module.exports = new OrderService();
