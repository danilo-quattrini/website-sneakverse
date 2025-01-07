// Add an event listener to the form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the form inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validate email format
    if (!email.includes("@")) {
        alert("Please enter a valid email.");
    } 
    // Validate password length
    else if (password.length < 8) {
        alert("Password must be at least 8 characters.");
    } 
    // Success message if all validations pass
    else {
        alert("Login successful!");
    }
});


document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Assuming login validation is successful
    localStorage.setItem("isLoggedIn", "true"); // Store login status in local storage

    // Redirect to the index page
    window.location.href = "/public/index.html";
});

