function validatePassword(event) {
    event.preventDefault();
    
    const passwordInput = document.getElementById("password").value;

    // Check if password matches
    if (passwordInput === "2024") {
        // Redirect to main page in the Main folder
        window.location.href = "./Main/main.html";
    } else {
        alert("Incorrect password. Please try again.");
    }
}
