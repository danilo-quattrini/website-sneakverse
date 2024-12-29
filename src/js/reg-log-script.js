// Add an event listener to the form submission
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the form inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const dobDate = new Date(dob);

    const minDate = new Date("1900-01-01"); // Minimum allowed date of birth

    // Validate email format
    if (!email.includes("@")) {
        alert("Please enter a valid email.");
    } 
    // Validate password length
    else if (password.length < 8 || password.length > 12) {
        alert("Password must be between 8 and 12 characters.");
    } 
    // Validate date of birth range
    else if (dobDate < minDate) {
        alert("Please enter a valid date of birth.");
    } 
    // Success message if all validations pass
    else {
        alert("Form submitted successfully!");
    }
});

// Add event listeners to all input fields for validation feedback
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('blur', function() {
        if (!this.value) { // If the input is empty
            this.classList.add('is-invalid'); // Add invalid class for styling
        } else {
            this.classList.remove('is-invalid'); // Remove invalid class if input is valid
        }
    });
});

// Add another event listener for form submission with built-in validation
document.getElementById('myForm').addEventListener('submit', function(event) { 
    event.preventDefault(); // Prevent default behavior

    const formValid = this.checkValidity(); // Check form validity

    // If the form is valid, redirect to the specified URL
    if (formValid) { 
        window.location.href = '../../public/index.html'; 
    } else { 
        alert('Please fill out all fields correctly.'); // Alert the user if form is invalid
    } 
});
