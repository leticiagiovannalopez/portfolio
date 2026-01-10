import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiPython, SiFastapi, SiPostgresql, SiPhp, SiLaravel, SiVuedotjs, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';
import { FaBrain } from 'react-icons/fa';
import { FaWandMagicSparkles } from 'react-icons/fa6';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Monitoramento de Risco Operacional',
      description: 'Sistema de machine learning para monitoramento e previsão de riscos operacionais em instituições financeiras, utilizando Random Forest para análise preditiva e classificação de incidentes. Inclui chatbot com IA generativa para consultas inteligentes.',
      tags: ['Python', 'FastAPI', 'Random Forest', 'IA Generativa', 'PostgreSQL'],
      icons: [<SiPython />, <SiFastapi />, <FaBrain />, <FaWandMagicSparkles />, <SiPostgresql />],
      github: 'https://github.com/leticiagiovannalopez/monitoramento-risco-operacional',
      featured: true
    },
    {
      title: 'Creators Connect',
      description: 'Plataforma marketplace que conecta influenciadores e empresas, facilitando parcerias comerciais e gestão de campanhas. Sistema completo com painéis administrativos e dashboards analíticos.',
      tags: ['Python', 'FastAPI', 'PostgreSQL'],
      icons: [<SiPython />, <SiFastapi />, <SiPostgresql />],
      github: 'https://github.com/leticiagiovannalopez/CreatorsConnect',
      status: 'Em andamento',
      featured: true
    },
    {
      title: 'Landing Page - Terapia',
      description: 'Landing page profissional e responsiva para serviços de terapia, com design moderno, formulário de contato e otimização para conversão de leads.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsivo'],
      icons: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
      github: 'https://github.com/leticiagiovannalopez/site-terapia',
      featured: false
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projetos em Destaque</h2>
        <p className="subtitle">
          Soluções que desenvolvi aplicando boas práticas de engenharia de software
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card glass-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {project.featured && <div className="featured-badge">Destaque</div>}
              {project.status && (
                <div className="status-badge">{project.status}</div>
              )}

              <div className="project-header">
                <div className="project-icons">
                  {project.icons.map((icon, i) => (
                    <span key={i} className="tech-icon">{icon}</span>
                  ))}
                </div>
              </div>

              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> Ver Código
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="more-projects">
          <p>Quer ver mais projetos?</p>
          <a 
            href="https://github.com/leticiagiovannalopez" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaGithub /> Acessar GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
