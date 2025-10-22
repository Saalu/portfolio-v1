let lastScrollTop = 0;
const navbar = document.querySelector(".header .navigation");
const mobileNav = document.querySelector('.mobile-nav')
const navMenu = document.querySelector('.menu')
const logo = document.querySelector('.logo')

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down, hide the navbar
        navbar.classList.remove('active')
        navbar.style.top = "-8.5rem"; // Height of the navbar
    
    } else {
        // Scroll up, show the navbar
        navbar.classList.add('active')
        navbar.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

document.querySelector('.close-menu').onclick = () =>{
    mobileNav.classList.remove('active')
    logo.style.opacity = "1"
    document.body.style.overflow = 'hidden';  
}
document.querySelector('.menu').onclick = () =>{
    logo.style.opacity = "0"
    mobileNav.classList.add('active')
    // console.log('menu here')  
}
