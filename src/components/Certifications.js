import React from 'react';
import { FaAws, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified AI Practitioner',
      level: 'Foundational',
      status: 'earned',
      badge: process.env.PUBLIC_URL + '/images/aws-ai-practitioner-badge.jpg',
      credentialUrl: 'https://www.credly.com/earner/earned/badge/784aabb1-5cfd-4163-8575-0916d554b2af'
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      level: 'Foundational',
      status: 'in-progress',
      note: 'Estudando para a próxima certificação AWS.'
    }
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <h2 data-aos="fade-up">Certificações</h2>
        <p className="subtitle" data-aos="fade-up" data-aos-delay="50">
          Validações técnicas da curiosidade que me trouxe até aqui
        </p>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-card glass-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`cert-status ${cert.status}`}>
                {cert.status === 'earned' ? 'Concluída' : 'Em andamento'}
              </div>

              {cert.badge ? (
                <img src={cert.badge} alt={cert.title} className="cert-badge-img" />
              ) : (
                <div className="cert-icon">
                  <FaAws />
                </div>
              )}

              <h3>{cert.title}</h3>
              <p className="cert-level">{cert.level}</p>

              {cert.note && <p className="cert-note">{cert.note}</p>}

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  <FaExternalLinkAlt /> Ver Credencial
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
