const button1 = document.querySelector('.btn-privacy');
const button2 = document.querySelector('.btn-terms');
const button3 = document.querySelector('.btn-faq');
const modal1 = document.querySelector('#modal-1');
const modal2 = document.querySelector('#modal-2');
const modal3 = document.querySelector('#modal-3');
const backdrop = document.querySelector('.backdrop');
const modalButton = document.querySelector('.btn-modal');
const close = document.querySelector('.modal__close');


button1.addEventListener('click', () => {
    backdrop.classList.remove('fade-out');
    modal1.classList.remove('fade-out');
    modal1.style.display = 'block';
    backdrop.style.display = 'block';
});
button2.addEventListener('click', () => {
    backdrop.classList.remove('fade-out');
    modal2.classList.remove('fade-out');
    modal2.style.display = 'block';
    backdrop.style.display = 'block';
});
button3.addEventListener('click', () => {
    backdrop.classList.remove('fade-out');
    modal3.classList.remove('fade-out');
    modal3.style.display = 'block';
    backdrop.style.display = 'block';
});


function fadeOut() {
    backdrop.classList.add('fade-out');
    modal1.classList.add('fade-out');
    modal2.classList.add('fade-out');
    modal3.classList.add('fade-out');
    setTimeout(() => {
        backdrop.style.display = 'none';
        modal1.style.display = 'none';
        modal2.style.display = 'none';
        modal3.style.display = 'none';
    }, 300)
}

modalButton.addEventListener('click', () => {
    fadeOut();
})

close.addEventListener('click', () => {
    fadeOut();
})

backdrop.addEventListener('click', () => {
    fadeOut();
})