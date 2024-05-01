document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    if (password === confirm_password) {
        // Simpan informasi pengguna di localStorage
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("Registration successful!");

        // Redirect ke halaman login
        window.location.href = "index.html";
    } else {
        alert("Password confirmation doesn't match!");
    }
});
