import React from 'react';
import { FaGithub, FaBrain, FaJava } from 'react-icons/fa';
import { SiPython, SiFastapi, SiPostgresql, SiSpringboot } from 'react-icons/si';
import { FaWandMagicSparkles } from 'react-icons/fa6';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Monitoramento de Risco Operacional',
      description: 'Sistema de machine learning para monitoramento e previsão de riscos operacionais em instituições financeiras, utilizando Random Forest para análise preditiva e classificação de incidentes. Inclui chatbot com IA generativa para consultas inteligentes.',
      icons: [SiPython, SiFastapi, FaBrain, FaWandMagicSparkles, SiPostgresql],
      github: 'https://github.com/leticiagiovannalopez/monitoramento-risco-operacional',
      featured: true
    },
    {
      title: 'Creators Connect',
      description: 'Plataforma marketplace que conecta influenciadores e empresas, facilitando parcerias comerciais e gestão de campanhas. Sistema completo com painéis administrativos e dashboards analíticos.',
      icons: [SiPython, SiFastapi, SiPostgresql],
      github: 'https://github.com/leticiagiovannalopez/CreatorsConnect',
      status: 'Em andamento',
      featured: false
    },
    {
      title: 'Risk Analysis API',
      description: 'API REST de análise de risco de crédito em Java com Spring Boot. Recebe dados financeiros e classifica perfis em BAIXO, MÉDIO ou ALTO risco com justificativa, simulando sistemas reais de bancos e fintechs.',
      icons: [FaJava, SiSpringboot, SiPostgresql],
      github: 'https://github.com/leticiagiovannalopez/risk.analysis.api',
      status: 'Em andamento',
      featured: false
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 data-aos="fade-up">Projetos em Destaque</h2>
        <p className="subtitle" data-aos="fade-up" data-aos-delay="50">
          Soluções que desenvolvi aplicando boas práticas de engenharia de software
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={'project-card glass-card' + (project.featured ? ' featured' : '')}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {project.featured && <div className="featured-badge">Destaque</div>}
              {project.status && (
                <div className="status-badge">{project.status}</div>
              )}

              <div className="project-header">
                <div className="project-icons">
                  {project.icons.map((Icon, i) => (
                    <span key={i} className="tech-icon"><Icon /></span>
                  ))}
                </div>
              </div>

              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

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

        <div className="more-projects" data-aos="fade-up">
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