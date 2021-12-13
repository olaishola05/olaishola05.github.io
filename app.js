const hamburger = document.querySelector('#menu');
const navMenu = document.querySelector('.mobile-menu');
const toggleBtn = document.querySelector('.toggle-btn');

const toggleSideMenu = false;
const toggleCloseBtn = false;


function toggleNav() {
    if(toggleSideMenu===false){
        navMenu.style.visibilty = 'visible'
    }
}

hamburger.addEventListener('click', toggleNav);
