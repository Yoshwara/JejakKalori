document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Mencegah perilaku default dari formulir
    event.preventDefault();

    // Mendapatkan nilai dari input email dan password
    var login_email = document.getElementById("login_email").value;
    var login_password = document.getElementById("login_password").value;

    // Mendapatkan informasi pengguna dari localStorage
    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");

    // Memeriksa apakah email dan password yang dimasukkan sesuai dengan yang tersimpan
    if (login_email === storedEmail && login_password === storedPassword) {
        alert("Login successful!");
        // Redirect pengguna ke halaman lain jika login berhasil
        window.location.href = "identitas.html";
    } else {
        alert("Login failed. Incorrect email or password!");
    }
});
