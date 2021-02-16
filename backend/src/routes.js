const { Router } = require('express');
const OrderController = require('./controllers/OrderController')

const router = Router();

router.get('/orders', OrderController.index);
router.post('/orders', OrderController.store);
router.patch('/orders/:id/status', OrderController.update);
router.delete('/orders/:id', OrderController.delete);

module.exports = router