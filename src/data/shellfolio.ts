// --- Types ---
export interface Profile {
  Name: string;
  Online: string;
  Uptime: string;
  Location: string;
  Role: string;
  Status: string;
  OS: string;
  Host: string;
  Kernel: string;
  Shell: string;
  WM: string;
  about: string;
}

export interface Experience {
  perms: string;
  date: string;
  company: string;
  folder: string;
  content: string;
}

export interface Project {
  perms: string;
  file: string;
  link: string;
  content: string;
}

export interface Education {
  perms: string;
  date: string;
  institution: string;
  folder: string;
  content: string;
}

export interface Skill {
  category: string;
  items: string;
}

export interface Remote {
  name: string;
  url: string;
  webLink: string;
}

export interface UIStrings {
  repoLink: string;
  langEn: string;
  langRu: string;
}

export interface LanguageData {
  profile: Profile;
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  skills: Skill[];
  remotes: Remote[];
  ui: UIStrings;
}

export interface PortfolioData {
  en: LanguageData;
  ru: LanguageData;
}

// --- Data ---
export const contactLinks = [
  { protocol: "mailto", handle: "yasurovbob@gmail.com", url: "mailto:yasurovbob@gmail.com" },
  { protocol: "github", handle: "Dobrzebobrze04", url: "https://github.com/Dobrzebobrze04" }
];

export const paymentMethods: { name: string; address: string; qr: string }[] = [];

export const data: PortfolioData = {
  en: {
    profile: {
      Name: "Ashurov Bobur",
      Online: "Dobrzebobrze",
      Uptime: "26 years",
      Location: "Earth,Tashkent-Uzbekistan",
      Role: "IT Specialist",
      Status: "Open to work",
      OS: "Arch Linux x86_64",
      Host: "ThinkPad T14",
      Kernel: "Linux 7.2.4",
      Shell: "kitty",
      WM: "Sway",
      about: "Hi, I'm Bobur — a self-taught developer from Tashkent, Uzbekistan.\nI enjoy building my own projects and figuring out how things work under the hood."
    },
    experiences: [
      {
        perms: "drwxr-xr-x",
        date: "Present",
        company: "Freelance / Outsource",
        folder: "Self-taught Developer",
        content: `No formal work experience yet.\n- I build and ship personal projects end-to-end.\n- I take on freelance/outsource tasks to apply what I learn in practice.`
      }
    ],
    projects: [
      {
        perms: "drwxr-xr-x", file: "cv-folio", link: "https://github.com/Dobrzebobrze04/CV_folio",
        content: `My personal terminal-style portfolio/CV site, built with Astro.js.`
      }
    ],
    education: [
      {
        perms: "drwxr-xr-x", date: "2014-2017", institution: "IT Professional College", folder: "Information Technology",
        content: "Graduated with a degree in Information Technology."
      }
    ],
    skills: [
      { category: "Languages", items: "Python, JavaScript, TypeScript" },
      { category: "Tools", items: "Git, Linux" }
    ],
    remotes: [
      { name: "github", url: "git@github.com:Dobrzebobrze04/CV_folio.git", webLink: "https://github.com/Dobrzebobrze04" }
    ],
    ui: {
      repoLink: "Repository Link",
      langEn: "[ English ]",
      langRu: "[ Russian ]"
    }
  },
  ru: {
    profile: {
      Name: "Ашуров Бобур",
      Online: "Dobrzebobrze",
      Uptime: "26 лет",
      Location: "Земля, Ташкент, Узбекистан",
      Role: "IT Specialist",
      Status: "Открыт для работы",
      OS: "Arch Linux x86_64",
      Host: "ThinkPad T14",
      Kernel: "Linux 7.2.4",
      Shell: "kitty",
      WM: "Sway",
      about: "Привет, я Бобур — самоучка-разработчик из Ташкента, Узбекистан.\nЛюблю собирать свои проекты и разбираться, как всё устроено изнутри."
    },
    experiences: [
      {
        perms: "drwxr-xr-x",
        date: "По настоящее время",
        company: "Фриланс / Аутсорс",
        folder: "Самоучка-разработчик",
        content: `Формального опыта работы пока нет.\n- Довожу свои проекты до конца.\n- Берусь за фриланс/аутсорс задачи, чтобы применять знания на практике.`
      }
    ],
    projects: [
      {
        perms: "drwxr-xr-x", file: "cv-folio", link: "https://github.com/Dobrzebobrze04/CV_folio",
        content: `Мой личный сайт-резюме в стиле терминала, сделан на Astro.js.`
      }
    ],
    education: [
      {
        perms: "drwxr-xr-x", date: "2014-2017", institution: "Профессиональный колледж информационных технологий", folder: "Информационные технологии",
        content: "Окончил по специальности \"Информационные технологии\"."
      }
    ],
    skills: [
      { category: "Языки", items: "Python, JavaScript, TypeScript" },
      { category: "Инструменты", items: "Git, Linux" }
    ],
    remotes: [
      { name: "github", url: "git@github.com:Dobrzebobrze04/CV_folio.git", webLink: "https://github.com/Dobrzebobrze04" }
    ],
    ui: {
      repoLink: "Ссылка на репозиторий",
      langEn: "[ Английский ]",
      langRu: "[ Русский ]"
    }
  }
};
