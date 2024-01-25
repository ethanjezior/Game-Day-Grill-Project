document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the form and the empty paragraph
    const reservationForm = document.getElementById("reservationForm");
    const confirmationParagraph = document.createElement("p");
    const main = document.querySelector("main");
    
    // Add an event listener to the form submission
    reservationForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting
        
        // Get the values entered by the user
        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        
        // Create the confirmation message
        const confirmationMessage = `Thank you for your reservation at ${time} on ${date}.`;
        
        // Update the paragraph text with the confirmation message
        confirmationParagraph.textContent = confirmationMessage;
        
        // Append the confirmation paragraph to the main element
        main.appendChild(confirmationParagraph);
        
        // Reset the form
        reservationForm.reset();
    });
});