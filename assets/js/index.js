const menuIcon = document.querySelector('.menu-toggle');
const menuActive = document.querySelector('ul');

function navMenu(){
    menuIcon.classList.toggle('bxs-grid-alt');
    menuIcon.classList.toggle('bx-x');
    menuActive.classList.toggle('active');   
}

menuIcon.addEventListener('click',navMenu);