<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Herramientas tecnológicas para la preparación de pedidos

    .container
      .row.align-items-center.bg-fondo-09.br-15.mb-4.p-4
        .col-lg-auto.order-1
          img.d-none.d-lg-flex(src="@/assets/curso/tema5/img01.svg", style="max-width: 150px").mx-auto
        .col-lg.order-2
          p.mb-0 Las herramientas tecnológicas han transformado la gestión logística al permitir que los procesos de preparación de pedidos sean más rápidos, precisos y seguros. La incorporación de tecnologías de identificación, captura y transmisión de datos facilita el control de inventarios, optimiza los recorridos dentro del almacén y reduce los errores asociados a la manipulación manual de la información.

    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Códigos de barras


    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema5/img03.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        .row.align-items-center.mb-3
          .col-lg-auto.d-none.d-lg-flex
            img(src="@/assets/curso/tema5/img02.svg", style="max-width: 150px").mx-auto
          .col-lg
            p.mb-0 El código de barras es un sistema de identificación automática que representa datos mediante líneas y espacios de diferentes dimensiones, los cuales pueden ser interpretados por lectores electrónicos. Su utilización permite identificar productos y registrar sus movimientos durante las operaciones logísticas.
        
        .container
          .row.align-items-center.bg-fondo-07.br-15.mb-3.p-4
            .col-lg-12
              p.mb-0 Esta tecnología facilita el control de inventarios, la recepción, el almacenamiento, la preparación de pedidos y el despacho de mercancías, reduciendo los errores de registro manual y mejorando la trazabilidad.
        p.mb-0 Entre los estándares de identificación utilizados en logística se encuentran EAN-13, UPC y las simbologías Code 39 y Code 128. La organización internacional GS1 establece estándares que facilitan la identificación de productos y unidades logísticas en la cadena de suministro.


    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-end.align-items-center.bg-fondo-08
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa comercializadora de alimentos utiliza códigos de barras para identificar sus productos y registrar los movimientos de inventario. Durante la recepción y preparación de pedidos, el personal escanea los códigos mediante lectores electrónicos, verifica las referencias y actualiza las existencias en el sistema. Este procedimiento reduce errores y facilita el control de las mercancías.

    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Lectores de códigos

    .bg-full-width.bg-fondo-03.px-5.py-4
      img(src="@/assets/curso/tema5/img04.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text Los lectores de códigos son dispositivos electrónicos diseñados para capturar la información contenida en los códigos de barras y transmitirla inmediatamente al sistema de información de la empresa. Estos equipos permiten registrar productos con rapidez y precisión, facilitando las operaciones logísticas y disminuyendo el tiempo requerido para realizar actividades de control.


    .container
      .row.align-items-center.bg-fondo-07.br-15.mb-5.p-4
        .col-lg-auto.order-1
          img.d-none.d-lg-flex(src="@/assets/curso/tema5/img05.svg", style="max-width: 150px").mx-auto
        .col-lg.order-2
          p.mb-0 Dependiendo de las necesidades de la organización, los lectores pueden ser manuales, inalámbricos, fijos o integrados en dispositivos móviles. Algunos utilizan tecnología láser, mientras que otros emplean sensores de imagen capaces de leer tanto códigos de barras tradicionales como códigos bidimensionales (QR Code).

    p.mb-4 La utilización de lectores de códigos mejora la productividad del personal operativo, ya que elimina la necesidad de ingresar manualmente la información de cada producto. Además, permite verificar inmediatamente si el artículo corresponde al pedido solicitado.

    
    .bg-full-width.bg-fondo-11.px-5.py-4.mb-4
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2.p-0
            figure
              img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0.p-4.bg-color-white.br-15
            .tarjeta.br-15.p-4.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 Una empresa de comercio electrónico utiliza lectores inalámbricos para identificar y verificar los productos durante la preparación de pedidos. Mediante estos dispositivos, el personal comprueba las referencias y cantidades solicitadas y registra la información en el sistema de gestión de almacenes. Esta tecnología permite reducir errores en la selección de mercancías y agilizar los procesos de despacho.


    separador
    
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Terminales de radiofrecuencia (RF)


    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center.bg-color-08
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/tema5/img06.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") Las terminales de radiofrecuencia (RF) son dispositivos portátiles que permiten al personal del almacén consultar y registrar información mediante comunicación inalámbrica con el sistema de gestión de almacenes (WMS). Se utilizan en actividades de recepción, almacenamiento, preparación de pedidos y despacho de mercancías.

    .container
      .row.align-items-center.bg-fondo-13.br-15.mb-4.p-4
        .col-lg-auto.order-1
          img.d-none.d-lg-flex(src="@/assets/curso/tema5/img07.svg", style="max-width: 150px").mx-auto
        .col-lg.order-2
          p.mb-0 Estos equipos incorporan lectores de códigos de barras y pantallas que permiten identificar productos, consultar ubicaciones y confirmar cantidades. Su utilización facilita la actualización de inventarios en tiempo real, reduce los errores de registro y mejora la trazabilidad de las operaciones logísticas.

    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-start.align-items-center.bg-fondo-12
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa de comercio electrónico utiliza terminales de radiofrecuencia para orientar al personal durante la preparación de pedidos. Los operarios consultan las ubicaciones de los productos, escanean sus códigos de barras y confirman las cantidades recolectadas. La información se actualiza automáticamente en el sistema, facilitando el seguimiento de los pedidos y el control del inventario.
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto

    separador
    
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Sistemas de voz

    .bloque-texto-g.bg-color-10.p-4.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/img08.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los sistemas de voz son herramientas tecnológicas que permiten al personal del almacén recibir instrucciones y confirmar actividades mediante comandos de audio. Su aplicación en la preparación de pedidos, conocida como <em>voice picking</em>, facilita la recolección de mercancías sin necesidad de consultar constantemente documentos impresos o pantallas.


    .row.justify-content-center.mb-4
      .col-lg-6.mb-4.mb-lg-0
        p.mb-0 Estos sistemas funcionan mediante un <em>software</em> de gestión logística conectado a dispositivos portátiles con auriculares y micrófono. A través de ellos, el personal recibe indicaciones sobre la ubicación de los productos, las cantidades requeridas y la secuencia de recolección. Las actividades realizadas se confirman verbalmente, lo que permite actualizar la información en el sistema de gestión de almacenes (WMS).
      .col-lg-6.mb-0
        .row.align-items-center.bg-fondo-09.br-15.mb-0.p-4
          .col-lg-auto.order-1
            img.d-none.d-lg-flex(src="@/assets/curso/tema5/img09.svg", style="max-width: 150px").mx-auto
          .col-lg.order-2
            p.mb-0 La preparación de pedidos por voz se desarrolla mediante una secuencia de instrucciones y confirmaciones que facilita la recolección de mercancías. A continuación, se presentan las principales etapas de este proceso.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema5/img16.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0
        SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-3")
          .tarjeta.bg-fondo-19.p-4.h-100.br-15
            img(src='@/assets/curso/tema5/img11.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Recepción de instrucciones
            p.text-center.mb-0 El operario recibe mediante auriculares las indicaciones sobre la ubicación del producto y la cantidad que debe recolectar.

          .tarjeta.bg-fondo-19.p-4.h-100.br-15
            img(src='@/assets/curso/tema5/img12.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Localización del producto
            p.text-center.mb-0 El personal se desplaza hasta la ubicación indicada por el sistema de gestión de almacenes.

          .tarjeta.bg-fondo-19.p-4.h-100.br-15
            img(src='@/assets/curso/tema5/img13.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Recolección de mercancías
            p.text-center.mb-0 El operario identifica el producto y recoge la cantidad solicitada, siguiendo las instrucciones recibidas.

          .tarjeta.bg-fondo-19.p-4.h-100.br-15
            img(src='@/assets/curso/tema5/img14.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Confirmación verbal
            p.text-center.mb-0 Una vez realizada la recolección, el operario confirma mediante comandos de voz la referencia, ubicación o cantidad, según el procedimiento establecido.

          .tarjeta.bg-fondo-19.p-4.h-100.br-15
            img(src='@/assets/curso/tema5/img15.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Actualización del sistema
            p.text-center.mb-0 El sistema registra la actividad realizada, actualiza la información del pedido y transmite las instrucciones para continuar con la operación.

    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-04.p-4
          p.mb-0 La integración de instrucciones y confirmaciones por voz permite organizar la recolección de mercancías, reducir errores y mantener actualizada la información de los pedidos durante su preparación.

    //- subitulo

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema5/img17.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 La implementación de esta tecnología contribuye a mejorar la precisión y productividad de las operaciones logísticas, ya que permite mantener las manos libres durante la manipulación de mercancías y disminuye la necesidad de consultar documentos impresos. 
        .container
          .row.align-items-center.bg-fondo-07.br-15.mb-0.p-4
            .col-lg-12
              p.mb-0 Asimismo, facilita la estandarización de los procedimientos y el seguimiento de las actividades. Su utilización requiere infraestructura tecnológica adecuada y capacitación del personal.


    .bg-full-width.bg-fondo-11.px-5.py-4.mb-4
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2.p-0
            figure
              img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0.p-4.bg-color-white.br-15
            .tarjeta.br-15.p-4.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora de productos de consumo utiliza sistemas de voz para orientar al personal durante la preparación de pedidos. Los operarios reciben instrucciones mediante auriculares sobre las ubicaciones y cantidades solicitadas. Después de recoger cada producto, confirman verbalmente la actividad realizada, permitiendo actualizar la información en el sistema y reducir los errores de selección.


    separador
    
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Sistemas de reconocimiento de voz

    p.mb-4 Los sistemas de reconocimiento de voz son tecnologías que permiten interpretar instrucciones o respuestas verbales y convertirlas en datos digitales procesados por los sistemas de información logística. Pueden utilizar técnicas de inteligencia artificial para mejorar la interpretación de los comandos y facilitar la interacción entre el personal y los sistemas de gestión de almacenes (WMS).


    
    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema5/img18.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-fondo-09.br-15.mb-3.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema5/img19.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 Durante la preparación de pedidos, esta tecnología permite confirmar verbalmente códigos, ubicaciones y cantidades de productos. Las respuestas del operario son interpretadas y registradas en el sistema, facilitando la actualización de la información y el seguimiento de las operaciones.
        p.mb-0 Su utilización contribuye a reducir errores de registro, disminuir la manipulación de dispositivos y mejorar la eficiencia operativa. Además, permite recopilar información sobre las actividades realizadas y apoyar el seguimiento de indicadores de productividad.


    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-start.align-items-center.bg-fondo-12
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora de productos de consumo utiliza tecnología de reconocimiento de voz para registrar las confirmaciones del personal durante la preparación de pedidos. Los operarios comunican verbalmente los códigos y las cantidades recolectadas, mientras el sistema interpreta y registra las respuestas. Este procedimiento facilita el control de las operaciones y reduce los errores de digitación. 
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto


    .row.align-items-center.justify-content-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-20.p-3.p-md-4.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-md-0.mx-auto.mx-md-0.text-center.d-none.d-lg-flex
              img(src="@/assets/curso/tema5/img21.png", style="max-width: 140px; margin-bottom: -15px; margin-top: -10px;").mx-auto
            .col-12.col-md-12.col-lg-7.col-xl-8.mb-3.mb-md-2
              h4.mb-2 Video sugerido. Sistemas y equipos de preparación de pedido
              p.mb-0 Para fortalecer los conocimientos sobre las tecnologías utilizadas en la preparación de pedidos, se invita a consultar el siguiente video, que complementa los conceptos abordados y favorece su aplicación en los procesos logísticos.
            .col-12.col-md-auto.text-center
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=cplU3TV9sdM'" target="_blank")
                span ir al recurso

        .tarjeta.bg-fondo-21.p-3.p-md-4.mb-4
          .row.justify-content-around.align-items-center
            .col-12.col-md-12.col-lg-7.col-xl-8.mb-3.mb-md-2.order-2.order-md-1
              h4.mb-2 Lectura sugerida. Código de barras 2D en el punto de venta Retail
              p.mb-0 Para profundizar en los sistemas de identificación automática de productos, se recomienda consultar la guía de GS1 Colombia sobre códigos de barras bidimensionales (2D). Este material permite ampliar los conocimientos sobre su aplicación en la identificación y trazabilidad de mercancías.
            .col-12.col-md-auto.text-center.order-3.order-md-2
              a.boton.color-acento-botones(:href="'https://gs1co.org/sites/default/files/libreria-archivos/guia-inicio-codigo-barras-2d-en-punto-venta-retail-gs1-colombia.pdf'" target="_blank")
                span ir al recurso
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-md-0.mx-auto.mx-md-0.text-center.order-1.order-md-3.d-none.d-lg-flex
              img(src="@/assets/curso/tema5/img23.png", style="max-width: 160px; margin-bottom: -15px; margin-top: -10px;").mx-auto
















  //
    .bloque-texto-g.bg-color-08.p-4.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Dentro de la gestión de la distribución comercial, mantener niveles adecuados de productos disponibles es fundamental para garantizar la continuidad de las operaciones y la atención oportuna de la demanda. El <em>stock</em> de inventarios permite a las empresas responder de manera eficiente a las necesidades del mercado, evitando tanto el desabastecimiento como el exceso de productos.

    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Concepto

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema5/img02.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") El <em>stock</em> de inventarios, también denominado existencias, corresponde a la cantidad de productos que una empresa mantiene disponibles para satisfacer la demanda de sus clientes.
        
        .bg-fondo-01.br-15.mb-3.p-4
          p.mb-0 Este concepto está directamente relacionado con la gestión del inventario, ya que implica definir niveles óptimos que permitan garantizar disponibilidad sin generar costos innecesarios. Un adecuado control del <em>stock</em> permite equilibrar la oferta y la demanda, evitando pérdidas por faltantes o por acumulación de productos.

        p.mb-0 En el contexto empresarial, D1 y Ara manejan niveles de <em>stock</em> ajustados para garantizar alta rotación y reducción de costos, mientras que empresas como Amazon utilizan sistemas automatizados para mantener niveles de <em>stock</em> óptimos según la demanda.

    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Beneficios

    
    .row.align-items-center.mb-5.justify-content-center
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema5/img03.svg").mx-auto
      .col-lg
        p.mb-0 El manejo adecuado del <em>stock</em> de inventarios contribuye a garantizar la disponibilidad de los productos y a mejorar el desempeño de las operaciones logísticas. Una administración eficiente de las existencias favorece la atención de la demanda, optimiza los recursos y fortalece la rentabilidad de la organización.

    p.mb-5 Entre los principales beneficios del <em>stock</em> de inventarios se destacan:

    
    .bg-full-width.bg-fondo-1
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema5/img04.png", data-aos="zoom-in").mx-auto

        .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
          AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-c1" data-aos="zoom-in").mb-0
            .tarjeta(titulo="Disponibilidad de productos")
              p.mb-2 Permite mantener las cantidades necesarias de productos para responder oportunamente a los pedidos y requerimientos de los clientes en los diferentes puntos de comercialización.
              p.mb-0 #[b Ejemplo:] un supermercado mantiene existencias suficientes de leche para atender la demanda diaria de sus clientes.

            .tarjeta(titulo="Reducción de faltantes")
              p.mb-2 Disminuye el riesgo de agotamiento de productos mediante el seguimiento de existencias, la reposición oportuna y la definición de cantidades adecuadas para atender la demanda.
              p.mb-0 #[b Ejemplo:] una tienda repone las bebidas antes de alcanzar niveles mínimos de inventario, evitando quedarse sin unidades disponibles.

            .tarjeta(titulo="Optimización de las operaciones")
              p.mb-2 Facilita la planificación del almacenamiento, abastecimiento, preparación de pedidos y distribución, favoreciendo el uso eficiente del espacio, el tiempo y los recursos disponibles.
              p.mb-0 #[b Ejemplo:] una bodega organiza los productos según su rotación para agilizar el alistamiento y despacho de los pedidos.

            .tarjeta(titulo="Control de costos")
              p.mb-2 Contribuye a identificar y reducir costos relacionados con almacenamiento, exceso de existencias, deterioro, obsolescencia, faltantes y movimientos innecesarios de productos.
              p.mb-0 #[b Ejemplo:] una empresa ajusta las cantidades almacenadas de alimentos para disminuir pérdidas por vencimiento y costos de almacenamiento.


      .container
        .row.mb-lg-5.mb-4.justify-content-center.align-items-center
          .col-lg-10.col-md-12
            .row.align-items-center.bg-fondo-04.p-4
              .col-lg-auto.order-2
                img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 150px").mx-auto
              .col-lg.order-1
                p.mb-0 En la práctica, supermercados como Éxito mantienen niveles de <em>stock</em> que aseguran disponibilidad constante, mientras que empresas de comercio electrónico ajustan sus existencias en función de la demanda proyectada.

      separador
      
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.3 Ubicación


    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center.bg-color-06
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-2.p-0
          figure
            img(src="@/assets/curso/tema5/img05.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") La ubicación del <em>stock</em> de inventarios corresponde a los espacios donde se almacenan los productos dentro de la cadena de distribución. Una ubicación adecuada facilita el abastecimiento, reduce los tiempos de entrega y contribuye a mejorar la eficiencia de las operaciones logísticas.

    p.mb-4 Las principales ubicaciones del <em>stock</em> de inventarios son:
    
    .bg-full-width.bg-fondo-1
      .bg-full-width.bg-fondo-05
        .bg-full-width.bg-fondo-03.p-5.mb-5
          SlyderA(tipo="b").bg-color-white.p-3.tarjeta
            .tarjeta.p-4.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-5.col-md-10.order-2.order-lg-1.mb-0.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema5/img06.png", data-aos="zoom-in").mx-auto
                .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4 Bodega central
                  p.mb-2 Instalación principal donde se concentran y almacenan productos provenientes de proveedores o plantas de producción, desde la cual se abastecen otras instalaciones, establecimientos o puntos de la red comercial.
                  p.mb-0 #[b Ejemplo:] una cadena de ferreterías concentra herramientas y materiales en una bodega central para abastecer posteriormente sus diferentes establecimientos.

            .tarjeta.p-4.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-5.col-md-10.order-2.order-lg-1.mb-0.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema5/img07.png", data-aos="zoom-in").mx-auto
                .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4 Punto de venta
                  p.mb-2 Establecimiento físico donde se mantiene una cantidad de inventario destinada principalmente a atender de manera directa e inmediata las compras realizadas por el consumidor final.
                  p.mb-0 #[b Ejemplo:] una farmacia conserva medicamentos y productos de cuidado personal para atender diariamente las compras de sus clientes.

            .tarjeta.p-4.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-5.col-md-10.order-2.order-lg-1.mb-0.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema5/img08.png", data-aos="zoom-in").mx-auto
                .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4 Centro de distribución
                  p.mb-2 Instalación logística destinada a recibir, almacenar temporalmente, preparar y despachar productos hacia diferentes destinos, buscando agilizar el flujo de mercancías dentro de la red de distribución.
                  p.mb-0 #[b Ejemplo:] un centro recibe productos de aseo, prepara los pedidos y los despacha hacia supermercados ubicados en diferentes ciudades.

            .tarjeta.p-4.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-5.col-md-10.order-2.order-lg-1.mb-0.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema5/img09.png", data-aos="zoom-in").mx-auto
                .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4 Almacenamiento regional
                  p.mb-2 Ubica inventarios en instalaciones cercanas a determinadas zonas geográficas para reducir distancias de distribución, mejorar los tiempos de entrega y responder oportunamente a la demanda regional.
                  p.mb-0 #[b Ejemplo:] una empresa mantiene inventario de bebidas en una bodega regional para abastecer tiendas y restaurantes de varios municipios cercanos.

      .container
        .row.mb-lg-5.mb-4.justify-content-center.align-items-center
          .col-lg-10.col-md-12
            .row.align-items-center.bg-fondo-04.p-4
              .col-lg-auto.order-2
                img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 150px").mx-auto
              .col-lg.order-1
                p.mb-0 En el entorno empresarial, Mercado Libre utiliza centros de distribución estratégicamente ubicados para reducir tiempos de entrega, mientras que Falabella combina bodegas centrales y puntos de venta para optimizar su operación.
      
      
      .row.align-items-center(data-aos="fade-right")
        .col-lg-10.mx-auto
          .tarjeta.bg-fondo-08.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
                img(src="@/assets/curso/tema1/img12.svg")
              .col-12.col-lg.mb-2.mb-lg-0
                h4.mb-2.mx-lg-0.text-lg-start ¿Qué es el <em>stock</em> de una empresa?
                p.mb-0 Para comprender el manejo del <em>stock</em> de inventarios en empresas ir al siguiente video:
              .col-12.col-lg-auto.text-center
                a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=FQhWLNrN92E'" target="_blank")
                  span Ir al recurso

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
