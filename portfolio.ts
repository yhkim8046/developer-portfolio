import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Yuhwan Kim",
  title: "Hi all, I'm Yuhwan",
  description:
    "A passionate backend developer currently pursuing my Bachelor's degree in Software Development at Auckland University of Technology. I am set to graduate in February 2025, and I'm eager to embark on an exciting journey into the world of DevOps.",
  resumeLink: "https://drive.google.com/file/d/1Xv_Zn8iMB0eAPmAJLX_QUd1g-cFqPusp/view?usp=share_link",
};

export const openSource = {
  githubUserName: "yhkim8046",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:yhkim8046@gmail.com",
  linkedin: "https://www.linkedin.com/in/yuhwan-kim-1187a7274/",
  github: "https://github.com/yhkim8046",
  //instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "Building solid knowledge for backend skills, experiencing frontend skills and learning software development process",
  data: [
    {
      title: "Full stack Developer ",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Thymeleaf"),
        emoji("⚡ Building RESTful APIs in Springboot & JPA  REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Java",
          iconifyTag: "vscode-icons:file-type-java",
        },
        {
          skillName: "Springboot",
          iconifyTag: "/img/icons/common/JPA.jpeg",
        },
        {
          skillName: "JPA",
          iconifyTag: "vscode-icons:file-type-java",
        },
        {
          skillName: "QueryDsl",
          iconifyTag: "vscode-icons:file-type-querydsl",
        },
        {
          skillName: "Javascript",
          iconifyTag: "vscode-icons:file-type-light-js",
        },
        {
          skillName: "React",
          iconifyTag: "vscode-icons:file-type-react",
        },
        {
          skillName: "ReactNative",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Firebase",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend", //Insert stack or technology you have experience in
    progressPercentage: "60", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "80",
  },
  {
    Stack: "Passions",
    progressPercentage: "100",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Auckland University of Technology",
    subHeader: "Bachelor of Computer and Information Sciences",
    duration: "Febuary 2022 - Febuary 2025",
    desc: "Specialised in Software Development",
    grade: "",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Full stack Devloper, Team Leader",
    company: "The Design and Culture Lab",
    companyLogo: "/img/icons/common/TheCultureAndDesignLab.png",
    date: "Febuary 2024 - Present",
    desc: "As a AUT R&D programme, Currently, developing a mobile learning/educational AI-powered platform.",
  },
  {
    role: "Fullstack Developer",
    company: "AIvestor",
    companyLogo: "/img/icons/common/portfolioPal.png",
    date: "July 2023 - November 2023",
    desc: "Incorporated Firebase and external APIs into a React Native mobile app to enable live monitoring and administration of stocks and cryptocurrencies. Highlights encompass navigation, search, saving, virtual trading, performance analysis, interactive discussions, AI-powered support, and adaptable user settings.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "Online Shopping website",
    desc: "Using SpringBoot and JPA, backend-focused online shopping website",
    github: "https://github.com/yhkim8046/PracticingJPA",
    link: "",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Microsoft Student Accerlator",
    role: "April 2024 ~ Present",
    feedback: 
      "I am currently participating in the New Zealand Microsoft Student Accelerator program, an immersive initiative designed to equip students with hands-on experience, practical skills, and industry exposure in the dynamic field of technology. Through this program, I am engaging in comprehensive training sessions, real-world project experiences, and valuable networking opportunities, all aimed at preparing me for a successful career in the tech industry.",
  },
  {
    name: "Private Springboot classes",
    role: "November 2023 ~ Present",
    feedback:
      "I've attained a comprehensive understanding of fundamental Spring Boot concepts, including object-oriented programming, HTTP fundamentals, web MVC, and database essentials. Looking ahead, I'm delving into advanced database handling techniques including JPA and Querydsl, Exploring API development, and Optimisation Expected completion is before June 2024.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Yuhwan Kim",
  description: greetings.description,
  author: "Yuhwan Kim",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-yhkim8046.app",
  keywords: [
    "Yuhwan",
    "Yuhwan Kim",
    "yhkim8046",
    "Portfolio",
    "Yuhwan Portfolio ",
    "Yuhwan Kim Portfolio",
  ],
};
