import React from 'react';
import {
  SiPhp,
  SiLaravel,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiVuedotjs,
  SiVuetify,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiGit,
  SiGithub,
  SiJupyter,
  SiPandas,
  SiAmazonaws
} from 'react-icons/si';
import { FaBrain, FaPlus, FaRobot, FaWandMagicSparkles } from 'react-icons/fa6';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend',
      skills: [
        { name: 'PHP Laravel', icon: <SiLaravel />, color: '#FF2D20' },
        { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
        { name: 'Python', icon: <SiPython />, color: '#3776AB' },
        { name: 'FastAPI', icon: <SiFastapi />, color: '#009688' }
      ]
    },
    {
      title: 'Banco de Dados',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'Vue.js', icon: <SiVuedotjs />, color: '#4FC08D' },
        { name: 'Vuetify', icon: <SiVuetify />, color: '#1867C0' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' }
      ]
    },
    {
      title: 'Machine Learning & Data',
      skills: [
        { name: 'Python', icon: <SiPython />, color: '#3776AB' },
        { name: 'Pandas', icon: '🐼', color: '#150458' },
        { name: 'Jupyter Notebooks', icon: <SiJupyter />, color: '#F37626' },
        { name: 'Random Forest', icon: <FaBrain />, color: '#8B5CF6' },
        { name: 'Análise de Dados', icon: <FaBrain />, color: '#3776AB' },
        { name: 'IA Generativa', icon: <FaWandMagicSparkles />, color: '#FF6B6B' }
      ]
    },
    {
      title: 'DevOps & Ferramentas',
      skills: [
        { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
        { name: 'AWS', icon: <SiAmazonaws />, color: '#FF9900' },
        { name: 'Git', icon: <SiGit />, color: '#F05032' },
        { name: 'GitHub', icon: <SiGithub />, color: '#181717' }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 data-aos="fade-up">Stack de Tecnologias</h2>
        <p className="subtitle" data-aos="fade-up" data-aos-delay="50">
          Ferramentas e tecnologias que utilizo para criar soluções robustas e escaláveis
        </p>

        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-category glass-card"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              <h3>{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-item"
                    style={{ '--skill-color': skill.color }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
