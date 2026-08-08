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
          <div className="experience-section" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 className="section-title" data-aos="fade-up" data-aos-delay="100">
              <FaBriefcase /> Experiência Profissional
            </h3>

            {/* Card 1 - Eng Software */}
            <div className="experience-card glass-card" data-aos="fade-up" data-aos-delay="150">
              <div className="experience-header">
                <div>
                  <h4>Estagiária de Engenharia de Dados</h4>
                  <p className="company">Itaú · Estágio</p>
                </div>
                <div className="experience-badge">Estágio</div>
              </div>
              <div className="experience-meta">
                <span className="meta-item"><FaCalendarAlt /> Junho 2026 - Presente</span>
                <span className="meta-item"><FaMapMarkerAlt /> Híbrido</span>
              </div>
              <p className="experience-description">
                Desenvolvimento e manutenção de pipelines de integração de dados no setor financeiro, migrando e construindo fluxos de eventos com Kafka e Digibee, com foco em qualidade, boas práticas de engenharia e resolução de problemas em produção.
              </p>
              <div className="highlights">
                <strong>Principais realizações:</strong>
                <ul>
                  <li>Migração de tópicos de eventos (EVTs) da PEGA para a Digibee, adaptando regras de negócio conforme documentação de cada tópico, com EVTs aceitos em homologação para pessoa física e jurídica</li>
                  <li>Construção de pipelines Kafka + Digibee ponta a ponta (Choice, Foreach, transformações, geração de JSON, execução paralela), incluindo consumo de tópicos e tratamento de schemas Avro</li>
                  <li>Integração de enriquecimentos de dados de cliente (contato, conta/segmento, preferências de comunicação, instituição financeira, segmentação, operadores PJ), mapeando o uso correto de cada um por tipo de tópico e perfil PF/PJ</li>
                  <li>Diagnóstico de causa raiz em falhas de pipeline — offsets Kafka, incompatibilidade de JSONPath, operadores regex, tratamento de JSON escapado — convertendo aprendizados em regras de validação</li>
                  <li>Acompanhamento do ciclo de GMUD/RITM no ServiceNow (abertura, checklist, aprovação) e verificação de acessos a tópicos por ambiente (dev/stage/homolog/prod)</li>
                </ul>
              </div>
            </div>

            {/* Card 2 - Análise de Dados */}
            <div className="experience-card glass-card" style={{ flex: 1 }} data-aos="fade-up" data-aos-delay="300">
              <div className="experience-header">
                <div>
                  <h4>Estagiária de Análise de Dados</h4>
                  <p className="company">Itaú · Estágio</p>
                </div>
                <div className="experience-badge">Estágio</div>
              </div>
              <div className="experience-meta">
                <span className="meta-item"><FaCalendarAlt /> Março 2026 - Maio 2026</span>
                <span className="meta-item"><FaMapMarkerAlt /> Híbrido</span>
              </div>
              <p className="experience-description">
                Gestão e análise de dados de consórcio de imóveis, com foco em automação de processos, eficiência operacional e inteligência artificial.
              </p>
              <div className="highlights">
                <strong>Principais realizações:</strong>
                <ul>
                  <li>Desenvolvimento de aplicação completa de IA generativa para análise de documentos imobiliários, com arquitetura multiagente, OCR inteligente e integração full stack (Node.js + React), atingindo mais de 95% de assertividade e significativa redução de custos operacionais</li>
                  <li>Construção de pipeline de dados escalável com Python e AWS Athena para consolidação automatizada de múltiplas fontes de dados, reduzindo o tempo de geração de relatórios semanais de horas para minutos</li>
                  <li>Desenvolvimento de automações para dashboards executivos e geração automatizada de planilhas/apresentações utilizando Python, boto3 e python-pptx, eliminando etapas manuais e aumentando eficiência operacional</li>
                  <li>Atuação no suporte à implementação e evolução de agentes de IA aplicados a processos internos</li>
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
              <p><strong>Interesses:</strong> Backend, Engenharia de Software, Dados, IA</p>
              <p><strong>Objetivo:</strong> Buscar efetivação como engenheira de software backend, aplicando a vivência com dados e integração de sistemas construída na engenharia de dados.</p>
              <p><strong>Certificação em andamento:</strong> AWS Certified AI Practitioner</p>
            </div>

            {/* Card Dexos */}
            <div className="experience-card glass-card dexos-card" data-aos="fade-up" data-aos-delay="450">
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
        </div>
      </div>
    </section>
  );
};

export default Experience;