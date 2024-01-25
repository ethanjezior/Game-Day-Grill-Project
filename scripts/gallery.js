// This javascript file is used for handling behavior of the gallery
let imgIndex = 0;
showGal(imgIndex);

// Next/Prev controls
function galImg(n) {
    showGal(imgIndex += n);
}

// Thumbnail image controls with arrows
function ArrowSlider(n) {
    showGal(imgIndex += n);
}

// Thumbnail image controls with dots bellow
function DotsSlider(n) {
    showGal(imgIndex = n);
}

// Controls display of Gallery Images
function showGal(n) {
    let i;
    let gal = document.getElementsByClassName("gallery");
    let img = document.getElementsByClassName("gal-img");
    let dots = document.getElementsByClassName("dot");
    const a = "auto";
    
    // Manual Gallery Image Change
    if (n > gal.length) {imgIndex = 1}
    if (n < 1) {imgIndex = gal.length}
    for (i = 0; i < gal.length; i++) {
        gal[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }

    // Styling
    gal[imgIndex-1].style.display = "block";
    gal[imgIndex-1].style.width = "90%";
    gal[imgIndex-1].style.margin = "auto"

    img[imgIndex-1].style.display = "block";
    img[imgIndex-1].style.margin = "1% auto";

    dots[imgIndex-1].className += " active";
}