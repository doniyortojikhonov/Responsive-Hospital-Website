const navItems = document.querySelector("#nav__items");
const openNavBtn = document.querySelector("#open__nav-btn i");

openNavBtn.addEventListener("click", () => {
    navItems.classList.toggle("show-menu");

    // This is toggle of Icon. Menu Icon changes to Close Icon
    openNavBtn.classList.toggle("fa-times");
});
