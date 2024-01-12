// This javascript file is used for handling behavior of the gallary
let imgIndex = 0;
showGal(imgIndex);

// Next/Prev controls
function galImg(n) {
    showGal(imgIndex = n);
}

// Thumbnail img controls
function currentImg(n) {
    showGal(imgIndex = n);
}

function showGal(n) {
    let i;
    let gal = document.getElementsByClassName("gallary");
    let dots = document.getElementsByClassName("dot");
    imgIndex++;
    if (imgIndex > gal.length) { imgIndex = 1 }
    gal[imgIndex - 1].style.display = "block";

    // Change image every 2 seconds
    setTimeout(showSlides, 2000); 

    
    if(n > gal.length) {imgIndex = 1}
    if(n < 1) {imgIndex = gal.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    gal[imgIndex-1].style.display = "block";
    dots[imgIndex-1].className += " active";
}