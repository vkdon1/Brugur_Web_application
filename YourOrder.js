function addToOrder(burger, price) {
  // Retrieve the current order list from localStorage
  let orderList = JSON.parse(localStorage.getItem("orderList")) || [];

  // Add the new order (burger and price)
  orderList.push({ burger: burger, price: price });

  // Save the updated order list back to localStorage
  localStorage.setItem("orderList", JSON.stringify(orderList));

  // Optionally, show a confirmation modal or message
  alert(`${burger} added to your order!`);

  // Call the displayOrderList function to update the order list on the page
  displayOrderList();
}
function displayOrderList() {
  // Retrieve the order list from localStorage
  const orderList = JSON.parse(localStorage.getItem("orderList")) || [];

  // Display the order details
  if (orderList.length > 0) {
    let orderHTML = "<ul>";
    orderList.forEach((order) => {
      orderHTML += `
      <li>
        <strong>${order.burger}</strong> - RS ${order.price}/-
      </li>
    `;
    });
    orderHTML += "</ul>";

    // Append the order summary to the page
    document.getElementById("orderDetails").innerHTML = orderHTML;
  } else {
    // If no orders are found, show a message
    document.getElementById(
      "orderDetails"
    ).innerHTML = `<p>No orders placed yet.</p>`;
  }
}

// Call the function to display the order list when the page loads
window.onload = displayOrderList;

function clearOrderList() {
  // Clear the order list from localStorage
  localStorage.removeItem("orderList");

  // Update the page by calling displayOrderList
  displayOrderList();

  // Optionally, show a message that the orders have been cleared
  alert("All orders have been cleared.");
}
