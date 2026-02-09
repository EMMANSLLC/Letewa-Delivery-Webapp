// Initialize Supabase client
const supabaseUrl = 'https://nxjmoaqdxpqmnhvsujpc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54am1vYXFkeHBxbW5odnN1anBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyMjE2MTYsImV4cCI6MjA4NTg5NzYxNn0.YourPublishingKey';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Initialize Google Maps
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -1.286389, lng: 36.817223 }, // Nairobi coordinates
        zoom: 12
    });
    
    // Fetch order status updates from Supabase
    fetchStatusUpdates();
    
    // Set up real-time updates
    supabase
        .channel('order_updates')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, payload => {
            console.log('Change received!', payload);
            fetchStatusUpdates();
        })
        .subscribe();
}

// Fetch status updates
async function fetchStatusUpdates() {
    const { data, error } = await supabase
        .from('orders')
        .select('status, updated_at');
    
    if (error) {
        console.error('Error fetching updates:', error.message);
    } else {
        const updatesList = document.getElementById('updates-list');
        updatesList.innerHTML = '';
        data.forEach(order => {
            const li = document.createElement('li');
            li.textContent = `${order.status} (${new Date(order.updated_at).toLocaleString()})`;
            updatesList.appendChild(li);
        });
    }
}