const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
        },
      },
    ],
    bill: { type: Number, required: true, default: 0 },
    address: { type: Object, required: true },
    status: {
      type: String,
      default: 'pending',
      enum: ['pending', 'shipped', 'delivered', 'cancelled'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);
