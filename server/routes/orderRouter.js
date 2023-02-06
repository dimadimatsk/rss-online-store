const { Router } = require('express');
const orderController = require('../controllers/orderController');
const router = new Router();
const { checkToken, checkId, checkRole } = require('../middlewares/authMiddleware');

router.post('/:userId', checkToken, checkId, orderController.createOrder);
// router.put('/:id', checkToken, checkRole, orderController.update);
// router.delete('/:id', checkToken, checkRole, orderController.delete);
// router.get('/:userId/:orderId', checkToken, checkId, orderController.getUserOrder);
// router.get('/:userId', checkToken, checkId, orderController.getAllUserOrders);

module.exports = router;
