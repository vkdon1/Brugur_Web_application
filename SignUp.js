document.querySelector("#signup-button").addEventListener("click", async () => {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  try {
    const response = await fetch("http://localhost:5000/signup", {
      // Submit to backend running on port 5000
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }), // Send data as JSON
    });

    const result = await response.json();

    if (response.ok) {
      // If form submission was successful, redirect back to default port (like 3000)
      window.location.href = "http://localhost:3000"; // Redirect to default port
    } else {
      console.error("Error:", result.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
