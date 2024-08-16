document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;

    // Validate Name on Card (Only Letters)
    const nameOnCard = document.getElementById('nameOnCard').value;
    if (!/^[A-Za-z\s]+$/.test(nameOnCard)) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Validate Card Number (Only Numbers, 16 digits)
    const cardNumber = document.getElementById('cardNumber').value;
    if (!/^\d{16}$/.test(cardNumber)) {
        document.getElementById('cardNumberError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('cardNumberError').style.display = 'none';
    }

    // Validate Expiry Date (MM/DD)
    const expiryDate = document.getElementById('expiryDate').value;
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        document.getElementById('expiryDateError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('expiryDateError').style.display = 'none';
    }

    // Automatically add the '/' after two digits in Expiry Date
    document.getElementById('expiryDate').addEventListener('input', function(e) {
        let value = e.target.value;
        if (value.length === 2 && !value.includes('/')) {
            e.target.value = value + '/';
        }
    });

    // Validate CVV (Only Numbers, 3 digits)
    const cvv = document.getElementById('cvv').value;
    if (!/^\d{3}$/.test(cvv)) {
        document.getElementById('cvvError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('cvvError').style.display = 'none';
    }

    // If all validations pass
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(function() {
            window.location.href = "thankyou.html"; // Redirect to thank you page
        }, 1000); // 1 second delay before redirect
    }
});
