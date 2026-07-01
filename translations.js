/* ============================================================
   IOSsoft — i18n (translations)
   Supports: en, es, fr, pt
   Auto-detects from navigator.language; stored in localStorage.
   Usage: window.IOSi18n.setLang('es')
   ============================================================ */
(function(){
'use strict';

var T = {
  en: {
    /* nav */
    nav_about:    'About',
    nav_services: 'Services',
    nav_solutions:'Solutions',
    nav_impact:   'Impact',
    nav_contact:  'Contact',
    nav_cta:      'Book a consultation',
    /* hero */
    hero_tag:     '25 years · 130 countries',
    hero_h1a:     'Empowering communities',
    hero_h1b:     'through technology',
    hero_lead:    'IOSsoft partners with governments and public institutions across 130 countries to drive digital transformation, optimize processes, and build sustainable technology ecosystems that empower communities worldwide.',
    btn_consult:  'Book a consultation',
    btn_solutions:'Explore solutions',
    stat_years:   'Years of excellence',
    stat_countries:'Countries served',
    stat_solutions:'Core solutions',
    stat_pillars: 'Service pillars',
    /* about */
    about_eyebrow:'Who we are',
    about_title:  'A legacy built on trust & innovation',
    about_lede:   'IOSsoft is a global technology company dedicated to empowering governments through innovative, sustainable digital solutions.',
    about_p1:     'For over <strong>25 years</strong>, we have been at the forefront of delivering sustainable, technology-driven solutions that transform how governments serve their citizens. Our mission is to help governments worldwide optimize their processes through technology — increasing operational efficiency while reducing costs.',
    about_p2:     'Our commitment extends beyond technical implementation. We focus on creating lasting impact that empowers communities, improves livelihoods, and drives inclusive economic growth across all segments of society.',
    about_p3:     'We believe technology, when implemented thoughtfully, has the power to transform nations and uplift millions of lives. Our holistic, local-context approach ensures every solution is tailored to the unique needs, culture, and infrastructure of each region we serve.',
    val1_title:   'Transformative Innovation',
    val1_desc:    'Technology can fundamentally transform how governments serve their citizens — creating more efficient, transparent, and accessible public services.',
    val2_title:   'Bridging the Digital Divide',
    val2_desc:    'We support governments to close the gap between digital haves and have-nots, ensuring no community is left behind in the digital age.',
    val3_title:   'Capacity Building',
    val3_desc:    'Sustainable change requires empowered local teams. We prioritize training, skills development, and knowledge transfer for lasting impact.',
    val4_title:   'Strategic Partnership',
    val4_desc:    'From initial strategy through hands-on implementation and continuous support, we partner with clients at every stage of the journey.',
    /* services */
    svc_eyebrow:  'What we do',
    svc_title:    'Our core service pillars',
    svc_lede:     'A comprehensive suite of services designed to support governments through their complete digital transformation journey.',
    svc1_title:   'Technology Planning & Strategy',
    svc1_desc:    'We align technology initiatives with organizational goals, creating roadmaps built on the five key elements of inclusive digital economies.',
    svc2_title:   'Business Process Reengineering',
    svc2_desc:    'Our multilingual experts use our proprietary Clarity Compass methodology to identify inefficiencies and optimize workflows.',
    svc3_title:   'Legal Analysis & Frameworks',
    svc3_desc:    'Our internationally recognized legal team addresses data protection, intellectual property, and regulatory compliance.',
    svc4_title:   'Policy IT & Digital Transformation',
    svc4_desc:    'We guide data governance, GDPR compliance, information security, and comprehensive data lifecycle management.',
    svc5_title:   'Capacity Building & Training',
    svc5_desc:    'We develop customizable toolkits and modular learning programs delivered through our cloud-based LMS.',
    svc6_title:   'Implementation & Management',
    svc6_desc:    'Full assistance implementing and managing new methods and technologies with dedicated Customer Success Managers.',
    svc_btn:      'Book a consultation',
    /* solutions */
    sol_eyebrow:  'Software portfolio',
    sol_title:    'Purpose-built solutions',
    sol_lede:     'Each solution is designed with institutional-grade security, compliance, scalability, and citizen accessibility at its core.',
    tab_docs:     'Document & Identity',
    tab_gov:      'e-Governance',
    tab_finance:  'Finance & Trade',
    tab_business: 'Business Tools',
    /* impact */
    impact_eyebrow:'Global reach',
    impact_title: 'Our impact across the globe',
    impact_lede:  'Through our work across 130 countries, we have consistently demonstrated our commitment to transforming public service delivery.',
    imp1_title:   'Empowering Communities',
    imp1_desc:    'Building digital infrastructure that puts citizens first and ensures no one is left behind in the digital revolution.',
    imp2_title:   'Improving Livelihoods',
    imp2_desc:    'Creating systems that streamline government services and making it easier for citizens to access services and economies to grow.',
    imp3_title:   'Driving Inclusive Growth',
    imp3_desc:    'Bridging the digital divide so the benefits of technology reach all segments of society, from urban centers to remote communities.',
    imp4_title:   'Local-Context Expertise',
    imp4_desc:    'Multilingual teams who understand local regulations, culture, and infrastructure to deliver truly tailored solutions.',
    impact_tally: 'Countries worldwide · 25+ years of measurable impact',
    /* contact */
    contact_eyebrow:'Get in touch',
    contact_title:'Contact us',
    contact_hint: 'Hover a dot to see office details',
    form_first:   'First name',
    form_last:    'Last name',
    form_email:   'Email',
    form_org:     'Organization',
    form_area:    'Area of interest',
    form_msg:     'Message',
    form_ph_first:'John',
    form_ph_last: 'Smith',
    form_ph_email:'john.smith@government.gov',
    form_ph_org:  'Ministry of Digital Affairs',
    form_ph_msg:  'Tell us about your digital transformation goals…',
    form_select:  'Select a service area',
    form_submit:  'Send message',
    /* footer */
    footer_copy:  '© 2026 IOSsoft · Empowering communities worldwide for 25+ years.',
    /* modal */
    modal_hint:   'Click a dot to explore · hover for details',
    modal_funded: 'Funded by',
    modal_contract:'Contract',
    modal_nav:    '← → keys navigate · Click map to switch country',
    modal_empty:  'No projects match this filter.',
    offices_hint: 'Hover a dot to see office details · ★ Head Office',
  },

  es: {
    nav_about:    'Nosotros',
    nav_services: 'Servicios',
    nav_solutions:'Soluciones',
    nav_impact:   'Impacto',
    nav_contact:  'Contacto',
    nav_cta:      'Agendar consultoría',
    hero_tag:     '25 años · 130 países',
    hero_h1a:     'Empoderando comunidades',
    hero_h1b:     'a través de la tecnología',
    hero_lead:    'IOSsoft trabaja con gobiernos e instituciones públicas en 130 países para impulsar la transformación digital, optimizar procesos y construir ecosistemas tecnológicos sostenibles que empoderen comunidades en todo el mundo.',
    btn_consult:  'Agendar consultoría',
    btn_solutions:'Explorar soluciones',
    stat_years:   'Años de excelencia',
    stat_countries:'Países atendidos',
    stat_solutions:'Soluciones de software',
    stat_pillars: 'Pilares de servicio',
    about_eyebrow:'Quiénes somos',
    about_title:  'Un legado construido en confianza e innovación',
    about_lede:   'IOSsoft es una empresa global de tecnología dedicada a empoderar gobiernos mediante soluciones digitales innovadoras y sostenibles.',
    about_p1:     'Durante más de <strong>25 años</strong>, hemos estado a la vanguardia de soluciones sostenibles impulsadas por la tecnología que transforman la forma en que los gobiernos sirven a sus ciudadanos.',
    about_p2:     'Nuestro compromiso va más allá de la implementación técnica. Nos enfocamos en crear un impacto duradero que empodere comunidades, mejore los medios de vida e impulse el crecimiento económico inclusivo.',
    about_p3:     'Creemos que la tecnología, cuando se implementa con cuidado, tiene el poder de transformar naciones y mejorar millones de vidas. Nuestro enfoque holístico garantiza que cada solución esté adaptada a las necesidades únicas de cada región.',
    val1_title:   'Innovación Transformadora',
    val1_desc:    'La tecnología puede transformar fundamentalmente cómo los gobiernos sirven a sus ciudadanos, creando servicios públicos más eficientes, transparentes y accesibles.',
    val2_title:   'Reduciendo la Brecha Digital',
    val2_desc:    'Apoyamos a los gobiernos para cerrar la brecha entre quienes tienen y no tienen acceso digital, asegurando que ninguna comunidad quede rezagada.',
    val3_title:   'Desarrollo de Capacidades',
    val3_desc:    'El cambio sostenible requiere equipos locales empoderados. Priorizamos la formación, el desarrollo de habilidades y la transferencia de conocimiento.',
    val4_title:   'Alianza Estratégica',
    val4_desc:    'Desde la estrategia inicial hasta la implementación práctica y el soporte continuo, somos socios en cada etapa del proceso.',
    svc_eyebrow:  'Qué hacemos',
    svc_title:    'Nuestros pilares de servicio',
    svc_lede:     'Una suite integral de servicios diseñada para apoyar a los gobiernos en todo su proceso de transformación digital.',
    svc1_title:   'Planificación y Estrategia Tecnológica',
    svc1_desc:    'Alineamos las iniciativas tecnológicas con los objetivos organizacionales, creando hojas de ruta basadas en los cinco elementos clave de las economías digitales inclusivas.',
    svc2_title:   'Reingeniería de Procesos de Negocio',
    svc2_desc:    'Nuestros expertos multilingües utilizan nuestra metodología Clarity Compass para identificar ineficiencias y optimizar flujos de trabajo.',
    svc3_title:   'Análisis Legal y Marcos Normativos',
    svc3_desc:    'Nuestro equipo legal de reconocimiento internacional aborda la protección de datos, propiedad intelectual y cumplimiento normativo.',
    svc4_title:   'Política TI y Transformación Digital',
    svc4_desc:    'Guiamos la gobernanza de datos, cumplimiento GDPR, seguridad de la información y gestión integral del ciclo de vida de los datos.',
    svc5_title:   'Desarrollo de Capacidades y Formación',
    svc5_desc:    'Desarrollamos kits de herramientas personalizados y programas de aprendizaje modular entregados a través de nuestro LMS basado en la nube.',
    svc6_title:   'Implementación y Gestión',
    svc6_desc:    'Asistencia completa en la implementación y gestión de nuevas tecnologías con Gerentes de Éxito dedicados.',
    svc_btn:      'Agendar consultoría',
    sol_eyebrow:  'Portafolio de software',
    sol_title:    'Soluciones de gobierno llave en mano',
    sol_lede:     'Cada solución está diseñada con los requisitos específicos del gobierno: seguridad, cumplimiento, escalabilidad y accesibilidad ciudadana.',
    tab_docs:     'Documentos e Identidad',
    tab_gov:      'e-Gobierno',
    tab_finance:  'Finanzas y Comercio',
    tab_business: 'Herramientas Empresariales',
    impact_eyebrow:'Alcance global',
    impact_title: 'Nuestro impacto en el mundo',
    impact_lede:  'A través de nuestro trabajo en 130 países, hemos demostrado consistentemente nuestro compromiso con la transformación de los servicios públicos.',
    imp1_title:   'Empoderando Comunidades',
    imp1_desc:    'Construyendo infraestructura digital que pone a los ciudadanos primero y asegura que nadie quede rezagado en la revolución digital.',
    imp2_title:   'Mejorando el Bienestar',
    imp2_desc:    'Creando sistemas que agilizan los servicios gubernamentales y facilitan el acceso de los ciudadanos a servicios y el crecimiento económico.',
    imp3_title:   'Crecimiento Inclusivo',
    imp3_desc:    'Reduciendo la brecha digital para que los beneficios de la tecnología alcancen a todos los segmentos de la sociedad.',
    imp4_title:   'Expertise en Contexto Local',
    imp4_desc:    'Equipos multilingües que comprenden regulaciones, cultura e infraestructura local para entregar soluciones verdaderamente adaptadas.',
    impact_tally: 'Países en todo el mundo · 25+ años de impacto medible',
    contact_eyebrow:'Contáctenos',
    contact_title:'Contáctenos',
    contact_hint: 'Hover para ver detalles de la oficina',
    form_first:   'Nombre',
    form_last:    'Apellido',
    form_email:   'Correo electrónico',
    form_org:     'Organización',
    form_area:    'Área de interés',
    form_msg:     'Mensaje',
    form_ph_first:'Juan',
    form_ph_last: 'García',
    form_ph_email:'juan.garcia@gobierno.gob',
    form_ph_org:  'Ministerio de Asuntos Digitales',
    form_ph_msg:  'Cuéntenos sobre sus objetivos de transformación digital…',
    form_select:  'Seleccione un área de servicio',
    form_submit:  'Enviar mensaje',
    footer_copy:  '© 2026 IOSsoft · Empoderando gobiernos en todo el mundo por más de 25 años.',
    modal_hint:   'Haga clic en un punto para explorar · hover para detalles',
    modal_funded: 'Financiado por',
    modal_contract:'Contrato',
    modal_nav:    '← → navegar · Haga clic en el mapa para cambiar de país',
    modal_empty:  'No hay proyectos que coincidan con este filtro.',
    offices_hint: 'Hover para ver detalles de la oficina · ★ Casa Matriz',
  },

  fr: {
    nav_about:    'À propos',
    nav_services: 'Services',
    nav_solutions:'Solutions',
    nav_impact:   'Impact',
    nav_contact:  'Contact',
    nav_cta:      'Prendre rendez-vous',
    hero_tag:     '25 ans · 130 pays',
    hero_h1a:     'Autonomiser les communautés',
    hero_h1b:     'grâce à la technologie',
    hero_lead:    'IOSsoft s\'associe à des gouvernements et institutions publiques dans 130 pays pour accélérer la transformation numérique, optimiser les processus et construire des écosystèmes technologiques durables.',
    btn_consult:  'Prendre rendez-vous',
    btn_solutions:'Explorer les solutions',
    stat_years:   'Ans d\'excellence',
    stat_countries:'Pays desservis',
    stat_solutions:'Solutions logicielles',
    stat_pillars: 'Piliers de service',
    about_eyebrow:'Qui sommes-nous',
    about_title:  'Un héritage fondé sur la confiance et l\'innovation',
    about_lede:   'IOSsoft est une entreprise technologique mondiale dédiée à l\'autonomisation des gouvernements par des solutions numériques innovantes et durables.',
    about_p1:     'Depuis plus de <strong>25 ans</strong>, nous sommes à l\'avant-garde de solutions durables qui transforment la façon dont les gouvernements servent leurs citoyens.',
    about_p2:     'Notre engagement va au-delà de la mise en œuvre technique. Nous nous concentrons sur la création d\'un impact durable qui autonomise les communautés et favorise une croissance économique inclusive.',
    about_p3:     'Nous croyons que la technologie, mise en œuvre de manière réfléchie, a le pouvoir de transformer des nations et d\'améliorer des millions de vies.',
    val1_title:   'Innovation Transformatrice',
    val1_desc:    'La technologie peut transformer fondamentalement la façon dont les gouvernements servent leurs citoyens, créant des services publics plus efficaces et accessibles.',
    val2_title:   'Réduire la Fracture Numérique',
    val2_desc:    'Nous aidons les gouvernements à combler le fossé numérique, garantissant qu\'aucune communauté ne soit laissée pour compte.',
    val3_title:   'Renforcement des Capacités',
    val3_desc:    'Un changement durable nécessite des équipes locales autonomes. Nous priorisons la formation et le transfert de connaissances.',
    val4_title:   'Partenariat Stratégique',
    val4_desc:    'De la stratégie initiale à la mise en œuvre et au soutien continu, nous accompagnons nos clients à chaque étape.',
    svc_eyebrow:  'Ce que nous faisons',
    svc_title:    'Nos piliers de service',
    svc_lede:     'Une suite complète de services conçue pour accompagner les gouvernements dans leur transformation numérique.',
    svc1_title:   'Planification et Stratégie Technologique',
    svc1_desc:    'Nous alignons les initiatives technologiques sur les objectifs organisationnels, créant des feuilles de route pour des économies numériques inclusives.',
    svc2_title:   'Réingénierie des Processus',
    svc2_desc:    'Nos experts multilingues utilisent la méthodologie Clarity Compass pour identifier les inefficacités et optimiser les flux de travail.',
    svc3_title:   'Analyse Juridique et Cadres Normatifs',
    svc3_desc:    'Notre équipe juridique adresse la protection des données, la propriété intellectuelle et la conformité réglementaire.',
    svc4_title:   'Politique IT et Transformation Numérique',
    svc4_desc:    'Nous guidons la gouvernance des données, la conformité RGPD et la gestion de la sécurité de l\'information.',
    svc5_title:   'Renforcement des Capacités et Formation',
    svc5_desc:    'Nous développons des programmes d\'apprentissage modulaires livrés via notre LMS basé sur le cloud.',
    svc6_title:   'Mise en Œuvre et Gestion',
    svc6_desc:    'Assistance complète dans la mise en œuvre et la gestion des nouvelles technologies avec des gestionnaires de succès dédiés.',
    svc_btn:      'Prendre rendez-vous',
    sol_eyebrow:  'Portefeuille logiciel',
    sol_title:    'Solutions conçues pour les gouvernements',
    sol_lede:     'Chaque solution est conçue avec les exigences spécifiques des gouvernements : sécurité, conformité, évolutivité et accessibilité.',
    tab_docs:     'Documents et Identité',
    tab_gov:      'e-Gouvernement',
    tab_finance:  'Finance et Commerce',
    tab_business: 'Outils Entreprise',
    impact_eyebrow:'Portée mondiale',
    impact_title: 'Notre impact à travers le monde',
    impact_lede:  'À travers notre travail dans 130 pays, nous avons démontré notre engagement à transformer la prestation de services publics.',
    imp1_title:   'Autonomiser les Communautés',
    imp1_desc:    'Construire une infrastructure numérique qui place les citoyens au premier plan et garantit que personne n\'est laissé pour compte.',
    imp2_title:   'Améliorer les Conditions de Vie',
    imp2_desc:    'Créer des systèmes qui simplifient les services gouvernementaux et facilitent l\'accès des citoyens aux services publics.',
    imp3_title:   'Croissance Inclusive',
    imp3_desc:    'Réduire la fracture numérique pour que les bénéfices de la technologie atteignent tous les segments de la société.',
    imp4_title:   'Expertise Locale',
    imp4_desc:    'Des équipes multilingues qui comprennent les réglementations, la culture et l\'infrastructure locale.',
    impact_tally: 'Pays dans le monde · 25+ ans d\'impact mesurable',
    contact_eyebrow:'Contactez-nous',
    contact_title:'Contactez-nous',
    contact_hint: 'Survolez un point pour voir les détails',
    form_first:   'Prénom',
    form_last:    'Nom',
    form_email:   'E-mail',
    form_org:     'Organisation',
    form_area:    'Domaine d\'intérêt',
    form_msg:     'Message',
    form_ph_first:'Jean',
    form_ph_last: 'Dupont',
    form_ph_email:'jean.dupont@gouvernement.fr',
    form_ph_org:  'Ministère des Affaires Numériques',
    form_ph_msg:  'Parlez-nous de vos objectifs de transformation numérique…',
    form_select:  'Sélectionner un domaine',
    form_submit:  'Envoyer le message',
    footer_copy:  '© 2026 IOSsoft · Autonomiser les gouvernements dans le monde entier depuis 25+ ans.',
    modal_hint:   'Cliquez sur un point pour explorer · survolez pour les détails',
    modal_funded: 'Financé par',
    modal_contract:'Contrat',
    modal_nav:    '← → naviguer · Cliquez sur la carte pour changer de pays',
    modal_empty:  'Aucun projet ne correspond à ce filtre.',
    offices_hint: 'Survolez pour les détails · ★ Siège Social',
  },

  pt: {
    nav_about:    'Sobre nós',
    nav_services: 'Serviços',
    nav_solutions:'Soluções',
    nav_impact:   'Impacto',
    nav_contact:  'Contato',
    nav_cta:      'Agendar consulta',
    hero_tag:     '25 anos · 130 países',
    hero_h1a:     'Capacitando comunidades',
    hero_h1b:     'através da tecnologia',
    hero_lead:    'A IOSsoft parceria com governos e instituições públicas em 130 países para impulsionar a transformação digital, otimizar processos e construir ecossistemas tecnológicos sustentáveis.',
    btn_consult:  'Agendar consulta',
    btn_solutions:'Explorar soluções',
    stat_years:   'Anos de excelência',
    stat_countries:'Países atendidos',
    stat_solutions:'Soluções de software',
    stat_pillars: 'Pilares de serviço',
    about_eyebrow:'Quem somos',
    about_title:  'Um legado construído na confiança e inovação',
    about_lede:   'A IOSsoft é uma empresa global de tecnologia dedicada a capacitar governos por meio de soluções digitais inovadoras e sustentáveis.',
    about_p1:     'Por mais de <strong>25 anos</strong>, estamos na vanguarda da entrega de soluções sustentáveis orientadas pela tecnologia que transformam como os governos servem aos seus cidadãos.',
    about_p2:     'Nosso compromisso vai além da implementação técnica. Focamos em criar impacto duradouro que capacite comunidades e impulsione o crescimento econômico inclusivo.',
    about_p3:     'Acreditamos que a tecnologia, quando implementada de forma cuidadosa, tem o poder de transformar nações e melhorar milhões de vidas.',
    val1_title:   'Inovação Transformadora',
    val1_desc:    'A tecnologia pode transformar fundamentalmente como os governos servem aos seus cidadãos, criando serviços públicos mais eficientes e acessíveis.',
    val2_title:   'Superando a Exclusão Digital',
    val2_desc:    'Apoiamos os governos para fechar a lacuna digital, garantindo que nenhuma comunidade fique para trás.',
    val3_title:   'Desenvolvimento de Capacidades',
    val3_desc:    'A mudança sustentável requer equipes locais capacitadas. Priorizamos treinamento e transferência de conhecimento.',
    val4_title:   'Parceria Estratégica',
    val4_desc:    'Da estratégia inicial à implementação e suporte contínuo, somos parceiros em cada etapa da jornada.',
    svc_eyebrow:  'O que fazemos',
    svc_title:    'Nossos pilares de serviço',
    svc_lede:     'Uma suite abrangente de serviços projetada para apoiar governos em sua jornada completa de transformação digital.',
    svc1_title:   'Planejamento e Estratégia Tecnológica',
    svc1_desc:    'Alinhamos iniciativas tecnológicas com objetivos organizacionais, criando roteiros baseados nos cinco elementos das economias digitais inclusivas.',
    svc2_title:   'Reengenharia de Processos de Negócio',
    svc2_desc:    'Nossos especialistas multilíngues usam nossa metodologia Clarity Compass para identificar ineficiências e otimizar fluxos de trabalho.',
    svc3_title:   'Análise Jurídica e Marcos Regulatórios',
    svc3_desc:    'Nossa equipe jurídica internacional aborda proteção de dados, propriedade intelectual e conformidade regulatória.',
    svc4_title:   'Política de TI e Transformação Digital',
    svc4_desc:    'Orientamos governança de dados, conformidade LGPD/GDPR, segurança da informação e gestão do ciclo de vida dos dados.',
    svc5_title:   'Desenvolvimento de Capacidades e Treinamento',
    svc5_desc:    'Desenvolvemos programas de aprendizado modular entregues por nosso LMS baseado em nuvem.',
    svc6_title:   'Implementação e Gestão',
    svc6_desc:    'Assistência completa na implementação e gestão de novas tecnologias com Gerentes de Sucesso dedicados.',
    svc_btn:      'Agendar consulta',
    sol_eyebrow:  'Portfólio de software',
    sol_title:    'Soluções construídas para governos',
    sol_lede:     'Cada solução é projetada com requisitos específicos do governo: segurança, conformidade, escalabilidade e acessibilidade.',
    tab_docs:     'Documentos e Identidade',
    tab_gov:      'e-Governo',
    tab_finance:  'Finanças e Comércio',
    tab_business: 'Ferramentas Empresariais',
    impact_eyebrow:'Alcance global',
    impact_title: 'Nosso impacto pelo mundo',
    impact_lede:  'Por meio de nosso trabalho em 130 países, demonstramos consistentemente nosso compromisso com a transformação dos serviços públicos.',
    imp1_title:   'Capacitando Comunidades',
    imp1_desc:    'Construindo infraestrutura digital que coloca os cidadãos em primeiro lugar e garante que ninguém fique para trás.',
    imp2_title:   'Melhorando o Bem-Estar',
    imp2_desc:    'Criando sistemas que simplificam os serviços governamentais e facilitam o acesso dos cidadãos a serviços e o crescimento econômico.',
    imp3_title:   'Crescimento Inclusivo',
    imp3_desc:    'Superando a exclusão digital para que os benefícios da tecnologia alcancem todos os segmentos da sociedade.',
    imp4_title:   'Expertise no Contexto Local',
    imp4_desc:    'Equipes multilíngues que entendem regulamentos, cultura e infraestrutura local para entregar soluções verdadeiramente adaptadas.',
    impact_tally: 'Países em todo o mundo · 25+ anos de impacto mensurável',
    contact_eyebrow:'Fale conosco',
    contact_title:'Contato',
    contact_hint: 'Passe o mouse sobre um ponto para ver detalhes',
    form_first:   'Nome',
    form_last:    'Sobrenome',
    form_email:   'E-mail',
    form_org:     'Organização',
    form_area:    'Área de interesse',
    form_msg:     'Mensagem',
    form_ph_first:'João',
    form_ph_last: 'Silva',
    form_ph_email:'joao.silva@governo.gov.br',
    form_ph_org:  'Ministério dos Assuntos Digitais',
    form_ph_msg:  'Conte-nos sobre seus objetivos de transformação digital…',
    form_select:  'Selecione uma área de serviço',
    form_submit:  'Enviar mensagem',
    footer_copy:  '© 2026 IOSsoft · Capacitando governos em todo o mundo há 25+ anos.',
    modal_hint:   'Clique em um ponto para explorar · passe o mouse para detalhes',
    modal_funded: 'Financiado por',
    modal_contract:'Contrato',
    modal_nav:    '← → navegar · Clique no mapa para mudar de país',
    modal_empty:  'Nenhum projeto corresponde a este filtro.',
    offices_hint: 'Passe o mouse para ver detalhes · ★ Sede Principal',
  }
};

var FLAGS = { en:'\uD83C\uDDFA\uD83C\uDDF8', es:'\uD83C\uDDEA\uD83C\uDDF8', fr:'\uD83C\uDDEB\uD83C\uDDF7', pt:'\uD83C\uDDE7\uD83C\uDDF7' };
var LABELS = { en:'English', es:'Español', fr:'Français', pt:'Português' };
// Language → country code auto-detection mappings
var LANG_MAP = {
  es:['es','es-419','es-ar','es-mx','es-co','es-pe','es-ve','es-cl','es-ec','es-bo','es-py','es-uy','es-cr','es-pa','es-do','es-cu','es-gt','es-hn','es-sv','es-ni'],
  fr:['fr','fr-fr','fr-be','fr-ch','fr-ca','fr-sn','fr-ci'],
  pt:['pt','pt-br','pt-pt','pt-ao','pt-mz']
};

var currentLang = 'en';

function detect(){
  var nav = (navigator.language||'en').toLowerCase();
  var base = nav.slice(0,2);
  for(var code in LANG_MAP){
    var list = LANG_MAP[code];
    for(var i=0;i<list.length;i++){ if(nav===list[i]||base===list[i].slice(0,2)){ return code; } }
  }
  return 'en';
}

function t(key){ return (T[currentLang]&&T[currentLang][key])||T.en[key]||key; }

var SELECTORS = {
  nav_about:    ['a[href="#about"]'],
  nav_services: ['a[href="#services"]'],
  nav_solutions:['a[href="#solutions"]'],
  nav_impact:   ['a[href="#impact"][data-hot]'],
  nav_contact:  ['a[href="#contact"][data-hot]'],
  nav_cta:      ['.nav-cta'],
  hero_tag:     ['.hero-tag'],
  hero_h1a:     ['.hero h1'],
  hero_h1b:     ['.hero h1 .accentline'],
  hero_lead:    ['.hero-lead'],
  btn_consult:  ['.hero-actions .btn-primary'],
  btn_solutions:['.hero-actions .btn-ghost'],
  stat_years:   ['.stat:nth-child(1) .l'],
  stat_countries:['.stat:nth-child(2) .l'],
  stat_solutions:['.stat:nth-child(3) .l'],
  stat_pillars: ['.stat:nth-child(4) .l'],
  about_eyebrow:['#about .eyebrow'],
  about_title:  ['#about .h-section'],
  about_lede:   ['#about .lede'],
  svc_eyebrow:  ['#services .eyebrow'],
  svc_title:    ['#services .h-section'],
  svc_lede:     ['#services .lede'],
  sol_eyebrow:  ['#solutions .eyebrow'],
  sol_title:    ['#solutions .h-section'],
  sol_lede:     ['#solutions .lede'],
  impact_eyebrow:['#impact .eyebrow'],
  impact_title: ['#impact .h-section'],
  impact_lede:  ['#impact .lede'],
  impact_tally: ['.impact-tally-below .l'],
  imp1_title:   ['#impact .point:nth-child(1) h3'],
  imp1_desc:    ['#impact .point:nth-child(1) p'],
  imp2_title:   ['#impact .point:nth-child(2) h3'],
  imp2_desc:    ['#impact .point:nth-child(2) p'],
  imp3_title:   ['#impact .point:nth-child(3) h3'],
  imp3_desc:    ['#impact .point:nth-child(3) p'],
  imp4_title:   ['#impact .point:nth-child(4) h3'],
  imp4_desc:    ['#impact .point:nth-child(4) p'],
  contact_eyebrow:['#contact .eyebrow'],
  contact_title:['#contact .contact-col-hdr h2'],
  form_submit:  ['#contactForm [type="submit"]'],
  footer_copy:  ['.footer-copy'],
};

function applyLang(code){
  if(!T[code]) code='en';
  currentLang=code;
  localStorage.setItem('iossoft_lang',code);
  for(var key in SELECTORS){
    var sels=SELECTORS[key], val=t(key);
    for(var i=0;i<sels.length;i++){
      var nodes=document.querySelectorAll(sels[i]);
      nodes.forEach(function(el){
        if(key==='hero_h1a'){ var sp=el.querySelector('.accentline'); if(sp) el.childNodes[0].textContent=val; }
        else if(key==='hero_h1b'){ /* handled by hero_h1a */ }
        else if(key==='hero_tag'){ var p=el.querySelector('.pulse'); el.textContent=val; if(p){ var s=document.createElement('span');s.className='pulse';el.prepend(s);} }
        else if(key.indexOf('_p')>-1||key==='about_p1'||key==='about_p2'||key==='about_p3'){ el.innerHTML=val; }
        else { el.textContent=val; }
      });
    }
  }
  // form labels and placeholders
  var form=document.getElementById('contactForm');
  if(form){
    var labels=form.querySelectorAll('.flabel');
    var lkeys=['form_first','form_last','form_email','form_org','form_area','form_msg'];
    labels.forEach(function(lb,i){ if(lkeys[i]) lb.textContent=t(lkeys[i]); });
    var fields=form.querySelectorAll('input.field,select.field,textarea.field');
    var pkeys=['form_ph_first','form_ph_last','form_ph_email','form_ph_org','','form_ph_msg'];
    fields.forEach(function(f,i){ if(pkeys[i]) f.placeholder=t(pkeys[i]); });
    var sel=form.querySelector('select.field option:first-child');
    if(sel) sel.textContent=t('form_select');
  }
  // nav hero h1 special handling
  var accentLine=document.querySelector('.hero h1 .accentline');
  if(accentLine) accentLine.textContent=t('hero_h1b');
  var h1=document.querySelector('.hero h1');
  if(h1){
    var first=h1.firstChild;
    if(first&&first.nodeType===3) first.textContent=t('hero_h1a')+'\n';
  }
  // nav btn text
  var navCta=document.querySelector('.nav-cta');
  if(navCta) navCta.textContent=t('nav_cta');
  // hero btns
  var heroBtn=document.querySelector('.hero-actions .btn-primary');
  if(heroBtn) heroBtn.innerHTML=t('btn_consult')+' <span class="arr">\u2192</span>';
  var heroGhost=document.querySelector('.hero-actions .btn-ghost');
  if(heroGhost) heroGhost.textContent=t('btn_solutions');
  // service btn text
  document.querySelectorAll('.svc-cal-btn').forEach(function(b){
    var svg=b.querySelector('svg'); b.textContent=t('svc_btn'); if(svg) b.prepend(svg);
  });
  // refresh project map modal if open
  if(window.refreshModalLang) window.refreshModalLang();
  // update footer year
  var fy=document.getElementById('footer-year'); if(fy) fy.textContent=new Date().getFullYear();
  // update lang switcher UI
  var switcher=document.getElementById('lang-switcher');
  if(switcher){
    switcher.querySelector('.ls-flag').textContent=FLAGS[code];
    switcher.querySelector('.ls-code').textContent=code.toUpperCase();
    switcher.querySelectorAll('.ls-opt').forEach(function(opt){
      opt.classList.toggle('active', opt.dataset.lang===code);
    });
  }
  // about paragraphs
  var aboutParagraphs=document.querySelectorAll('.about-text p');
  var pkeys2=['about_p1','about_p2','about_p3'];
  aboutParagraphs.forEach(function(p,i){ if(pkeys2[i]) p.innerHTML=t(pkeys2[i]); });
  // value cards
  var valCards=document.querySelectorAll('.value');
  var valKeys=[['val1_title','val1_desc'],['val2_title','val2_desc'],['val3_title','val3_desc'],['val4_title','val4_desc']];
  valCards.forEach(function(v,i){
    if(!valKeys[i]) return;
    var h=v.querySelector('h3'); var p=v.querySelector('p');
    if(h) h.textContent=t(valKeys[i][0]);
    if(p) p.textContent=t(valKeys[i][1]);
  });
  // tabs
  var tabs=document.querySelectorAll('.tab-btn');
  var tabKeys=['tab_docs','tab_gov','tab_finance','tab_business'];
  tabs.forEach(function(tab,i){ if(tabKeys[i]) tab.innerHTML=t(tabKeys[i]); });
}

function buildSwitcher(){
  var wrap=document.createElement('div');
  wrap.id='lang-switcher';
  wrap.innerHTML='<button class="ls-toggle"><span class="ls-flag">'+FLAGS[currentLang]+'</span><span class="ls-code">'+currentLang.toUpperCase()+'</span><span class="ls-arrow">▾</span></button><div class="ls-drop">'+
    Object.keys(T).map(function(code){
      return '<button class="ls-opt'+(code===currentLang?' active':'')+'" data-lang="'+code+'">'+FLAGS[code]+' '+LABELS[code]+'</button>';
    }).join('')+'</div>';
  // insert before nav-cta
  var navRight=document.querySelector('.nav-right');
  if(navRight) navRight.appendChild(wrap);
  // toggle
  wrap.querySelector('.ls-toggle').addEventListener('click',function(e){
    e.stopPropagation(); wrap.classList.toggle('open');
  });
  document.addEventListener('click',function(){ wrap.classList.remove('open'); });
  wrap.querySelectorAll('.ls-opt').forEach(function(btn){
    btn.addEventListener('click',function(e){
      e.stopPropagation(); applyLang(btn.dataset.lang); wrap.classList.remove('open');
    });
  });
}

function init(){
  var stored=localStorage.getItem('iossoft_lang');
  var lang=stored||(detect());
  if(!T[lang]) lang='en';
  buildSwitcher();
  if(lang!=='en') applyLang(lang);
  else applyLang('en'); // still update switcher UI
}

if(document.readyState!=='loading') init();
else document.addEventListener('DOMContentLoaded',init);

window.IOSi18n = { setLang: applyLang, t: t, current: function(){ return currentLang; } };
})();
