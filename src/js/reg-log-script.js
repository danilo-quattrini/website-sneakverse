// Script for validating a registration form with various checks and providing user feedback

// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {

    // Select the form by its ID
    const form = document.getElementById("myForm");

    // Add an event listener to handle form submission
    form.addEventListener("submit", (event) => {
        // Prevent the default form submission to handle validation manually
        event.preventDefault();

        // Get the email, password, and date of birth values from the form
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const dob = document.getElementById("dob").value;
        const dobDate = new Date(dob);

        // Set the minimum and maximum allowed date of birth
        const minDate = new Date("1900-01-01");
        const currentDate = new Date();

        // Check if the email format is valid using a helper function
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Check if the password meets complexity requirements
        if (!validatePassword(password)) {
            alert("Password must be between 8 and 12 characters, include at least one uppercase letter, one lowercase letter, and one number.");
            return;
        }

        // Check if the date of birth is within the allowed range
        if (isNaN(dobDate.getTime()) || dobDate < minDate || dobDate > currentDate) {
            alert("Please enter a valid date of birth.");
            return;
        }

        // If all validations pass, show a success message and redirect the user
        alert("Form submitted successfully!");
        window.location.href = '../../public/index.html';
    });

    // Provide feedback when the user interacts with input fields
    document.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('blur', function() {
            // If the input is empty, mark it as invalid
            if (!this.value.trim()) {
                this.classList.add('is-invalid');
            } else {
                // Otherwise, remove the invalid marker
                this.classList.remove('is-invalid');
            }
        });
    });

    // Helper function to validate email format using a regular expression
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Helper function to validate password complexity using a regular expression
    function validatePassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/;
        return passwordRegex.test(password);
    }

    // Ensure that the optional checkbox is not marked as required
    const optionalCheckbox = document.getElementById('emailUpdates');
    if (optionalCheckbox) {
        optionalCheckbox.required = false;
    }
});

// Validate that input contains only letters and numbers
function validateAlphanumeric(input) {
    const regex = /^[a-zA-Z0-9]*$/;
    return regex.test(input);
}

// Validate first name input to ensure it only contains alphanumeric characters
document.getElementById("firstName").addEventListener("input", function () {
    if (!validateAlphanumeric(this.value)) {
        alert("Invalid character! Only letters and numbers are allowed.");
        this.value = this.value.slice(0, -1);
    }
});

// Validate last name input to ensure it only contains alphanumeric characters
document.getElementById("lastName").addEventListener("input", function () {
    if (!validateAlphanumeric(this.value)) {
        alert("Invalid character! Only letters and numbers are allowed.");
        this.value = this.value.slice(0, -1);
    }
});

// Validate password input to ensure it only contains alphanumeric characters
document.getElementById("password").addEventListener("input", function () {
    if (!validateAlphanumeric(this.value)) {
        alert("Invalid character in password! Only letters and numbers are allowed.");
        this.value = this.value.slice(0, -1);
    }
});
