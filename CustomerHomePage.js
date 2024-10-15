function confirmOrder() {
  alert(
    "Your order for the burger has been place scussesfully procding for payment!"
  );
  // Redirect to another page or perform any additional actions
  window.location.href = "payment.html"; // Redirect to a thank-you page or any desired page
}

function addToOrder(burgerName, price) {
  // Create an order object
  const order = {
    burger: burgerName,
    price: price,
  };

  // Get existing orders from local storage (if any)
  let existingOrders = JSON.parse(localStorage.getItem("orderList")) || [];

  // Add the new order to the list
  existingOrders.push(order);

  // Save the updated order list back to local storage
  localStorage.setItem("orderList", JSON.stringify(existingOrders));

  // Redirect to the order summary page
  // window.location.href = "order-summary.html";
}
// JavaScript function to handle order confirmation
