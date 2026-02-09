// Initialize Supabase client
const supabaseUrl = 'https://nxjmoaqdxpqmnhvsujpc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54am1vYXFkeHBxbW5odnN1anBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyMjE2MTYsImV4cCI6MjA4NTg5NzYxNn0.YourPublishingKey';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Fetch available jobs
async function fetchJobs() {
    const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('status', 'pending');
    
    if (error) {
        console.error('Error fetching jobs:', error.message);
    } else {
        const jobsList = document.getElementById('jobs-list');
        jobsList.innerHTML = '';
        data.forEach(job => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h3>Job #${job.id}</h3>
                <p>Pickup: ${job.pickup_location}</p>
                <p>Delivery: ${job.delivery_location}</p>
                <button onclick="acceptJob(${job.id})">Accept Job</button>
            `;
            jobsList.appendChild(li);
        });
    }
}

// Accept a job
async function acceptJob(jobId) {
    const { data, error } = await supabase
        .from('orders')
        .update({ status: 'accepted', runner_id: supabase.auth.user().id })
        .eq('id', jobId);
    
    if (error) {
        console.error('Error accepting job:', error.message);
    } else {
        console.log('Job accepted:', data);
        fetchJobs();
    }
}

// Handle verification form submission
const verificationForm = document.getElementById('verification-form');
verificationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(verificationForm);
    const file = formData.get('file');
    
    // Upload proof to Supabase storage
    const { data, error } = await supabase
        .storage
        .from('verifications')
        .upload(`proofs/${supabase.auth.user().id}/${Date.now()}.jpg`, file);
    
    if (error) {
        console.error('Error uploading proof:', error.message);
    } else {
        console.log('Proof uploaded:', data);
        // Update order status
        const { data: orderData, error: orderError } = await supabase
            .from('orders')
            .update({ status: 'picked_up', verification_url: data.path })
            .eq('runner_id', supabase.auth.user().id)
            .eq('status', 'accepted');
        
        if (orderError) {
            console.error('Error updating order:', orderError.message);
        } else {
            console.log('Order updated:', orderData);
        }
    }
});

// Initialize
fetchJobs();