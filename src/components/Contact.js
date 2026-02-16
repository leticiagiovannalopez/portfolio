import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content glass-card">
          <h2 data-aos="fade-up">Vamos conversar?</h2>
          <p className="contact-subtitle" data-aos="fade-up" data-aos-delay="50">
            Estou aberta a oportunidades como desenvolvedora backend.
            Se você busca alguém proativo, curioso e focado em resultados,
            vamos conversar!
          </p>

          <div className="contact-methods">
            <a
              href="mailto:leticiagiovannalopez@gmail.com"
              className="contact-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-info">
                <h3>Email</h3>
                <p>leticiagiovannalopez@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/let%C3%ADcia-lopez-789aa9368/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="contact-icon">
                <FaLinkedin />
              </div>
              <div className="contact-info">
                <h3>LinkedIn</h3>
                <p>Letícia Lopez</p>
              </div>
            </a>

            <a
              href="https://github.com/leticiagiovannalopez"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="contact-icon">
                <FaGithub />
              </div>
              <div className="contact-info">
                <h3>GitHub</h3>
                <p>@leticiagiovannalopez</p>
              </div>
            </a>
          </div>

          <div className="contact-cta" data-aos="fade-up" data-aos-delay="400">
            <a
              href="mailto:leticiagiovannalopez@gmail.com"
              className="btn btn-primary btn-large"
            >
              <FaEnvelope /> Enviar Mensagem
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
