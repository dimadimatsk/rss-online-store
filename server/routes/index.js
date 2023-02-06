const { Router } = require('express');
const router = new Router();
const auth = require('./authRouter');
const product = require('./productRouter');
const cart = require('./cartRouter');
const order = require('./orderRouter');
const favor = require('./favorRouter');

router.use('/auth', auth);
router.use('/product', product);
router.use('/cart', cart);
router.use('/order', order);
router.use('/favor', favor);

module.exports = router;
