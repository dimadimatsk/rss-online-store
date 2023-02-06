const FavorService = require('../services/favorService');

class FavorController {
  async getFavors(req, res, next) {
    try {
      const userId = req.user.id;
      const favorData = await FavorService.getFavors(userId);
      return res.json(favorData);
    } catch (error) {
      next(error);
    }
  }

  async addProductToFavor(req, res, next) {
    try {
      const favorParams = req.body;
      const userId = req.user.id;
      const favorData = await FavorService.addProductToFavor({ userId, ...favorParams });
      return res.json(favorData);
    } catch (error) {
      next(error);
    }
  }

  async removeProductFromFavor(req, res, next) {
    try {
      const userId = req.user.id;
      const toDelete = req.body.productId;
      const deletedFavor = await FavorService.removeProductFromFavor(userId, toDelete);
      return res.json(deletedFavor);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new FavorController();
