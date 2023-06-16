let navMenu =document.querySelector('#menu-icon');
let toggleMenu =document.querySelector('.navbar');

navMenu.onclick =() =>{
    navMenu.classList.toggle('bx-x');
    toggleMenu.classList.toggle('open');

}