const { Router } = require('express');
const router = new Router();
const auth = require('./authRouter');
const products = require('./productRouter');

router.use('/auth', auth);
router.use('/product', products);

module.exports = router;
