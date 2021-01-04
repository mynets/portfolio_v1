import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Diquan Moore | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Diquan Moore',
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Goal driven, results oriented programmer with more than five years’ experience in developing complex software systems in a fast pace environment. Quick learner with advance research skills. Dynamic team player with well-developed written and verbal communication abilities.       ',
  paragraphTwo: 'Currently looking for full-time employment(on-site or virtual) as a Solutions Architect or Cloud Engineer.',
  paragraphThree: 'Living in Miramar, FL',
  resume: 'https://resume.diquanmoore.com', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: "Amari's Archive",
    info: 'Things ends but memories last forever',
    info2: 'Designed the website and hosted it on AWS',
    url: 'https://aa.diquanmoore.com',
    repo: 'https://github.com/mynets/AmarisArchive', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'YKC Gaming site',
    info: 'Three tier webapp',
    info2: 'Under construction',
    url: '',
    repo: 'https://github.com/mynets/ykc-react-app', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '+1 347-885-6279',
  btn: '',
  email: 'diquanmoore@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
