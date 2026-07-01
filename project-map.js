(function(){
'use strict';

/* ---------- Country coordinates [lat, lng] ---------- */
var CC={
  'Afghanistan':[33,65],'Albania':[41,20],'Angola':[-11.2,17.9],
  'Antigua & Barbuda':[17.1,-61.8],'Azerbaijan':[40.1,47.6],
  'Bahamas':[25,-76],'Bangladesh':[23.7,90.4],'Barbados':[13.2,-59.5],
  'Belize':[17.2,-88.5],'Benin':[9.3,2.3],'Bolivia':[-16.3,-63.6],
  'Bosnia and Herzegovina':[43.9,17.7],'Brazil':[-14.2,-51.9],
  'Brunei Darussalam':[4.5,114.7],'Bulgaria':[42.7,25.5],
  'Burkina Faso':[12.4,-1.6],'Cambodia':[12.6,104.9],
  'Cameroon':[7.4,12.4],'Canada':[56.1,-106.3],'Cape Verde':[16,-24],
  'Chile':[-35.7,-71.5],'China':[35.9,104.2],'Colombia':[4.1,-72.9],
  'Comoros Islands':[-11.6,43.3],'Congo, Democratic Republic':[-4,21.8],
  'Cook Islands':[-21.2,-159.8],'Costa Rica':[9.7,-83.8],
  "Cote d'Ivoire":[7.5,-5.5],"Côte d'Ivoire":[7.5,-5.5],
  'Djibouti':[11.8,42.6],'Dominican Republic':[18.7,-70.2],
  'Ecuador':[-1.8,-78.2],'Egypt':[26,29.9],'El Salvador':[13.8,-88.9],
  'Ethiopia':[9.1,40.5],'Fiji':[-17.7,178],'Gambia':[13.4,-15.3],
  'Georgia':[42.3,43.4],'Greece':[39.1,21.8],'Guyana':[4.9,-58.9],
  'Haiti':[18.9,-72.3],'Honduras':[15.2,-86.2],'Hong Kong':[22.3,114.2],
  'Hungary':[47.2,19.5],'India':[20.6,78.9],'Indonesia':[-0.8,113.9],
  'Iraq':[33.2,43.7],'Jamaica':[18.1,-77.3],'Jordan':[30.6,36.5],
  'Kazakhstan':[48,66.9],'Kenya':[-0.1,37.9],
  'Kingdom of Bahrain':[26.1,50.5],'Kiribati':[1.9,-157.4],
  'Kosovo':[42.6,20.9],'Kuwait':[29.3,47.5],'Kyrgyzstan':[41.2,74.7],
  'Laos':[19.9,102.5],'Lebanon':[33.9,35.9],'Lesotho':[-29.6,28.2],
  'Macedonia':[41.6,21.7],'Madagascar':[-18.8,46.9],'Malawi':[-13.3,34.3],
  'Maldives':[3.2,73.2],'Mali':[17.6,-4],'Moldova':[47.4,28.4],
  'Mongolia':[46.9,103.8],'Montenegro':[42.7,19.4],'Morocco':[31.8,-7.1],
  'Mozambique':[-18.7,35.5],'Myanmar':[21.9,95.9],'Nepal':[28.4,84.1],
  'Nicaragua':[12.9,-85.2],'Nigeria':[9.1,8.7],'Pakistan':[30.4,69.3],
  'Palau':[7.5,134.6],'Palestine':[31.9,35.2],'Peru':[-9.2,-75],
  'Philippines':[12.9,121.8],'Puerto Rico':[18.2,-66.6],'Qatar':[25.3,51.2],
  'State of Qatar':[25.3,51.2],'Republic of Guinea':[11,-10.9],
  'Romania':[45.9,24.9],'Russia':[61.5,90],'Rwanda':[-1.9,29.9],
  'Saint Lucia':[13.9,-60.9],'Saint Vincent and The Grenadines':[12.9,-61.2],
  'Samoa':[-13.8,-172.1],'Saudi Arabia':[23.9,45.1],'Senegal':[14.5,-14.5],
  'Serbia':[44,21],'Seychelles':[-4.7,55.5],'Sierra Leone':[8.5,-11.8],
  'Sint Maarten':[18,-63.1],'Slovakia':[48.7,19.7],
  'Solomon Islands':[-9.6,160.2],'Somalia':[5.2,46.2],
  'South Africa':[-30.6,22.9],'Spain':[40.5,-3.7],'Sri Lanka':[7.9,80.8],
  'Sudan':[12.9,30.2],'Suriname':[3.9,-56],'Tanzania':[-6.4,34.9],
  'Togo':[8.6,0.8],'Trinidad and Tobago':[10.7,-61.2],'Tunisia':[33.9,9.5],
  'Tuvalu':[-8,179.2],'Ukraine':[48.4,31.2],
  'United Arab Emirates':[23.4,53.8],'United States':[37.1,-95.7],
  'Vanuatu':[-15.4,166.9],'Vietnam':[14.1,108.3],
  'Yemen':[15.6,48.5],'Zambia':[-13.1,27.8],'Zimbabwe':[-20,29.2]
};

/* ---------- IOS Office locations ---------- */
var OFFICES=[
  {name:'Miami, FL — Head Office',city:'Miami',addr:'311 Mendoza Ave, Coral Gables FL 33134',phone:'+1 305 648 2877',lat:25.7,lng:-80.3,hq:true},
  {name:'Washington D.C.',city:'Washington D.C.',addr:'4545 Connecticut Ave NW, DC 20008',phone:'+1 305 648 2877',lat:38.9,lng:-77.0},
  {name:'Mexico City',city:'Mexico',addr:'Privada de la Cumbre, Bosque Real',phone:'+52 55 3267 3163',lat:19.4,lng:-99.1},
  {name:'San José',city:'Costa Rica',addr:'Del Fongoncito 25m Oeste, 100 Sur Rohrmoser',phone:'+506 2290 3187',lat:9.9,lng:-84.1},
  {name:'Chorrera',city:'Panama',addr:'Panama',phone:'',lat:8.9,lng:-79.8},
  {name:'Santa Cruz',city:'Bolivia',addr:'Bolivia',phone:'',lat:-17.8,lng:-63.2},
  {name:'São Paulo',city:'Brazil',addr:'Brazil',phone:'',lat:-23.5,lng:-46.6},
  {name:'Brussels',city:'Belgium',addr:'Belgium',phone:'',lat:50.8,lng:4.4},
  {name:'Paris',city:'France',addr:'France',phone:'',lat:48.9,lng:2.3},
  {name:'Barcelona',city:'Spain',addr:'Spain',phone:'',lat:41.4,lng:2.2},
  {name:'Chisinau',city:'Moldova',addr:'Moldova',phone:'',lat:47.0,lng:28.8},
  {name:'Sofia',city:'Bulgaria',addr:'Bulgaria',phone:'',lat:42.7,lng:23.3},
  {name:'Amman',city:'Jordan',addr:'Jordan',phone:'',lat:31.9,lng:35.9},
  {name:'Nairobi',city:'Kenya',addr:'Kenya',phone:'',lat:-1.3,lng:36.8},
  {name:'Maseru',city:'Lesotho',addr:'Lesotho',phone:'',lat:-29.3,lng:27.5},
  {name:'Cape Town',city:'South Africa',addr:'South Africa',phone:'',lat:-33.9,lng:18.4},
  {name:'Sarajevo',city:'Bosnia & Herzegovina',addr:'Podgaj 11, 71000 Sarajevo',phone:'+387 61 546 224',lat:43.8,lng:18.4},
  {name:'Tbilisi',city:'Georgia',addr:'11 Chitadze St, Tbilisi 0108',phone:'+995 577 72 1050',lat:41.7,lng:44.8},
  {name:'Hanoi',city:'Vietnam',addr:'Vietnam',phone:'',lat:21.0,lng:105.9},
  {name:'Queensland',city:'Australia',addr:'Australia',phone:'',lat:-27.5,lng:153.0}
];

/* ---------- Area → images (multiple per sector for variety) ---------- */
var AREA_PHOTOS={
  'Aviation':['photo-1436491865332-7a61a109cc05','photo-1464037866556-6812c9d1c72e','photo-1559297434-fae8a1916a79','photo-1483450388369-9ed95738483c','photo-1530521954074-e64bca3bd44a'],
  'Transport':['photo-1504711434969-e33886168f5c','photo-1460925895917-afdab827c52f','photo-1558618666-fcd25c85cd64','photo-1476973422084-e0fa66ff9456'],
  'Infrastructure':['photo-1504711434969-e33886168f5c','photo-1486325212027-8081e485255e','photo-1581092918056-0c4c3acd3789','photo-1565538810643-b5bdb714032a'],
  'Agriculture':['photo-1500937386664-56d1dfef3854','photo-1416879595882-3373a0480b5b','photo-1464226184884-fa280b87c399','photo-1543257580-7269da773bf5','photo-1523741543316-beb7fc7023d8'],
  'Fisheries':['photo-1495578942200-c5f5b1b4b5b1','photo-1559825481-12a05cc00344','photo-1534043464124-3be532f06263'],
  'Social':['photo-1531206715517-5c0ba140b2b8','photo-1488521787991-ed7bbaae773c','photo-1529390079861-591de354faf5','photo-1509099836639-18ba1795216d','photo-1544027993-37dbfe43562a'],
  'ICT':['photo-1516321318423-f06f85e504b3','photo-1518770660439-4636190af475','photo-1451187580459-43490279c0fa','photo-1488590528505-98d2b5aba04b','photo-1573164713714-d95e436ab8d6'],
  'Information':['photo-1516321318423-f06f85e504b3','photo-1573164713714-d95e436ab8d6','photo-1543286386-2e659306cd6c'],
  'Finance':['photo-1451187580459-43490279c0fa','photo-1579621970588-a35d0e7ab9b6','photo-1611974789855-9c2a0a7236a3','photo-1560472354-b33ff0c44a43'],
  'Trade':['photo-1486325212027-8081e485255e','photo-1494412574643-ff11b0a5c1c3','photo-1542601906990-b4d3fb778b09','photo-1578575437130-527eed3abbec'],
  'Investment':['photo-1486325212027-8081e485255e','photo-1553729459-efe14ef6055d','photo-1611974789855-9c2a0a7236a3'],
  'Private':['photo-1486325212027-8081e485255e','photo-1560472354-b33ff0c44a43','photo-1542744173-8e7e53415bb0'],
  'Public':['photo-1560472354-b33ff0c44a43','photo-1531206715517-5c0ba140b2b8','photo-1529390079861-591de354faf5'],
  'Governance':['photo-1529390079861-591de354faf5','photo-1531206715517-5c0ba140b2b8','photo-1454165804606-c3d57bc86b40'],
  'default':['photo-1451187580459-43490279c0fa','photo-1518770660439-4636190af475','photo-1558618666-fcd25c85cd64','photo-1573164713714-d95e436ab8d6']
};

/* ---------- Area → action descriptions ---------- */
var AREA_DESCS={
  'Aviation':[
    'Analyzed and evaluated regulatory frameworks to modernize aviation operations and improve air traffic management efficiency.',
    'Designed and implemented airport management systems covering concessions, ground handling, and passenger services.',
    'Developed aviation safety compliance frameworks aligned with ICAO standards for national civil aviation authorities.',
    'Streamlined airport permit and licensing processes, reducing administrative burden for airlines and operators.',
    'Built integrated systems for aviation sector planning, connecting regulatory, operational, and commercial functions.'
  ],
  'Trade':[
    'Designed and deployed a Single Window platform to streamline import/export procedures and reduce cargo clearance times.',
    'Analyzed customs procedures and implemented risk management systems to improve border control efficiency.',
    'Developed an investment promotion portal to attract foreign direct investment and simplify business entry processes.',
    'Built e-commerce regulatory frameworks enabling secure digital trade and cross-border transaction management.',
    'Implemented procurement modernization systems covering e-tendering, e-evaluation, and contract management.',
    'Streamlined business registration processes, reducing incorporation time from weeks to hours for new investors.'
  ],
  'Governance':[
    'Delivered public sector governance reform through institutional capacity building and process reengineering.',
    'Designed government performance management frameworks to improve public service delivery accountability.',
    'Implemented e-government platforms connecting multiple agencies through a unified service portal.',
    'Analyzed and restructured public procurement systems to increase transparency and reduce corruption risks.',
    'Developed open data initiatives to improve government transparency and citizen engagement.'
  ],
  'Agriculture':[
    'Strengthened agricultural sector management systems covering land use, irrigation, and crop monitoring.',
    'Designed rural development frameworks to improve smallholder farmer productivity and market access.',
    'Implemented food safety and agricultural standards compliance systems for export market access.',
    'Built agricultural data platforms to support evidence-based policy making and resource allocation.',
    'Developed farmer registry systems linking producers to government subsidy and support programs.'
  ],
  'Social':[
    'Implemented social protection management systems to improve targeting and delivery of welfare programs.',
    'Designed community development frameworks to strengthen local governance and citizen participation.',
    'Built integrated social services platforms connecting health, education, and welfare agencies.',
    'Developed beneficiary management systems to reduce fraud and improve program efficiency.',
    'Strengthened education sector management through digital platforms for enrollment and curriculum tracking.'
  ],
  'ICT':[
    'Designed national ICT infrastructure strategies to bridge the digital divide and expand internet access.',
    'Built e-government platforms enabling citizens to access public services through a single digital interface.',
    'Implemented cybersecurity frameworks to protect critical government data and digital infrastructure.',
    'Developed digital identity systems supporting secure access to government services and financial inclusion.',
    'Deployed cloud migration strategies for government agencies to improve service resilience and reduce costs.'
  ],
  'Finance':[
    'Modernized public financial management systems to improve budget execution, reporting, and fiscal transparency.',
    'Implemented integrated financial management information systems covering planning, budgeting, and accounting.',
    'Designed revenue administration reforms to improve tax compliance and reduce collection costs.',
    'Built treasury management systems to optimize government cash flow and debt management.',
    'Developed public investment management frameworks to improve capital project selection and oversight.'
  ],
  'Private':[
    'Supported private sector development through regulatory reform and investment climate improvement programs.',
    'Designed business environment reforms to reduce red tape and improve ease of doing business rankings.',
    'Implemented SME support platforms connecting small businesses to finance, markets, and technical assistance.',
    'Built public-private partnership frameworks to mobilize private investment in public infrastructure.',
    'Developed entrepreneurship ecosystems through incubation, mentoring, and access to capital programs.'
  ],
  'Infrastructure':[
    'Designed infrastructure development programs covering roads, utilities, and public facilities.',
    'Implemented urban planning management systems for permits, zoning, and land use regulation.',
    'Built construction permit systems digitizing the entire approval process from application to inspection.',
    'Developed integrated transport management frameworks for ports, airports, and logistics corridors.',
    'Streamlined infrastructure procurement processes to improve project delivery timelines and quality.'
  ],
  'default':[
    'Analyzed institutional requirements and designed tailored solutions to improve government service delivery.',
    'Developed capacity building programs to strengthen local expertise in digital transformation management.',
    'Implemented technology solutions aligned with international best practices and local context requirements.',
    'Designed strategic frameworks to guide government modernization and digital economy development.',
    'Built institutional capacity through training, knowledge transfer, and organizational development programs.'
  ]
};

/* ---------- Area descriptions — Spanish ---------- */
var AREA_DESCS_ES={
  'Aviation':['Analizó y evaluó marcos regulatorios para modernizar las operaciones de aviación y mejorar la gestión del tráfico aéreo.','Diseñó e implementó sistemas de gestión aeroportuaria cubriendo concesiones, manejo en tierra y servicios a pasajeros.','Desarrolló marcos de cumplimiento de seguridad aérea alineados con los estándares OACI para autoridades nacionales.','Simplificó los procesos de permisos y licencias aeroportuarias, reduciendo la carga administrativa para aerolíneas y operadores.','Construyó sistemas integrados de planificación del sector de aviación conectando funciones regulatorias, operativas y comerciales.'],
  'Trade':['Diseñó e implementó una plataforma de Ventanilla Única para agilizar los procedimientos de importación/exportación y reducir los tiempos de despacho.','Analizó procedimientos aduaneros e implementó sistemas de gestión de riesgos para mejorar el control fronterizo.','Desarrolló un portal de promoción de inversiones para atraer inversión extranjera directa y simplificar los procesos de entrada empresarial.','Construyó marcos regulatorios de comercio electrónico que permiten transacciones digitales seguras y gestión de comercio transfronterizo.','Implementó sistemas de modernización de adquisiciones cubriendo licitaciones, evaluación y gestión de contratos.','Agilizó los procesos de registro empresarial, reduciendo el tiempo de constitución de semanas a horas.'],
  'Governance':['Brindó reforma de gobernanza del sector público mediante fortalecimiento institucional y reingeniería de procesos.','Diseñó marcos de gestión del desempeño gubernamental para mejorar la rendición de cuentas en la prestación de servicios.','Implementó plataformas de gobierno electrónico que conectan múltiples agencias a través de un portal de servicios unificado.','Analizó y reestructuró sistemas de adquisiciones públicas para aumentar la transparencia y reducir riesgos de corrupción.','Desarrolló iniciativas de datos abiertos para mejorar la transparencia gubernamental y la participación ciudadana.'],
  'Agriculture':['Fortaleció los sistemas de gestión del sector agrícola cubriendo uso del suelo, riego y monitoreo de cultivos.','Diseñó marcos de desarrollo rural para mejorar la productividad de pequeños agricultores y el acceso a mercados.','Implementó sistemas de cumplimiento de normas de inocuidad alimentaria y estándares agrícolas para acceso a mercados de exportación.','Construyó plataformas de datos agrícolas para apoyar la formulación de políticas basada en evidencia.','Desarrolló sistemas de registro de agricultores vinculando productores a programas de subsidios y apoyo gubernamental.'],
  'Social':['Implementó sistemas de gestión de protección social para mejorar la focalización y entrega de programas de bienestar.','Diseñó marcos de desarrollo comunitario para fortalecer la gobernanza local y la participación ciudadana.','Construyó plataformas integradas de servicios sociales conectando agencias de salud, educación y bienestar.','Desarrolló sistemas de gestión de beneficiarios para reducir el fraude y mejorar la eficiencia de los programas.','Fortaleció la gestión del sector educativo mediante plataformas digitales para matrícula y seguimiento curricular.'],
  'ICT':['Diseñó estrategias nacionales de infraestructura TIC para reducir la brecha digital y ampliar el acceso a internet.','Construyó plataformas de gobierno electrónico que permiten a los ciudadanos acceder a servicios públicos en una interfaz digital única.','Implementó marcos de ciberseguridad para proteger datos gubernamentales críticos e infraestructura digital.','Desarrolló sistemas de identidad digital que apoyan el acceso seguro a servicios gubernamentales e inclusión financiera.','Desplegó estrategias de migración a la nube para mejorar la resiliencia y reducir costos.'],
  'Finance':['Modernizó sistemas de gestión financiera pública para mejorar la ejecución presupuestaria y la transparencia fiscal.','Implementó sistemas integrados de información de gestión financiera cubriendo planificación, presupuestación y contabilidad.','Diseñó reformas de administración tributaria para mejorar el cumplimiento fiscal y reducir los costos de recaudación.','Construyó sistemas de gestión de tesorería para optimizar el flujo de caja y la gestión de deuda gubernamental.','Desarrolló marcos de gestión de inversión pública para mejorar la selección y supervisión de proyectos de capital.'],
  'Private':['Apoyó el desarrollo del sector privado mediante reformas regulatorias y programas de mejora del clima de inversión.','Diseñó reformas al entorno empresarial para reducir la burocracia y mejorar el ranking de facilidad para hacer negocios.','Implementó plataformas de apoyo a PYMES conectando pequeñas empresas a financiamiento, mercados y asistencia técnica.','Construyó marcos de asociaciones público-privadas para movilizar inversión privada en infraestructura pública.','Desarrolló ecosistemas de emprendimiento mediante incubación, mentoría y programas de acceso al capital.'],
  'Infrastructure':['Diseñó programas de desarrollo de infraestructura cubriendo carreteras, servicios públicos e instalaciones.','Implementó sistemas de gestión de planificación urbana para permisos, zonificación y regulación del uso del suelo.','Construyó sistemas de permisos de construcción digitalizando el proceso completo de aprobación desde la solicitud hasta la inspección.','Desarrolló marcos integrados de gestión del transporte para puertos, aeropuertos y corredores logísticos.','Agilizó los procesos de adquisición de infraestructura para mejorar los plazos de entrega y la calidad de los proyectos.'],
  'default':['Analizó los requisitos institucionales y diseñó soluciones a medida para mejorar la prestación de servicios gubernamentales.','Desarrolló programas de fortalecimiento de capacidades para aumentar la experiencia local en gestión de transformación digital.','Implementó soluciones tecnológicas alineadas con las mejores prácticas internacionales y los requisitos del contexto local.','Diseñó marcos estratégicos para guiar la modernización gubernamental y el desarrollo de la economía digital.','Construyó capacidad institucional mediante formación, transferencia de conocimiento y programas de desarrollo organizacional.']
};

/* ---------- Area descriptions — French ---------- */
var AREA_DESCS_FR={
  "Aviation":["A analysé et évalué les cadres réglementaires pour moderniser les opérations de l'aviation et améliorer la gestion du trafic aérien.","A conçu et mis en œuvre des systèmes de gestion aéroportuaire couvrant les concessions, la manutention au sol et les services aux passagers.","A développé des cadres de conformité à la sécurité aérienne alignés sur les normes OACI pour les autorités nationales d'aviation civile.","A simplifié les processus de permis et de licences aéroportuaires, réduisant la charge administrative pour les compagnies aériennes.","A construit des systèmes intégrés de planification du secteur de l'aviation reliant les fonctions réglementaires, opérationnelles et commerciales."],
  "Trade":["A conçu et déployé une plateforme de Guichet Unique pour rationaliser les procédures d'importation et d'exportation.","A analysé les procédures douanières et mis en œuvre des systèmes de gestion des risques pour améliorer le contrôle aux frontières.","A développé un portail de promotion des investissements pour attirer les investissements directs étrangers.","A construit des cadres réglementaires pour le commerce électronique permettant des transactions numériques sécurisées.","A mis en œuvre des systèmes de modernisation des achats couvrant les appels d'offres et la gestion des contrats.","A simplifié les processus d'enregistrement des entreprises, réduisant le délai de constitution de semaines à heures."],
  "Governance":["A fourni une réforme de la gouvernance du secteur public par le renforcement institutionnel et la réingénierie des processus.","A conçu des cadres de gestion de la performance gouvernementale pour améliorer la responsabilité.","A mis en œuvre des plateformes de gouvernance électronique connectant plusieurs agences via un portail de services unifié.","A analysé et restructuré les systèmes de marchés publics pour accroître la transparence et réduire les risques de corruption.","A développé des initiatives de données ouvertes pour améliorer la transparence gouvernementale et la participation citoyenne."],
  "Agriculture":["A renforcé les systèmes de gestion du secteur agricole couvrant l'utilisation des terres, l'irrigation et le suivi des cultures.","A conçu des cadres de développement rural pour améliorer la productivité des petits agriculteurs et l'accès aux marchés.","A mis en œuvre des systèmes de conformité aux normes de sécurité alimentaire pour l'accès aux marchés d'exportation.","A construit des plateformes de données agricoles pour soutenir une politique agricole basée sur des preuves.","A développé des systèmes d'enregistrement des agriculteurs liant les producteurs aux programmes gouvernementaux."],
  "Social":["A mis en œuvre des systèmes de gestion de la protection sociale pour améliorer le ciblage des programmes d'aide.","A conçu des cadres de développement communautaire pour renforcer la gouvernance locale et la participation citoyenne.","A construit des plateformes intégrées de services sociaux reliant les agences de santé, éducation et aide sociale.","A développé des systèmes de gestion des bénéficiaires pour réduire la fraude et améliorer l'efficacité des programmes.","A renforcé la gestion du secteur éducatif grâce à des plateformes numériques pour le suivi des inscriptions."],
  "ICT":["A conçu des stratégies nationales d'infrastructure TIC pour réduire la fracture numérique et élargir l'accès à internet.","A construit des plateformes de gouvernance électronique permettant aux citoyens d'accéder aux services publics en ligne.","A mis en œuvre des cadres de cybersécurité pour protéger les données gouvernementales critiques.","A développé des systèmes d'identité numérique sécurisés pour l'accès aux services gouvernementaux.","A déployé des stratégies de migration vers le cloud pour améliorer la résilience et réduire les coûts."],
  "Finance":["A modernisé les systèmes de gestion des finances publiques pour améliorer la transparence fiscale.","A mis en œuvre des systèmes intégrés d'information de gestion financière couvrant la planification et la comptabilité.","A conçu des réformes de l'administration fiscale pour améliorer la conformité et réduire les coûts de recouvrement.","A construit des systèmes de gestion de trésorerie pour optimiser les flux de trésorerie gouvernementaux.","A développé des cadres de gestion des investissements publics pour améliorer la sélection des projets."],
  "Private":["A soutenu le développement du secteur privé par des réformes réglementaires et des programmes d'amélioration du climat des affaires.","A conçu des réformes de l'environnement des affaires pour réduire les formalités administratives.","A mis en œuvre des plateformes de soutien aux PME.","A construit des cadres de partenariat public-privé pour mobiliser l'investissement privé dans les infrastructures.","A développé des écosystèmes d'entrepreneuriat par l'incubation, le mentorat et l'accès au capital."],
  "Infrastructure":["A conçu des programmes de développement des infrastructures couvrant routes, services publics et équipements.","A mis en œuvre des systèmes de gestion de l'urbanisme pour les permis, le zonage et la réglementation.","A construit des systèmes de permis de construire dématérialisant le processus complet d'approbation.","A développé des cadres intégrés de gestion des transports pour ports, aéroports et corridors logistiques.","A rationalisé les processus d'appel d'offres d'infrastructure pour améliorer les délais de livraison."],
  "default":["A analysé les besoins institutionnels et conçu des solutions adaptées pour améliorer la prestation de services gouvernementaux.","A développé des programmes de renforcement des capacités pour accroître l'expertise locale en transformation numérique.","A mis en œuvre des solutions technologiques alignées sur les meilleures pratiques internationales.","A conçu des cadres stratégiques pour guider la modernisation gouvernementale et le développement de l'économie numérique.","A renforcé la capacité institutionnelle par la formation et le transfert de connaissances."]
};

/* ---------- Area descriptions — Portuguese ---------- */
var AREA_DESCS_PT={
  "Aviation":["Analisou e avaliou frameworks regulatórios para modernizar as operações de aviação e melhorar a gestão do tráfego aéreo.","Projetou e implementou sistemas de gestão aeroportuária cobrindo concessões, operações em terra e serviços a passageiros.","Desenvolveu frameworks de conformidade de segurança aérea alinhados com os padrões OACI para autoridades nacionais.","Simplificou os processos de licenças aeroportuárias, reduzindo a carga administrativa para companhias aéreas e operadores.","Construiu sistemas integrados de planejamento do setor de aviação conectando funções regulatórias, operacionais e comerciais."],
  "Trade":["Projetou e implantou uma plataforma de Janela Única para agilizar os procedimentos de importação e exportação.","Analisou procedimentos alfandegários e implementou sistemas de gestão de riscos para controle eficiente de fronteiras.","Desenvolveu um portal de promoção de investimentos para atrair investimento estrangeiro direto.","Construiu frameworks regulatórios para comércio eletrônico permitindo transações digitais seguras.","Implementou sistemas de modernização de aquisições cobrindo licitações eletrônicas e gestão de contratos.","Agilizou os processos de registro empresarial, reduzindo o tempo de constituição de semanas para horas."],
  "Governance":["Entregou reforma de governança do setor público por meio de fortalecimento institucional e reengenharia de processos.","Projetou frameworks de gestão de desempenho governamental para melhorar a responsabilização nos serviços públicos.","Implementou plataformas de e-governo conectando múltiplas agências em um portal de serviços unificado.","Analisou e reestruturou sistemas de compras públicas para aumentar a transparência e reduzir riscos de corrupção.","Desenvolveu iniciativas de dados abertos para melhorar a transparência governamental e o engajamento cidadão."],
  "Agriculture":["Fortaleceu os sistemas de gestão do setor agrícola cobrindo uso da terra, irrigação e monitoramento de culturas.","Projetou frameworks de desenvolvimento rural para melhorar a produtividade de pequenos agricultores e o acesso a mercados.","Implementou sistemas de conformidade com normas de segurança alimentar para acesso a mercados de exportação.","Construiu plataformas de dados agrícolas para apoiar políticas baseadas em evidências e alocação de recursos.","Desenvolveu sistemas de registro de agricultores vinculando produtores a programas de subsídios e apoio governamental."],
  "Social":["Implementou sistemas de gestão de proteção social para melhorar a focalização e entrega de programas assistenciais.","Projetou frameworks de desenvolvimento comunitário para fortalecer a governança local e a participação cidadã.","Construiu plataformas integradas de serviços sociais conectando agências de saúde, educação e assistência social.","Desenvolveu sistemas de gestão de beneficiários para reduzir fraudes e melhorar a eficiência dos programas.","Fortaleceu a gestão do setor educacional por meio de plataformas digitais para matrícula e acompanhamento curricular."],
  "ICT":["Projetou estratégias nacionais de infraestrutura de TIC para reduzir a exclusão digital e ampliar o acesso à internet.","Construiu plataformas de e-governo permitindo que cidadãos acessem serviços públicos por meio de uma interface digital única.","Implementou frameworks de cibersegurança para proteger dados governamentais críticos e infraestrutura digital.","Desenvolveu sistemas de identidade digital apoiando acesso seguro a serviços governamentais e inclusão financeira.","Implantou estratégias de migração para a nuvem para melhorar a resiliência dos serviços e reduzir custos."],
  "Finance":["Modernizou sistemas de gestão de finanças públicas para melhorar a execução orçamentária e a transparência fiscal.","Implementou sistemas integrados de informação de gestão financeira cobrindo planejamento, orçamento e contabilidade.","Projetou reformas de administração tributária para melhorar a conformidade fiscal e reduzir custos de arrecadação.","Construiu sistemas de gestão de tesouraria para otimizar o fluxo de caixa governamental e a gestão da dívida.","Desenvolveu frameworks de gestão de investimentos públicos para melhorar a seleção e supervisão de projetos de capital."],
  "Private":["Apoiou o desenvolvimento do setor privado por meio de reformas regulatórias e programas de melhoria do ambiente de negócios.","Projetou reformas do ambiente empresarial para reduzir a burocracia e melhorar o ranking de facilidade para fazer negócios.","Implementou plataformas de apoio a PMEs conectando pequenas empresas a financiamento, mercados e assistência técnica.","Construiu frameworks de parceria público-privada para mobilizar investimento privado em infraestrutura pública.","Desenvolveu ecossistemas de empreendedorismo por meio de incubação, mentoria e programas de acesso ao capital."],
  "Infrastructure":["Projetou programas de desenvolvimento de infraestrutura cobrindo estradas, serviços públicos e instalações.","Implementou sistemas de gestão de planejamento urbano para licenças, zoneamento e regulação do uso do solo.","Construiu sistemas de alvarás de construção digitalizando o processo completo de aprovação.","Desenvolveu frameworks integrados de gestão de transportes para portos, aeroportos e corredores logísticos.","Agilizou os processos de aquisição de infraestrutura para melhorar os prazos de entrega dos projetos."],
  "default":["Analisou os requisitos institucionais e projetou soluções personalizadas para melhorar a prestação de serviços governamentais.","Desenvolveu programas de capacitação para fortalecer a expertise local em gestão de transformação digital.","Implementou soluções tecnológicas alinhadas com as melhores práticas internacionais e requisitos do contexto local.","Projetou frameworks estratégicos para orientar a modernização governamental e o desenvolvimento da economia digital.","Fortaleceu a capacidade institucional por meio de treinamento, transferência de conhecimento e desenvolvimento organizacional."]
};

/* ---------- Modal UI translations ---------- */
var PM_UI={
  en:{ search:'Search by country / client / sector…', project:'project', projects:'projects', funded:'Funded by', contract:'Contract', nav_hint:'← → keys navigate · Click map to switch country', no_projects:'No projects match this filter for ', map_hint:'Click a dot to explore · hover for details', f_all:'All projects', f_Aviation:'Aviation', f_Trade:'Trade', f_Public:'Governance', f_Private:'Private Sector', f_Social:'Social', f_Agriculture:'Agriculture', f_ICT:'ICT', f_Finance:'Finance', f_Transport:'Infrastructure' },
  es:{ search:'Buscar por país / cliente / sector…', project:'proyecto', projects:'proyectos', funded:'Financiado por', contract:'Contrato', nav_hint:'← → navegar · Clic en el mapa para cambiar de país', no_projects:'No hay proyectos para este filtro en ', map_hint:'Clic en un punto para explorar · hover para detalles', f_all:'Todos', f_Aviation:'Aviación', f_Trade:'Comercio', f_Public:'Gobernanza', f_Private:'Sector Privado', f_Social:'Social', f_Agriculture:'Agricultura', f_ICT:'TIC', f_Finance:'Finanzas', f_Transport:'Infraestructura' },
  fr:{ search:'Rechercher par pays / client / secteur…', project:'projet', projects:'projets', funded:'Financé par', contract:'Contrat', nav_hint:'← → naviguer · Cliquer sur la carte', no_projects:'Aucun projet pour ce filtre dans ', map_hint:'Cliquez pour explorer · survolez pour les détails', f_all:'Tous', f_Aviation:'Aviation', f_Trade:'Commerce', f_Public:'Gouvernance', f_Private:'Secteur Privé', f_Social:'Social', f_Agriculture:'Agriculture', f_ICT:'TIC', f_Finance:'Finances', f_Transport:'Infrastructure' },
  pt:{ search:'Buscar por país / cliente / sector…', project:'projeto', projects:'projetos', funded:'Financiado por', contract:'Contrato', nav_hint:'← → navegar · Clique no mapa', no_projects:'Nenhum projeto corresponde a este filtro em ', map_hint:'Clique para explorar · passe o mouse para detalhes', f_all:'Todos', f_Aviation:'Aviação', f_Trade:'Comércio', f_Public:'Governança', f_Private:'Setor Privado', f_Social:'Social', f_Agriculture:'Agricultura', f_ICT:'TIC', f_Finance:'Finanças', f_Transport:'Infraestrutura' }
};

function getLang(){ return (window.IOSi18n&&window.IOSi18n.current())||'en'; }
function pm_t(key){ var l=getLang(); return (PM_UI[l]&&PM_UI[l][key])||PM_UI.en[key]||key; }
function getAreaDescs(){
  var l=getLang();
  if(l==='es') return AREA_DESCS_ES;
  if(l==='fr') return AREA_DESCS_FR;
  if(l==='pt') return AREA_DESCS_PT;
  return AREA_DESCS;
}

/* Get photo URL: picks from per-area list, varied by country+index */
function getPhotoId(area, country, projIdx){
  var a=(area||'').toLowerCase();
  var list=null;
  for(var k in AREA_PHOTOS){
    if(k!=='default' && a.indexOf(k.toLowerCase())>=0){ list=AREA_PHOTOS[k]; break; }
  }
  if(!list) list=AREA_PHOTOS['default'];
  var seed=projIdx||0;
  if(country) for(var ci=0;ci<country.length;ci++) seed=(seed*31+country.charCodeAt(ci))&0xffff;
  return list[seed%list.length];
}
function getAreaImg(area, country, projIdx){
  var id=getPhotoId(area, country, projIdx||0);
  return 'https://images.unsplash.com/'+id+'?w=800&h=320&fit=crop&q=75&auto=format';
}

/* Title word-by-word translator */
var TITLE_DICT={
  es:[['Single Window','Ventanilla Única'],['e-Government','e-Gobierno'],['Public Administration','Administración Pública'],['Capacity Building','Fortalecimiento de Capacidades'],['Digital Transformation','Transformación Digital'],['Civil Registration','Registro Civil'],['Business Registration','Registro Empresarial'],['Land Administration','Administración de Tierras'],['Tax Administration','Administración Tributaria'],['Revenue Administration','Administración de Rentas'],['Public Financial Management','Gestión de Finanzas Públicas'],['Social Protection','Protección Social'],['Technical Assistance','Asistencia Técnica'],['Institutional Strengthening','Fortalecimiento Institucional'],['Modernization','Modernización'],['Modernisation','Modernización'],['Digitalization','Digitalización'],['Reform','Reforma'],['Development','Desarrollo'],['Management','Gestión'],['System','Sistema'],['Systems','Sistemas'],['Platform','Plataforma'],['National','Nacional'],['Government','Gobierno'],['Services','Servicios'],['Service','Servicio'],['Technology','Tecnología'],['Infrastructure','Infraestructura'],['Trade','Comercio'],['Finance','Finanzas'],['Financial','Financiero'],['Health','Salud'],['Healthcare','Salud'],['Education','Educación'],['Agriculture','Agricultura'],['Transport','Transporte'],['Energy','Energía'],['Environmental','Ambiental'],['Justice','Justicia'],['Security','Seguridad'],['Border','Frontera'],['Customs','Aduanas'],['Investment','Inversión'],['Economic','Económico'],['Planning','Planificación'],['Strategy','Estrategia'],['Governance','Gobernanza'],['Statistics','Estadísticas'],['Census','Censo'],['Implementation','Implementación'],['Support','Apoyo'],['Program','Programa'],['Programme','Programa'],['Project','Proyecto'],['Phase','Fase'],['Improvement','Mejora'],['Strengthening','Fortalecimiento'],['Sector','Sector'],['Urban','Urbano'],['Rural','Rural'],['Aviation','Aviación'],['Procurement','Adquisiciones'],['Electronic','Electrónico'],['Network','Red'],['Identity','Identidad'],['Registration','Registro'],['Integrated','Integrado'],['Digital','Digital'],['Public','Pública'],['Institutional','Institucional'],['Regulatory','Regulatorio'],['Framework','Marco'],['Training','Formación'],['Assessment','Evaluación'],['Monitoring','Monitoreo'],['Evaluation','Evaluación'],['Administration','Administración'],['Ministry','Ministerio'],['Department','Departamento'],['Agency','Agencia'],['Authority','Autoridad'],['Regional','Regional'],['Pilot','Piloto'],['Review','Revisión'],['Design','Diseño'],['Construction','Construcción'],['Rehabilitation','Rehabilitación'],['Commercial','Comercial'],['International','Internacional'],['Promotion','Promoción'],['Feasibility','Factibilidad'],['Upgrade','Actualización'],['Social','Social'],['Land','Tierra'],['Water','Agua'],['of','de'],['for','para'],['and','y']],
  fr:[['Single Window','Guichet Unique'],['e-Government','e-Gouvernement'],['Public Administration','Administration Publique'],['Capacity Building','Renforcement des Capacités'],['Digital Transformation','Transformation Numérique'],['Civil Registration','État Civil'],['Business Registration','Registre des Entreprises'],['Land Administration','Gestion Foncière'],['Tax Administration','Administration Fiscale'],['Revenue Administration','Administration des Revenus'],['Public Financial Management','Gestion des Finances Publiques'],['Social Protection','Protection Sociale'],['Technical Assistance','Assistance Technique'],['Institutional Strengthening','Renforcement Institutionnel'],['Modernization','Modernisation'],['Modernisation','Modernisation'],['Digitalization','Numérisation'],['Reform','Réforme'],['Development','Développement'],['Management','Gestion'],['System','Système'],['Systems','Systèmes'],['Platform','Plateforme'],['National','National'],['Government','Gouvernement'],['Services','Services'],['Service','Service'],['Technology','Technologie'],['Infrastructure','Infrastructure'],['Trade','Commerce'],['Finance','Finances'],['Financial','Financier'],['Health','Santé'],['Healthcare','Santé'],['Education','Éducation'],['Agriculture','Agriculture'],['Transport','Transport'],['Energy','Énergie'],['Environmental','Environnemental'],['Justice','Justice'],['Security','Sécurité'],['Border','Frontière'],['Customs','Douanes'],['Investment','Investissement'],['Economic','Économique'],['Planning','Planification'],['Strategy','Stratégie'],['Governance','Gouvernance'],['Statistics','Statistiques'],['Census','Recensement'],['Implementation','Mise en oeuvre'],['Support','Appui'],['Program','Programme'],['Programme','Programme'],['Project','Projet'],['Phase','Phase'],['Improvement','Amélioration'],['Strengthening','Renforcement'],['Sector','Secteur'],['Urban','Urbain'],['Rural','Rural'],['Aviation','Aviation'],['Procurement','Marchés Publics'],['Electronic','Électronique'],['Network','Réseau'],['Identity','Identité'],['Registration','Enregistrement'],['Integrated','Intégré'],['Digital','Numérique'],['Public','Public'],['Institutional','Institutionnel'],['Regulatory','R\u00e9glementaire'],['Framework','Cadre'],['Training','Formation'],['Assessment','\u00c9valuation'],['Monitoring','Suivi'],['Evaluation','\u00c9valuation'],['Communication','Communication'],['Administration','Administration'],['Ministry','Minist\u00e8re'],['Department','D\u00e9partement'],['Agency','Agence'],['Authority','Autorit\u00e9'],['Regional','R\u00e9gional'],['Pilot','Pilote'],['Review','R\u00e9vision'],['Design','Conception'],['Construction','Construction'],['Rehabilitation','R\u00e9habilitation'],['Commercial','Commercial'],['Industrial','Industriel'],['International','International'],['Promotion','Promotion'],['Feasibility','Faisabilit\u00e9'],['Upgrade','Am\u00e9lioration'],['Programme','Programme'],['Social','Social'],['Land','Foncier'],['Water','Eau'],['of','de'],['for','pour'],['and','et']],
  pt:[['Single Window','Janela Única'],['e-Government','e-Governo'],['Public Administration','Administração Pública'],['Capacity Building','Fortalecimento de Capacidades'],['Digital Transformation','Transformação Digital'],['Civil Registration','Registro Civil'],['Business Registration','Registro Empresarial'],['Land Administration','Administração de Terras'],['Tax Administration','Administração Tributária'],['Revenue Administration','Administração de Receitas'],['Public Financial Management','Gestão de Finanças Públicas'],['Social Protection','Proteção Social'],['Technical Assistance','Assistência Técnica'],['Institutional Strengthening','Fortalecimento Institucional'],['Modernization','Modernização'],['Modernisation','Modernização'],['Digitalization','Digitalização'],['Reform','Reforma'],['Development','Desenvolvimento'],['Management','Gestão'],['System','Sistema'],['Systems','Sistemas'],['Platform','Plataforma'],['National','Nacional'],['Government','Governo'],['Services','Serviços'],['Service','Serviço'],['Technology','Tecnologia'],['Infrastructure','Infraestrutura'],['Trade','Comércio'],['Finance','Finanças'],['Financial','Financeiro'],['Health','Saúde'],['Healthcare','Saúde'],['Education','Educação'],['Agriculture','Agricultura'],['Transport','Transporte'],['Energy','Energia'],['Environmental','Ambiental'],['Justice','Justiça'],['Security','Segurança'],['Border','Fronteira'],['Customs','Alfândega'],['Investment','Investimento'],['Economic','Econômico'],['Planning','Planejamento'],['Strategy','Estratégia'],['Governance','Governança'],['Statistics','Estatísticas'],['Census','Censo'],['Implementation','Implementação'],['Support','Apoio'],['Program','Programa'],['Programme','Programa'],['Project','Projeto'],['Phase','Fase'],['Improvement','Melhoria'],['Strengthening','Fortalecimento'],['Sector','Setor'],['Urban','Urbano'],['Rural','Rural'],['Aviation','Aviação'],['Procurement','Aquisições'],['Electronic','Eletrônico'],['Network','Rede'],['Identity','Identidade'],['Registration','Registro'],['Integrated','Integrado'],['Digital','Digital'],['Public','Público'],['Institutional','Institucional'],['Regulatory','Regulatório'],['Framework','Marco'],['Training','Formação'],['Assessment','Avaliação'],['Monitoring','Monitoramento'],['Evaluation','Avaliação'],['Administration','Administração'],['Ministry','Ministério'],['Department','Departamento'],['Agency','Agência'],['Authority','Autoridade'],['Regional','Regional'],['Pilot','Piloto'],['Review','Revisão'],['Design','Design'],['Construction','Construção'],['Rehabilitation','Reabilitação'],['Commercial','Comercial'],['International','Internacional'],['Promotion','Promoção'],['Feasibility','Viabilidade'],['Upgrade','Atualização'],['Social','Social'],['Land','Terra'],['Water','Água'],['of','de'],['for','para'],['and','e']]
};
function escRe(s){ return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&'); }
function translateTitle(title,lang){
  if(!title||lang==='en') return title;
  var dict=TITLE_DICT[lang]; if(!dict) return title;
  var result=title;
  for(var i=0;i<dict.length;i++){
    var from=dict[i][0], to=dict[i][1];
    try{ result=result.replace(new RegExp(escRe(from),'gi'),to); }
    catch(e){ result=result.split(from).join(to); }
  }
  return result;
}

/* Generate action description from project data */
function getProjectDesc(proj, country, projIdx){
  var a=(proj.area||'').replace(/^[A-Z]+-/,'').split('|')[0].split(',')[0].trim();
  var al=a.toLowerCase();
  var list=null;
  var _descs=getAreaDescs();
  for(var k in _descs){
    if(k!=='default' && al.indexOf(k.toLowerCase())>=0){ list=_descs[k]; break; }
  }
  if(!list) list=_descs['default'];
  var seed=projIdx||0;
  if(country) for(var ci=0;ci<country.length;ci++) seed=(seed+country.charCodeAt(ci))%list.length;
  return list[seed%list.length];
}

/* ---------- Filters ---------- */
var FILTER_ICONS={
  "All":"<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"/><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"/></svg>",
  "Aviation":"<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z\"/></svg>",
  "Trade":"<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"17 1 21 5 17 9\"/><path d=\"M3 11V9a4 4 0 0 1 4-4h14\"/><polyline points=\"7 23 3 19 7 15\"/><path d=\"M21 13v2a4 4 0 0 1-4 4H3\"/></svg>",
  "Public":"<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"3\" y1=\"22\" x2=\"21\" y2=\"22\"/><line x1=\"6\" y1=\"18\" x2=\"6\" y2=\"11\"/><line x1=\"10\" y1=\"18\" x2=\"10\" y2=\"11\"/><line x1=\"14\" y1=\"18\" x2=\"14\" y2=\"11\"/><line x1=\"18\" y1=\"18\" x2=\"18\" y2=\"11\"/><polygon points=\"12 2 20 7 4 7\"/></svg>",
  "Private":"<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"/><path d=\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"/></svg>",
  "Social":"<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/></svg>",
  "Agriculture":"<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 22V12\"/><path d=\"M5 12H2a10 10 0 0 0 20 0h-3\"/><path d=\"M12 12C12 7 7 4 2 2c0 5 2.5 9 10 10z\"/><path d=\"M12 12c0-5 5-8 10-10 0 5-2.5 9-10 10z\"/></svg>",
  "ICT":"<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\"/><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"/><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"/></svg>",
  "Finance":"<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/></svg>",
  "Transport":"<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2\"/><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"15.5\"/><polyline points=\"22 8.5 12 15.5 2 8.5\"/></svg>",
};

var FILTERS=[
  {key:'All',label:'All projects'},
  {key:'Aviation',label:'Aviation'},
  {key:'Trade',label:'Trade'},
  {key:'Public',label:'Governance'},
  {key:'Private',label:'Private Sector'},
  {key:'Social',label:'Social'},
  {key:'Agriculture',label:'Agriculture'},
  {key:'ICT',label:'ICT'},
  {key:'Finance',label:'Finance'},
  {key:'Transport',label:'Infrastructure'}
];

function areaMatchesFilter(area){
  var a=(area||'').toLowerCase();
  if(!a||activeFilter==='All') return true;
  return a.indexOf(activeFilter.toLowerCase())>=0;
}

function getFilteredProjects(country){
  var q=searchQuery.toLowerCase().trim();
  return (projectData[country]||[]).filter(function(p){
    if(!areaMatchesFilter(p.area)) return false;
    if(!q) return true;
    if(country.toLowerCase().indexOf(q)>=0) return true;
    if((p.area||'').toLowerCase().indexOf(q)>=0) return true;
    if((p.agency||'').toLowerCase().indexOf(q)>=0) return true;
    if((p.client||'').toLowerCase().indexOf(q)>=0) return true;
    if((p.mission||'').toLowerCase().indexOf(q)>=0) return true;
    return false;
  });
}

function getFilteredCountries(){
  return Object.keys(projectData||{}).filter(function(c){
    return CC[c] && getFilteredProjects(c).length>0;
  }).sort(function(a,b){ return getFilteredProjects(b).length-getFilteredProjects(a).length; });
}

/* ---------- State ---------- */
var projectData=null, activeCountry=null, activeProjectIdx=0, modalOpen=false;
var activeFilter='All', searchQuery='';
var modalMapCtx=null, modalMapW=0, modalMapH=0, modalDots=[], modalHover=-1;
var searchResults=[];

/* ---- helpers ---- */
function dotR(n){ return Math.max(3,Math.min(8,2.5+Math.log(n+1)*1.6)); }
function acc(){ return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()||'#82C44D'; }
function rgb(){ return getComputedStyle(document.documentElement).getPropertyValue('--accent-rgb').trim()||'130,196,77'; }

/* ============================================================ LOAD */
function loadAndBoot(){
  fetch('assets/projects.json')
    .then(function(r){ return r.json(); })
    .then(function(d){
      projectData=d;
      window.__iosProjectData=d;
      window.__iosCC=CC;
      window.__iosOffices=OFFICES;
      try{ bootGlobe(); }catch(e){ console.warn('[IOS] bootGlobe:',e); }
      buildModal();
      bootStandaloneMap();
      bootOfficesMap();
    })
    .catch(function(e){ console.warn('[IOS] projects.json failed:',e); });
}

/* Re-render open modal on language change */
function refreshModalLang(){
  if(!modalOpen) return;
  // Update search placeholder
  var si=document.getElementById('pm-search'); if(si) si.placeholder=pm_t('search');
  // Update map hint
  var mh=document.getElementById('pm-map-hint-txt'); if(mh) mh.textContent=pm_t('map_hint');
  // Re-render
  renderFilterBar(); renderModalHeader(); renderProjectCard();
}
window.refreshModalLang=refreshModalLang;

function bootGlobe(){
  var c=document.getElementById('heroGlobe'); if(!c) return;
  initProjectGlobe(c,projectData,function(country){ openModal(country); });
}

function bootStandaloneMap(){
  var c=document.getElementById('impactProjectMap'); if(!c||!window.IOSWorld) return;
  window.IOSWorld.initStandaloneProjectMap(c);
}

function bootOfficesMap(){
  var c=document.getElementById('officesMapCanvas'); if(!c||!window.IOSWorld) return;
  window.IOSWorld.initOfficesMap(c,OFFICES);
}

/* ============================================================ MODAL HTML */
function buildModal(){
  if(document.getElementById('pm-overlay')) return;
  var ov=document.createElement('div'); ov.id='pm-overlay';
  ov.innerHTML=
    '<div id="pm-box">'+
      '<header id="pm-hdr">'+
        '<div id="pm-search-wrap">'+
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'+
          '<input id="pm-search" placeholder="'+pm_t('search')+'" autocomplete="off">'+
          '<div id="pm-search-drop"></div>'+
        '</div>'+
        '<div id="pm-htitle">'+
          '<span id="pm-cname"></span>'+
          '<span id="pm-ctag"></span>'+
        '</div>'+
        '<button id="pm-prev" class="pm-arrow" title="Previous country"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></button>'+
        '<button id="pm-next" class="pm-arrow" title="Next country"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></button>'+
        '<button id="pm-close" title="Close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>'+
      '</header>'+
      '<div id="pm-filters"></div>'+
      '<div id="pm-body">'+
        '<div id="pm-map-wrap">'+
          '<canvas id="pm-map"></canvas>'+
          '<div class="pm-map-hint" id="pm-map-hint-txt">'+pm_t('map_hint')+'</div>'+
        '</div>'+
        '<div id="pm-panel">'+
          '<div id="pm-proj-nav">'+
            '<button class="pm-pj-arr" id="pm-pj-prev"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></button>'+
            '<span id="pm-pj-count"></span>'+
            '<button class="pm-pj-arr" id="pm-pj-next"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></button>'+
          '</div>'+
          '<div id="pm-card"></div>'+
        '</div>'+
      '</div>'+
    '</div>';
  document.body.appendChild(ov);
  injectCSS();
  wireEvents(ov);
  renderFilterBar();
}

function wireEvents(ov){
  ov.addEventListener('click',function(e){ if(e.target===ov) closeModal(); });
  document.getElementById('pm-close').addEventListener('click',closeModal);
  document.getElementById('pm-prev').addEventListener('click',function(){ shiftCountry(-1); });
  document.getElementById('pm-next').addEventListener('click',function(){ shiftCountry(1); });
  document.getElementById('pm-pj-prev').addEventListener('click',function(){ shiftProject(-1); });
  document.getElementById('pm-pj-next').addEventListener('click',function(){ shiftProject(1); });
  document.addEventListener('keydown',function(e){
    if(!modalOpen) return;
    if(e.key==='Escape'){ closeModal(); return; }
    if(e.key==='ArrowLeft'&&document.activeElement.tagName!=='INPUT') shiftProject(-1);
    if(e.key==='ArrowRight'&&document.activeElement.tagName!=='INPUT') shiftProject(1);
  });
  var mc=document.getElementById('pm-map');
  mc.addEventListener('mousemove',onMapHover);
  mc.addEventListener('mouseleave',function(){ modalHover=-1; });
  mc.addEventListener('click',onMapClick);
  // search
  var si=document.getElementById('pm-search');
  si.addEventListener('input',function(){
    searchQuery=si.value; renderSearchDrop();
  });
  si.addEventListener('keydown',function(e){
    if(e.key==='Escape'){ si.value=''; searchQuery=''; renderSearchDrop(); si.blur(); }
    if(e.key==='Enter'&&searchResults.length>0){ selectCountry(searchResults[0]); si.value=''; searchQuery=''; renderSearchDrop(); }
  });
  document.addEventListener('click',function(e){
    if(!e.target.closest('#pm-search-wrap')){ document.getElementById('pm-search-drop').style.display='none'; }
  });
}

/* ---- filter bar ---- */
function renderFilterBar(){
  var fb=document.getElementById('pm-filters'); if(!fb) return;
  fb.innerHTML='';
  FILTERS.forEach(function(f){
    var b=document.createElement('button');
    b.className='pm-filter-btn'+(activeFilter===f.key?' active':'');
    var icon=FILTER_ICONS[f.key]||'';
    var lbl=pm_t('f_'+(f.key==='All'?'all':f.key))||f.label;
    b.innerHTML=icon+'<span>'+lbl+'</span>';
    b.addEventListener('click',function(){
      activeFilter=f.key;
      activeProjectIdx=0;
      renderFilterBar(); renderModalHeader(); renderModalMap(); renderProjectCard();
    });
    fb.appendChild(b);
  });
}

/* ---- search dropdown ---- */
function renderSearchDrop(){
  var drop=document.getElementById('pm-search-drop'); if(!drop) return;
  if(!searchQuery.trim()){ drop.style.display='none'; return; }
  searchResults=getFilteredCountries().slice(0,8);
  if(!searchResults.length){ drop.style.display='none'; return; }
  drop.innerHTML=searchResults.map(function(c){
    var n=getFilteredProjects(c).length;
    return '<div class="pm-sr-item" data-c="'+c+'"><span>'+c+'</span><span class="pm-sr-n">'+n+'</span></div>';
  }).join('');
  drop.style.display='block';
  drop.querySelectorAll('.pm-sr-item').forEach(function(el){
    el.addEventListener('click',function(){
      selectCountry(el.getAttribute('data-c'));
      document.getElementById('pm-search').value='';
      searchQuery=''; drop.style.display='none';
    });
  });
}

function selectCountry(c){
  activeCountry=c; activeProjectIdx=0;
  window.__iosActiveCountry=c;
  renderModalHeader(); renderModalMap(); renderProjectCard();
}

/* ============================================================ MODAL LOGIC */
function openModal(country){
  if(!projectData) return;
  if(!document.getElementById('pm-overlay')) buildModal();
  activeCountry=country||getFilteredCountries()[0];
  window.__iosActiveCountry=activeCountry;
  activeProjectIdx=0;
  modalOpen=true;
  document.getElementById('pm-overlay').classList.add('open');
  document.body.style.overflow='hidden';
  renderFilterBar();
  renderModalHeader();
  renderModalMap();
  renderProjectCard();
}

function closeModal(){
  modalOpen=false;
  document.getElementById('pm-overlay').classList.remove('open');
  document.body.style.overflow='';
}

function shiftCountry(dir){
  var list=getFilteredCountries();
  var i=list.indexOf(activeCountry)+dir;
  if(i<0) i=list.length-1; if(i>=list.length) i=0;
  selectCountry(list[i]);
}

function shiftProject(dir){
  var projs=getFilteredProjects(activeCountry);
  if(!projs.length) return;
  activeProjectIdx=(activeProjectIdx+dir+projs.length)%projs.length;
  document.getElementById('pm-pj-count').textContent=(activeProjectIdx+1)+' / '+projs.length;
  renderProjectCard();
}

function renderModalHeader(){
  var projs=getFilteredProjects(activeCountry||''); var n=projs.length;
  document.getElementById('pm-cname').textContent=activeCountry||'';
  document.getElementById('pm-ctag').textContent=n+' '+(n===1?pm_t('project'):pm_t('projects'));
  document.getElementById('pm-pj-count').textContent=(n?'1':'0')+' / '+n;
  activeProjectIdx=0;
}

/* ---- flat map ---- */
function renderModalMap(){
  var canvas=document.getElementById('pm-map'); if(!canvas) return;
  var DPR=Math.min(window.devicePixelRatio||1,2);
  var rect=canvas.parentElement.getBoundingClientRect();
  var W=rect.width, H=rect.height;
  canvas.width=W*DPR; canvas.height=H*DPR;
  canvas.style.width=W+'px'; canvas.style.height=H+'px';
  modalMapW=W; modalMapH=H;
  var ctx=canvas.getContext('2d');
  ctx.setTransform(DPR,0,0,DPR,0,0);
  modalMapCtx=ctx;
  drawModalMap(ctx,W,H);
}

function mapPx(lng,lat,W,H){
  var px=W*0.04, py=H*0.07;
  return {x:px+(lng+180)/360*(W-2*px), y:py+(90-lat)/180*(H-2*py)};
}

function drawModalMap(ctx,W,H){
  if(!ctx) return;
  ctx.clearRect(0,0,W,H);
  var r=rgb(), a=acc();
  // land dots
  if(window.IOSWorld&&IOSWorld.landDots){
    var ld=IOSWorld.landDots;
    for(var i=0;i<ld.length;i++){
      var p=mapPx(ld[i][0],ld[i][1],W,H);
      ctx.beginPath(); ctx.fillStyle='rgba(215,232,250,0.46)';
      ctx.arc(p.x,p.y,1,0,Math.PI*2); ctx.fill();
    }
  }
  // project dots
  modalDots=[];
  var filtered=getFilteredCountries();
  for(var ci=0;ci<filtered.length;ci++){
    var country=filtered[ci]; var coord=CC[country]; if(!coord) continue;
    var count=getFilteredProjects(country).length;
    var pt=mapPx(coord[1],coord[0],W,H);
    var dr=dotR(count), isAct=(country===activeCountry);
    modalDots.push({country:country,x:pt.x,y:pt.y,count:count});
    if(isAct){
      ctx.beginPath(); ctx.strokeStyle='rgba('+r+',0.55)'; ctx.lineWidth=2;
      ctx.arc(pt.x,pt.y,dr+7,0,Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.fillStyle='rgba('+r+',0.15)';
      ctx.arc(pt.x,pt.y,dr+15,0,Math.PI*2); ctx.fill();
    }
    ctx.beginPath(); ctx.fillStyle=isAct?'rgba('+r+',0.20)':'rgba('+r+',0.07)';
    ctx.arc(pt.x,pt.y,dr*2,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.fillStyle=isAct?a:'rgba('+r+',0.70)';
    ctx.shadowColor=a; ctx.shadowBlur=isAct?18:7;
    ctx.arc(pt.x,pt.y,dr,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
    if(isAct){
      ctx.font='700 11px Montserrat,sans-serif';
      var tw=ctx.measureText(country).width;
      var tx=pt.x+dr+8, ty=pt.y+4;
      if(tx+tw+10>W) tx=pt.x-dr-tw-8;
      ctx.fillStyle='rgba(3,16,31,0.85)'; ctx.fillRect(tx-4,ty-14,tw+8,18);
      ctx.strokeStyle='rgba('+r+',0.5)'; ctx.lineWidth=1; ctx.strokeRect(tx-4,ty-14,tw+8,18);
      ctx.fillStyle='#eaf3fb'; ctx.fillText(country,tx,ty);
    }
  }
  // hover tooltip
  if(modalHover>=0&&modalHover<modalDots.length){
    var hd=modalDots[modalHover];
    var lbl=hd.country+' · '+hd.count+' '+(hd.count===1?pm_t('project'):pm_t('projects'));
    ctx.font='600 11px Montserrat,sans-serif';
    var tw2=ctx.measureText(lbl).width;
    var tx2=hd.x+12, ty2=hd.y-24;
    if(tx2+tw2+12>W) tx2=hd.x-tw2-16;
    if(ty2<8) ty2=hd.y+14;
    ctx.fillStyle='rgba(3,16,31,0.92)'; ctx.fillRect(tx2-4,ty2,tw2+16,20);
    ctx.strokeStyle='rgba('+r+',0.55)'; ctx.lineWidth=1; ctx.strokeRect(tx2-4,ty2,tw2+16,20);
    ctx.fillStyle='#eaf3fb'; ctx.fillText(lbl,tx2+4,ty2+14);
  }
}

function onMapHover(e){
  var rect=e.target.getBoundingClientRect(), mx=e.clientX-rect.left, my=e.clientY-rect.top;
  var prev=modalHover; modalHover=-1;
  for(var i=0;i<modalDots.length;i++){
    var d=modalDots[i], dx=mx-d.x, dy=my-d.y;
    if(dx*dx+dy*dy<(dotR(d.count)+8)*(dotR(d.count)+8)){ modalHover=i; break; }
  }
  e.target.style.cursor=(modalHover>=0?'pointer':'default');
  if(modalHover!==prev&&modalMapCtx) drawModalMap(modalMapCtx,modalMapW,modalMapH);
}

function onMapClick(e){
  var rect=e.target.getBoundingClientRect(), mx=e.clientX-rect.left, my=e.clientY-rect.top;
  for(var i=0;i<modalDots.length;i++){
    var d=modalDots[i], dx=mx-d.x, dy=my-d.y;
    if(dx*dx+dy*dy<(dotR(d.count)+10)*(dotR(d.count)+10)){
      selectCountry(d.country); return;
    }
  }
}


/* ---------- Agency logo badges ---------- */
var LOGO_BASE='uploads/Client logos-20260616T151158Z-3-001/';
var AGENCY_LOGOS=[
  ['World Bank',LOGO_BASE+'WB.png'],
  ['World bank',LOGO_BASE+'WB.png'],
  ['IDA',LOGO_BASE+'WB.png'],
  ['IBRD',LOGO_BASE+'WB.png'],
  ['IFC',LOGO_BASE+'IFC.png'],
  ['MIGA',LOGO_BASE+'WB.png'],
  ['USTDA',LOGO_BASE+'USTDA.png'],
  ['U.S. Trade',LOGO_BASE+'USTDA.png'],
  ['USAID',LOGO_BASE+'USAID.png'],
  ['U.S. Agency',LOGO_BASE+'USAID.png'],
  ['Millennium Challenge',LOGO_BASE+'MCC.png'],
  ['MCC',LOGO_BASE+'MCC.png'],
  ['Asian Development Bank',LOGO_BASE+'ADB.png'],
  ['/ADB',LOGO_BASE+'ADB.png'],
  ['ADB/',LOGO_BASE+'ADB.png'],
  ['AfDB',LOGO_BASE+'AfDB.jpg'],
  ['AFDB',LOGO_BASE+'AfDB.jpg'],
  ['African Development',LOGO_BASE+'AfDB.jpg'],
  ['IADB',LOGO_BASE+'IDB.png'],
  ['IDB',LOGO_BASE+'IDB.png'],
  ['Inter-American Dev',LOGO_BASE+'IDB.png'],
  ['Inter-American Development Bank',LOGO_BASE+'IDB.png'],
  ['/IDB',LOGO_BASE+'IDB.png'],
  ['IDB/',LOGO_BASE+'IDB.png'],
  ['EBRD',LOGO_BASE+'EBRD.png'],
  ['European Bank for Reconstruction',LOGO_BASE+'EBRD.png'],
  ['ICAO',LOGO_BASE+'ICAO.jpeg'],
  ['ECOWAS',LOGO_BASE+'ECOWAS.png'],
  ['SADC',LOGO_BASE+'SADC.png'],
  ['TMEA',LOGO_BASE+'TMEA.png'],
  ['TradeMark East Africa',LOGO_BASE+'TMEA.png'],
  ['IFAD',LOGO_BASE+'ifad.png'],
  ['International Fund for Agricultural',LOGO_BASE+'ifad.png'],
  ['APEC',LOGO_BASE+'apec.png'],
  ['OECS',LOGO_BASE+'OECS.png'],
  ['Organisation of Eastern Caribbean',LOGO_BASE+'OECS.png'],
  ['Grant Thornton',LOGO_BASE+'GrantThornton.png'],
  ['Deloitte',LOGO_BASE+'Deloitte.png'],
  ['Ernst & Young',LOGO_BASE+'ey.png'],
  ['E&Y',LOGO_BASE+'ey.png'],
  ['Booz',LOGO_BASE+'booz&company.png'],
  ['AECOM',LOGO_BASE+'AECOM.png'],
  ['Chemonics',LOGO_BASE+'Chemonics.png'],
  ['Palladium',LOGO_BASE+'Palladium.png'],
  ['Adam Smith',LOGO_BASE+'ASI.png'],
  ['/ASI',LOGO_BASE+'ASI.png'],
  ['Louis Berger',LOGO_BASE+'louisberger.png'],
  ['/LBG',LOGO_BASE+'louisberger.png'],
  ['LBG/',LOGO_BASE+'louisberger.png'],

  ['ACI',               'uploads/logos/ACI.png'],
  ['Airports Council',  'uploads/logos/ACI.png'],
  ['ARME',              'uploads/logos/ARME.png'],
  ['Brunei Autoriti',   'uploads/logos/AMBD.jpg'],
  ['AMBD',              'uploads/logos/AMBD.jpg'],
  ['DBSA',              'uploads/logos/DBSA.png'],
  ['Development Bank of Southern Africa', 'uploads/logos/DBSA.png'],
  ['Australian Department of Foreign',    'uploads/logos/DFAT.png'],
  ['AusAID',            'uploads/logos/DFAT.png'],
  ['DFAT',              'uploads/logos/DFAT.png'],
  ['EHCAAN',            'uploads/logos/EHCAAN.png'],
  ['Egyptian Holding Company', 'uploads/logos/EHCAAN.png'],
  ['FAAN',              'uploads/logos/FAAN.jpg'],
  ['Federal Airports Authority', 'uploads/logos/FAAN.jpg'],
  ['Global Infrastructure Partners', 'uploads/logos/GIP.png'],
  ['/GIP',              'uploads/logos/GIP.png'],
  ['JAMPRO',            'uploads/logos/JAMPRO.jpeg'],
  ['LNDC',              'uploads/logos/LNDC.png'],
  ['NBE',               'uploads/logos/NBE.png'],
  ['National Bank of Ethiopia', 'uploads/logos/NBE.png'],
  ['Outreach Aid to the Americ', 'uploads/logos/OAA.png'],
  ['/OAA',              'uploads/logos/OAA.png'],
  ['ONDA',              'uploads/logos/ONDA.png'],
  ['Office National des',       'uploads/logos/ONDA.png'],
  ['PPIAF',             'uploads/logos/PPIAF.jpeg'],
  ['Public-Private Infrastructure Advisory', 'uploads/logos/PPIAF.jpeg'],
  ['RDB',               'uploads/logos/RDB.png'],
  ['Rwanda Development Board',  'uploads/logos/RDB.png'],
  ['GACA',              'uploads/logos/GACA.png'],
  ['General Authority of Civil Aviation', 'uploads/logos/GACA.png'],
  ['U.S. Department of State',  'uploads/logos/DOS.png'],
  ['Dept. of State',    'uploads/logos/DOS.png'],
  ['WEConnect',         'uploads/logos/WEConnect.webp'],
];
function getAgencyLogo(agency){
  if(!agency) return '';
  var al=agency.toLowerCase();
  for(var i=0;i<AGENCY_LOGOS.length;i++){
    if(al.indexOf(AGENCY_LOGOS[i][0].toLowerCase())>=0){
      var isWide=AGENCY_LOGOS[i][0].indexOf('EBRD')>=0||AGENCY_LOGOS[i][0].indexOf('European Bank')>=0;
      return '<div class="pm-agency-logo-wrap'+(isWide?' pm-logo-wide':'')+'">'+'<img src="'+AGENCY_LOGOS[i][1]+'" alt="'+AGENCY_LOGOS[i][0]+'" loading="lazy"></div>';
    }
  }
  return ''; // no logo found — hide container
}
window.getAgencyLogo=getAgencyLogo;

/* ---- project card ---- */
function renderProjectCard(){
  var projs=getFilteredProjects(activeCountry); var p=projs[activeProjectIdx]||{};
  var card=document.getElementById('pm-card'); if(!card) return;
  if(!projs.length){
    card.innerHTML='<div class="pm-empty">'+pm_t('no_projects')+activeCountry+'</div>';
    document.getElementById('pm-pj-count').textContent='0 / 0'; return;
  }
  var st=(p.status||'').toLowerCase();
  var scls=st.indexOf('active')>=0||st.indexOf('on-going')>=0?'pm-st-active':
           st.indexOf('closed')>=0||st.indexOf('complet')>=0?'pm-st-closed':'pm-st-susp';
  var area=(p.area||'').replace(/^[A-Z]+-/,'').split('|')[0].split(',')[0].trim();
  var amt=(p.amount||'').replace(/\s+/g,' ').trim(); if(amt==='N/A'||amt==='n/a') amt='';
  var img=getAreaImg(area, activeCountry, activeProjectIdx);
  var projDesc=getProjectDesc(p, activeCountry, activeProjectIdx);
  card.innerHTML=
    '<div class="pm-card-img" style="background-image:url(\''+img+'\')">'+
      '<span class="pm-area-badge">'+area+'</span>'+
    '</div>'+
    '<h3 class="pm-mission">'+translateTitle(p.mission||'',getLang())+'</h3>'+
    '<p class="pm-proj-desc">'+projDesc+'</p>'+
    '<div class="pm-meta-row">'+
      (p.status?'<span class="pm-status '+scls+'">'+p.status+'</span>':'')+
    '</div>'+
    (p.agency?'<div class="pm-agency-row"><div class="pm-agency-text"><span class="pm-fl">'+pm_t('funded')+'</span><span class="pm-fv">'+p.agency+'</span></div>'+(getAgencyLogo(p.agency)||'')+'</div>':'')+
    '';
  document.getElementById('pm-pj-count').textContent=(activeProjectIdx+1)+' / '+projs.length;
}

/* ============================================================ GLOBE CLICK */
function initProjectGlobe(canvas,data,onCountryClick){
  var downX=0,downY=0;
  var tip=document.createElement('div');
  tip.className='globe-project-tip';
  tip.style.cssText='position:absolute;display:none;background:rgba(3,16,31,.94);border:1px solid rgba(130,196,77,.5);color:#eaf3fb;font-family:Montserrat,sans-serif;font-size:11px;font-weight:600;padding:8px 13px;border-radius:5px;pointer-events:none;z-index:50;white-space:normal;width:260px;line-height:1.5;box-shadow:0 4px 20px rgba(0,0,0,.4)';
  canvas.parentElement.style.position='relative';
  canvas.parentElement.appendChild(tip);
  canvas.addEventListener('mousedown',function(e){ downX=e.clientX; downY=e.clientY; });
  canvas.addEventListener('mouseup',function(e){
    var dx=e.clientX-downX,dy=e.clientY-downY;
    if(dx*dx+dy*dy<36){ var info=getNearestCountry(e,canvas); if(info&&onCountryClick) onCountryClick(info.country); }
  });
  canvas.addEventListener('mousemove',function(e){
    var info=getNearestCountry(e,canvas);
    if(info){ canvas.style.cursor='pointer'; tip.style.display='block'; tip.style.left=(e.offsetX+16)+'px'; tip.style.top=(e.offsetY-28)+'px'; tip.innerHTML='<b>'+info.country+'</b><br>'+info.count+' '+(info.count===1?pm_t('project'):pm_t('projects')); }
    else { canvas.style.cursor='grab'; tip.style.display='none'; }
  });
  canvas.addEventListener('mouseleave',function(){ tip.style.display='none'; });
}

function getNearestCountry(e,canvas){
  if(!projectData||!window.IOSWorld||!IOSWorld._lastGlobeState) return null;
  var rect=canvas.getBoundingClientRect(),mx=e.clientX-rect.left,my=e.clientY-rect.top;
  var gs=IOSWorld._lastGlobeState,best=null,bestD=1800;
  Object.keys(projectData).forEach(function(c){
    var coord=CC[c]; if(!coord) return;
    var p=projectOnGlobe(coord[0],coord[1],gs);
    if(p.z<=0) return;
    var dx=mx-p.x,dy=my-p.y,d2=dx*dx+dy*dy;
    if(d2<bestD){ bestD=d2; best={country:c,count:(projectData[c]||[]).length}; }
  });
  return best;
}

function projectOnGlobe(lat,lng,gs){
  var la=lat*Math.PI/180,lo=lng*Math.PI/180+gs.rotY;
  var x=Math.cos(la)*Math.sin(lo),y=Math.sin(la),z=Math.cos(la)*Math.cos(lo);
  var y2=y*Math.cos(gs.rotX)-z*Math.sin(gs.rotX), z2=y*Math.sin(gs.rotX)+z*Math.cos(gs.rotX);
  return {x:gs.cx+x*gs.R,y:gs.cy-y2*gs.R,z:z2};
}

/* ============================================================ CSS */
function injectCSS(){
  var s=document.createElement('style'); s.id='pm-styles';
  s.textContent=`
#pm-overlay{position:fixed;inset:0;z-index:8000;background:rgba(3,16,31,.88);
  -webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);
  display:flex;align-items:center;justify-content:center;
  opacity:0;pointer-events:none;transition:opacity .35s}
#pm-overlay.open{opacity:1;pointer-events:auto}
#pm-box{width:min(1200px,97vw);height:min(720px,92vh);
  background:var(--bg-2,#061a30);border:1px solid rgba(130,165,200,.18);
  border-radius:12px;display:flex;flex-direction:column;overflow:hidden;
  box-shadow:0 0 80px rgba(130,196,77,.10)}
#pm-hdr{display:flex;align-items:center;gap:.8rem;padding:.8rem 1.2rem;
  border-bottom:1px solid rgba(130,165,200,.14);flex-shrink:0;background:rgba(3,16,31,.5)}
#pm-search-wrap{position:relative;display:flex;align-items:center;gap:.5rem;
  background:rgba(3,16,31,.6);border:1px solid rgba(130,165,200,.18);
  border-radius:6px;padding:.6rem 1rem;min-width:320;flex:1px}
#pm-search-wrap svg{flex-shrink:0;color:rgba(130,165,200,.5)}
#pm-search{background:none;border:none;outline:none;color:#eaf3fb;
  font-family:Montserrat,sans-serif;font-size:.92rem;width:100%;min-width:160px}
#pm-search::placeholder{color:rgba(130,165,200,.4)}
#pm-search-drop{position:absolute;top:calc(100% + 4px);left:0;right:0;z-index:99;
  background:#061a30;border:1px solid rgba(130,165,200,.2);border-radius:6px;
  box-shadow:0 8px 24px rgba(0,0,0,.4);display:none;overflow:hidden}
.pm-sr-item{display:flex;justify-content:space-between;align-items:center;
  padding:.55rem .9rem;cursor:pointer;font-size:.84rem;color:#cfe0ef;transition:background .15s}
.pm-sr-item:hover{background:rgba(130,196,77,.1)}
.pm-sr-n{font-family:'JetBrains Mono',monospace;font-size:.7rem;color:rgba(130,196,77,.8)}
#pm-htitle{flex:1;display:flex;align-items:center;gap:.7rem;min-width:0}
#pm-cname{font-family:Montserrat,sans-serif;font-weight:700;font-size:1.2rem;
  color:#eaf3fb;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#pm-ctag{font-family:'JetBrains Mono',monospace;font-size:.65rem;letter-spacing:.16em;
  text-transform:uppercase;color:#82C44D;background:rgba(130,196,77,.1);
  border:1px solid rgba(130,196,77,.3);padding:.2rem .55rem;border-radius:3px;white-space:nowrap}
.pm-arrow,.pm-pj-arr{background:none;border:1px solid rgba(255,255,255,.15);color:#ffffff;
  width:34px;height:34px;border-radius:4px;cursor:pointer;line-height:0;
  transition:border-color .2s,color .2s,background .2s;flex-shrink:0;
  display:flex;align-items:center;justify-content:center}
.pm-arrow:hover,.pm-pj-arr:hover{border-color:rgba(130,196,77,.5);color:#82C44D;background:rgba(130,196,77,.06)}
#pm-close{margin-left:.3rem;background:none;border:none;color:rgba(255,255,255,.7);
  font-size:1.2rem;cursor:pointer;width:32px;height:32px;display:flex;align-items:center;
  justify-content:center;border-radius:4px;transition:color .2s,background .2s}
#pm-close:hover{background:rgba(255,80,80,.1);color:#ff7070}
#pm-filters{display:flex;gap:.45rem;padding:.65rem 1.2rem;overflow-x:auto;scrollbar-width:none;
  border-bottom:1px solid rgba(130,165,200,.10);flex-shrink:0;background:rgba(6,16,32,.5)}
#pm-filters::-webkit-scrollbar{display:none}
.pm-filter-btn{background:none;border:1px solid rgba(130,165,200,.15);color:rgba(130,165,200,.6);
  padding:.3rem .85rem;border-radius:20px;cursor:pointer;font-family:Montserrat,sans-serif;
  font-size:.75rem;font-weight:600;white-space:nowrap;transition:all .2s}
.pm-filter-btn:hover{border-color:rgba(130,196,77,.4);color:#eaf3fb}
.pm-filter-btn.active{background:rgba(130,196,77,.14);border-color:rgba(130,196,77,.5);color:#82C44D}
#pm-body{flex:1;display:grid;grid-template-columns:1.65fr 1fr;overflow:hidden;min-height:0}
#pm-map-wrap{position:relative;background:rgba(3,10,22,.8);overflow:hidden}
#pm-map{width:100%;height:100%;display:block}
.pm-map-hint{position:absolute;bottom:8px;left:50%;transform:translateX(-50%);
  font-family:'JetBrains Mono',monospace;font-size:.58rem;letter-spacing:.12em;
  text-transform:uppercase;color:rgba(130,165,200,.35);white-space:nowrap;pointer-events:none}
#pm-panel{display:flex;flex-direction:column;border-left:1px solid rgba(130,165,200,.12);
  background:rgba(6,26,48,.6);overflow-y:auto}
#pm-proj-nav{display:flex;align-items:center;gap:.7rem;padding:.85rem 1.2rem .5rem;
  border-bottom:1px solid rgba(130,165,200,.10);flex-shrink:0}
#pm-pj-count{font-family:'JetBrains Mono',monospace;font-size:.74rem;color:rgba(130,165,200,.65);
  letter-spacing:.1em;flex:1;text-align:center}
#pm-card{flex:1;overflow-y:auto}
.pm-card-img{height:150px;background-size:cover;background-position:center;position:relative;
  flex-shrink:0}
.pm-card-img .pm-area-badge{position:absolute;bottom:10px;left:12px}
.pm-area-badge{display:inline-block;padding:.22rem .65rem;
  background:rgba(3,16,31,.82);border:1px solid rgba(130,196,77,.35);
  font-family:'JetBrains Mono',monospace;font-size:.6rem;letter-spacing:.12em;
  text-transform:uppercase;color:#82C44D;border-radius:3px}
.pm-mission{font-family:Montserrat,sans-serif;font-weight:700;font-size:.96rem;
  line-height:1.38;color:#eaf3fb;padding:1rem 1.2rem .4rem}
.pm-proj-desc{font-family:Montserrat,sans-serif;font-size:.82rem;color:rgba(207,224,239,.72);
  line-height:1.65;padding:0 1.2rem .75rem;font-style:italic}
.pm-meta-row{display:flex;flex-wrap:wrap;gap:.45rem;margin:0 1.2rem .8rem;align-items:center}
.pm-status{font-family:'JetBrains Mono',monospace;font-size:.6rem;letter-spacing:.1em;
  text-transform:uppercase;padding:.18rem .5rem;border-radius:3px}
.pm-st-active{background:rgba(130,196,77,.15);color:#82C44D;border:1px solid rgba(130,196,77,.3)}
.pm-st-closed{background:rgba(130,165,200,.1);color:rgba(130,165,200,.7);border:1px solid rgba(130,165,200,.2)}
.pm-st-susp{background:rgba(230,180,60,.1);color:rgba(230,180,60,.8);border:1px solid rgba(230,180,60,.2)}
.pm-code{font-family:'JetBrains Mono',monospace;font-size:.6rem;color:rgba(130,165,200,.45);letter-spacing:.06em}
.pm-field{display:flex;flex-direction:column;gap:.16rem;padding:0 1.2rem;margin-bottom:.8rem}
.pm-fl{font-family:'JetBrains Mono',monospace;font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(130,165,200,.45)}
.pm-fv{font-family:Montserrat,sans-serif;font-size:.86rem;color:#cfe0ef;line-height:1.42}
.pm-amt{color:#82C44D;font-weight:700}
.pm-navhint{margin:1rem 1.2rem 1.2rem;font-family:'JetBrains Mono',monospace;font-size:.58rem;
  letter-spacing:.06em;color:rgba(130,165,200,.3);line-height:1.6}
/* ---- agency logo ---- */
.pm-agency-row{display:flex;flex-direction:column;align-items:flex-start;gap:.25rem;margin:0 1.2rem .8rem;padding-top:.55rem;border-top:1px solid rgba(130,196,77,.1)}
.pm-agency-logo{display:inline-flex;align-items:center;justify-content:center;min-width:46px;height:26px;padding:0 .45rem;border-radius:4px;font-family:Montserrat,sans-serif;font-size:.62rem;font-weight:800;letter-spacing:.07em;color:#fff;flex-shrink:0;text-transform:uppercase}
.pm-agency-logo-img{display:block;max-width:170px;max-height:48px;width:auto;height:auto;object-fit:contain;object-position:left center;background:#fff;border-radius:6px;padding:5px 10px;margin-top:.5rem;filter:none}
.pm-agency-logo-wrap{display:inline-flex;align-items:center;justify-content:center;width:fit-content;max-width:180px;height:52px;background:#fff;border-radius:6px;padding:4px 10px;margin-top:.5rem;overflow:hidden}
.pm-agency-logo-wrap img{max-width:160px;max-height:42px;width:auto;height:auto;object-fit:contain;object-position:center}
.pm-logo-wide{max-width:220px;height:58px;padding:4px 14px}
.pm-logo-wide img{max-width:200px;max-height:50px}
.pm-agency-text{display:flex;flex-direction:column;gap:.1rem}
.pm-agency-text .pm-fl{font-size:.65rem;color:rgba(170,210,240,.55);letter-spacing:.06em;text-transform:uppercase}
.pm-agency-text .pm-fv{font-size:.75rem;color:rgba(220,240,255,.85);font-weight:500}

.pm-empty{padding:2rem 1.4rem;color:rgba(130,165,200,.5);font-size:.88rem;font-style:italic}
@media(max-width:760px){
  #pm-body{grid-template-columns:1fr;grid-template-rows:55% 45%}
  #pm-panel{border-left:none;border-top:1px solid rgba(130,165,200,.12)}
  #pm-box{height:92vh}
  .pm-card-img{height:110px}}
  `;
  document.head.appendChild(s);
}

/* ============================================================ BOOT */
document.addEventListener('DOMContentLoaded',loadAndBoot);
if(document.readyState!=='loading') loadAndBoot();

/* Expose for external wiring */
window.IOS_openModal = openModal;

})();
