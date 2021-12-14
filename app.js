const hamburger = document.querySelector('#menu');
const navMenu = document.querySelector('.mobile-menu');
const toggleBtn = document.querySelector('.toggle-btn');
const navItems = document.querySelectorAll('.mobile-menu ul li');

const toggleSideMenu = false;
const toggleCloseBtn = false;

function toggleNav() {
  if (toggleSideMenu === false) {
    navMenu.style.visibility = 'visible';
    toggleBtn.style.fontSize = '30px';
  }
}

function toggleClose() {
  if (toggleCloseBtn === false) {
    navMenu.style.visibility = 'hidden';
  }
}

function linksOnClick() {
  navItems.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.style.visibility = 'hidden';
    });
  });
}

linksOnClick();

hamburger.addEventListener('click', toggleNav);
toggleBtn.addEventListener('click', toggleClose);
