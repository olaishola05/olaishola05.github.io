const randomID = () => Math.floor(Math.random() * 101);

// eslint-disable-next-line import/prefer-default-export
export const projects = [
  {
    id: randomID(),
    name: 'Todo App',
    mobileName: 'Todo App',
    detailsMobile: ['Academic', 'FrontEnd Dev', 2022],
    details: ['Academic', 'FrontEnd Dev', 2022],
    description: 'A simple to-do app for managing daily tasks built with Webpack, JavaScript, HTML, and CSS',
    largeDescription:
      'A simple to-do app for managing daily tasks built with Webpack, JavaScript, HTML, and CSS. With the functionality to add, edit, remove, delete multiple completed tasks and save on LocalStorage using a minimalistic design.',
    mobileDescription:
      'A simple to-do app for managing daily tasks built with Webpack, JavaScript, HTML, and CSS. With the functionality to add, edit, remove, delete multiple completed tasks and save on LocalStorage using a minimalistic design.',
    stacks: ['html', 'css', 'javascript'],
    stacksPopup: ['html', 'css', 'javaScript', 'github', 'Webpack'],
    imageDesktop: './images/todos.png',
    imageMobile: './images/todos.png',
    popupImageDesktop: './images/todo-edit.png',
    popupImageMobile: './images/todo-edit.png',
    liveUrl: 'https://netman5.github.io/To-do/',
    sourceUrl: 'https://github.com/netman5/To-do',
  },
  {
    id: randomID(),
    name: 'SpaceX',
    mobileName: 'SpaceX',
    detailsMobile: ['Academic', 'Front-End Dev', 2022],
    details: ['Academic', 'Front-End Dev', 2022],
    description: 'SpaceX is a web app built with react, redux and react-router-dom that pull data from SpaceX API endpoints with functionalities to selecting a mission or booking a rocket, also to leave a mission and a rocket.',
    largeDescription:
      'SpaceX is a web app built with react, redux and react-router-dom that pull data from SpaceX API endpoints with functionalities to selecting a mission or booking a rocket, also to leave a mission and a rocket',
    mobileDescription:
      'SpaceX is a web app that pull data from SpaceX API endpoints with functionalities to selecting a mission or booking a rocket.',
    stacks: ['React', 'CSS', 'React-router'],
    stacksPopup: ['React', 'CSS', 'Babel, React-router'],
    imageDesktop: './images/spacex.png',
    imageMobile: './images/spacex.png',
    popupImageDesktop: './images/spacex.png',
    popupImageMobile: './images/spacex.png',
    liveUrl: 'https://spacexbookingapp.herokuapp.com/',
    sourceUrl: 'https://github.com/netman5/spaceX',
  },
  {
    id: randomID(),
    name: 'Rent A Car',
    mobileName: 'Rent A Car',
    detailsMobile: ['Academic', 'Front-End Dev', 2022],
    details: ['Academic', 'Front-End Dev', 2022],
    description: 'A car booking app where a user can rent a car. The app also presents Admin privileges where an Admin can Add and Delete cars. This is engineered using Ruby on Rails as backend and React as front end. In this repository we have the frontend. The backend can be found here.',
    largeDescription:
      'A car booking app where a user can rent a car. The app also presents Admin privileges where an Admin can Add and Delete cars. This is engineered using Ruby on Rails as backend and React as front end. In this repository we have the frontend. The backend can be found here.',
    mobileDescription:
      'A car booking app where a user can rent a car. The app also presents Admin privileges where an Admin can Add and Delete cars. This is engineered using Ruby on Rails as backend and React as front end. In this repository we have the frontend. The backend can be found here.',
    stacks: ['React', 'Redux', 'Ruby on Rails'],
    stacksPopup: ['React', 'Redux', 'Ruby on Rails', 'Bootstrap', 'PostgreSQL'],
    imageDesktop: './images/rentcar.png',
    imageMobile: './images/rentcar.png',
    popupImageDesktop: './images/rentcar.png',
    popupImageMobile: './images/rentcar.png',
    liveUrl: 'rent-a-car-fe.netlify.app/',
    sourceUrl: 'https://github.com/netman5/Rent-a-car-FE',
  },
];
