export default {
  global: {
    Name: 'Tecnología y plan de seguridad',
    Description:
      'El componente formativo “Tecnología y plan de seguridad” aborda el uso de herramientas tecnológicas aplicadas a la seguridad privada, los sistemas de videovigilancia, equipos de monitoreo, medios de transmisión y características técnicas. Además, desarrolla los elementos necesarios para diseñar, ajustar y evaluar planes de seguridad orientados a la protección de personas, bienes e instalaciones.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Tecnología aplicada a la seguridad privada',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Evolución tecnológica en la seguridad privada',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Transformación tecnológica del mercado de seguridad privada',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Inteligencia artificial aplicada a la vigilancia',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Internet de las Cosas (IoT) en la protección de activos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Drones, robots y tecnologías emergentes en seguridad',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Reconocimiento facial, biometría y ciberseguridad',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo:
              'Analítica de datos, <em>blockchain</em> e inteligencia geoespacial',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Retos de la seguridad frente a la tecnología',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistemas, equipos y conexiones para la videovigilancia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Sistemas de circuito cerrado de televisión (CCTV)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de cámaras de videovigilancia',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Parámetros técnicos para la selección de cámaras',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Sistemas de grabación y almacenamiento',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Monitores, visualización y control de cámaras',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Medios de transmisión y conectividad',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Características técnicas de los equipos',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo:
              'Infraestructura de red y funcionalidad de los sistemas de monitoreo',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Plan de seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto, diseño y propósito del plan de seguridad',
            hash: 't_1_1',
          },
          {
            numero: '3.2',
            titulo: 'Alcance, características y elementos del plan',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Diagnóstico organizacional y análisis de vulnerabilidades',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Seguridad física y procedimientos operativos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Gestión del talento humano y atención a usuarios',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Investigación de incidentes e innovación tecnológica',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Evaluación y mejora continua',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo: 'Ventajas de implementar un plan integral de seguridad',
            hash: 't_3_8',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Analítica de datos',
      significado:
        'Proceso de recopilación y análisis de información para apoyar la toma de decisiones.',
    },
    {
      termino: 'Biometría',
      significado:
        'Tecnología que permite identificar personas mediante características físicas o conductuales.',
    },
    {
      termino: 'Blockchain',
      significado:
        'Tecnología de registro distribuido que garantiza la integridad y trazabilidad de la información.',
    },
    {
      termino: 'CCTV',
      significado:
        'Sistema de circuito cerrado de televisión utilizado para vigilancia y monitoreo.',
    },
    {
      termino: 'Ciberseguridad',
      significado:
        'Conjunto de medidas destinadas a proteger sistemas, redes y datos digitales.',
    },
    {
      termino: 'Conectividad IP',
      significado:
        'Capacidad de comunicación entre dispositivos mediante protocolos de internet.',
    },
    {
      termino: 'DVR',
      significado:
        'Grabador digital utilizado para almacenar imágenes provenientes de cámaras analógicas.',
    },
    {
      termino: 'Inteligencia artificial',
      significado:
        'Tecnología que permite a los sistemas realizar tareas que requieren capacidades cognitivas humanas.',
    },
    {
      termino: 'Internet de las Cosas (IoT)',
      significado:
        'Red de dispositivos interconectados capaces de intercambiar información.',
    },
    {
      termino: 'NVR',
      significado: 'Grabador de video en red utilizado con cámaras IP.',
    },
    {
      termino: 'Plan de seguridad',
      significado:
        'Documento que establece estrategias, procedimientos y recursos para gestionar riesgos.',
    },
    {
      termino: 'Reconocimiento facial',
      significado:
        'Sistema biométrico que identifica personas mediante rasgos faciales.',
    },
    {
      termino: 'Resolución',
      significado:
        'Nivel de detalle que puede capturar una cámara de videovigilancia.',
    },
    {
      termino: 'Videovigilancia',
      significado:
        'Proceso de observación y registro de imágenes para fines de seguridad.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'Debilidad que puede ser aprovechada por una amenaza para generar un riesgo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Argüello, A. (2024). Sistemas DVR: Componentes y funcionamiento en videovigilancia. Manual Técnico de Sistemas de Seguridad Digital.',
      link: 'https://www.infoteknico.com/que-es-un-dvr-y-como-funciona/',
    },
    {
      referencia:
        'Avigilon Corporation. (s.f.). Criterios técnicos y estratégicos para la selección de cámaras CCTV.',
      link: 'https://www.avigilon.com/es/blog/types-of-cctv-cameras',
    },
    {
      referencia: 'Avigilon Corporation. (s.f.). Types of CCTV cameras.',
      link: 'https://www.avigilon.com/es/blog/types-of-cctv-cameras',
    },
    {
      referencia:
        'Axis Communications. (2022). Network video products: Technical specifications and installation guidelines.',
      link: '',
    },
    {
      referencia:
        'Boeckl, K., Fagan, M., Fisher, W., Lefkovitz, N., Megas, K. N., Nadeau, E., O’Rourke, D. G., Piccarreta, B., & Scarfone, K. (2019). Considerations for managing Internet of Things (IoT) cybersecurity and privacy risks (NISTIR 8228). National Institute of Standards and Technology.',
      link: 'https://doi.org/10.6028/NIST.IR.8228',
    },
    {
      referencia:
        'Bosch Security Systems. (2023). IP video: Concepts and applications white paper.',
      link: '',
    },
    {
      referencia:
        'Cifuentes Olarte, A., Ceballos, C. A., & Cifuentes Giraldo, O. L. (2021). Sistema de gestión de la seguridad y salud en el trabajo: Lineamentos jurídicos y técnicos para el diseño e implementación del SGSST con los estándares (2.ª ed.). Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Data Técnica Especializada. (s.f.). Componentes y sistemas CCTV: Manual técnico integral.',
      link: '',
    },
    {
      referencia:
        'Domótica y Eléctricos S.A. (s.f.). CCTV cámaras de seguridad: Guía técnica y aplicaciones.',
      link: 'https://www.domoticayelectricos.com',
    },
    {
      referencia:
        'García Carreño, D., Navarro Ardila, K., & Parra Osorio, L. (2020). Desarrollo de los sistemas de gestión de seguridad y salud en el trabajo en Colombia a partir del Decreto 1072: Una revisión sistemática. Via Inveniendi Et Iudicandi, 15(2), 37-57.',
      link: 'https://doi.org/10.15332/19090528/6242',
    },
    {
      referencia:
        'García, F. J. (2010). Videovigilancia: CCTV usando vídeos IP.',
      link: '',
    },
    {
      referencia:
        'García Mata, F. J. (2010). Sistemas de videovigilancia: Componentes, aplicaciones y tecnologías emergentes. En Manual técnico de videovigilancia profesional (pp. 45-128).',
      link: '',
    },
    {
      referencia:
        'Goyes Moreno, I., & Hidalgo Oviedo, M. (2012). Los principios del derecho laboral y la seguridad social dinamizan la jurisprudencia constitucional en Colombia. Entramado, 8(2), 168–183.',
      link: 'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S1900-38032012000200012&lng=en',
    },
    {
      referencia:
        'Institute of Electrical and Electronics Engineers. (2018). IEEE 802.11 - Wireless LAN medium access control and physical layer specifications.',
      link: '',
    },
    {
      referencia:
        'International Association for Healthcare Security. (2021). Healthcare security technologies: CCTV implementation guidelines. IAHSS Technical Manual Series.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2019). ISO/IEC 62676 - Video surveillance systems for use in security applications.',
      link: '',
    },
    {
      referencia:
        'IP VideoMarket. (2022). Global video surveillance equipment market analysis.',
      link: 'https://www.ipvideomarket.info',
    },
    {
      referencia:
        'IFC Corporación Financiera Internacional. (2017). Empleo de fuerzas de seguridad: Evaluación y gestión de riesgos e impactos. Guía para el sector privado en mercados emergentes.',
      link: 'https://www.ifc.org/sustainabilitypublications',
    },
    {
      referencia:
        'Lateris. (2024, 9 de octubre). La tecnología en la seguridad privada: Innovaciones y tendencias.',
      link: 'https://lateris.com/seguridad-privada1/tecnologia-seguridad-privada-innovaciones-tendencias/',
    },
    {
      referencia:
        'Ministerio de Vivienda, Ciudad y Territorio. (2001). Ley 675 de 2001: Por medio de la cual se expide el régimen de propiedad horizontal.',
      link: 'https://minvivienda.gov.co/sites/default/files/normativa/0675%20-%202001.pdf',
    },
    {
      referencia:
        'MXE Estrategia. (2023). Seguridad empresarial: Manual del empresario. MXE Inteligencia y Estrategia Empresarial.',
      link: 'https://www.mxestrategia.com',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2020). NIST Special Publication 800-94 - Guide to intrusion detection and prevention systems.',
      link: '',
    },
    {
      referencia:
        'Nova Seguridad. (s.f.). Inteligencia artificial en la seguridad privada.',
      link: 'https://www.novaseguridad.com.co/inteligencia-artificial-seguridad-privada/',
    },
    {
      referencia:
        'Nova Seguridad. (s.f.). La tecnología de la seguridad privada en la nueva era.',
      link: 'https://www.novaseguridad.com.co/seguridad-privada-tecnologia/',
    },
    {
      referencia:
        'Obregón Hidalgo, P. E. (2017). Seguridad y monitoreo mediante sistemas NVR: Análisis comparativo y aplicaciones industriales [Tesis de especialización, Universidad Tecnológica Nacional].',
      link: '',
    },
    {
      referencia:
        'ONVIF Consortium. (2021). ONVIF profile specifications: Open network video interface forum standards.',
      link: 'https://www.onvif.org/specifications/',
    },
    {
      referencia:
        'Security Industry Association. (2022). Video surveillance: Technology trends and best practices. SIA Publications.',
      link: '',
    },
    {
      referencia:
        'SecurityInfoWatch. (2023). CCTV technology evolution and future trends.',
      link: 'https://www.securityinfowatch.com/video-surveillance',
    },
    {
      referencia:
        'Sevilla, P. (2024, 8 de febrero). ¿Qué es un plan de seguridad integral en una empresa? Nalanda Global.',
      link: 'https://www.nalandaglobal.com/blog/que-es-un-plan-de-seguridad-integral-en-una-empresa/',
    },
    {
      referencia:
        'Siete24. (2016, 5 de diciembre). Plan estratégico de seguridad: ¿Qué es y por qué contar con uno?',
      link: 'https://blog.siete24.com/plan-estrategico-seguridad-que-es-por-que-contar-con-uno',
    },
    {
      referencia:
        'Superintendencia de Vigilancia y Seguridad Privada. (2010). Manual de doctrina de la SuperVigilancia (Versión 1.0).',
      link: '',
    },
    {
      referencia:
        'Telecommunications Industry Association. (2020). TIA-568 - Commercial building telecommunications cabling standard.',
      link: '',
    },
    {
      referencia:
        'Tumal Enríquez, A. C. (2023, 18 de octubre). Importancia de la actualización en normatividad de Seguridad y Salud en el Trabajo en Colombia. Boletín Informativo CEI. Universidad Mariana.',
      link: 'https://revistas.umariana.edu.co/index.php/BoletinInformativoCEI/article/view/3656/3867',
    },
    {
      referencia:
        'Video Surveillance Guide. (2024). Technical specifications database for security cameras.',
      link: 'https://www.videosurveillance-guide.com',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },

    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },

    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan José Calderon Gutiérrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador fullstack',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },

    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
