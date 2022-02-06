const menuToogle = document.querySelector('.menu-mobile')
const navMenu = document.querySelector('.nav-list')

menuToogle.addEventListener('click', () => {
    menuToogle.classList.toggle('active')
    navMenu.classList.toggle('active')
})  

document.querySelectorAll(".nav-list a").forEach(a => 
    a.addEventListener('click', () => {
        menuToogle.classList.remove('active')
        navMenu.classList.remove('active')
    }
))

AOS.init();
