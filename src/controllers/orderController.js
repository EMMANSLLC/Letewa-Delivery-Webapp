const Order = require('../models/Order');

class OrderController {
  static async createOrder(req, res) {
    try {
      const { customerId, items, pickupLocation, deliveryLocation, price } = req.body;
      
      // Basic validation
      if (!customerId || !items || !pickupLocation || !deliveryLocation || !price) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Create order
      const order = await Order.create({ customerId, items, pickupLocation, deliveryLocation, price });

      res.status(201).json({
        message: 'Order created successfully',
        order: {
          id: order.id,
          customerId: order.customerId,
          items: order.items,
          pickupLocation: order.pickupLocation,
          deliveryLocation: order.deliveryLocation,
          status: order.status,
          price: order.price,
          createdAt: order.createdAt
        }
      });
    } catch (error) {
      console.error('Create order error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async getOrder(req, res) {
    try {
      const { orderId } = req.params;
      
      if (!orderId) {
        return res.status(400).json({ error: 'Order ID is required' });
      }

      const order = await Order.findById(orderId);

      res.status(200).json({
        message: 'Order retrieved successfully',
        order
      });
    } catch (error) {
      console.error('Get order error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async updateOrderStatus(req, res) {
    try {
      const { orderId } = req.params;
      const { status, runnerId } = req.body;
      
      if (!orderId || !status) {
        return res.status(400).json({ error: 'Order ID and status are required' });
      }

      // Mock implementation - would update order in Supabase
      const updatedOrder = {
        id: orderId,
        status: status,
        runnerId: runnerId || null,
        updatedAt: new Date()
      };

      res.status(200).json({
        message: 'Order status updated successfully',
        order: updatedOrder
      });
    } catch (error) {
      console.error('Update order status error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = OrderController;