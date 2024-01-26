document.addEventListener('DOMContentLoaded', function() {
    // Initialize an empty cart
    let cart = [];

    // Function to add an item to the cart
    window.addToCart = function() {
        let selectedItem = document.getElementById('itemSelect').value;
        cart.push(selectedItem); // Add selected item to the cart
        alert("Item added to cart!");
    };

    // Function to view the cart items
    window.viewCart = function() {
        let cartItems = document.getElementById('cartItems');
        cartItems.innerHTML = ''; // Clear current cart items

        // Add each item in the cart to the display
        cart.forEach(function(item, index) {
            let li = document.createElement('li');
            li.textContent = item + " - " + "Quantity: 1"; // Simplified display
            cartItems.appendChild(li);
        });
        
        // Show the cart modal
        document.getElementById('cartModal').style.display = 'block';
    };

    // Function to handle checkout
    window.checkout = function() {
        if (cart.length === 0) {
            alert("Your cart is empty!");
        } else {
            // Checkout logic here
            alert("Checked out successfully!");
            cart = []; // Clear the cart
        }
    };

    // Function to close the cart modal
    window.closeModal = function() {
        document.getElementById('cartModal').style.display = 'none';
    };

    // Close the modal when the user clicks anywhere outside of it
    window.onclick = function(event) {
        let modal = document.getElementById('cartModal');
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});