const { Router } = require('express');
const favorController = require('../controllers/favorController');
const router = new Router();
const { checkToken, checkId } = require('../middlewares/authMiddleware');

router.get('/:userId', checkToken, checkId, favorController.getFavors);
router.post('/:userId', checkToken, checkId, favorController.addProductToFavor);
router.delete('/:userId', checkToken, checkId, favorController.removeProductFromFavor);

module.exports = router;
