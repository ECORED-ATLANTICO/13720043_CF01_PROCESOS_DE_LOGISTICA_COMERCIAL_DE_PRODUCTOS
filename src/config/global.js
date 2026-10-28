export default {
  global: {
    Name: 'Preparación de pedidos y despacho de mercancías',
    Description:
      'Este componente formativo desarrolla los fundamentos de la preparación de pedidos y el despacho de mercancías dentro de los procesos logísticos. Aborda la organización de las operaciones de recibo y despacho, la documentación requerida, las especificaciones de materiales y mercancías, la normativa aplicable a los productos, las herramientas tecnológicas utilizadas en la gestión de pedidos y los indicadores de desempeño. Asimismo, proporciona los conocimientos necesarios para planificar, clasificar, preparar y verificar pedidos conforme a los procedimientos establecidos y a las necesidades operativas de la organización.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
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
        titulo: 'Fundamentos de la preparación de pedidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto e importancia de la preparación de pedidos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Operaciones logísticas en el proceso de despacho',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Procesos de recibo y despacho de mercancías',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Actividades y procedimientos del despacho',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Organización logística y contexto empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Identidad corporativa',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Contexto comercial de la organización',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Objetivos, misión, visión y políticas organizacionales',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Estrategias aplicadas al proceso logístico',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Documentación para la preparación y despacho',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto e importancia de los documentos logísticos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de documentos logísticos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Orden de pedido',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Listas de <em>picking</em>',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Documentos de despacho y remisiones',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Soportes documentales del proceso logístico',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Especificaciones de materiales y mercancías',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de mercancía',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de materiales y mercancías',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Naturaleza y características de las mercancías',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Normativa aplicable a los productos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Tipos y familias de productos',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Procedimientos para la manipulación y despacho',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Herramientas tecnológicas para la preparación de pedidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Códigos de barras',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Lectores de códigos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Terminales de radiofrecuencia (RF)',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Sistemas de voz',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Sistemas de reconocimiento de voz',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Gestión de pedidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Ciclo del pedido',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Métodos y sistemas de preparación de pedidos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Armado y consolidación de pedidos',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Fases de preparación del pedido',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Métodos de verificación',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Rutas de reparto',
            hash: 't_6_6',
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
        download: 'downloads/62110009_CF02_CFA.zip',
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
      termino: 'Alistamiento de pedidos',
      significado:
        'Proceso de selección, preparación y organización de los productos solicitados para garantizar su despacho conforme con las especificaciones del pedido.',
    },
    {
      termino: 'Código de barras',
      significado:
        'Sistema de identificación automática que representa información mediante barras y espacios, utilizado para registrar y controlar mercancías durante las operaciones logísticas.',
    },
    {
      termino: 'Consolidación de pedidos',
      significado:
        'Actividad que consiste en agrupar productos o pedidos para optimizar su preparación, manipulación, transporte y distribución.',
    },
    {
      termino: 'Despacho de mercancías',
      significado:
        'Proceso logístico mediante el cual los productos preparados son entregados al transportador o al cliente, cumpliendo los procedimientos establecidos por la organización.',
    },
    {
      termino: 'Documento logístico',
      significado:
        'Registro físico o digital que respalda las operaciones de recepción, almacenamiento, preparación, despacho y entrega de mercancías.',
    },
    {
      termino: 'Gestión de pedidos',
      significado:
        'Conjunto de actividades orientadas a recibir, procesar, preparar, verificar y despachar los pedidos de acuerdo con los requerimientos del cliente.',
    },
    {
      termino: 'Herramientas tecnológicas',
      significado:
        'Dispositivos, equipos y sistemas utilizados para facilitar el control, seguimiento y automatización de las operaciones de preparación y despacho de mercancías.',
    },
    {
      termino: 'Identidad corporativa',
      significado:
        'Conjunto de elementos que representan la filosofía, misión, visión, valores y políticas que orientan la gestión de una organización.',
    },
    {
      termino: 'Indicador logístico',
      significado:
        'Medida cuantitativa o cualitativa utilizada para evaluar el desempeño, la eficiencia y la calidad de los procesos logísticos.',
    },
    {
      termino: 'Lista de picking',
      terminoHtml: 'Lista de <em>picking</em>',
      significado:
        'Documento que contiene la relación de productos, cantidades y ubicaciones necesarias para realizar la preparación de un pedido.',
    },
    {
      termino: 'Manipulación de mercancías',
      significado:
        'Conjunto de operaciones realizadas para mover, cargar, descargar, organizar o acondicionar los productos durante los procesos logísticos.',
    },
    {
      termino: 'Mercancía',
      significado:
        'Bien o producto destinado al almacenamiento, comercialización, distribución o entrega dentro de la cadena logística.',
    },
    {
      termino: 'Normativa de producto',
      significado:
        'Conjunto de requisitos técnicos, legales y organizacionales que regulan las características, manipulación y comercialización de los productos.',
    },
    {
      termino: 'Orden de pedido',
      significado:
        'Documento mediante el cual se formaliza la solicitud de productos, especificando cantidades, referencias y condiciones de entrega.',
    },
    {
      termino: 'Preparación de pedidos',
      significado:
        'Proceso logístico que comprende la localización, selección, verificación, embalaje y acondicionamiento de los productos solicitados por el cliente.',
    },
    {
      termino: 'Radiofrecuencia (RF)',
      significado:
        'Tecnología de comunicación inalámbrica utilizada para capturar y transmitir información en tiempo real durante las operaciones logísticas.',
    },
    {
      termino: 'Remisión',
      significado:
        'Documento que acompaña la entrega de mercancías y registra la relación de productos despachados al cliente o destinatario.',
    },
    {
      termino: 'Rutas de alistamiento',
      significado:
        'Recorridos establecidos dentro del almacén para optimizar la recolección de mercancías durante la preparación de pedidos.',
    },
    {
      termino: 'Sistema de reconocimiento de voz',
      significado:
        'Tecnología que permite ejecutar operaciones logísticas mediante instrucciones de voz, mejorando la productividad y reduciendo errores en la preparación de pedidos.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad para identificar y realizar el seguimiento de un producto durante todas las etapas de preparación, despacho y distribución mediante el registro de información confiable.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ballou, R. H. (2004). Logística: administración de la cadena de suministro (5.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Bowersox, D. J., Closs, D. J., & Cooper, M. B. (2013). Administración y logística en la cadena de suministros (2.ª ed.). McGraw-Hill Interamericana.',
    },
    {
      referencia:
        'Chopra, S., & Meindl, P. (2008). Administración de la cadena de suministro: estrategia, planeación y operación (3.ª ed.). Pearson Educación.',
      link: 'https://gc.scalahed.com/recursos/files/r161r/w24567w/Sunil_Chopral.pdf',
    },
    {
      referencia:
        'Christopher, M. (2016). Logística y gestión de la cadena de suministro (5.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Consejo Colombiano de Seguridad. (2022). Manual de buenas prácticas logísticas.',
      link: 'https://ccs.org.co/',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2024). Materiales de formación: Gestión logística y despacho de mercancías.',
      link: 'https://www.sena.edu.co/',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2024). Biblioteca Digital SENA.',
      link: 'https://biblioteca.sena.edu.co/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto temático logística',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Experto temático comercio y servicio',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
