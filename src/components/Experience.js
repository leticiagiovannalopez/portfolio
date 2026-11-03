import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const education = {
    degree: 'Bacharelado em Engenharia de Software',
    institution: 'Universidade Cruzeiro do Sul',
    period: 'Dezembro 2025 - Presente',
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
          {/* COLUNA ESQUERDA */}
          <div className="experience-section">
            <h3 className="section-title" data-aos="fade-up" data-aos-delay="100">
              <FaBriefcase /> Experiência Profissional
            </h3>

            {/* Card - Eng Software Júnior */}
            <div className="experience-card glass-card" data-aos="fade-up" data-aos-delay="150">
              <div className="experience-header">
                <div>
                  <h4>Engenheira de Software Júnior</h4>
                  <p className="company">Itaú · Efetiva</p>
                </div>
                <div className="experience-badge">Efetiva</div>
              </div>
              <div className="experience-meta">
                <span className="meta-item"><FaCalendarAlt /> Novembro 2026 - Presente</span>
              </div>
              <p className="experience-description">
                Atuação no desenvolvimento backend da jornada de pagamento de dívidas para clientes PJ, construindo serviços em Java com Spring Boot sobre arquitetura orientada a eventos na AWS, seguindo DDD, SOLID e Clean Architecture.
              </p>
              <div className="highlights">
                <strong>Stack:</strong>
                <p className="stack-list">Java · Spring Boot · Kafka · AWS (SQS, SNS, DynamoDB, S3, EKS) · Kubernetes · Terraform · Grafana · Prometheus · Splunk</p>
              </div>
            </div>

            {/* Card - Eng Dados */}
            <div className="experience-card glass-card" data-aos="fade-up" data-aos-delay="150">
              <div className="experience-header">
                <div>
                  <h4>Estagiária de Engenharia de Dados</h4>
                  <p className="company">Itaú · Estágio</p>
                </div>
                <div className="experience-badge">Estágio</div>
              </div>
              <div className="experience-meta">
                <span className="meta-item"><FaCalendarAlt /> Julho 2026 - Outubro 2026</span>
                <span className="meta-item"><FaMapMarkerAlt /> Híbrido</span>
              </div>
              <p className="experience-description">
                Atuação na integração de comunicações transacionais do banco, migrando integrações da Pega para o Digibee (iPaaS) e garantindo a observabilidade dos fluxos de eventos em produção.
              </p>
              <div className="highlights">
                <strong>Integração de Comunicações Transacionais:</strong>
                <ul>
                  <li>Migração de integrações da plataforma Pega para o Digibee (iPaaS), garantindo a continuidade das comunicações transacionais do banco</li>
                  <li>Desenvolvimento de pipelines de ponta a ponta, da construção à preparação para produção</li>
                  <li>Investigação e correção de falhas em pipelines na fase final da migração, identificando a causa raiz dos erros e aplicando as correções</li>
                  <li>Acompanhamento pós-deploy, validando o funcionamento dos pipelines em produção</li>
                </ul>
                <strong>Observabilidade:</strong>
                <ul>
                  <li>Análise de logs para identificação e diagnóstico de erros nos fluxos de integração</li>
                  <li>Investigação de falhas no fluxo de eventos, apoiando a resolução de incidentes</li>
                  <li>Monitoramento de consumer lag de tópicos Kafka com Grafana, com criação de alertas como alternativa ao acompanhamento manual</li>
                </ul>
              </div>
            </div>

            {/* Card Dexos */}
            <div className="experience-card glass-card dexos-card" data-aos="fade-up" data-aos-delay="150">
              <div className="experience-header">
                <div>
                  <h4>Full Stack Developer</h4>
                  <p className="company">Dexos · Autônoma</p>
                </div>
                <div className="experience-badge">Autônoma</div>
              </div>
              <div className="experience-meta">
                <span className="meta-item"><FaCalendarAlt /> Outubro 2025 - Fevereiro 2026</span>
                <span className="meta-item"><FaMapMarkerAlt /> Remoto</span>
              </div>
              <p className="experience-description">
                Desenvolvimento de sistemas corporativos e dashboards administrativos utilizando PHP Laravel, Node.js, MongoDB, Vue.js e Docker.
              </p>
              <div className="highlights">
                <strong>Principais realizações:</strong>
                <ul>
                  <li>Criação de dashboards financeiros completos com Vue.js e Vuetify</li>
                  <li>Desenvolvimento de APIs RESTful com Laravel e Node.js</li>
                  <li>Implementação de sistemas de gestão com MongoDB</li>
                </ul>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA */}
          <div className="education-section">
            <h3 className="section-title" data-aos="fade-up" data-aos-delay="100">
              🎓 Formação Acadêmica
            </h3>

            <div className="education-card glass-card" data-aos="fade-up" data-aos-delay="150">
              <div className="education-status">{education.status}</div>
              <h4>{education.degree}</h4>
              <p className="institution">{education.institution}</p>
              <p className="period"><FaCalendarAlt /> {education.period}</p>
            </div>

            <div className="interests-card glass-card" data-aos="fade-up" data-aos-delay="300">
              <h4>Interesses & Objetivos</h4>
              <p><strong>Interesses:</strong> Engenharia de IA, Backend, Engenharia de Software, Dados</p>
              <p><strong>Objetivo:</strong> Aprofundar minha atuação em engenharia de IA e desenvolvimento backend, construindo sistemas robustos e escaláveis que unam integração de dados, APIs e soluções com inteligência artificial.</p>
            </div>

            {/* Card 2 - Análise de Dados */}
            <div className="experience-card glass-card analise-card" data-aos="fade-up" data-aos-delay="150">
              <div className="experience-header">
                <div>
                  <h4>Estagiária de Análise de Dados</h4>
                  <p className="company">Itaú · Estágio</p>
                </div>
                <div className="experience-badge">Estágio</div>
              </div>
              <div className="experience-meta">
                <span className="meta-item"><FaCalendarAlt /> Março 2026 - Junho 2026</span>
                <span className="meta-item"><FaMapMarkerAlt /> Híbrido</span>
              </div>
              <p className="experience-description">
                Gestão e análise de dados de consórcio de imóveis, com foco em automação de processos, eficiência operacional e inteligência artificial.
              </p>
              <div className="highlights">
                <strong>IA Generativa:</strong>
                <ul>
                  <li>Desenvolvimento de aplicação completa de IA generativa para análise de documentos imobiliários</li>
                  <li>Arquitetura multiagente com OCR inteligente, backend em Node.js e interface em React</li>
                  <li>97% de assertividade e redução significativa de custos operacionais</li>
                  <li>Suporte à implementação e evolução de agentes de IA aplicados a processos internos</li>
                </ul>
                <strong>Dados e Automação:</strong>
                <ul>
                  <li>Pipeline de dados escalável com Python e AWS Athena para consolidar múltiplas fontes</li>
                  <li>Redução do tempo de geração de relatórios semanais de horas para minutos</li>
                  <li>Automação de dashboards executivos e de planilhas/apresentações com Python, boto3 e python-pptx</li>
                  <li>Eliminação de etapas manuais e ganho de eficiência operacional</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;