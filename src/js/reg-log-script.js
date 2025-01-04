// Corrected and improved script for form validation

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the values from the form inputs
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const dob = document.getElementById("dob").value;
        const dobDate = new Date(dob);

        const minDate = new Date("1900-01-01"); // Minimum allowed date of birth
        const currentDate = new Date();

        // Validate email format
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate password complexity
        if (!validatePassword(password)) {
            alert("Password must be between 8 and 12 characters, include at least one uppercase letter, one lowercase letter, and one number.");
            return;
        }

        // Validate date of birth range
        if (isNaN(dobDate.getTime()) || dobDate < minDate || dobDate > currentDate) {
            alert("Please enter a valid date of birth.");
            return;
        }

        // If all validations pass
        alert("Form submitted successfully!");
        // Redirect to the specified URL
        window.location.href = '../../public/index.html';
    });

    // Add input validation feedback
    document.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('blur', function() {
            if (!this.value.trim()) { // If the input is empty
                this.classList.add('is-invalid'); // Add invalid class for styling
            } else {
                this.classList.remove('is-invalid'); // Remove invalid class if input is valid
            }
        });
    });

    // Helper function to validate email
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Helper function to validate password
    function validatePassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/;
        return passwordRegex.test(password);
    }

    // Ensure optional checkbox is not enforced
    const optionalCheckbox = document.getElementById('emailUpdates');
    if (optionalCheckbox) {
        optionalCheckbox.required = false; // Explicitly set to optional
    }
});

// Function to validate that input contains only letters and numbers
function validateAlphanumeric(input) {
    const regex = /^[a-zA-Z0-9]*$/;
    return regex.test(input);
}

// Adding validation to first name and last name inputs
document.getElementById("firstName").addEventListener("input", function () {
    if (!validateAlphanumeric(this.value)) {
        alert("Invalid character! Only letters and numbers are allowed.");
        this.value = this.value.slice(0, -1); // Remove the last invalid character
    }
});

document.getElementById("lastName").addEventListener("input", function () {
    if (!validateAlphanumeric(this.value)) {
        alert("Invalid character! Only letters and numbers are allowed.");
        this.value = this.value.slice(0, -1); // Remove the last invalid character
    }
});

// Adding validation to password input to ensure only alphanumeric characters are allowed
document.getElementById("password").addEventListener("input", function () {
    if (!validateAlphanumeric(this.value)) {
        alert("Invalid character in password! Only letters and numbers are allowed.");
        this.value = this.value.slice(0, -1); // Remove the last invalid character
    }
});