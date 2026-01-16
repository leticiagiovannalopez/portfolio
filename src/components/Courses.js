import React from 'react';
import { FaCheckCircle, FaSpinner } from 'react-icons/fa';
import './Courses.css';

const Courses = () => {
  const leftColumn = [
    {
      name: 'Big Data & Analytics',
      platform: 'FIAP',
      status: 'concluído'
    },
    {
      name: 'Development Chatbots (IA Generativa)',
      platform: 'FIAP',
      status: 'concluído'
    },
    {
      name: 'Engenharia de Software',
      platform: 'FIAP',
      status: 'concluído'
    },
    {
      name: 'Business Intelligence (BI)',
      platform: 'FIAP',
      status: 'em andamento'
    }
  ];

  const rightColumn = [
    {
      name: 'FastAPI - APIs Modernas e Assíncronas com Python',
      platform: 'Udemy',
      status: 'em andamento'
    },
    {
      name: 'Python Mundo 1',
      platform: 'Curso em Vídeo',
      status: 'concluído'
    },
    {
      name: 'Python Mundo 2',
      platform: 'Curso em Vídeo',
      status: 'em andamento'
    }
  ];

  const renderCourse = (course, index) => (
    <div
      key={index}
      className={`timeline-item ${course.status === 'concluído' ? 'completed' : 'in-progress'}`}
    >
      <div className="timeline-marker">
        {course.status === 'concluído' ? (
          <FaCheckCircle />
        ) : (
          <FaSpinner className="spinner" />
        )}
      </div>
      <div className="timeline-content glass-card">
        <h4>{course.name}</h4>
        <div className="course-info">
          <span className="platform">{course.platform}</span>
          <span className={`status ${course.status === 'concluído' ? 'completed' : 'in-progress'}`}>
            {course.status === 'concluído' ? 'Concluído' : 'Em andamento'}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="courses" id="courses">
      <div className="container">
        <h2>Cursos & Certificações</h2>
        <p className="subtitle">
          Aprendizado contínuo para me manter atualizada com as tecnologias do mercado
        </p>

        <div className="timeline">
          <div className="timeline-column">
            {leftColumn.map(renderCourse)}
          </div>
          <div className="timeline-column">
            {rightColumn.map(renderCourse)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
