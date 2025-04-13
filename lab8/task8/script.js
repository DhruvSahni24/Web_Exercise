document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculateBtn").addEventListener("click", calculateTotal);
});

function calculateTotal() {
    // Ticket prices
    const adultPrice = 10;
    const childPrice = 5;

    // Get input values
    let adults = document.getElementById("adultTickets").value;
    let children = document.getElementById("childTickets").value;

    // Convert to numbers (handle empty input)
    adults = adults ? parseInt(adults) : 0;
    children = children ? parseInt(children) : 0;

    // Debugging (Check if values are retrieved)
    console.log("Adults:", adults, "Children:", children);

    // Calculate total amount
    let total = (adults * adultPrice) + (children * childPrice);

    // Display result
    document.getElementById("totalAmount").value = "₹" + total;
}
