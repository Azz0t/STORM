/*==================================================
| HEADER
==================================================*/
const nav = document.querySelector("header nav");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");


if (nav) {

    window.addEventListener("scroll", () => {

        const scrollPos = window.scrollY;

        const opacity = Math.min(
            0.5 + (scrollPos / 200) * 0.7,
            1.0
        );

        nav.style.opacity = opacity;

        if (scrollPos > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }

    });

}

const observerOptions = {
    root: null,
    threshold: 0.6
};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove("active");
            });
            const id = entry.target.getAttribute("id");
            const activeLink = document.querySelector(
                `header nav a[href="#${id}"]`
            );
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});



/*==================================================
| LOGO CAROUSEL - SECTION HISTORY
==================================================*/
const images = [
    "./assets/logos/logo-carousel/logo-1.png",
    "./assets/logos/logo-carousel/logo-2.png",
    "./assets/logos/logo-carousel/logo-3.png",
    "./assets/logos/logo-carousel/logo-4.png"
];

const imgElement = document.getElementById("rotating-image");

if (imgElement) {
    let current = 0;
    setInterval(() => {
        imgElement.style.opacity = "0";
        setTimeout(() => {
            current = (current + 1) % images.length;
            imgElement.src = images[current];
            imgElement.style.opacity = "1";
        }, 70);
    }, 200);

}


