import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  myaicheflogo,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure,
  SiTypescript,
  SiPhp,
  SiNodedotjs,
  SiPandas,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

import { FaHardHat, FaRust } from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { FaGolang } from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink =
  "https://drive.google.com/file/d/1dp9zYqgvYBNga49JDnm5lizsT1rWQRCa/view?usp=sharing";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/mittal-parth";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  // {
  //   id: "achievements",
  //   title: "Achievements",
  // },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "openSource",
  //   title: "Open Source",
  // },
  // {
  //   id: "extraCurricular",
  //   title: "Extra Curriculars",
  // },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "University of California, Davis",
    degree: "Bachelor of Science, Computer Science",
    duration: "Graduated June 2023",
    content1: "Major: Computer Science",
  },
];

export const achievements = [
  {
    id: "a-1",
    icon: ethglobal,
    event: "ETHIndia'22 | World's Largest Ethereum Hackathon",
    position: "Winner",
    content1: "Top 12 winners among 20k+ registrations",
    content2: "One of Polygon's Best Public Goods",
    content3: "Best Module on Biconomy SDK",
    article:
      "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
    project: "https://devfolio.co/projects/chargeswap-3527",
    youtube: "https://youtu.be/9rieTya8Yds?t=3908",
  },
  {
    id: "a-2",
    icon: polkadot,
    event: "Polkadot Hackathon: Europe Edition",
    position: "2nd Runner Up in the ink! Smart Contract Category",
    content1:
      "Built GreenTrust offering a novel solution for obtaining certification in organic farming.",
    content2: "",
    content3: "",
    github: "https://github.com/pranav2305/GreenTrust",
  },
  {
    id: "a-3",
    icon: lightspeed,
    event: "Warpspeed by Lightspeed",
    position: "1st Runner Up",
    content1: "1st Runner Up Overall by Lightspeed among 107 hackers",
    content2: "Top 3 projects using Replit",
    content3: "1st Runner Up by Amazon Web Services (AWS)",
    article: "https://shorturl.at/fhjsT",
  },
  {
    id: "a-4",
    icon: dennisivy,
    event: "September Hackathon by Dennis Ivy",
    position: "Winner",
    content1:
      "Rated the best portfolio website among 450+ participants across the globe.",
    content2: "",
    content3: "",
    youtube: "https://www.youtube.com/watch?v=X2473En3h_o&t=5278s",
    project: "https://parthmittal.netlify.app/",
  },
  {
    id: "a-5",
    icon: manipal,
    event: "Manipal Hackathon'22",
    position: "Consolation Prize",
    content1: "Top 10 among 500+ teams across India",
    content2:
      "Developed a cross-platform mobile application to address the problem of social cohesion.",
    content3: "",
    article: "https://shorturl.at/exEIQ",
  },
  {
    id: "a-6",
    icon: icon,
    event: "ICON Hyperbuild Hackathon",
    position: "Honorable Mention",
    content1:
      "Honorable Mention among 655 participants across the globe in a 3 month-long online hackathon.",
    content2: "",
    content3: "",
    project: "https://devpost.com/software/green-trust-xj2w6g",
  },
  {
    id: "a-7",
    icon: ethforall,
    event: "ETHForAll 2023",
    position: "Top 3 Superfluid Projects",
    content1:
      "Bounty winners among 430 projects in ETHGlobal's largest online hackathon.",
    content2: "",
    content3: "",
    project: "https://devfolio.co/projects/green-trust-ed14",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-4",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-5",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-6",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "pl-7",
        icon: SiPhp,
        name: "PHP",
      },
      {
        id: "pl-8",
        icon: SiMysql,
        name: "MySQL",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "f-2",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-3",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-4",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-5",
        icon: SiFlask,
        name: "Flask",
      },
      {
        id: "f-6",
        icon: SiPandas,
        name: "pandas",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "MyAIChef",
    logo: myaicheflogo,
    link: "https://apps.apple.com/cz/app/myaichef/id6466341841",
    positions: [
      {
        title: "Software Engineer",
        duration: "Sep 2023 - July 2024",
        content: [
          {
            text: "Full Stack Development.",
            link: "",
          },
        ],
      },
    ],
  },
];

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title:
      "Move _wiki to old table look, common template for email and settings digest only",
    link: "https://github.com/publiclab/plots2/pull/10731",
    number: "#10731",
    date: "Feb 24 2022",
    linesAdded: "101",
    linesDeleted: "48",
  },
  {
    id: "os-2",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Combine templates for email digest and settings digest",
    link: "https://github.com/publiclab/plots2/pull/10681",
    number: "#10681",
    date: "Feb 9 2022",
    linesAdded: "86",
    linesDeleted: "106",
  },
  {
    id: "os-3",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Fix reverse chronological sorting on inline grids",
    link: "https://github.com/publiclab/plots2/pull/11114",
    number: "#11114",
    date: "May 4 2022",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-4",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "style: Make post page footer responsive",
    link: "https://github.com/publiclab/plots2/pull/10634",
    number: "#10634",
    date: "Feb 24 2022",
    linesAdded: "64",
    linesDeleted: "8",
  },
  {
    id: "os-5",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Typos in Translation_System.md",
    link: "https://github.com/publiclab/plots2/issues/11120",
    number: "#11120",
    date: "May 6 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-6",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translations on layouts/_header.html.erb",
    link: "https://github.com/publiclab/plots2/issues/11115",
    number: "#11115",
    date: "May 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-7",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translation of 'This is part of' on _tagging.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10986",
    number: "#10986",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-8",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Wrong closing heading tag in _digest.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10985",
    number: "#10985",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-9",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Add class to center wiki.scraped_image in wikis template",
    link: "https://github.com/publiclab/plots2/issues/10797",
    number: "#10797",
    date: "Mar 18 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-10",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Images on /wiki are not center aligned",
    link: "https://github.com/publiclab/plots2/issues/10755",
    number: "#10755",
    date: "Mar 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-11",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-12",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-13",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "authentication: Fix placeholder realms for redirects.",
    link: "https://github.com/zulip/zulip/pull/19689",
    number: "#19689",
    date: "Sep 9 2021",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-14",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "message_editing : Fix topic edit propagate option cut-off",
    link: "https://github.com/zulip/zulip/pull/19760",
    number: "#19760",
    date: "Feb 10 2022",
    linesAdded: "9",
    linesDeleted: "8",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Bhavya Solutions Website",
    github: "https://github.com/vkiragi/bhavya-solutions",
    link: "https://bhavyasolutions.com/",
    image: comicify_ai,
    content: "Client's personal indexing business website.",
    stack: [
      {
        id: "icon-1",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-2",
        icon: SiHtml5,
        name: "HTML",
      },
      {
        id: "icon-3",
        icon: SiCss3,
        name: "CSS",
      },
      {
        id: "icon-4",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-6",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
    ],
  },
  {
    id: "project-2",
    title: "Social Networking App",
    github: "https://github.com/vkiragi/social-networking-app",
    image: greentrust,
    content: "Facebook-esque social networking app.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        id: "icon-4",
        icon: SiIpfs,
        name: "IPFS",
      },
      {
        id: "icon-5",
        icon: SiSolidity,
        name: "Solidity",
      },
      {
        id: "icon-6",
        icon: IoIosNotificationsOutline,
        name: "Push Protocol",
      },
    ],
  },
  {
    id: "project-3",
    title: "ChargeSwap",
    github: "https://github.com/CommanderAstern/ChargeSwap",
    link: "https://devfolio.co/projects/chargeswap-3527",
    image: chargeswap,
    content:
      "A Blockchain-based EV-Battery swapping solution - winning project at ETHIndia'22, the world's largest Ethereum Hackathon",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-3",
        icon: SiWeb3Dotjs,
        name: "Web3.js",
      },
      {
        id: "icon-4",
        icon: SiSolidity,
        name: "Solidity",
      },
      {
        id: "icon-5",
        icon: FaHardHat,
        name: "HardHat",
      },
      {
        id: "icon-6",
        icon: SiIpfs,
        name: "IPFS",
      },
      {
        id: "icon-7",
        icon: SiArduino,
        name: "Arduino",
      },
      {
        id: "icon-8",
        icon: IoIosNotificationsOutline,
        name: "Push Protocol",
      },
    ],
  },
  {
    id: "project-4",
    title: "Samsotech Table Management System",
    github: "",
    link: "https://www.linkedin.com/posts/mittal-parth_technologysolutions-softwaredevelopment-technology-activity-6994915645066809344-WnMY?utm_source=share&utm_medium=member_desktop",
    image: placeicon,
    content:
      "Restaurant, Place, Table and realtime Reservation Management with Multi-Tenant Architecture, RBAC, SMS and Email integration for Samsotech International",
    stack: [
      {
        id: "icon-1",
        icon: SiDotnet,
        name: "Dot Net Core MVC 6",
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "icon-3",
        icon: DiMsqlServer,
        name: "MS Sql Server",
      },
      {
        id: "icon-4",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "icon-5",
        icon: SiTwilio,
        name: "Twillio",
      },
    ],
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    organisation: "Genesis, NITK",
    title: "Competitions Head",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
  {
    organisation: "IRIS, NITK",
    title: "Tutor",
    duration: "Jan 2022 - Jan 2022",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
        link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
      },
    ],
    logo: iris,
  },
  {
    organisation: "E-Cell, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Apr 2022",
    content: [
      {
        text: "Organised the season 3 of the E-Cell NITK Podcast",
        link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },
      {
        text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
        link: "",
      },
    ],
    logo: ecell,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/vkiragi",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/vkiragi",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:varunkiragi@icloud.com",
  },
];

export const aboutMe = {
  name: "Varun Kiragi",
  tagLine: "UC Davis '24",
  intro:
    "I'm a Full Stack Developer with a passion for iOS and Web Development. Let's Connect!",
};
