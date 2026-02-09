class User {
  constructor(id, name, email, phone, role, verificationStatus) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.role = role; // 'customer', 'runner', 'admin'
    this.verificationStatus = verificationStatus; // 'pending', 'verified', 'rejected'
  }

  static async create(userData) {
    // This would interact with Supabase to create a user
    // For now, we'll return a mock user
    return new User(
      'user_' + Math.random().toString(36).substr(2, 9),
      userData.name,
      userData.email,
      userData.phone,
      userData.role,
      'pending'
    );
  }

  static async findById(id) {
    // Mock implementation - would query Supabase in real implementation
    return {
      id: id,
      name: 'Test User',
      email: 'test@example.com',
      phone: '+254712345678',
      role: 'customer',
      verificationStatus: 'verified'
    };
  }
}

module.exports = User;