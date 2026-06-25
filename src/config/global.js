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
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
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
