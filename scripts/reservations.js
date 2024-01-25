document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the form and the empty paragraph for confirmation
    const reservationForm = document.getElementById("reservationForm");
    const confirmMsgParagraph = document.querySelector(".confirm-msg"); // Select the empty <p> tag by class
    
    // Function to convert 24-hour time to 12-hour format
    function convertTo12HourFormat(time24) {
        const [hours, minutes] = time24.split(":");
        let period = "AM";
        let hours12 = parseInt(hours);
        
        if (hours12 === 0) {
            hours12 = 12; // Display 12:00 AM as 12:00 AM
        } else if (hours12 >= 12) {
            period = "PM";
            if (hours12 > 12) {
                hours12 -= 12;
            }
        }
        
        return `${hours12}:${minutes} ${period}`;
    }
    
    // Add an event listener to the form submission
    reservationForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting
        
        // Get the values entered by the user
        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
        const time = convertTo12HourFormat(document.getElementById("time").value);
        
        // Create the confirmation message
        const confirmationMessage = `Thank you for your reservation at ${time} on ${date}.`;
        
        // Update the empty <p> tag's text content with the confirmation message
        confirmMsgParagraph.textContent = confirmationMessage;
        
        // Reset the form
        reservationForm.reset();
    });
});