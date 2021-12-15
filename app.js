// data for projects
import { projects } from './utils/data.js';

const hamburger = document.querySelector('#menu');
const navMenu = document.querySelector('.mobile-menu');
const toggleBtn = document.querySelector('.toggle-btn');
const navItems = document.querySelectorAll('.mobile-menu ul li');

const workSection = document.querySelector('.work-container');

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

// Dynamically populate the work section

let listOfProjects = '';
for (let project = 0; project < projects.length; project += 1) {
  let mobileStacks = '';
  projects[project].stacks.forEach((stack) => {
    if (stack.length > 3) {
      mobileStacks += `<li>${stack}</li>`;
    }
  });

  listOfProjects += `<div class="card desktop">
  <img src="${projects[project].imageDesktop}" class="desktop" alt="${
    projects[project].name
  } project screenshot"/>
  <div class="work-details">
    <h2>${projects[project].name}</h2>
    <div class="card-caption">
      <span>${projects[project].description}details[0]}</span>
      <img src="./images/Counter.svg" alt="counter icon" />
      <span>${projects[project].details[1]}</span>
      <img src="./images/Counter.svg" alt="counter icon" />
      <span>${projects[project].details[2]}</span>
    </div>
    <div class="work-text">
      <p>
        ${projects[project].description}
      </p>
    </div>
    <div class="stacks four-stacks">
      <ul>
        ${mobileStacks}
      </ul>
    </div>
    <a href="#" class="work-btn" project-index="${project}">See Project</a>
  </div>
</div>


<div class='card mobile'>
    <div class='card-work'>
      <img src="${projects[project].imageMobile}" class="mobile" alt="${
    projects[project].name
  } project screenshot"/>
      <h2>${projects[project].mobileName}</h2>
      <div class='card-caption'>
        <span>${projects[project].detailsMobile[0]}</span>
        <img src='./images/Counter.svg' alt='counter icon' />
        <span>${projects[project].detailsMobile[1]}</span>
        <img src='./images/Counter.svg' alt='counter icon' />
        <span>${projects[project].detailsMobile[2]}</span>
      </div>
      <div class='work-text'>
        <p>
          ${projects[project].description}
        </p>
      </div>
      <div class='stacks four-stacks'>
        <ul>
          ${projects[project].stacks.map((stack) => `<li>${stack}</li>`)}
        </ul>
      </div>
      <a href='#' class='work-btn' project-index="${project}">
        See Project
      </a>
    </div>
  </div>;

`;

  workSection.innerHTML = listOfProjects;
}

function displayDetails(project) {
  const projectPopup = document.querySelector('#projectDetails');
  let projectDetails = '';
  projectDetails += `<div class="modal">
          <div class="title-frame">
            <h2 class='desktop'>${projects[project].name} </h2>
            <h2 class='mobile'>${projects[project].mobileName} </h2>
            <button types="button" id="closeModal">X</button>
          </div>

          <div class="card-caption modal-caption">
            <span>${projects[project].details[0]}</span>
            <img src="./images/Counter.svg" alt="counter icon" />
            <span>${projects[project].details[1]}</span>
            <img src="./images/Counter.svg" alt="counter icon" />
            <span>${projects[project].details[2]}</span>
          </div>

          <img class='mobile' src=${projects[project].imageMobile} alt="${projects[project].imageMobile} project work" />
          <img class='desktop' src=${projects[project].imageDesktop} alt="${projects[project].imageMobile} project work" />

          <div class="content-sect desk-content">
            <p class="modal-desc">
             ${projects[project].largeDescription}
            </p>
            <div>
              <div class="stacks">
                <ul>
                  <li>html</li>
                  <li>css</li>
                  <li>javascript</li>
                </ul>
              </div>
              <div class="modalBtn-container">
                <a href="${projects[project].liveUrl}" class="modal-btn"
                  >See live <img src="./images/Icon.svg" alt="${projects[project].liveUrl} live link"
                /></a>
                <a href="${projects[project].sourceUrl}" class="modal-btn"
                  >See Source <i class="fab fa-github"></i
                ></a>
              </div>
            </div>
          </div>
        </div>`;
  projectPopup.innerHTML = projectDetails;
}

// Work  Section
const clickBtn = document.querySelectorAll('.work-btn');
const modalContainer = document.querySelector('#projectDetails');
const closeModal = document.querySelector('#closeModal');

clickBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalContainer.classList.add('show');
    displayDetails(btn.getAttribute('project-index'));
  });
});

closeModal.addEventListener('click', () => {
  modalContainer.classList.remove('show');
});

linksOnClick();

hamburger.addEventListener('click', toggleNav);
toggleBtn.addEventListener('click', toggleClose);
