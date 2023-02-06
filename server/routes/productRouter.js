const { Router } = require('express');
const router = new Router();
const productController = require('../controllers/productController');
const {checkToken, checkRole} = require('../middlewares/authMiddleware');

router.post('/', checkToken, checkRole, productController.create);
router.put('/:id', checkToken, checkRole, productController.update);
router.delete('/:id', checkToken, checkRole, productController.delete);
router.get('/:id', productController.getOneProduct);
router.get('/', productController.getAllProducts);

module.exports = router;
