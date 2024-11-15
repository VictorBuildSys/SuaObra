document.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.style.backgroundColor = "rgba(0, 8, 20, 0.9)";
    } else {
        header.style.backgroundColor = "rgba(0, 8, 20, 0)";
    }
});