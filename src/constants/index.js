import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  webstream,
  accenture,
  lionbridge,
  zaid,
  siddesh,
  ashish,
  viztar,
  linkedin,
  twitter,
  instagram,
  rupee,
  shopify,
  portfolio,
  carrent,
  sharktank,
  schwabe,
  airportcodes,
  jobit,
  tripguide,
  threejs,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Aspiring Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "UI UX Developer",
    company_name: "Webstream Communications",
    icon: webstream,
    iconBg: "#383E56",
    date: "Nov 2020 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Standardized emailers templates for reusing, achieving a 50% reduction in turnaround time.",
    ],
  },
  {
    title: "PHP Fullstack Developer",
    company_name: "Viztar International",
    icon: viztar,
    iconBg: "#E6DEDD",
    date: "Nov 2019 - Sep 2020",
    points: [
      "Spearheaded major UI UX changes for 3 projects, revamping them from legacy design principles to current design trends. Made websites responsive, more mobile friendly for end users",
      "Implemented custom role based admin panels for data insertions using CRUD operations using API's for operations team reducing dev team effort by 95%.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#383E56",
    date: "Nov 2018 - Nov 2019",
    points: [
      "Developed chrome extension for QA testing, reduced time required for manual QA test runs by 70%.",
      "Awarded 3x 'Grow Accenture Operations through Innovation' award for various automation ideas.",
      "Co-ordinated and developed web portals for some of the leading top 20's pharma clients.",
      "Trained, mentored new resources for emailers, PSD to HTML, and Google web designer banner adverts.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "LionBridge",
    icon: lionbridge,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Nov 2018",
    points: [
      "Developing responsive and cross-browser compatibile websites.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to parse huge amount of data using Regex to process unsegregated data into manageable useful data for further use.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Krishna played a significant role, often, in developing and implementing overall web strategies, and dealt with the details along with the bigger picture. His coding was excellent, and his designs were unique and innovative, so clients were always happy.",
    name: "Zaid Siddiqui",
    designation: "Project Manager",
    company: "Accenture",
    image: zaid,
  },
  {
    testimonial:
      "I have worked with Krishna in Accenture for more than a couple of years. Krishna is a proactive, result-oriented, responsible, and technically sound employee and he is always ready to put all his energy and time to get the job done. He has an exceptional troubleshooting and analytical skill in WEB DEVELOPMENT, and React. Krishna is a great asset to any company.",
    name: "Ashish Waman",
    designation: "IT Project Manager",
    company: "Accenture",
    image: ashish,
  },
  {
    testimonial:
      "Krishna worked with me on web projects for one of the biggest Pharma firm for their marketing vertical, and he was routinely throughout that time the most creative and capable web developers we had. He had a fantastic eye for unique designs and was able to implement some of the best strategies our company had.",
    name: "Zaid Siddiqui",
    designation: "Project Manager",
    company: "Accenture",
    image: zaid,
  },
  {
    testimonial:
      "Awesome Work and Ontime Delivery. Good support and service received from Krishna.",
    name: "Siddhesh Dongare",
    designation:
      "PMP® | PMI ACP® | SAFe® 5.1 Scrum Master (SSM) | Certified Lean Six Sigma Practitioner | Design Thinker | Agility Coach | Career Coach | Communication Coach | Productivity Coach | Knowledge Data Science (AI & ML)",
    company: "projectconsultant.org",
    image: siddesh,
  },
];

const projects = [
  {
    name: "Shark Tank Rocks",
    description:
      "All Shark tank india investments data made so far in season 1 and 2. Created using reactjs, vite and deployed on vercel",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image: sharktank,
    source_code_link: "http://sharktank.rocks/",
  },
  {
    name: "Airport Codes",
    description:
      "Web-based platform that allows users to search, filter, and view airport details via unique airport code convention, providing a convenient and quick solution for looking up airport names for flight booking.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: airportcodes,
    source_code_link: "https://airportcodes.in/",
  },
  {
    name: "Portfolio",
    description:
      "This portfolio consists of links that showcase past work experience, some of the projects, and other relevant links and information.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://reactjs-portfolio-v1.netlify.app/",
  },
  {
    name: "Schwabe Pharma",
    description:
      "A comprehensive pharma event platform that allows users to create account, view live events and past events. Offers curated recommendations for popular events and provision for QnA's and customer support.",
    tags: [
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
      {
        name: ".Net",
        color: "pink-text-gradient",
      },
    ],
    image: schwabe,
    source_code_link: "https://web-brain-nar.com/",
  },
];

const contacts = [
  {
    title: "Twitter",
    icon: twitter,
    url: "https://twitter.com/dvlprkrishna/",
  },
  {
    title: "Github",
    url: "https://github.com/dvlprkrishna",
    icon: github,
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/reactjsdev/",
    icon: linkedin,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/dvlprkrishna/",
    icon: instagram,
  },
  {
    title: "Web Studio",
    url: "https://dvlpr.in/",
    icon: web,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  contacts,
};
