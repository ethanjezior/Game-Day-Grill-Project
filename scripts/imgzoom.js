/* 
This Script file is dedicated to making pictures zoom 
on click to make them more easily accessable for people 
with eyesight problems.
*/
document.addEventListener('DOMContentLoaded', function () {
    var imgs = document.querySelectorAll('img');
    Array.prototype.forEach.call(imgs, function (el) {
        if (el.tabIndex <= 0) el.tabIndex = 10000;
    });
});