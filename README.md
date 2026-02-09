# Letewa - Last-Mile Delivery Service

Letewa is a trusted last-mile delivery service for Kenya, focusing on grocery and essential item deliveries with video verification and real-time tracking.

## Features

### MVP Features Implemented

1. **User Authentication**
   - Customer registration and login
   - Runner registration and verification
   - Admin access

2. **Order Management**
   - Create orders with shopping lists
   - Real-time order tracking
   - Order status updates

3. **Trust & Safety**
   - Runner verification system
   - Video proof of pickup
   - Live location tracking

4. **Communication**
   - In-app chat between customers and runners
   - Status notifications

## Tech Stack

- **Backend**: Node.js with Express
- **Database**: Supabase (PostgreSQL)
- **Frontend**: HTML, CSS, JavaScript
- **Real-time**: Supabase realtime capabilities
- **Maps**: Google Maps API (to be integrated)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd letewa
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with:
   ```
   SUPABASE_URL=your-supabase-url
   SUPABASE_KEY=your-supabase-key
   PORT=3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Documentation

The API is available at `/api/docs` when the server is running.

### Authentication Endpoints

- **POST /api/auth/register** - Register a new user
- **POST /api/auth/login** - Login a user

### Order Endpoints

- **POST /api/orders** - Create a new order
- **GET /api/orders/:orderId** - Get order details
- **PUT /api/orders/:orderId/status** - Update order status

## Project Structure

```
letewa/
├── src/
│   ├── controllers/      # Route controllers
│   ├── routes/           # API routes
│   ├── models/           # Data models
│   ├── services/         # Business logic
│   ├── utils/            # Utility functions
│   └── config/           # Configuration files
├── public/               # Frontend assets
│   ├── css/              # Stylesheets
│   ├── js/               # JavaScript files
│   ├── images/           # Images
│   └── index.html        # Main HTML file
├── .env                  # Environment variables
├── package.json          # Node.js dependencies
└── index.js              # Main server file
```

## Future Enhancements

1. **M-Pesa Integration** - Add STK Push for payments
2. **Google Maps Integration** - Real-time tracking
3. **Video Upload** - Implement video proof feature
4. **Push Notifications** - For order updates
5. **PWA Conversion** - Make it installable as a web app
6. **Admin Dashboard** - For dispute resolution and verification

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a pull request

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please contact the development team.
