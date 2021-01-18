$('[data-toggle="tooltip"]').tooltip();
const navbar = document.querySelector('.navbar');
const navlinks = document.querySelectorAll('.cus--navlink');

document.addEventListener('scroll', () => {
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('cus--nav-white');
    if (document.body.clientWidth >= 768) {
        document.querySelector('.navbar-brand').style.color = 'grey';
    }

    navlinks.forEach(item => item.style.color = 'grey');
})

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300
});