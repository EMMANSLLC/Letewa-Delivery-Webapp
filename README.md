# Letewa - Last-Mile Delivery Platform

## Overview
Letewa is a last-mile delivery platform designed for the Kenyan market, focusing on trust, transparency, and real-time communication. The platform connects customers with runners (Boda Boda) for efficient and secure deliveries.

## Features
- **User Roles**: Customer, Runner, Admin
- **Secure Onboarding**: Verification for runners (ID, KRA Pin, Live Selfie)
- **Ordering & Smart Lists**: Custom requests and dynamic pricing
- **Live Tracking**: Real-time Google Maps integration
- **Communication**: In-app chat and status updates
- **Payment Integration**: M-Pesa support

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Supabase (Authentication, Database, Storage)
- **Maps**: Google Maps API
- **Payment**: M-Pesa STK Push

## Setup
1. Clone the repository
2. Set up Supabase with the provided URL and keys
3. Configure Google Maps API for real-time tracking
4. Integrate M-Pesa API for payments

## Running the App
To run the Letewa website locally:

1. **Prerequisites**:
   - Ensure you have a modern web browser installed (e.g., Chrome, Firefox).
   - Install a local development server like `Live Server` for Visual Studio Code or use the `http-server` npm package.

2. **Steps**:
   - Clone the repository to your local machine.
   - Navigate to the project directory.
   - Open the `index.html` file in your web browser or use a local development server to serve the files.

3. **Using Live Server in VS Code**:
   - Install the `Live Server` extension from the VS Code marketplace.
   - Open the project folder in VS Code.
   - Right-click on the `index.html` file and select `Open with Live Server`.

4. **Using http-server**:
   - Install `http-server` globally using npm:
     ```bash
     npm install -g http-server
     ```
   - Navigate to the project directory and run:
     ```bash
     http-server
     ```
   - Open your browser and go to `http://localhost:8080`.

## Project Structure
- `index.html`: Landing page and onboarding
- `dashboard.html`: Customer dashboard for placing orders
- `tracking.html`: Real-time order tracking
- `runner.html`: Runner interface for accepting jobs and verification
- `admin.html`: Admin panel for managing users and orders
- `css/styles.css`: Global styles
- `js/`: JavaScript files for each page

## Supabase Configuration
To configure Supabase for this project, you need to provide your own Supabase project URL and keys. Replace the placeholder values below with your actual Supabase credentials:

- **Project URL**: `YOUR_SUPABASE_PROJECT_URL`
- **Publishable Key**: `YOUR_SUPABASE_PUBLISHABLE_KEY`
- **Anon Key**: `YOUR_SUPABASE_ANON_KEY`

**Note**: Ensure you create a Supabase project and obtain these keys from your Supabase dashboard.

## Next Steps
- Implement M-Pesa payment integration
- Add video verification for runners
- Enhance real-time tracking with WebSockets
- Deploy as a Progressive Web App (PWA)

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
