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
    liveUrl: 'netman5.github.io/to-do/',
    sourceUrl: 'https://github.com/netman5/To-do',
  },
  {
    id: randomID(),
    name: 'Multi-Post Stories',
    mobileName: 'Multi-Post Stories',
    detailsMobile: ['CANOPY', 'Backend End Dev', 2015],
    details: ['FACEBOOK', 'Fullstack Dev', 2015],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    largeDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    mobileDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    stacks: ['html', 'css', 'javascript'],
    stacksPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
    imageDesktop: './images/art-printing.svg',
    imageMobile: './images/avail.svg',
    popupImageDesktop: './images/art-printing.svg',
    popupImageMobile: './images/avail.svg',
    liveUrl: '',
    sourceUrl: '',
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
