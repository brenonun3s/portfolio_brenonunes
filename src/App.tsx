import React, { useState, useEffect } from "react";
import {
  Code,
  Database,
  Server,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Coffee,
  Layers,
  Zap,
  Shield,
  Cloud,
  GitBranch,
  Menu,
  X,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  Download,
  ChevronRight,
  Star,
  Users,
  Target,
  Briefcase,
  GraduationCap,
  Phone,
  Send,
  CheckCircle,
  ArrowUp,
  Globe,
  Smartphone,
  Monitor,
  Cpu,
  Settings,
  Terminal,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      const sections = [
        "home",
        "sobre",
        "experiencia",
        "tecnologias",
        "projetos",
        "skills",
        "educacao",
        "certificacoes",
        "contato",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const projects = [
    {
      title: "Despesa Fácil",
      description:
        "Aplicação fullstack para gerenciamento de despesas com funcionalidades de cadastro, visualização, edição e exclusão. Inclui autenticação segura com criptografia de senhas (BCrypt) e chatbot com inteligência artificial para suporte financeiro.",
      tech: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "DockerFile",
        "Spring Security",
        "HTML",
        "CSS",
        "Bootstrap5",
        "IA",
      ],
      github: "https://github.com/brenonun3s/despesa_facil.git",
      demo: "https://despesas-demo.onrender.com/login",
      image:
        "https://conteudos.xpi.com.br/wp-content/uploads/2020/06/controle-de-gastos-destaque.jpeg",
    },
    {
      title: "API de controle de Estoque",
      description:
        "Api de Microserviços simples, onde para registrar um produto no estoque, consome uma outra api que verifica se o produto está disponível",
      tech: ["Java", "Quarkus", "PostgreSQL", "Docker", "Supabase"],
      github: "https://github.com/brenonun3s/ApiEntradaWebService",
      demo: "https://apientradawebservice.onrender.com/swagger-ui/",
      image:
        "https://tse1.explicit.bing.net/th/id/OIP.WZhyX5Frx-HqavT44QP1SQHaE0?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "API de Gestão de Tarefas e JWT",
      description:
        "API de Gestão de Tarefas com Segurança e JWT, permitindo cadastro de usuários e autenticação",
      tech: [
        "Java",
        "Spring Boot",
        "JWT",
        "Spring Security",
        "PostgreSQL",
        "Mapstruct",
        "FlyWay",
      ],
      github: "https://github.com/brenonun3s/tasks_jwt",
      image:
        "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const experiences = [
    {
      title: "Suporte N1",
      company: "Syno Companhia Digital LTDA",
      period: "11/2024 - Presente",
      location: "Espirito Santo - Híbrido",
      description:
        "Responsável por garantir a eficiência no uso de sistemas internos e atendimento técnico a clientes, com foco em análise de dados, documentação e melhoria contínua.",
      achievements: [
        "Redução do tempo de resposta a incidentes em até 30%",
        "Colaboração direta com o time de desenvolvimento para melhoria contínua do sistema",
        "Suporte a mais de 100 usuários em ambiente corporativo",
      ],
    },
    {
      title: "Assistente de Operações",
      company: "Fitlog Transportes e Logística LTDA",
      period: "08/2023 - 11/2024",
      location: "Espirito Santo - Presencial",
      description:
        "Atuação no suporte à operação logística, emissão de documentos de transporte e melhoria contínua nos processos de expedição.",
      achievements: [
        "Redução de falhas operacionais com a padronização visual e treinamento da equipe",
        "Melhoria da comunicação entre operação e clientes, diminuindo retrabalhos",
        "Redução em valor mercantil de pendências, gerando melhor satisfação e redução de prejuízo",
      ],
    },
    {
      title: "Líder de Operações Jr",
      company: "Patrus Transportes LTDA",
      period: "08/2017 - 08/2023",
      location: "Espírito Santo - Presencial",
      description:
        "Durante meu tempo na empresa, exerci diferentes funções estratégicas nos setores de Soluções, Expedição, Porta Paletes e Perdas e Danos, com atuação de cargos como Líder Operacional Jr - Assistente Operacional - Auxiliar Administrativo - EstagiarioDurante meu tempo na empresa, atuei em diferentes áreas estratégicas, incluindo os setores Operacional, Expedição, Porta Paletes e Perdas e Danos, exercendo funções como Líder Operacional Jr, Assistente Operacional, Auxiliar Administrativo e Estagiário.",
      achievements: [
        "Formação e capacitação de equipe multidisciplinar em boas práticas operacionais",
        "Melhoria da performance operacional com aplicação de Lean e implementação de 8 projetos Kaizen",
        "Participação direta na integração de novas tecnologias, com destaque para a implementação do SORTER na unidade de Viana",
        "Redução de mais de R$ 10 milhões em prejuízos e ocorrências logísticas",
      ],
    },
  ];

  const skills = [
    { name: "Java", category: "Backend" },
    { name: "Spring Boot", level: 85, category: "Framework" },
    { name: "Quarkus", level: 75, category: "Framework" },
    { name: "PostgreSQL", level: 80, category: "Database" },
    { name: "MySQL", level: 85, category: "Database" },
    { name: "Inteligência Artifcial", category: "IA" },
    { name: "Git e Github", level: 85, category: "Tools" },
    { name: "REST APIs", category: "Backend" },
  ];

  const certifications = [
    {
      title: "Java Completo + POO",
      issuer: "Udemy",
      date: "2024",
      credentialId: "https://shre.ink/x7p8",
    },
    {
      title: "Spring Boot Expert: JPA, REST, JWT, OAUTH2",
      issuer: "Udemy",
      date: "2025",
      credentialId: "https://shre.ink/x7pe",
    },
    {
      title: "SQL e Banco de Dados PostgreSQL, MYSql, SQL Server",
      issuer: "Udemy",
      date: "2025",
      credentialId: "https://shre.ink/x7pb",
    },
    {
      title: "Santander Tech+ BackEnd",
      issuer: "Ada Tech",
      date: "2025",
      credentialId: "AWS-54321",
    },
  ];

  const education = [
    {
      degree: "Tecnologia em Análise e Desenvolvimento de Sistemas",
      institution: "Unisales - Centro Universitário Salesiano",
      period: "02/2024 - 07/2026",
      status: "Em andamento",
    },
    {
      degree: "Bacharelado em Administração de Empresas",
      institution: "Estácio de Sá",
      period: "02/2021 - 02/2024 - Trancada",
      status: "4º período -  Motivo: Obtenção de bolsa de estudos em TADS",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900">Breno Nunes</div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {[
                { href: "#home", label: "Início" },
                { href: "#sobre", label: "Sobre" },
                { href: "#experiencia", label: "Experiência" },
                { href: "#tecnologias", label: "Tecnologias" },
                { href: "#projetos", label: "Projetos" },
                { href: "#skills", label: "Skills" },
                { href: "#educacao", label: "Educação" },
                { href: "#contato", label: "Contato" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-blue-600 font-medium"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                {[
                  { href: "#home", label: "Início" },
                  { href: "#sobre", label: "Sobre" },
                  { href: "#experiencia", label: "Experiência" },
                  { href: "#tecnologias", label: "Tecnologias" },
                  { href: "#projetos", label: "Projetos" },
                  { href: "#skills", label: "Skills" },
                  { href: "#educacao", label: "Educação" },
                  { href: "#contato", label: "Contato" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img
                src="/jpg.jpg"
                alt="Breno Nunes"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg border-4 border-white"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Breno Nunes
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 font-medium mb-8">
              Desenvolvedor Backend Java
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Desenvolvedor Backend especializado em Java e Spring Boot, com
              ampla experiência em sistemas corporativos e logísticos. Focado em
              soluções escaláveis, de alta performance e alinhadas às
              necessidades empresariais.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a
                href="#projetos"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Ver Projetos
              </a>
              <a
                href="#contato"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 font-medium"
              >
                Entrar em Contato
              </a>
              <a
                href="/Breno Nunes dos Santos.pdf"
                download="Breno Nunes dos Santos.pdf"
                className="flex items-center gap-2 bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 font-medium"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:breno@email.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

{/* Sobre Mim */}
<section id="sobre" className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
        Sobre Mim
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-start"> {}
        {}
        <div className="flex flex-col gap-6"> {}
          <img
            src="/exp.jpg"
            alt="Minha experiência em logística"
            className="rounded-lg shadow-lg w-full h-auto"
          />
          <img
            src="/unilab.jpg"
            alt="Meu projeto de desenvolvimento"
            className="rounded-lg shadow-lg w-full h-auto border-2 border-blue-100"
          />
        </div>

              <div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Sou um profissional com 7 anos de experiência em logística,
                  operações e sistemas corporativos, atualmente em transição de
                  carreira para o desenvolvimento backend. Minha jornada me
                  proporcionou uma visão única sobre como a tecnologia pode
                  transformar processos de negócios.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Ao longo da minha trajetória, desenvolvi um sólido
                  entendimento de processos de negócios e de integração entre
                  sistemas, com vivência prática em ambientes ERP, WMS e TMS.
                  Esta experiência me permite criar soluções que realmente
                  atendem às necessidades do negócio.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Minha meta é unir meu background operacional com o
                  desenvolvimento backend para criar soluções escaláveis, de
                  alta performance e que tragam valor real ao negócio.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">7+</div>
                    <div className="text-sm text-gray-600">
                      Anos de Experiência
                    </div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">3+</div>
                    <div className="text-sm text-gray-600">
                      Projetos Concluídos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência Profissional */}
      <section id="experiencia" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Experiência Profissional
          </h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-6 relative z-10"></div>
                  <div className="ml-8 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-sm text-gray-500 mt-2 md:mt-0">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {index < experiences.length - 1 && (
                  <div className="absolute left-2 top-10 w-0.5 h-full bg-gray-300 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section id="tecnologias" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Tecnologias & Ferramentas
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  icon: Coffee,
                  name: "Java",
                  color: "text-orange-600",
                  bg: "bg-orange-50",
                },
                {
                  icon: Layers,
                  name: "Spring Boot",
                  color: "text-green-600",
                  bg: "bg-green-50",
                },
                {
                  icon: Zap,
                  name: "Quarkus",
                  color: "text-red-600",
                  bg: "bg-red-50",
                },
                {
                  icon: Database,
                  name: "PostgreSQL",
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                },
                {
                  icon: Database,
                  name: "MySQL",
                  color: "text-blue-800",
                  bg: "bg-blue-50",
                },
                {
                  icon: Database,
                  name: "SQL Server",
                  color: "text-blue-900",
                  bg: "bg-blue-50",
                },
                {
                  icon: Cloud,
                  name: "DockerFile",
                  color: "text-blue-500",
                  bg: "bg-blue-50",
                },
                {
                  icon: Settings,
                  name: "Postman",
                  color: "text-purple-600",
                  bg: "bg-purple-50",
                },
                {
                  icon: GitBranch,
                  name: "Git e Github",
                  color: "text-orange-500",
                  bg: "bg-orange-50",
                },
                {
                  icon: Server,
                  name: "REST APIs",
                  color: "text-gray-600",
                  bg: "bg-gray-50",
                },
                {
                  icon: Shield,
                  name: "Spring Security",
                  color: "text-green-700",
                  bg: "bg-green-50",
                },
                {
                  icon: Terminal,
                  name: "Maven",
                  color: "text-red-700",
                  bg: "bg-red-50",
                },
                {
                  icon: Terminal,
                  name: "PlayWright",
                  color: "text-red-700",
                  bg: "bg-red-50",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center p-6 ${tech.bg} rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
                >
                  <tech.icon className={`w-12 h-12 ${tech.color} mb-4`} />
                  <span className="text-gray-700 font-medium text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Projetos em Destaque
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Habilidades Técnicas
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                    
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `100%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">
                    {skill.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Educação e Certificações */}
      <section id="educacao" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Educação & Certificações
          </h2>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Educação */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                Educação
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <h4 className="text-lg font-bold text-gray-900">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 font-medium">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span>{edu.period}</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          edu.status === "Concluído"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificações */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <Award className="w-6 h-6 text-blue-600" />
                Certificações
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <h4 className="text-lg font-bold text-gray-900">
                      {cert.title}
                    </h4>
                    <p className="text-blue-600 font-medium">{cert.issuer}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span>{cert.date}</span>
                      <span className="text-xs">ID: {cert.credentialId}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Entre em Contato
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Vamos conversar!
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Estou sempre aberto a discutir novas oportunidades, projetos
                interessantes ou apenas trocar ideias sobre tecnologia. Entre em
                contato!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">
                      morais.brenonunes@hotmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Telefone</p>
                    <p className="text-gray-600">+55 (27) 99517-2776</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Localização</p>
                    <p className="text-gray-600">Espirito Santo, ES - Brasil</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://github.com/brenonun3s"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors"
                >
                  <Github className="w-6 h-6 text-gray-600 hover:text-blue-600" />
                </a>
                <a
                  href="https://www.linkedin.com/in/brenonun3s/"
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-600" />
                </a>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Breno Nunes</h3>
            <p className="text-gray-400 mb-6">Desenvolvedor Backend Java</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/brenonun3s"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/brenonun3s/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:morais.brenonunes@hotmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2025 Breno Nunes. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default App;
