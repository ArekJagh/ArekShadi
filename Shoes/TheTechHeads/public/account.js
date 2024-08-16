// account.js

document.addEventListener('DOMContentLoaded', function() {
    const userID = getCurrentUserID();
    const userData = getUserFromLocalStorage('user_' + userID);

    if (userData) {
        const userInfoDiv = document.getElementById('user-info');
        userInfoDiv.innerHTML = `
            <strong>Username:</strong> ${userData.username}<br>
            <strong>Email:</strong> ${userData.email}<br>
            <strong>Address:</strong> ${userData.address}
        `;
    }

    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('currentUserID');
        window.location.href = 'index.html';
    });
});
