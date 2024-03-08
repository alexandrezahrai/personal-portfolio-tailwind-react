import {
  sanityLogo,
  nextLogo,
  cssLogo,
  htmlLogo,
  jsLogo,
  reactLogo,
  phpLogo,
  npmLogo,
  nodeLogo,
  gitLogo,
  figmaLogo,
  tailwindLogo,
  wordpressLogo,
  Linkedin,
  Github,
  typescriptLogo,
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
    title: "Bellevue International",
    description:
      "Designed and developed a high-performance marketing website with Next.js, Sanity CMS, and Tailwind CSS. Delved into advanced concepts like routing and server-side rendering, optimizing for exceptional performance and SEO. The result is a seamlessly responsive user experience that excels in both speed and discoverability.",
    tags: ["Next.js", "Sanity CMS", "Tailwind"],
    link: "https://www.bellevue-intl.com/",
    image: "/bellevue-intl.webp",
  },
  {
    title: "Personal Website",
    description:
      "Explore my personal website/portfolio to uncover my digital footprint—a showcase of my creative journey in web development. Carefully designed and coded, this site exemplifies my dedication to user-friendly experiences and captivating designs. From interactive elements to smooth navigation, my portfolio demonstrates my skills and passion. Discover defining projects, my journey, and let's connect to explore new tech and design horizons.",
    tags: ["React", "Tailwind", "Vite"],
    link: "https://github.com/alexandrezahrai/vite-personal-portfolio",
    image: "/portfolio.webp",
  },
  {
    title: "Besa",
    description:
      "A Wordpress site built for Besa, a nonprofit headquartered in Columbus, committed to catalyzing a surge in civic involvement that uplifts the entire community.",
    tags: ["Wordpress", "PHP", "Alpine.js", "Tailwind"],
    link: "https://besa.org/",
    github: "",
    image: "/besa.webp",
  },
  {
    title: "Salem Stones",
    description:
      "In partnership with a dedicated team, I contributed to the creation of the Salem Stones project—an online memorial showcase reflecting the brand's care, capability, and transparency. As a key contributor, I take pride in crafting a virtual space that embodies these values, underscoring our collective dedication to both meaningful remembrance and effective collaboration.",
    tags: ["Wordpress", "PHP", "Alpine.js", "Tailwind"],
    link: "https://salemstones.com/",
    github: "",
    image: "/salem.webp",
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
    name: "Next.js",
    image: nextLogo,
  },
  {
    name: "React.js",
    image: reactLogo,
  },
  {
    name: "Tailwind",
    image: tailwindLogo,
  },
  {
    name: "Sanity",
    image: sanityLogo,
  },
  {
    name: "Wordpress",
    image: wordpressLogo,
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
  {
    name: "Typescript",
    image: typescriptLogo,
  },
  {
    name: "JavaScript",
    image: jsLogo,
  },
  {
    name: "HTML",
    image: htmlLogo,
    color: "#E44D26",
  },
  {
    name: "CSS",
    image: cssLogo,
  },
];

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
