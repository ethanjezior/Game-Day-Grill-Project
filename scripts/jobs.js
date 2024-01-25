document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the form and the empty paragraph for confirmation
    const jobsForm = document.querySelector("form"); // Select the form element
    const confirmMsgParagraph = document.getElementById("job-apply-msg"); // Select the empty <p> tag by ID
    
    // Add an event listener to the form submission
    jobsForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting
        
        // Get the values entered by the user
        const firstName = document.getElementById("fname").value;
        
        // Create the confirmation message
        const confirmationMessage = `Thank you, ${firstName}, we will reach out to you soon through email.`;
        
        // Update the empty <p> tag's text content with the confirmation message
        confirmMsgParagraph.textContent = confirmationMessage;
        
        // Reset the form
        jobsForm.reset();
    });
});