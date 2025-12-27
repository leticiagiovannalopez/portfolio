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
        <h2>Quem é Letícia</h2>
        <p className="subtitle">
          Sempre tive o hábito de aprender por conta própria. Hoje, levo essa mesma 
          postura para a programação: exploro tecnologias, testo ideias, quebro coisas, 
          aprendo e reconstruo.
        </p>

        <div className="about-intro glass-card">
          <p>
            Gosto de entender o <strong>"porquê"</strong> por trás do código, não apenas 
            fazer funcionar. Minha curiosidade me leva a buscar soluções melhores, aprender 
            ferramentas novas e evoluir constantemente. É ela que transforma 
            <strong> complexidade em aprendizado</strong> — e que segue me guiando até aqui.
          </p>
        </div>

        <div className="qualities-grid">
          {qualities.map((quality, index) => (
            <div 
              key={index} 
              className="quality-card glass-card"
              style={{ animationDelay: `${index * 0.1}s` }}
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
