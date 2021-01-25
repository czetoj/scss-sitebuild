
const navbar = document.querySelector('.navbar');
const navlinks = document.querySelectorAll('.cus--navlink');
const facebook = document.querySelector('.facebook-blue');
const twitter = document.querySelector('.twitter-blue');
const google = document.querySelector('.google-red');
const tooltipfacebook = document.querySelector('.tooltip-facebook');
const tooltiptwitter = document.querySelector('.tooltip-twitter');
const tooltipgoogle = document.querySelector('.tooltip-google');


document.addEventListener('scroll', () => {
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('cus--nav-white');
    if (document.body.clientWidth >= 768) {
        document.querySelector('.navbar-brand').style.color = 'grey';
    }

    navlinks.forEach(item => item.style.color = 'grey');
})


facebook.addEventListener('mouseenter', () => {
    tooltipfacebook.style.display = 'block';
})
twitter.addEventListener('mouseenter', () => {
    tooltiptwitter.style.display = 'block';
})
google.addEventListener('mouseenter', () => {
    tooltipgoogle.style.display = 'block';
})
facebook.addEventListener('mouseleave', () => {
    tooltipfacebook.style.display = 'none';
})
twitter.addEventListener('mouseleave', () => {
    tooltiptwitter.style.display = 'none';
})
google.addEventListener('mouseleave', () => {
    tooltipgoogle.style.display = 'none';
})


var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300
});