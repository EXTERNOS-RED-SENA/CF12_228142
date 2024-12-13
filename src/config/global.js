export default {
  global: {
    componenteFormativo:
      'Configuración y entrega de equipos de cómputo: protocolos y pruebas',
    descripcionCurso:
      'La configuración y entrega de equipos de cómputo es un proceso integral que incluye protocolos y pruebas con los cuales se realiza la validación de sistemas para asegurar el correcto funcionamiento de <i>hardware</i> y <i>software</i>, la personalización del equipo según las necesidades del usuario, y el soporte post-entrega para garantizar un rendimiento óptimo a lo largo del tiempo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.svg'),
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
        titulo: 'Validación de sistemas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Pruebas de <em>hardware</em>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Verificación de <em>software</em>',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Test de rendimiento',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Configuración final',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Personalización del usuario',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: '<em>Backup</em> y restauración',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Proceso general de preparación de datos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Protocolos de entrega',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Verificación de requerimientos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Documentación de entrega',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Capacitación básica',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Soporte post-entrega',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Políticas de garantía',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Mantenimiento programado',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Gestión de incidencias',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Conclusiones',
            hash: 't_4_4',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228142_CF012_DU.pdf',
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
  complementario: [
    {
      tema: '1. Validación de sistemas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2024, 3 abril). Pruebas de rendimiento [Vídeo]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oNY2a2_yOps',
    },
    {
      tema: '2. Configuración final',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022, 16 septiembre). Criterios de respaldo y recuperación [Vídeo]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3cYiy1n4hWc',
    },
    {
      tema: '1. Validación de sistemas',
      referencia:
        'O, M. L. S. S. R. (2023, 25 julio). Verificación y validación en las pruebas de software. IT tester - Základné informácie o testovaní softvéru.',
      tipo: 'Portal web',
      link:
        'https://ittester.sk/es/pruebas-manuales/verificacion-validacion/?gad_source=2&gclid=Cj0KCQiAire5BhCNARIsAM53K1j-MHmzvtnCKfO4P1ckx14xWk_dbz7HRZr4rQkfUJR9fgl0vZ-quHwaAu3NEALw_wcB',
    },
    {
      tema: '3. Protocolos de entrega',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023b, septiembre 7). Validación de requisitos [Vídeo]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HEl0GrMFq88',
    },
    {
      tema: '1. Validación de sistemas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023a, febrero 1). Herramientas de hardware y software [Vídeo]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6fjWmQnrBpw',
    },
  ],
  glosario: [
    {
      termino: 'Actualizaciones finales',
      significado:
        'Proceso de instalar la última versión de <em>software</em> y parches de seguridad en un equipo antes de su entrega para mejorar su rendimiento y protección.',
    },
    {
      termino: '<em>Backup</em>',
      significado:
        'Copia de seguridad de datos importantes para protegerlos y permitir su recuperación en caso de fallos.',
    },
    {
      termino: 'Capacitación básica',
      significado:
        'Proceso de enseñar al usuario final cómo utilizar y mantener el equipo de manera adecuada.',
    },
    {
      termino: 'Configuración final',
      significado:
        'Etapa que prepara el equipo para su uso inmediato por parte del usuario, incluyendo personalización, <em>backup</em> y actualizaciones finales.',
    },
    {
      termino: 'Documentación de entrega',
      significado:
        'Registro detallado del estado del equipo, las especificaciones técnicas y cualquier configuración realizada al momento de la entrega.',
    },
    {
      termino: 'Garantía',
      significado:
        'Acuerdo que establece las condiciones bajo las cuales el proveedor se compromete a reparar o reemplazar un equipo defectuoso.',
    },
    {
      termino: 'Gestión de incidencias',
      significado:
        'Proceso de identificar, registrar, clasificar y resolver problemas que afectan el funcionamiento del equipo.',
    },
    {
      termino: '<em>Hardware</em>',
      significado: 'Componentes físicos de un equipo de cómputo.',
    },
    {
      termino: 'Incidencias',
      significado:
        'Problemas o fallos que afectan el funcionamiento del equipo.',
    },
    {
      termino: 'Mantenimiento programado',
      significado:
        'Tareas rutinarias y preventivas que aseguran el funcionamiento óptimo del equipo durante su vida útil.',
    },
    {
      termino: 'Personalización de usuario',
      significado:
        'Proceso de configurar el equipo según las preferencias y necesidades específicas del usuario.',
    },
    {
      termino: 'Pruebas de <em>hardware</em>',
      significado:
        'Verificación de que todos los componentes físicos del equipo funcionen correctamente.',
    },
    {
      termino: '<em>Tests</em> de rendimiento',
      significado:
        'Evaluaciones que miden la capacidad del equipo para manejar cargas de trabajo específicas, asegurando que cumpla con las expectativas del usuario.',
    },
    {
      termino: 'Verificación de <em>software</em>',
      significado:
        'Proceso de asegurar que el sistema operativo y las aplicaciones estén instaladas y configuradas adecuadamente en un equipo de cómputo.',
    },
  ],
  referencias: [
    {
      referencia:
        '<em>American National Standards Institute</em>. (2019). ANSI/ISO/IEC 17025:2017 <em>General requirements for the competence of testing and calibration laboratories</em>.',
      link: '',
    },
    {
      referencia:
        'García, J. (2020). <em>Gestión de equipos de cómputo: Prácticas y protocolos</em>.',
      link: '',
    },
    {
      referencia:
        '<em>International Organization for Standardization</em>. (2018). ISO/IEC 27001:2013 <em>Information security management systems — Requirements</em>.',
      link: '',
    },
    {
      referencia:
        'López, R. (2022). <em>Gestión de equipos informáticos en entornos corporativos</em>.',
      link: '',
    },
    {
      referencia:
        'Martínez, L. (2019). <em>Documentación y trazabilidad en la entrega de equipos informáticos</em>.',
      link: '',
    },
    {
      referencia:
        'Microsoft. (2021). <em>Windows 10 deployment and management</em>.',
      link: '',
    },
    {
      referencia:
        '<em>National Institute of Standards and Technology</em>. (2018). NIST Special Publication 800-53 Revision 5: <em>Security and Privacy Controls for Information Systems and Organizations</em>.',
      link: '',
    },
    {
      referencia:
        'Pérez, M. (2018). <em>Capacitación en configuración de equipos de cómputo</em>.',
      link: '',
    },
    {
      referencia:
        'Pérez, J., & Sánchez, M. (2021). <em>Protocolos de entrega y pruebas de equipos de cómputo</em>.',
      link: '',
    },
    {
      referencia:
        'Vázquez, F. (2023). <em>Manual de configuración y mantenimiento de sistemas informáticos</em>.',
      link: '',
    },
  ],
}
