import {
  alpineLogo,
  cssLogo,
  htmlLogo,
  jsLogo,
  reactLogo,
  phpLogo,
  npmLogo,
  nodeLogo,
  gitLogo,
  figmaLogo,
  wooLogo,
  tailwindLogo,
  wordpressLogo,
  Linkedin,
  Github,
} from "../assets/media/svg/index.js";

export const NavLinks = [
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#skills",
    label: "Skills",
  },
  {
    href: "#about",
    label: "About",
  },
];

export const Works = [
  {
    title: "Voices of Sepsis",
    description:
      "A Wordpress site that allows users to share their stories of sepsis and learn more about the condition. This project was built for the Sepsis Alliance, a non-profit organization that raises awareness of sepsis and provides support to those affected by it.",
    tags: ["Wordpress", "PHP", "MySQL", "Alpine.js", "Tailwind"],
    link: "https://voicesofsepsis.org/",
    github: "",
    image: "/voices.webp",
  },
  {
    title: "Salem Stones",
    description:
      "In partnership with a dedicated team, I contributed to the creation of the Salem Stones project—an online memorial showcase reflecting the brand's care, capability, and transparency. As a key contributor, I take pride in crafting a virtual space that embodies these values, underscoring our collective dedication to both meaningful remembrance and effective collaboration.",
    tags: ["Wordpress", "PHP", "MySQL", "Alpine.js", "Tailwind"],
    link: "https://salemstones.com/",
    github: "",
    image: "/salem.webp",
  },
  {
    title: "Netflix Clone",
    description:
      "Embark on a cinematic journey through my React and Firebase-powered Netflix Clone. This project mirrors the main video feed page of Netflix, allowing you to explore a collection of movies. By clicking on a movie, you can view its trailer and immerse yourself in the world of film. Experience the essence of streaming and trailers, all in one platform.",
    tags: ["React", "Firebase", "TMBD API"],
    link: "https://github.com/alexandrezahrai/netflix-clone",
    image: "/netflix.webp",
  },
  {
    title: "Personal Website",
    description:
      "Discover my digital footprint at my personal website/portfolio—a culmination of my creative journey in the world of web development. Designed and coded with care, this site reflects my commitment to crafting intuitive user experiences and visually captivating designs. From interactive elements to seamless navigation, my portfolio itself is a testament to the skills and passion that drive me. Explore the projects that define my path, learn about my journey, and let's connect to explore new horizons in the realm of technology and design.",
    tags: ["React", "Tailwind", "Vite"],
    link: "https://github.com/alexandrezahrai/vite-personal-portfolio",
    image: "/portfolio.webp",
  },
];

export const Bio = {
  title: "About",
  copy: [
    "Hey there! I'm Alex, a web developer based in Kalamazoo, Michigan, dedicated to crafting outstanding online experiences. My expertise lies in building fast, responsive, and accessible websites and applications. When I'm not translating ideas into digital realities, you'll find me immersed in a world of diverse interests.",
    "As an avid soccer enthusiast, I'm all about the thrill of the game, both on and off the field. I enjoy following the strategies, the teamwork, and the sheer excitement that soccer brings to life. Apart from the virtual world of coding, I'm also passionate about creating music. Weaving melodies and rhythms to produce captivating sounds is my way of unwinding and unleashing creativity.",
    "Furthermore, I'm fluent in English and French. This linguistic versatility opens doors to diverse perspectives and connections, enriching my understanding of the world. If you share an affinity for web development, soccer, music, or simply want to collaborate, I'm all ears. Let's turn ideas into captivating digital narratives!",
  ],
  image: "",
  resume: "",
  email: "alexandrezahrai@protonmail.com",
  phone: "269-271-2652",
};

export const Tools = [
  {
    name: "HTML",
    image: htmlLogo,
    color: "#E44D26",
  },
  {
    name: "CSS",
    image: cssLogo,
  },
  {
    name: "JavaScript",
    image: jsLogo,
  },
  {
    name: "React",
    image: reactLogo,
  },
  {
    name: "Tailwind",
    image: tailwindLogo,
  },
  {
    name: "Alpine.js",
    image: alpineLogo,
  },
  {
    name: "Wordpress",
    image: wordpressLogo,
  },
  {
    name: "WooCommerce",
    image: wooLogo,
  },
  {
    name: "PHP",
    image: phpLogo,
  },
  {
    name: "Figma",
    image: figmaLogo,
  },
  {
    name: "Git",
    image: gitLogo,
  },
  {
    name: "npm",
    image: npmLogo,
  },
  {
    name: "Node.js",
    image: nodeLogo,
  },
];

// export const Socials = {
//   linkedin: "https://www.linkedin.com/in/alexandre-zahrai/",
//   github: "https://github.com/alexandrezahrai",
// };

export const Socials = [
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/alexandre-zahrai/",
    icon: Linkedin,
  },
  {
    name: "Github",
    url: "https://github.com/alexandrezahrai",
    icon: Github,
  },
];
