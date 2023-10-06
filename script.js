document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        errorMessage.textContent = '';

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        if (!name || !email || !phone) {
            errorMessage.textContent = 'All fields are required.';
            return;
        }

        if (!isValidEmail(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            return;
        }

        if (!isValidPhoneNumber(phone)) {
            errorMessage.textContent = 'Phone number must be 10 digits.';
            return;
        }

        // Simulate a successful signup for demonstration purposes
        // In a real application, you would send the data to a server and handle the response
        // Here, we'll simply redirect the user to a login page with a success message
        redirectToLoginWithMessage('Signup successful! You can now log in.');

    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone) {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }

    function redirectToLoginWithMessage(message) {
        // Redirect to the login page with the success message in the query parameter
        const loginUrl = 'login.html'; // Replace with the actual login page URL
        window.location.href = `${loginUrl}?message=${encodeURIComponent(message)}`;
    }
});
