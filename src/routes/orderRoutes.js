const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');

// Order routes
router.post('/', OrderController.createOrder);
router.get('/:orderId', OrderController.getOrder);
router.put('/:orderId/status', OrderController.updateOrderStatus);

module.exports = router;