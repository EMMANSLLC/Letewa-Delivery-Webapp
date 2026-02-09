require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const authRoutes = require('./src/routes/authRoutes');
const orderRoutes = require('./src/routes/orderRoutes');

app.use(cors());
app.use(bodyParser.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Basic route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);

// API documentation route
app.get('/api/docs', (req, res) => {
  res.json({
    title: 'Letewa API Documentation',
    version: '1.0.0',
    description: 'API for Letewa last-mile delivery service',
    endpoints: {
      auth: {
        register: {
          method: 'POST',
          path: '/api/auth/register',
          description: 'Register a new user',
          body: {
            name: 'string',
            email: 'string',
            phone: 'string',
            role: 'string (customer|runner|admin)',
            password: 'string'
          }
        },
        login: {
          method: 'POST',
          path: '/api/auth/login',
          description: 'Login a user',
          body: {
            email: 'string',
            password: 'string'
          }
        }
      },
      orders: {
        create: {
          method: 'POST',
          path: '/api/orders',
          description: 'Create a new order',
          body: {
            customerId: 'string',
            items: 'array',
            pickupLocation: 'string',
            deliveryLocation: 'string',
            price: 'number'
          }
        },
        get: {
          method: 'GET',
          path: '/api/orders/:orderId',
          description: 'Get order details'
        },
        updateStatus: {
          method: 'PUT',
          path: '/api/orders/:orderId/status',
          description: 'Update order status',
          body: {
            status: 'string',
            runnerId: 'string (optional)'
          }
        }
      }
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Letewa server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} for the website`);
  console.log(`API available at http://localhost:${PORT}/api`);
});
