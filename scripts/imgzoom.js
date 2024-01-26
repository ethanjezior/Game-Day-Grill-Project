/* 
This Script file is dedicated to making pictures zoom 
on click to make them more easily accessable for people 
with eyesight problems.
*/
document.addEventListener('DOMContentLoaded', function () {
    var imgs = document.querySelectorAll('img');
    Array.prototype.forEach.call(imgs, function (img) {
        // Set tabIndex to make images focusable
        if (img.tabIndex <= 0) img.tabIndex = 10000;

        // Add click event listener to each image
        img.addEventListener('click', function(event) {
            // Toggle the 'zoomed' class
            this.classList.toggle('zoomed');
        });
    });
});