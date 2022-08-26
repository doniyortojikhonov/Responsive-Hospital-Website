const navItems = document.querySelector("#nav__items");
const openNavBtn = document.querySelector("#open__nav-btn i");

openNavBtn.addEventListener("click", () => {
    navItems.classList.toggle("show-menu");

    // This is toggle of Icon. Menu Icon changes to Close Icon
    openNavBtn.classList.toggle("fa-times");
});

// ========TESTIMONIALS SECTION (SWIPER JS)==========

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Responsive Breakpoints
    breakpoints: {
        // When window width is >= 600px
        600: {
            slidesPerView: 2,
        },
        // When window width is >= 1024px
        1024: {
            slidesPerView: 3,
        },
    },
});

// change navbar styles on scroll

window.addEventListener("scroll", () => {
    document
        .querySelector("nav")
        .classList.toggle("window-scroll", window.scrollY > 0);
});
