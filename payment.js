document
  .querySelector(".payment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const cardholderName = document.getElementById("cardholder-name").value;
    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;

    // Basic validation (you can extend this with more specific checks)
    if (!cardholderName || !cardNumber || !expiryDate || !cvv) {
      alert("Please fill in all fields.");
      return;
    }
    if (cardNumber.length < 12) {
      alert("Enter a valid card number with at least 12 digits.");
    } else alert("Payment successful!");

    // Here you would typically send the payment data to the backend server
    // using fetch() or AJAX for actual payment processing.
  });
