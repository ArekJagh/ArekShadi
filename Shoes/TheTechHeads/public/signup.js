document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get the form values
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const email = document.getElementById('signup-email').value;

    // Create a new user account
    const newUser = new UserAccount(username, password, email);

    // Save user to localStorage
    saveUserToLocalStorage(newUser);

    // Save current user ID for session
    saveCurrentUserID(newUser.userID);

    // Redirect to the confirmation page
    window.location.href = 'confirmation.html';
});
