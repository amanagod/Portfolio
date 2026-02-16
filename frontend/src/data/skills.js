import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJquery,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiPostman,
  SiNpm,
  SiRedux,
  SiJsonwebtokens,
  SiNetlify,
  SiLangchain,
  SiDocker,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

export const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'jQuery', icon: SiJquery, color: '#0769AD' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'JWT', icon: SiJsonwebtokens, color: '#D63AFF' },
      { name: 'REST APIs', icon: null, color: '#6366f1' },
      { name: 'Microservices', icon: null, color: '#FF6B6B' },
    ],
  },
  {
    title: 'AI / LLM',
    skills: [
      { name: 'LangChain', icon: SiLangchain, color: '#1C3C3C' },
      { name: 'LangGraph', icon: null, color: '#2DD4BF' },
      { name: 'RAG', icon: null, color: '#8B5CF6' },
      { name: 'LLM Integration', icon: null, color: '#F59E0B' },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'SQL', icon: null, color: '#336791' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'npm', icon: SiNpm, color: '#CB3837' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
    ],
  },
];

