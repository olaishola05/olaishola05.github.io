const randomID = () => Math.floor(Math.random() * 101);

// eslint-disable-next-line import/prefer-default-export
export const projects = [
  {
    id: randomID(),
    name: 'Tonic',
    details: ['CANOPY', 'Backend End Dev', 2015],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    stacks: ['html', 'css', 'javascript'],
    image: './images/Snapshoot-Portfolio-1.svg',
  },
  {
    id: randomID(),
    name: 'Multi-Post Stories',
    details: ['FACEBOOK', 'Fullstack Dev', 2015],
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    stacks: ['html', 'ruby on rails', 'css', 'javascript'],
    image: './images/art-printing.svg',
  },
  {
    id: randomID(),
    name: 'Facebook 360',
    details: ['FACEBOOK', 'Fullstack Dev', 2015],
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    stacks: ['html', 'ruby on rails', 'css', 'javascript'],
    image: './images/SnapshootPortfolio.svg',
  },
  {
    id: randomID(),
    name: 'Uber Navigation',
    details: ['Uber', 'Lead Developer', 2018],
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    stacks: ['html', 'ruby on rails', 'css', 'javascript'],
    image: './images/avail.svg',
  },
];
