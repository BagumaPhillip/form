function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var nationality = document.getElementById('nationality').value;
    var telephone = document.getElementById('telephone').value;
    var message = document.getElementById('message').value;

    // Simple validation
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || age.trim() === '' || gender === '' || nationality.trim() === '' || message.trim() === '' || telephone.trim() === '') {
        alert('Please fill in all required fields.');
        return false;
    }

    // Email validation using regex
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Form submission successful
    alert('Form submitted successfully!');
    return true;
}
