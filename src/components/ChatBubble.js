import React, { useState } from 'react';
import { FaCommentDots, FaTimes, FaWhatsapp } from 'react-icons/fa';
import './ChatBubble.css';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '5511948052799'; // Formato internacional sem espaços
    const message = encodeURIComponent('Oi, Letícia! Vi seu portfólio e quero marcar uma entrevista');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Botão flutuante */}
      <div className={`chat-bubble-container ${isOpen ? 'open' : ''}`}>
        <button
          className="chat-bubble-button"
          onClick={toggleChat}
          aria-label="Abrir chat"
        >
          {isOpen ? <FaTimes /> : <FaCommentDots />}
        </button>

        {/* Mensagem inicial quando fechado */}
        {!isOpen && (
          <div className="chat-bubble-tooltip">
            É bom ter você aqui! :)
          </div>
        )}

        {/* Janela de chat */}
        {isOpen && (
          <div className="chat-bubble-window">
            <div className="chat-bubble-header">
              <h3>Olá! 👋</h3>
            </div>
            <div className="chat-bubble-content">
              <p>Quer marcar uma entrevista?</p>
              <button
                className="whatsapp-button"
                onClick={handleWhatsAppClick}
              >
                <FaWhatsapp /> Enviar mensagem no WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatBubble;
