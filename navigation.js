let icon_element = document.getElementById("icon");
let cross_mark = document.getElementById("close");
let nav_bar_item = document.getElementById("navigation");
let image_element = document.getElementById("image");
let icon_container = document.getElementById("icon-div");
let a = true;
let d = document.getElementById("div");

let navi = document.getElementById("main-nav");
let r = document.getElementById("cont");
icon_container.addEventListener("click", function() {
    if (a === true) {
        nav_bar_item.classList.add("extending");
        image_element.classList.add("image");
        icon_element.classList.add("ham_icon");
        cross_mark.classList.remove("cross_icon");
        a = false;
        r.classList.remove("ham_icon");
    } else {
        nav_bar_item.classList.remove("extending");
        cross_mark.classList.add("cross_icon");
        icon_element.classList.remove("ham_icon");
        a = true;
        r.classList.add("ham_icon");
    }
});