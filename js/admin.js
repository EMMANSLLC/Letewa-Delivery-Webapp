// Initialize Supabase client
const supabaseUrl = 'https://nxjmoaqdxpqmnhvsujpc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54am1vYXFkeHBxbW5odnN1anBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyMjE2MTYsImV4cCI6MjA4NTg5NzYxNn0.YourPublishingKey';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Fetch users
async function fetchUsers() {
    const { data, error } = await supabase
        .from('users')
        .select('*');
    
    if (error) {
        console.error('Error fetching users:', error.message);
    } else {
        const usersList = document.getElementById('users-list');
        usersList.innerHTML = '';
        data.forEach(user => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>Role: ${user.role}</p>
            `;
            usersList.appendChild(li);
        });
    }
}

// Fetch orders
async function fetchOrders() {
    const { data, error } = await supabase
        .from('orders')
        .select('*');
    
    if (error) {
        console.error('Error fetching orders:', error.message);
    } else {
        const ordersList = document.getElementById('orders-list');
        ordersList.innerHTML = '';
        data.forEach(order => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h3>Order #${order.id}</h3>
                <p>Status: ${order.status}</p>
                <p>Pickup: ${order.pickup_location}</p>
                <p>Delivery: ${order.delivery_location}</p>
            `;
            ordersList.appendChild(li);
        });
    }
}

// Initialize
fetchUsers();
fetchOrders();