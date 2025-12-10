function validateForm() {
    // Get the values from the input fields
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');
    
    // Reset the error message
    errorMessage.textContent = ''; 

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please enter both a username and a password.';
        // Prevent form submission if fields are empty
        return false; 
    }

    // --- IMPORTANT SECURITY NOTE ---
    // In a real application, you would NOT perform the actual login 
    // check here. Instead, you would use 'fetch' or 'XMLHttpRequest' 
    // to send the data to a secure server-side script.

    // For this example, we'll just show an alert on successful "submission"
    alert('Form submitted! Sending data to the server...');
    
    // In a real application, you'd make an AJAX call and then 
    // return false here to prevent the default form submit and handle 
    // the redirect/error based on the server's response.
    
    // For now, let the form submit (which will just refresh the page)
    return true; 
}
// --- Existing validateForm() for login remains here ---

function validateRegistration() {
    const username = document.getElementById('reg-username').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;
    const errorMessage = document.getElementById('reg-error-message');

    errorMessage.textContent = ''; // Reset error message

    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'All fields are required.';
        return false;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return false;
    }

    // --- IMPORTANT SECURITY NOTE ---
    // In a real application, you send this data securely to the server 
    // for validation and storage (hashing the password!).

    alert('Registration form submitted! Sending data to the server...');
    return true; 
}