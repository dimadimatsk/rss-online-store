const Favor = require('../models/Favor');

class FavorService {
  async getFavors(userId) {
    const favor = await Favor.find({ userId });
    if (!favor) {
      return;
    }
    return favor;
  }

  async addProductToFavor({ userId, productId, size }) {
    const favor = await Favor.findOne({ userId });
    if (!favor) {
      const newFavor = new Favor({
        userId,
        products: [{ productId, size }],
      });
      await newFavor.save();
    } else {
      if (favor.products.some((product) => product.productId === productId)) {
        console.log(`${productId} already in favors`);
        return;
      }
      favor.products.push({ productId, size });
      await favor.save();
    }
  }

  async removeProductFromFavor(userId, productId) {
    const favor = await Favor.findOne({ userId });
    if (!favor) {
      return;
    }
    favor.products = favor.products.filter((product) => product.productId !== productId);
    await favor.save();
  }
}

module.exports = new FavorService();
