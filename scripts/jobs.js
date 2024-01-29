document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the form and the empty paragraph for confirmation
    const jobsForm = document.querySelector("form"); // Select the form element
    const confirmMsgParagraph = document.getElementById("confirm-msg"); // Select the empty <p> tag by ID
    
    // Function to check if the first name and last name match the easter egg
    function checkEasterEgg(firstName, lastName) {
        return firstName.toLowerCase() === "dev" && lastName.toLowerCase() === "notes";
    }
    
    // Add an event listener to the form submission
    jobsForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting
        
        // Get the values entered by the user
        const firstName = document.getElementById("fname").value;
        const lastName = document.getElementById("lname").value;
        
        // Check for the easter egg condition
        if (checkEasterEgg(firstName, lastName)) {
            // Display the easter egg image as a full-screen background
            window.open("/dev-notes.txt");
            confirmMsgParagraph.style.display = 'none'; // Hide the confirmation message
        } else {
            // Create the confirmation message
            const confirmationMessage = `Thank you, ${firstName}, we will reach out to you soon through email.`;
        
            // Update the empty <p> tag's text content with the confirmation message
            confirmMsgParagraph.textContent = confirmationMessage;
        }
        
        // Reset the form
        jobsForm.reset();
    });
});