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

## Project Structure
- `index.html`: Landing page and onboarding
- `dashboard.html`: Customer dashboard for placing orders
- `tracking.html`: Real-time order tracking
- `runner.html`: Runner interface for accepting jobs and verification
- `admin.html`: Admin panel for managing users and orders
- `css/styles.css`: Global styles
- `js/`: JavaScript files for each page

## Supabase Configuration
- **Project URL**: `https://nxjmoaqdxpqmnhvsujpc.supabase.co`
- **Publishable Key**: `sb_publishable_hYs8jERofor5W6aabEwdFg_iUbUSqfs`
- **Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54am1vYXFkeHBxbW5odnN1anBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyMjE2MTYsImV4cCI6MjA4NTg5NzYxNn0.YourPublishingKey`

## Next Steps
- Implement M-Pesa payment integration
- Add video verification for runners
- Enhance real-time tracking with WebSockets
- Deploy as a Progressive Web App (PWA)

## License
MIT