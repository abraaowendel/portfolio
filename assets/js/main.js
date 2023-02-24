const btnMenu = document.querySelector(".menuMobile");
const menuList = document.querySelector(".nav-list");

btnMenu
.addEventListener("click", () => {
    btnMenu.classList.toggle("active");
    menuList.classList.toggle("active");
});

menuList
.querySelectorAll("a")
.forEach((item) => item
.addEventListener("click", () => {
    btnMenu.classList.remove("active");
    menuList.classList.remove("active");
}));

document.querySelector("footer").innerHTML = `© ${new Date().getFullYear()} Abraao Wendel`