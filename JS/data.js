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
      "SpaceX is a web app built with react, redux and react-router-dom that pull data from SpaceX API endpoints with functionalities to selecting a mission or booking a rocket, also to leave a mission and a rocket",
    mobileDescription:
      "SpaceX is a web app that pull data from SpaceX API endpoints with functionalities to selecting a mission or booking a rocket.",

    stacks: ['React', 'CSS','React-router'],
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
    name: 'Facebook 360',
    mobileName: 'Tonic',
    detailsMobile: ['CANOPY', 'Backend End Dev', 2015],
    details: ['FACEBOOK', 'Fullstack Dev', 2015],
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    largeDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    stacks: ['html', 'css', 'javascript'],
    stacksPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
    imageDesktop: './images/SnapshootPortfolio.svg',
    imageMobile: './images/gymfit.svg',
    popupImageDesktop: './images/SnapshootPortfolio.svg',
    popupImageMobile: './images/gymfit.svg',
    liveUrl: '',
    sourceUrl: '',
  },
  {
    id: randomID(),
    name: 'Uber Navigation',
    details: ['Uber', 'Lead Developer', 2018],
    mobileName: 'Multi-Post Stories',
    detailsMobile: ['CANOPY', 'Backend End Dev', 2015],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    largeDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    stacks: ['html', 'css', 'javaScript'],
    stacksPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
    imageDesktop: './images/avail.svg',
    imageMobile: './images/art-printing.svg',
    popupImageDesktop: './images/avail.svg',
    popupImageMobile: './images/art-printing.svg',
    liveUrl: '',
    sourceUrl: '',
  },
];
