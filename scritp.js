const mobile_btn = document.querySelector("#mobile-navbar");
const header = document.querySelector(".header");

const toggleNavbar = () => {
  header.classList.toggle("active");
};
mobile_btn.addEventListener("click", () => toggleNavbar());