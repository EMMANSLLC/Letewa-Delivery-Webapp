// Initialize Supabase client
const supabaseUrl = 'https://nxjmoaqdxpqmnhvsujpc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54am1vYXFkeHBxbW5odnN1anBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyMjE2MTYsImV4cCI6MjA4NTg5NzYxNn0.YourPublishingKey';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Handle order form submission
const orderForm = document.getElementById('order-form');
orderForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(orderForm);
    const orderData = {
        pickup_location: formData.get('Pickup Location'),
        delivery_location: formData.get('Delivery Location'),
        shopping_list: formData.get('Shopping List')
    };

    // Insert order into Supabase
    const { data, error } = await supabase
        .from('orders')
        .insert([orderData]);

    if (error) {
        console.error('Error placing order:', error.message);
    } else {
        console.log('Order placed:', data);
        // Redirect to tracking or confirmation page
        window.location.href = 'tracking.html';
    }
});

// Initialize Google Maps
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -1.286389, lng: 36.817223 }, // Nairobi coordinates
        zoom: 12
    });
    
    // Add real-time tracking logic here
}