document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    const links = document.querySelectorAll('nav ul li a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetID = this.getAttribute("href");
            const targetElement = document.querySelector(targetID);
            
            window.scrollTo({
                top: targetElement.offsetTop - header.offsetHeight,
                behavior: "smooth"
            });
        });
    }
    
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
