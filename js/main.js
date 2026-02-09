// Initialize Supabase client
const supabaseUrl = 'https://nxjmoaqdxpqmnhvsujpc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54am1vYXFkeHBxbW5odnN1anBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyMjE2MTYsImV4cCI6MjA4NTg5NzYxNn0.YourPublishingKey';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Handle onboarding form submission
const onboardingForm = document.getElementById('onboarding-form');
onboardingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(onboardingForm);
    const userData = {
        name: formData.get('Full Name'),
        email: formData.get('Email'),
        password: formData.get('Password')
    };

    // Sign up user using Supabase
    const { user, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
            data: {
                name: userData.name
            }
        }
    });

    if (error) {
        console.error('Error signing up:', error.message);
    } else {
        console.log('User signed up:', user);
        // Redirect to dashboard or next step
        window.location.href = 'dashboard.html';
    }
});