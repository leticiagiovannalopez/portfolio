import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Developer (Foco Backend)',
      company: 'Dexos',
      period: 'Outubro 2025 - Presente',
      location: 'Remoto',
      type: 'Estágio',
      description: 'Desenvolvimento de sistemas corporativos e dashboards administrativos utilizando PHP Laravel, Node.js, MongoDB, Vue.js e Docker.',
      highlights: [
        'Criação de dashboards financeiros completos com Vue.js e Vuetify',
        'Desenvolvimento de APIs RESTful com Laravel e Node.js',
        'Implementação de sistemas de gestão com MongoDB',
        'Integração de componentes Vue.js em projetos Laravel existentes',
        'Containerização de aplicações com Docker'
      ]
    }
  ];

  const education = {
    degree: 'Bacharelado em Engenharia de Software',
    institution: 'Universidade Cruzeiro do Sul',
    period: 'Início: Fevereiro 2026',
    status: 'Em breve'
  };

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2>Experiência & Formação</h2>
        <p className="subtitle">
          Minha jornada profissional e acadêmica no mundo da tecnologia
        </p>

        <div className="experience-content">
          <div className="experience-section">
            <h3 className="section-title">
              <FaBriefcase /> Experiência Profissional
            </h3>

            {experiences.map((exp, index) => (
              <div key={index} className="experience-card glass-card">
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
            <h3 className="section-title">
              🎓 Formação Acadêmica
            </h3>

            <div className="education-card glass-card">
              <div className="education-status">{education.status}</div>
              <h4>{education.degree}</h4>
              <p className="institution">{education.institution}</p>
              <p className="period">
                <FaCalendarAlt /> {education.period}
              </p>
            </div>

            <div className="certifications glass-card">
              <h4>Aprendizado Contínuo</h4>
              <p>
                Cursando cursos da <strong>Fundação Bradesco</strong> focados em 
                Python, análise de dados e tecnologias para o setor bancário, fortalecendo 
                minhas habilidades técnicas para aplicações no mercado financeiro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
