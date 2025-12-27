import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content fade-in-up">
          <div className="hero-text">
            <div className="greeting">
              <span className="wave">👋</span>
              <span>Olá, é bom ter você por aqui</span>
            </div>
            
            <h1>
              <span className="intro-text">Eu sou</span>
              <span className="gradient-text">Letícia Lopez</span>
            </h1>
            
            <p className="role">Full Stack Developer · Foco em Backend</p>
            
            <p className="description">
              Sou movida por <strong>curiosidade</strong>. Gosto de pesquisar, investigar e 
              entender como as coisas funcionam — e foi isso que me levou até a tecnologia, 
              uma área complexa, cheia de desafios e possibilidades.
            </p>

            <div className="hero-cta">
              <a 
                href="https://github.com/leticiagiovannalopez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaGithub /> Ver Projetos
              </a>
              <a 
                href="mailto:leticiagiovannalopez@gmail.com"
                className="btn btn-outline"
              >
                <FaEnvelope /> Entrar em Contato
              </a>
            </div>

            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/let%C3%ADcia-lopez-789aa9368/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/leticiagiovannalopez" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="mailto:leticiagiovannalopez@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-placeholder">
              <div className="purple-glow"></div>
              {/* Foto será adicionada aqui */}
              <div className="placeholder-text">LGL</div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Role para explorar</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
