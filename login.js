function handleLogin(event) {
  event.preventDefault(); // Prevents form from submitting and page from reloading

  // Perform your login validation here
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "123") {
    alert("Login successful!");
    window.location.href = "Home.html"; // Redirect to the home page
  } else {
    alert("Invalid credentials, please try again.");
  }
}
