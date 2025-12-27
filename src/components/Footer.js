import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            Desenvolvido com <FaHeart className="heart-icon" /> por Letícia Lopez
          </p>
          <p className="footer-year">© {currentYear} · Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
