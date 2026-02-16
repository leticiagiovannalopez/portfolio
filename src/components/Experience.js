import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Estagiária de Análise de Dados',
      company: 'Itaú',
      period: 'Fevereiro 2026 - Presente',
      location: 'Híbrido',
      type: 'Estágio',
      description: 'Gestão e análise de dados de consórcio de imóveis, com foco em dashboards, KPIs e proposição de melhorias.',
      highlights: [
        'Criação de dashboards para monitoramento de SLA e performance',
        'Análise de indicadores de consórcio (adesão, prazos, entregas)',
        'Desenvolvimento de relatórios e propostas de melhoria de processos'
      ]
    },
    {
      role: 'Full Stack Developer (Foco Backend)',
      company: 'Dexos',
      period: 'Outubro 2025 - Fevereiro 2026',
      location: 'Remoto',
      type: 'Estágio',
      description: 'Desenvolvimento de sistemas corporativos e dashboards administrativos utilizando PHP Laravel, Node.js, MongoDB, Vue.js e Docker.',
      highlights: [
        'Criação de dashboards financeiros completos com Vue.js e Vuetify',
        'Desenvolvimento de APIs RESTful com Laravel e Node.js',
        'Implementação de sistemas de gestão com MongoDB'
      ]
    }
  ];

  const education = {
    degree: 'Bacharelado em Engenharia de Software',
    institution: 'Universidade Cruzeiro do Sul',
    period: 'Fevereiro 2026 - Presente',
    status: 'Em andamento'
  };

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 data-aos="fade-up">Experiência & Formação</h2>
        <p className="subtitle" data-aos="fade-up" data-aos-delay="50">
          Minha jornada profissional e acadêmica no mundo da tecnologia
        </p>

        <div className="experience-content">
          <div className="experience-section">
            <h3 className="section-title" data-aos="fade-up" data-aos-delay="100">
              <FaBriefcase /> Experiência Profissional
            </h3>

            {experiences.map((exp, index) => (
              <div key={index} className="experience-card glass-card" data-aos="fade-up" data-aos-delay={150 + index * 150}>
                <div className="experience-header">
                  <div>
                    <h4>{exp.role}</h4>
                    <p className="company">{exp.company} · {exp.type}</p>
                  </div>
                  <div className="experience-badge">{exp.type}</div>
                </div>

                <div className="experience-meta">
                  <span className="meta-item">
                    <FaCalendarAlt /> {exp.period}
                  </span>
                  <span className="meta-item">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="highlights">
                  <strong>Principais realizações:</strong>
                  <ul>
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="education-section">
            <h3 className="section-title" data-aos="fade-up" data-aos-delay="100">
              🎓 Formação Acadêmica
            </h3>

            <div className="education-card glass-card" data-aos="fade-up" data-aos-delay="150">
              <div className="education-status">{education.status}</div>
              <h4>{education.degree}</h4>
              <p className="institution">{education.institution}</p>
              <p className="period">
                <FaCalendarAlt /> {education.period}
              </p>
            </div>

            <div className="interests-card glass-card" data-aos="fade-up" data-aos-delay="300">
              <h4>Interesses & Objetivos</h4>
              <p>
                <strong>Interesses:</strong> Backend, Dados, Machine Learning, Inteligência Artificial
              </p>
              <p>
                <strong>Objetivo:</strong> Me tornar uma desenvolvedora backend sólida,
                unindo programação com análise de dados para criar soluções inteligentes e escaláveis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
