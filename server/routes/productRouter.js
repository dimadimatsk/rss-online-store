const { Router } = require('express');
const router = new Router();
const productController = require('../controllers/productController');
const checkAuth = require('../middlewares/authMiddleware');
const checkRole = require('../middlewares/checkRoleMiddleware');

router.post('/create', checkAuth, checkRole, productController.create);
router.put('/:id', checkAuth, checkRole, productController.update);
router.delete('/:id', checkAuth, checkRole, productController.delete);
router.get('/search/x:id', productController.getOneProduct);
router.get('/', productController.getAllProducts);
// router.post('/', productController.create);
// router.post('/', productController.create);

module.exports = router;
