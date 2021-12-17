// data for projects
import { projects } from './JS/data.js';

const hamburger = document.querySelector('#menu');
const navMenu = document.querySelector('.mobile-menu');
const toggleBtn = document.querySelector('.toggle-btn');
const navItems = document.querySelectorAll('.mobile-menu ul li');
const modalContainer = document.querySelector('#projectDetails');
const workSection = document.querySelector('.work-container');

// Mobile Nav Menu

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

// Renderring the work section

/** Sorting technology */

function sortTechnologyStacks(pop, techStacks) {
  let stacks = '';
  let stacksPopup = '';

  techStacks.forEach((stack) => {
    let i = 1;
    if (!pop) {
      if (stack.includes('ruby')) {
        stacks += `<li class="hide-ruby">${stack}</li>`;
      } else {
        stacks += `<li>${stack}</li>`;
      }
    } else {
      if (i <= 3) {
        stacks += `<li>${stack}</li>`;
      } else {
        stacksPopup += `<li class="hide-ruby">${stack}</li>`;
      }
      i += 1;
    }
  });
  return [stacks, stacksPopup];
}

let listOfProjects = '';
for (let project = 0; project < projects.length; project += 1) {
  const techStacks = sortTechnologyStacks(false, projects[project].stacks);
  let result = '';

  if (techStacks.length > 3) {
    result = `<div class="four-stacks">
      <ul>
      ${techStacks}
      </ul>
    </div>`;
  } else {
    result = `<div class="stacks">
      <ul>
      ${techStacks}
      </ul>
    </div>`;
  }
  listOfProjects += `<div class="card desktop">
  <img src="${projects[project].imageDesktop}" class="desktop" alt="${projects[project].name} project screenshot"/>
  <div class="work-details">
    <h2>${projects[project].name}</h2>
    <div class="card-caption">
      <span>${projects[project].details[0]}</span>
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
     ${result}
    <a href="#" class="work-btn" project-index="${project}">See Project</a>
  </div>
</div>


<div class='card mobile'>
    <div class='card-work'>
      <img src="${projects[project].imageMobile}" class="mobile" alt="${projects[project].name} project screenshot"/>
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
      <div class='stacks'>
        <ul>
           ${techStacks[0]}
        </ul>
      </div>
      <a href='#' class='work-btn' project-index="${project}">
        See Project
      </a>
    </div>
  </div>`;

  workSection.innerHTML = listOfProjects;
}

function displayDetails(project) {
  let projectDetails = '';
  const projectPopup = document.querySelector('#projectDetails');
  const techStacks = sortTechnologyStacks(true, projects[project].stacksPopup);
  projectDetails += `<div class="modal">
          <div class="title-frame">
            <h2 class='desktop'>${projects[project].name} </h2>
            <h2 class='mobile'>${projects[project].mobileName}</h2>
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

          <div class="mobile-sect desk-content">
            <p class="modal-desc desktop">
             ${projects[project].largeDescription}
            </p>
            <p class="modal-desc mobile">
             ${projects[project].mobileDescription}
            </p>

            <div class="mobile modal-mobile-stacks">
            <ul>
           <li>${projects[project].stacks[0]}</li>
            <li>${projects[project].stacks[1]}</li>
            <li>${projects[project].stacks[2]}</li>
            </ul>
            </div>
            
              <div class='desktop-modal-display'>
              <div class="stacks modal-techs desktop">
              <ul>${techStacks[0]}</ul>
              <br>
              </div>
              <div class="modalBtn-container">
                <a href="${projects[project].liveUrl}" class="modal-btn"
                  >See live <img src="./images/Icon.svg" alt="${projects[project].liveUrl} live link"
                /></a>
                <a href="${projects[project].sourceUrl}" class="modal-btn modal-btn-extra"
                  >See Source <i class="fab fa-github"></i
                ></a>
              </div>
              </div>

            </div>
          </div>
        </div>`;

  projectPopup.innerHTML = projectDetails;
  const closeModal = document.querySelector('#closeModal');
  closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('show');
  });
}

// Work  Section Btn
const clickBtn = document.querySelectorAll('.work-btn');

clickBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalContainer.classList.add('show');
    displayDetails(btn.getAttribute('project-index'));
  });
});

linksOnClick();
hamburger.addEventListener('click', toggleNav);
toggleBtn.addEventListener('click', toggleClose);
