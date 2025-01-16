// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".registration");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Get the email and password values
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Log them to ensure values are captured
            console.log("Email:", email);
            console.log("Password:", password);

            // Define the API URL
            const apiUrl = "https://realtimetranslator-zyx1.onrender.com/auth/register"; // Replace with actual API URL

            // Send data as a POST request to the API
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email, password: password }),
            })
            .then((response) => response.json())
            .then((data) => {
                if (data.responseStatus === "SUCCESS") {
                    console.log("Regustration successful:", data);

                    // Redirect to Home.html
                    window.location.href = "Login.html";
                } else {
                    console.error("Registraiton failed:", data.msg);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                // Handle error (e.g., display error message)
            });
        });
    }
});
