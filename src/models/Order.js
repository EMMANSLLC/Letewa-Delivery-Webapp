class Order {
  constructor(id, customerId, runnerId, items, pickupLocation, deliveryLocation, status, price) {
    this.id = id;
    this.customerId = customerId;
    this.runnerId = runnerId;
    this.items = items; // Array of items
    this.pickupLocation = pickupLocation;
    this.deliveryLocation = deliveryLocation;
    this.status = status; // 'pending', 'accepted', 'picked_up', 'in_transit', 'delivered', 'cancelled'
    this.price = price;
    this.createdAt = new Date();
  }

  static async create(orderData) {
    // This would interact with Supabase to create an order
    // For now, we'll return a mock order
    return new Order(
      'order_' + Math.random().toString(36).substr(2, 9),
      orderData.customerId,
      null, // No runner assigned yet
      orderData.items,
      orderData.pickupLocation,
      orderData.deliveryLocation,
      'pending',
      orderData.price
    );
  }

  static async findById(id) {
    // Mock implementation - would query Supabase in real implementation
    return {
      id: id,
      customerId: 'customer_123',
      runnerId: null,
      items: ['2kg Sugar', '1L Milk'],
      pickupLocation: 'Nakumatt Junction',
      deliveryLocation: 'Karen Estate',
      status: 'pending',
      price: 500,
      createdAt: new Date()
    };
  }
}

module.exports = Order;