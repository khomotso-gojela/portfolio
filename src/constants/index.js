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
    kitchen,
    book,
    podcast,
    codespace,
    selenium,
    calculator
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "experience",
    },
    {
      id: "projects",
      title: "projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front-end Developement",
      icon: web,
    },
    {
      title: "Back-end Development",
      icon: backend,
    },
    {
      title: "Software Testing",
      icon: creator,
    },
    {
      title: "Data Modeling",
      icon: creator,
    },
    {
      title: "UI Design",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "Selenium",
      icon: selenium,
    },
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "javascript Developer",
      company_name: "Codespace",
      icon: codespace,
      iconBg: "#383E56",
      date: "June 2023 - Dec 2023",
      points: [
        "Developing and maintaining web applications using javascript and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Simple Calculator App",
      description:
        "Basic Javascript calculator.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        }
      ],
      image: calculator,
      source_code_link: "https://calculator-react2.netlify.app/",
    },
    {
      name: "Book Connect App",
      description:
        "A Web based library enabling users to have easy access to their favorite books.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: book,
      source_code_link: "https://main--book-connectt.netlify.app/",
    },
    {
      name: "Kitchen Express",
      description:
        "Web app that allows users to manage orders.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: kitchen,
      source_code_link: "https://kitchen-express.netlify.app/",
    },
    {
      name: "Podcast App",
      description:
        "A comprehensive streaming platform that allows users to listen to their favorite podcasts.",
      tags: [
        {
          name: "MongoDb",
          color: "text-green-700",
        },
        {
          name: "Express.js",
          color: "orange-text-gradient",
        },
        {
          name: "React.js",
          color: "text-blue-600",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "text-indigo-500",
        },
      ],
      image: podcast,
      source_code_link: "https://shiny-biscotti-65d033.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, projects };