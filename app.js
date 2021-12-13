const hamburger = document.querySelector('#menu');
const navMenu = document.querySelector('.mobile-menu');
const toggleBtn = document.querySelector('.toggle-btn');

const toggleSideMenu = false;
const toggleCloseBtn = false;

function toggleNav() {
  if (toggleSideMenu === false) {
    navMenu.style.visibility = 'visible';
  }
}

function toggleClose() {
  if (toggleCloseBtn === false) {
    navMenu.style.visibility = 'hidden';
  }
}

hamburger.addEventListener('click', toggleNav);
toggleBtn.addEventListener('click', toggleClose);
