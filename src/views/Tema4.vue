<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Especificaciones de materiales y mercancías

    .bloque-texto-g.bg-color-11.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Conocer las características de los materiales y mercancías permite realizar una adecuada preparación de pedidos y un despacho seguro.  Su correcta clasificación, identificación y manipulación ayuda a minimizar riesgos y conservar los productos durante el proceso logístico.

    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Concepto de mercancía

    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema4/img03.svg", style="max-width: 150px").mx-auto
      .col-lg
        p.mb-0 La mercancía es todo bien o producto que se comercializa, almacena, transporta o distribuye dentro de la cadena logística. Puede comprender materias primas, productos en proceso y productos terminados que circulan entre proveedores, fabricantes, distribuidores y clientes.


    .container
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-07.p-4
            .col-lg-12
              p.mb-0 Finalmente, profundiza en la gestión de pedidos mediante el estudio del ciclo del pedido, los métodos de preparación, la consolidación, la verificación y las rutas de alistamiento, integrando indicadores para el seguimiento y control del desempeño logístico, con el propósito de organizar eficientemente las operaciones de preparación y despacho de mercancías conforme a los procedimientos establecidos por la organización.

    p.mb-4 En logística, las características de cada mercancía determinan las condiciones necesarias para su identificación, manipulación, almacenamiento y despacho. Por ello, es fundamental conocer sus especificaciones, seleccionar los equipos adecuados y aplicar procedimientos que garanticen su integridad y conservación durante las operaciones.

    
    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-start.align-items-center.bg-fondo-12
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora de alimentos verifica las fechas de vencimiento, el estado de los empaques y las condiciones de conservación de sus productos antes de preparar los pedidos. Estas actividades permiten identificar mercancías que requieren cuidados especiales, prevenir deterioros y garantizar que los productos sean despachados en condiciones adecuadas de calidad y seguridad.
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto

    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Tipos de materiales y mercancías

    .bg-full-width.bg-fondo-03.px-5.py-4
      img(src="@/assets/curso/tema4/img04.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text Los materiales y las mercancías se clasifican según su naturaleza, características físicas y condiciones de manipulación. Esta clasificación permite establecer procedimientos adecuados de almacenamiento, embalaje, transporte y despacho, garantizando su conservación y seguridad.

    p.mb-4 Entre los principales tipos de mercancías se encuentran:



    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 3.
          span Mercancías: tipos y materiales
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th(style="width: 30%") Tipo de mercancía
                th Características y requerimientos logísticos
            tbody
              tr
                td Perecederas
                td Productos con vida útil limitada que requieren controles de temperatura, humedad o fechas de vencimiento.
              tr
                td No perecederas
                td Productos que pueden almacenarse durante períodos prolongados, bajo condiciones adecuadas de conservación.
              tr
                td Frágiles
                td Artículos susceptibles a golpes o roturas que necesitan embalajes protectores y manipulación cuidadosa.
              tr
                td Peligrosas
                td Sustancias o productos que representan riesgos y requieren identificación, almacenamiento y transporte conforme a la normativa aplicable.
              tr
                td Voluminosas o pesadas
                td Mercancías que, por sus dimensiones o peso, requieren espacios y equipos especiales de movilización.
              tr
                td De alto valor
                td Productos que necesitan controles adicionales de seguridad, identificación y trazabilidad.

    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-04.p-4
          p.mb-0 La identificación de estas características facilita la selección de equipos, materiales de embalaje y medidas de seguridad apropiadas para cada operación logística.


    .bg-full-width.bg-fondo-14.px-5.py-2.py-md-4.mb-4
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1.p-0
            figure
              img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
            .tarjeta.tarjeta--blanca.br-15.p-5.p-md-4.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 Una empresa comercializadora de materiales de construcción y artículos para el hogar almacena productos con diferentes características. Los artículos de vidrio requieren embalajes protectores para evitar roturas, mientras que los materiales pesados necesitan equipos mecánicos para su movilización. Esta clasificación permite organizar el almacén y aplicar procedimientos seguros durante la preparación y el despacho de pedidos.

    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Naturaleza y características de las mercancías
    
    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/img05.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") La naturaleza de una mercancía hace referencia al conjunto de propiedades físicas, químicas y funcionales que determinan la forma en que debe ser almacenada, manipulada y transportada. Estas características permiten establecer procedimientos seguros y eficientes durante la preparación de pedidos.
        .container
          .row.align-items-center.bg-fondo-09.br-15.mb-3.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/img06.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 Entre los aspectos más importantes se encuentran el peso, las dimensiones, el volumen, la resistencia, la fragilidad, la temperatura de conservación, la peligrosidad y la vida útil del producto. El desconocimiento de estas características puede ocasionar daños a la mercancía, accidentes laborales o incumplimientos en la entrega.
        p.mb-0 La evaluación de las características de los productos también facilita la selección del embalaje, los equipos de movilización y los medios de transporte más adecuados para cada operación logística.

    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-end.align-items-center.bg-fondo-08
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora de productos lácteos debe mantener las condiciones de refrigeración durante el almacenamiento y transporte. Antes del despacho, el personal verifica la temperatura, las fechas de vencimiento y el estado de los empaques. Estos controles permiten conservar la calidad de los productos y reducir los riesgos de deterioro durante su distribución.


    separador
    
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Normativa aplicable a los productos

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-10.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img07.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La normativa aplicable a los productos comprende las disposiciones legales y técnicas que regulan su almacenamiento, manipulación, transporte y comercialización. Su cumplimiento contribuye a garantizar la calidad de las mercancías, la seguridad de las personas y la protección del ambiente.

    .container
      .row.align-items-center.bg-fondo-09.br-15.mb-5.p-4
        .col-lg-auto.order-1
          img.d-none.d-lg-flex(src="@/assets/curso/tema4/img08.svg", style="max-width: 150px").mx-auto
        .col-lg.order-2
          p.mb-0 Las organizaciones deben aplicar los requisitos correspondientes a cada tipo de producto, especialmente los relacionados con etiquetado, trazabilidad, seguridad y condiciones de conservación. En Colombia, determinadas mercancías, como alimentos, medicamentos y sustancias peligrosas, están sujetas a regulaciones específicas y controles de las autoridades competentes.

    .bg-full-width.bg-fondo-14.px-5.py-2.py-md-4.mb-4
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1.p-0
            figure
              img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
            .tarjeta.tarjeta--blanca.br-15.p-5.p-md-4.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora de medicamentos aplica procedimientos de almacenamiento y transporte acordes con los requisitos sanitarios vigentes. Para ello, controla las condiciones de temperatura, verifica las fechas de vencimiento y mantiene registros de trazabilidad. Estas medidas contribuyen a conservar la calidad de los productos y proteger la seguridad de los consumidores.

    separador
    
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Tipos y familias de productos

    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema4/img09.svg", style="max-width: 150px").mx-auto
      .col-lg
        p.mb-0 Las familias de productos son agrupaciones de mercancías que comparten características relacionadas con su composición, uso, presentación o condiciones de almacenamiento. Esta clasificación facilita la organización del inventario, la ubicación de los productos y la preparación de pedidos.

    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-07.p-4
            .col-lg-12
              p.mb-0 Agrupar las mercancías por familias permite reducir los tiempos de búsqueda, optimizar el aprovechamiento del espacio y establecer procedimientos de manipulación adecuados para cada categoría.

    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-start.align-items-center.bg-fondo-12
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora de alimentos organiza sus productos en familias como lácteos, bebidas, cereales y productos de panadería. Esta clasificación facilita la identificación de las mercancías, el control de inventarios y la preparación de pedidos. Además, permite asignar espacios de almacenamiento según las condiciones de conservación requeridas por cada grupo.
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto

    separador
    
    #t_4_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.6 Procedimientos para la manipulación y despacho


    .bg-full-width.bg-fondo-03.px-5.py-4
      img(src="@/assets/curso/tema4/img10.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text La manipulación de mercancías comprende las actividades de levantamiento, movilización y ubicación de productos dentro del almacén. Su ejecución requiere identificar las características de la carga, reconocer los riesgos asociados y utilizar equipos adecuados, como transpaletas, montacargas o bandas transportadoras, según las condiciones de la operación.

    p.mb-5 Durante el despacho, el personal debe verificar la correspondencia entre la mercancía y el pedido autorizado, revisar el embalaje y etiquetado, comprobar la documentación y registrar la salida. Estos procedimientos contribuyen a prevenir accidentes, evitar daños y garantizar entregas correctas.

    
    .bg-full-width.bg-fondo-14.px-5.py-2.py-md-4.mb-4
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1.p-0
            figure
              img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
            .tarjeta.tarjeta--blanca.br-15.p-5.p-md-4.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora de muebles utiliza transpaletas y montacargas para movilizar productos pesados o voluminosos. Antes del despacho, el personal verifica las referencias solicitadas, inspecciona los embalajes y confirma la documentación correspondiente. Posteriormente, organiza la carga en el vehículo para prevenir desplazamientos y daños durante el transporte. 


              
    .container
      .row.mb-lg-3.mb-4.justify-content-center
        .col-xl-6.col-lg-6.col-md-12.col-12.mb-0.p-4
          .row.justify-content-start.align-items-center.bg-fondo-15.p-3.p-md-4.position-relative.h-100
            .col-lg-7.col-md-7.col-sm-8.col-12.z-2
              h4.mb-2 Video sugerido. Tipos de carga, envase, embalaje, etiquetado – logística interna
              p.mb-3 Para profundizar en las características y especificaciones de los materiales y mercancías, se invita a consultar el siguiente video, que complementa los conceptos abordados y fortalece su aplicación en los procesos logísticos.
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=b3xWXgVw5cI'" target="_blank")
                span ir al recurso
            img(src="@/assets/curso/tema1/img30.png", alt="", style="position: absolute; bottom: -20px; right: 20px; width: 220px; pointer-events: none;").d-none.d-lg-flex

        .col-xl-6.col-lg-6.col-md-12.col-12.mb-0.p-4
          .row.justify-content-start.align-items-center.bg-fondo-16.p-3.p-md-4.position-relative.h-100
            .col-lg-7.col-md-7.col-sm-8.col-12.z-2
              h4.mb-2 Lectura sugerida. Logística y distribución física internacional: clave en las operaciones de comercio exterior
              p.mb-3 Se invita al aprendiz a profundizar en especificaciones de materiales y mercancías, tal como se muestra en el siguiente artículo (página 15-22). 

              a.boton.color-acento-botones(:href="'https://bibliotecadigital.ccb.org.co/server/api/core/bitstreams/e528749a-bd0c-49fa-9e29-5e690478af0d/content'" target="_blank")
                span ir al recurso
            img(src="@/assets/curso/tema1/img31.png", alt="", style="position: absolute; bottom: -20px; right: 20px; width: 220px; pointer-events: none;").d-none.d-lg-flex


    .container
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .row.bg-fondo-18.align-items-center.justify-content-center.br-15.p-0
            .col-md-8.col-lg-5.mb-3.mb-lg-0.order-2.order-md-2.order-lg-1.p-0
              figure
                img(src="@/assets/curso/tema4/img11.png", data-aos="fade-right").mx-auto.w-md-75-img
            .col-lg-6.order-1.order-md-1.order-lg-2.p-4.p-lg-4
              p(data-aos="fade-left").mb-4 Para complementar los conocimientos sobre la organización y preparación de pedidos, se invita a consultar el pódcast.
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="Organización y preparación eficiente de pedidos"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
              )
              p.mb-0 Que permite reforzar los conceptos abordados y su aplicación en los procesos logísticos.





















  //    

    .bg-full-width.bg-fondo-02.px-5.py-4
      img(src="@/assets/curso/tema4/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text En la gestión de la distribución comercial, el control de los productos disponibles es un elemento clave para garantizar la continuidad de las operaciones y la satisfacción del cliente. El inventario permite a las empresas responder a la demanda del mercado, evitando faltantes o excesos que puedan afectar la rentabilidad y el nivel de servicio.

    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Concepto

  
    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/img02.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        .row.align-items-center.bg-fondo-12.p-3.mb-3
          .col-lg-auto.order-1
            img.d-none.d-lg-flex(src="@/assets/curso/tema4/img03.svg", style="max-width: 150px").mx-auto
          .col-lg.order-2
            p.mb-0 El inventario corresponde al conjunto de bienes o productos que una empresa mantiene almacenados con el propósito de ser utilizados en la producción o comercialización.

        p.mb-3 Su gestión implica el control de entradas, salidas y niveles de existencias, permitiendo asegurar la disponibilidad del producto en el momento requerido. Un manejo adecuado del inventario contribuye a optimizar costos, evitar pérdidas y mejorar la eficiencia operativa.

        .row.align-items-center.bg-fondo-04.p-4
          .col-lg-auto.order-1
            img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 90px").mx-auto
          .col-lg.order-2
            p.mb-0 En el contexto empresarial, Amazon utiliza sistemas avanzados de gestión de inventarios para garantizar disponibilidad inmediata, mientras que Zara mantiene inventarios controlados que le permiten responder rápidamente a las tendencias del mercado.


    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Tipos

    p.mb-2 Los inventarios pueden clasificarse según la función que cumplen dentro de la organización y la etapa del proceso productivo o comercial en la que se encuentran. Esta clasificación facilita el control de las existencias y contribuye a una adecuada planificación de la distribución.
    p.mb-4 Los principales tipos de inventario son: 

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure.mb-3
          img(src="@/assets/curso/tema4/img04.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Inventario de materias primas").align-content-center
            p.mb-2 Comprende los materiales e insumos adquiridos y almacenados que aún no han ingresado al proceso productivo y serán utilizados para elaborar los productos de la empresa.
            p.mb-0 #[b Ejemplo:] una panadería mantiene existencias de harina, azúcar, huevos y mantequilla para elaborar sus productos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Inventario en proceso").align-content-center
            p.mb-2 Corresponde a los materiales y productos que ya iniciaron su transformación, pero todavía requieren actividades adicionales antes de convertirse en productos terminados disponibles para su comercialización.
            p.mb-0 #[b Ejemplo:] una fábrica de calzado mantiene zapatos ensamblados que todavía requieren suelas, acabados y empaque antes de estar disponibles para la venta.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Inventario de productos terminados").align-content-center
            p.mb-2 Incluye los productos que finalizaron el proceso de producción y se encuentran disponibles para almacenamiento, comercialización y posterior distribución a clientes, intermediarios o puntos de venta.
            p.mb-0 #[b Ejemplo:] una empresa de bebidas almacena botellas de agua empacadas y listas para ser distribuidas a supermercados y tiendas.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Inventario de seguridad").align-content-center
            p.mb-2 Representa una cantidad adicional de existencias mantenida para responder ante variaciones inesperadas de la demanda, retrasos de proveedores u otras situaciones que puedan afectar la disponibilidad del producto.
            p.mb-0 #[b Ejemplo:] un supermercado mantiene paquetes adicionales de arroz para responder ante aumentos inesperados de la demanda o retrasos del proveedor.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Inventario en tránsito").align-content-center
            p.mb-2 Comprende los productos o materiales que se encuentran desplazándose entre diferentes puntos de la cadena de suministro y todavía no han llegado al lugar establecido para su recepción.
            p.mb-0 #[b Ejemplo:] un camión transporta cajas de frutas desde un centro de distribución hasta diferentes supermercados para su comercialización.

    .bg-full-width.bg-fondo-1
      .row.mb-lg-4.mb-3.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .cajon.bg-color-c1.p-4
            p.mb-0 En la práctica, Coca-Cola gestiona inventarios de productos terminados para garantizar abastecimiento continuo, mientras que empresas industriales mantienen inventarios de materias primas para asegurar la producción.

      separador
      
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.3 Rotación

      p.mb-4 La rotación de inventario es un indicador que mide la frecuencia con la que los productos se venden y se reponen en un periodo determinado.

    
      .bloque-texto-g.bloque-texto-g--inverso.bg-color-01.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img05.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Este indicador permite evaluar la eficiencia en la gestión del inventario, identificando si los productos se están comercializando de manera adecuada o si existen acumulaciones innecesarias. Una alta rotación indica dinamismo en las ventas, mientras que una baja rotación puede generar costos de almacenamiento y riesgo de obsolescencia.

      p.mb-4 En empresas como D1 y Ara, la alta rotación de inventarios es clave para mantener precios bajos y disponibilidad constante, mientras que, en sectores como tecnología, una baja rotación puede afectar la vigencia de los productos.

      separador
    
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Método

    
    .container
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-11.p-4
            .col-lg-auto.d-none.d-lg-flex
              img(src="@/assets/curso/tema4/img06.svg").mx-auto
            .col-lg
              p.mb-0 Los métodos de gestión de inventarios corresponden a las técnicas utilizadas para controlar las entradas, salidas y valoración de las existencias. Su aplicación permite optimizar el manejo de los productos, mejorar el control de costos y apoyar la toma de decisiones relacionadas con el abastecimiento.

    p.mb-4 Los principales métodos de gestión de inventarios son:

    .row.mb-4.mb-lg-5.justify-content-center.align-items-center
      .col-lg-9.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold.mb-2 Figura 2.
          span Métodos de gestión de inventarios
        img.mb-0(data-aos="fade-up", src="@/assets/curso/tema4/img07.png", alt="La figura presenta diferentes métodos utilizados para organizar, valorar y controlar los inventarios dentro de una empresa. Mediante situaciones representativas de bodegas y establecimientos comerciales, muestra cómo los productos pueden gestionarse considerando su orden de ingreso y salida, su costo promedio o su importancia económica. La información permite comprender que cada método responde a necesidades específicas de administración y facilita la toma de decisiones relacionadas con la disponibilidad, rotación, valoración y control de las existencias.").mx-auto.d-none.d-lg-block
        img.mb-0(data-aos="fade-up", src="@/assets/curso/tema4/img08.png", alt="La figura presenta diferentes métodos utilizados para organizar, valorar y controlar los inventarios dentro de una empresa. Mediante situaciones representativas de bodegas y establecimientos comerciales, muestra cómo los productos pueden gestionarse considerando su orden de ingreso y salida, su costo promedio o su importancia económica. La información permite comprender que cada método responde a necesidades específicas de administración y facilita la toma de decisiones relacionadas con la disponibilidad, rotación, valoración y control de las existencias.").mx-auto.d-lg-none

      .col-lg-3.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/tema4/img09.png", data-aos="zoom-in").mx-auto


    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .row.align-items-center.bg-fondo-04.p-4
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 150px").mx-auto
            .col-lg
              p.mb-0 En el contexto real, supermercados como Éxito aplican el método PEPS para evitar vencimientos, mientras que empresas industriales utilizan el método ABC para priorizar el control de productos de mayor valor.


    .row.align-items-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-08.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center.order-1.order-lg-3
              img(src="@/assets/curso/tema1/img12.svg")
            .col-12.col-lg.mb-2.mb-lg-0.order-2.order-lg-1
              h4.mb-2.mx-lg-0.text-lg-start Cómo hacer un buen inventario
              p.mb-0 Para profundizar en la gestión de inventarios y su relación con la logística ir al siguiente recurso:
            .col-12.col-lg-auto.text-center.order-3.order-lg-2
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=s_GBs0V4cR0'" target="_blank")
                span Ir al recurso

    .row.align-items-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-13.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
              img(src="@/assets/curso/tema4/img10.svg")
            .col-12.col-lg.mb-2.mb-lg-0
              p.mb-0 Para fortalecer la comprensión de la rotación de inventarios, su cálculo y su importancia dentro de la gestión logística, se recomienda consultar el siguiente recurso:
            .col-12.col-lg-auto.text-center
              a.boton.color-acento-botones(:href="'https://www.slimstock.com/es/blog/rotacion-inventario/?utm_source=chatgpt.com'" target="_blank")
                span Ir al recurso

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
