const { Router } = require('express');
const cartController = require('../controllers/cartController');
const router = new Router();
const { checkToken, checkId } = require('../middlewares/authMiddleware');

router.post('/:userId', checkToken, checkId, cartController.addToCart);
router.put('/:userId', checkToken, checkId, cartController.deleteProductFromCart);
router.get('/:userId', checkToken, checkId, cartController.getUserCart);
router.patch('/:userId', checkToken, checkId, cartController.clearCart);

module.exports = router;
