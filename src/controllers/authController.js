const User = require('../models/User');

class AuthController {
  static async register(req, res) {
    try {
      const { name, email, phone, role, password } = req.body;
      
      // Basic validation
      if (!name || !email || !phone || !role || !password) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Create user
      const user = await User.create({ name, email, phone, role });

      res.status(201).json({
        message: 'User registered successfully',
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          verificationStatus: user.verificationStatus
        }
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      
      // Basic validation
      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
      }

      // Mock login - in real implementation, this would verify credentials
      const user = await User.findById('mock_user_id');

      res.status(200).json({
        message: 'Login successful',
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          verificationStatus: user.verificationStatus
        },
        token: 'mock_jwt_token' // In real app, generate JWT token
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = AuthController;