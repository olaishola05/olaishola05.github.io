// data for projects
import { projects } from './utils/data.js';

const hamburger = document.querySelector('#menu');
const navMenu = document.querySelector('.mobile-menu');
const toggleBtn = document.querySelector('.toggle-btn');
const navItems = document.querySelectorAll('.mobile-menu ul li');

const images = document.querySelector('.scale');

// eslint-disable-next-line no-return-assign
projects.map((project) => {
  images.src = projects[0].image;
});

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

// Work  Section
const clickBtn = document.querySelectorAll('.work-btn');
const modalContainer = document.querySelector('#projectDetails');
const closeModal = document.querySelector('#closeModal');

clickBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalContainer.classList.add('show');
  });
});

closeModal.addEventListener('click', () => {
  modalContainer.classList.remove('show');
});

linksOnClick();

hamburger.addEventListener('click', toggleNav);
toggleBtn.addEventListener('click', toggleClose);
