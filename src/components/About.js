import { FaRocket, FaLanguage } from 'react-icons/fa';
import './About.css';

const About = () => {
  const qualities = [
    {
      icon: <FaLanguage />,
      title: 'Autodidata',
      description: 'Aprendi inglês sozinha através de imersão total, consumindo conteúdo e praticando diariamente. Hoje aplico essa mesma metodologia para aprender novas tecnologias.'
    },
    {
      icon: <FaRocket />,
      title: 'Zero Procrastinação',
      description: 'Não deixo para depois. Executo as tarefas com agilidade e consistência, mantendo alta produtividade sem perder a qualidade.'
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 data-aos="fade-up">Quem é Letícia</h2>
        <p className="subtitle" data-aos="fade-up" data-aos-delay="50">
          Aprendo por conta própria: exploro tecnologias, testo ideias, quebro coisas
          e reconstruo até entender o porquê por trás do código.
        </p>

        <div className="qualities-grid">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="quality-card glass-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="quality-icon">{quality.icon}</div>
              <h3>{quality.title}</h3>
              <p>{quality.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
