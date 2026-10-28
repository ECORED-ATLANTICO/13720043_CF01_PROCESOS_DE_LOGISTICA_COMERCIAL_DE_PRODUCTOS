<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de la preparación de pedidos


    .bg-full-width.bg-fondo-03.px-5.py-4
      img(src="@/assets/curso/tema1/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text La preparación de pedidos constituye una de las actividades más importantes de la logística comercial, ya que permite organizar, verificar y acondicionar las mercancías antes de su despacho. Su correcta ejecución garantiza la disponibilidad de los productos, optimiza el flujo de las operaciones y contribuye al cumplimiento de los tiempos de entrega. 

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto e importancia de la preparación de pedidos

    p.mb-4 La preparación de pedidos es el conjunto de actividades logísticas mediante las cuales se identifican, seleccionan, verifican y organizan los productos solicitados por un cliente para su posterior despacho. Este proceso inicia con la recepción de la orden de pedido y finaliza cuando la mercancía se encuentra lista para ser entregada al área de transporte o directamente al cliente.

    
    //- .bg-full-width.bg-fondo-05.px-5.py-4.mb-5
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img02.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0
        SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-3")
          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img04.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Recepción del pedido
            p.text-center.mb-0 Se recibe y registra la solicitud del cliente, identificando los productos, las cantidades y las condiciones de entrega.

          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img05.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Localización de productos
            p.text-center.mb-0 Se identifican las ubicaciones de los productos en el almacén mediante los registros de inventario y los sistemas de información disponibles.

          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img06.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Selección y recolección
            p.text-center.mb-0 Se realiza el <em>picking</em>, que consiste en recoger los productos solicitados siguiendo los procedimientos y recorridos establecidos.

          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img07.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Verificación del pedido
            p.text-center.mb-0 Se comprueba que los productos seleccionados correspondan con la solicitud del cliente en referencias, cantidades y condiciones.

          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img08.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Embalaje y etiquetado
            p.text-center.mb-0 Se acondicionan y protegen los productos para su transporte, incorporando la identificación y la información necesaria para su distribución.

          .tarjeta.bg-fondo-05.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img09.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            h4.text-center Traslado al área de despacho
            p.text-center.mb-0 Los pedidos preparados se organizan y trasladan al área correspondiente para continuar con el proceso de distribución.



    .container
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-07.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img11.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 El cumplimiento de estas etapas requiere la coordinación del personal, los recursos físicos y las herramientas tecnológicas utilizadas en el almacén. Una preparación de pedidos eficiente contribuye a disminuir los errores, las devoluciones y los costos operativos, al tiempo que favorece la puntualidad de las entregas, la satisfacción del cliente y la competitividad de la organización.


    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-end.align-items-center.bg-fondo-08
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa comercializadora recibe diariamente los pedidos de sus clientes y los registra en su sistema de información. Los operarios identifican la ubicación de los productos, realizan su recolección (<em>picking</em>) y verifican que las referencias y cantidades correspondan con cada solicitud. Posteriormente, los productos son embalados, etiquetados y trasladados al área de despacho, donde quedan disponibles para su distribución.

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Operaciones logísticas en el proceso de despacho

    p.mb-4 Las operaciones logísticas comprenden el conjunto de actividades necesarias para garantizar que las mercancías sean movilizadas desde el almacén hasta el cliente de manera segura, eficiente y oportuna. Estas operaciones integran recursos humanos, físicos, tecnológicos y de información que permiten mantener la continuidad del flujo de productos dentro de la organización.


    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img13.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-fondo-09.br-15.mb-4.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img14.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 En el proceso de despacho, estas actividades incluyen la validación del pedido, la verificación de la mercancía, la preparación de documentos, la organización de la carga y su entrega al transportador. Su adecuada ejecución requiere la coordinación entre las áreas de almacenamiento, inventarios, transporte y servicio al cliente, de acuerdo con los procedimientos establecidos.
          
        p.mb-0(data-aos="fade-right") El despacho de mercancías comprende diferentes operaciones que deben ejecutarse de manera coordinada para garantizar la exactitud de los pedidos, el cumplimiento de los requisitos establecidos y el control de los productos antes de su distribución. A continuación, se presentan las principales operaciones que intervienen en este proceso logístico:


    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-10.mb-4
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-0" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Validación del pedido")
            p.mb-0 Consiste en comprobar que la orden de despacho esté autorizada y que la información registrada corresponda con la solicitud del cliente. Esta operación permite confirmar las referencias, cantidades, destinos y condiciones de entrega antes de continuar con el proceso.

          .tarjeta(titulo="Verificación de mercancías")
            p.mb-0 Comprende la revisión de los productos preparados para confirmar que correspondan con las especificaciones del pedido. Se verifican las referencias, cantidades, condiciones físicas y requisitos particulares de manipulación, con el propósito de identificar posibles inconsistencias antes del despacho.

          .tarjeta(titulo="Preparación documental")
            p.mb-0 Consiste en generar y verificar los documentos necesarios para respaldar la salida y el transporte de las mercancías. Según los procedimientos de la organización y los requisitos aplicables, pueden incluirse órdenes de despacho, remisiones, facturas y documentos de transporte.

          .tarjeta(titulo="Organización de la carga")
            p.mb-0 Comprende la agrupación y disposición de las mercancías de acuerdo con sus características, destinos, condiciones de manipulación y requerimientos de transporte. Esta operación facilita las actividades de cargue, contribuye al aprovechamiento del espacio y disminuye los riesgos de deterioro durante la movilización.

          .tarjeta(titulo="Entrega y registro de salida")
            p.mb-0 Consiste en entregar las mercancías al transportador, verificar las condiciones de recepción y registrar su salida en el sistema de información correspondiente. Esta operación permite mantener la trazabilidad de los productos y disponer de información para el seguimiento del despacho.
      .col-lg-10

        .row.align-items-center.mb-0
          .col-lg-auto.d-none.d-lg-flex
            img(src="@/assets/curso/tema1/img16.svg", style="max-width: 150px").mx-auto
          .col-lg
            p.mb-0 La ejecución coordinada de estas operaciones permite controlar la salida de mercancías, reducir errores y optimizar los tiempos de despacho. Para fortalecer este proceso, las organizaciones utilizan herramientas tecnológicas como los sistemas de gestión de almacenes (Warehouse Management System, WMS), los códigos de barras, las terminales de radiofrecuencia (RF) y los dispositivos móviles, que facilitan el registro de movimientos, la actualización de inventarios y la trazabilidad de los productos.


    
    .bg-full-width.bg-fondo-11.px-5.py-4.mb-4
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
            figure
              img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-1.col-md-12.mb-4.mb-lg-0.p-4.bg-color-white.br-15
            .tarjeta.br-15.p-4.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 En un centro de distribución farmacéutico, el sistema de gestión de almacenes permite identificar la ubicación de los productos y organizar las rutas de recolección (<em>picking</em>). Una vez preparados los pedidos, el personal verifica las referencias, cantidades, fechas de vencimiento y condiciones de conservación, genera la documentación correspondiente y organiza las mercancías para su despacho. Este procedimiento contribuye a reducir desplazamientos innecesarios, mejorar el control de inventarios y garantizar la trazabilidad de los productos durante el proceso logístico.

    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Procesos de recibo y despacho de mercancías

    .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img19.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los procesos de recibo y despacho de mercancías constituyen actividades complementarias dentro de la gestión logística. El recibo comprende las operaciones necesarias para verificar, registrar y controlar el ingreso de productos al almacén, mientras que el despacho permite gestionar su salida conforme a los pedidos, las condiciones de entrega y los procedimientos establecidos por la organización.


    p.mb-4 Ambos procesos requieren controles documentales, físicos y tecnológicos que permitan mantener la exactitud de los inventarios y garantizar la trazabilidad de los productos. Su adecuada articulación contribuye a reducir errores operativos, prevenir pérdidas y asegurar la continuidad del flujo de mercancías.


    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema1/img20.svg", style="max-width: 150px").mx-auto
      .col-lg
        p.mb-0 Aunque el recibo y el despacho de mercancías cumplen funciones diferentes, ambos requieren procedimientos de verificación, registro y control que garanticen la confiabilidad de las operaciones logísticas. El siguiente cuadro comparativo presenta sus principales características y permite identificar cómo se relacionan dentro de la gestión del almacén.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 1.
          span Comparación de los procesos de recibo y despacho de mercancías
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Aspecto
                th Recibo de mercancías
                th Despacho de mercancías
            tbody
              tr
                td Objetivo
                td Garantizar el ingreso correcto de los productos al almacén.
                td Asegurar la salida de mercancías conforme a los pedidos y las condiciones de entrega.
              tr
                td Inicio del proceso
                td Llegada de las mercancías provenientes del proveedor u otro origen autorizado.
                td Recepción y validación de una orden de pedido o solicitud de salida.
              tr
                td Actividades principales
                td Descargue, verificación, identificación, registro y ubicación de los productos.
                td Preparación, verificación, embalaje, documentación y entrega de los productos.
              tr
                td Control de mercancías
                td Comprobación de cantidades, referencias, estado físico y especificaciones de recepción.
                td Verificación de referencias, cantidades, condiciones de embalaje y requisitos de entrega.
              tr
                td Documentación
                td Órdenes de compra, remisiones, facturas y registros de recepción, según corresponda.
                td Órdenes de despacho, remisiones, facturas y documentos de transporte, según corresponda.
              tr
                td Registro de inventarios
                td Actualización de las existencias disponibles, según la aceptación y el registro de los productos recibidos.
                td Registro de la salida de mercancías y actualización de las existencias en el sistema.
              tr
                td Resultado esperado
                td Mercancías recibidas, verificadas, registradas y ubicadas correctamente.
                td Mercancías verificadas, documentadas y entregadas para su distribución.


    .container
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-07.p-4
            .col-lg-12
              p.mb-0 La integración de los procesos de recibo y despacho permite mantener información confiable sobre las entradas y salidas de mercancías, fortalecer el control de inventarios y facilitar el seguimiento de los productos. 

    p.mb-4 Su correcta ejecución depende del cumplimiento de los procedimientos establecidos, la coordinación del personal y el uso adecuado de los sistemas de información, aspectos fundamentales para la eficiencia de las operaciones logísticas.


    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-start.align-items-center.bg-fondo-12
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa comercializadora recibe un lote de repuestos automotrices provenientes de un proveedor nacional. Durante el recibo, el personal verifica las referencias, cantidades y condiciones físicas de los productos, registra la información en el sistema de inventarios y ubica las mercancías en las zonas de almacenamiento correspondientes.
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto

    
    .row.mb-lg-4.mb-0.justify-content-center.align-items-center
      .col-lg-10.col-md-12.mb-3
        .row.align-items-center.mb-0
          .col-lg-auto.d-none.d-lg-flex
            img(src="@/assets/curso/tema1/img22.svg", style="max-width: 150px").mx-auto
          .col-lg
            p.mb-0 Días después, un cliente solicita varios repuestos del lote recibido. El área logística valida el pedido, selecciona las referencias requeridas, verifica las cantidades y prepara la documentación necesaria para su despacho. Finalmente, los productos son entregados al transportador y se registra su salida en el sistema.

      .col-lg-10.col-md-12.mb-0
        p.mb-0 Este procedimiento evidencia cómo el recibo y el despacho se complementan para mantener el control de las mercancías y garantizar la continuidad de las operaciones comerciales.


    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4. Actividades y procedimientos del despacho

    
    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center.bg-color-04
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/tema1/img23.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") El despacho de mercancías comprende actividades organizadas que permiten entregar los productos conforme a las especificaciones del pedido, las condiciones pactadas con el cliente y los procedimientos establecidos por la organización. Su ejecución requiere controles operativos que garanticen la exactitud de las cantidades, la conservación de los productos y el cumplimiento de los tiempos de entrega.


    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema1/img24.svg", style="max-width: 150px").mx-auto
      .col-lg
        p.mb-0 Para asegurar la calidad del proceso, las organizaciones establecen procedimientos que orientan las actividades del personal, definen responsabilidades y determinan los mecanismos de verificación. La aplicación de estos procedimientos contribuye a reducir errores, prevenir pérdidas y mantener la trazabilidad de las mercancías durante su salida del almacén.


    .container
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-13.p-4
            .col-lg-12
              p.mb-0 La correcta ejecución del despacho requiere aplicar procedimientos de control que permitan verificar las condiciones de los productos, la documentación y el cumplimiento de los requisitos establecidos. Estos procedimientos facilitan la identificación de inconsistencias y contribuyen a mantener la seguridad y confiabilidad de las operaciones. 

    p.mb-4 A continuación, se presentan los principales controles que deben considerarse durante el despacho de mercancías:

    
    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure.mb-3
          img(src="@/assets/curso/tema1/img26.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Verificación de pedidos").align-content-center
            p.mb-0 Consiste en comprobar que las referencias, cantidades y características de los productos correspondan con la orden de pedido. Este procedimiento permite identificar diferencias entre lo solicitado y lo preparado, evitando despachos incompletos o incorrectos. Para su ejecución pueden utilizarse listas de verificación, lectores de códigos de barras y sistemas de información que faciliten el registro de los controles realizados.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Control del embalaje y etiquetado").align-content-center
            p.mb-0 Comprende la revisión de las condiciones de protección, identificación y presentación de las mercancías. Se verifica que los materiales de embalaje sean adecuados para las características del producto y que las etiquetas contengan la información necesaria para su manipulación, almacenamiento temporal y transporte. Este control contribuye a prevenir daños, confusiones y pérdidas durante la distribución.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Validación documental").align-content-center
            p.mb-0 Consiste en revisar que los documentos asociados al despacho estén completos y correspondan con las mercancías preparadas. Según los procedimientos de la organización y los requisitos aplicables, pueden incluirse órdenes de despacho, remisiones, facturas y documentos de transporte. La validación documental permite respaldar la operación y facilitar el seguimiento de los productos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Seguridad y condiciones de manipulación").align-content-center
            p.mb-0 Comprende la aplicación de medidas destinadas a proteger la integridad de las mercancías y prevenir accidentes durante las actividades de despacho. Incluye la manipulación adecuada de los productos, el uso de equipos de protección personal cuando corresponda, la revisión de las condiciones de cargue y el cumplimiento de los procedimientos de seguridad establecidos por la organización.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Registro y trazabilidad del despacho").align-content-center
            p.mb-0 Consiste en registrar la salida de las mercancías, identificar al responsable de la entrega y conservar la información necesaria para realizar el seguimiento del pedido. Este procedimiento puede apoyarse en sistemas electrónicos, códigos de barras y registros de control que permitan consultar el estado de la operación e identificar posibles novedades durante la distribución.

    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-c1.p-4
          p.mb-0 La aplicación sistemática de estos procedimientos permite fortalecer el control operativo, reducir inconsistencias y mejorar la calidad del servicio logístico. Asimismo, el uso de listas de verificación y herramientas tecnológicas facilita la identificación de oportunidades de mejora, la estandarización de las actividades y la optimización de los recursos utilizados en el despacho de mercancías.


    .bg-full-width.bg-fondo-14.px-5.py-2.py-md-4.mb-4
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1.p-0
            figure
              img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
            .tarjeta.tarjeta--blanca.br-15.p-5.p-md-4.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora de productos de aseo recibe una solicitud de despacho para abastecer varios establecimientos comerciales. Dicha empresa prepara cada pedido verificando la orden, seleccionando la mercancía, embalándola y elaborando la documentación requerida para entregar los productos al transportador de forma oportuna y conforme a lo solicitado por los clientes.


    .container
      .row.mb-lg-3.mb-4.justify-content-center
        .col-xl-5.col-lg-6.col-md-12.col-12.mb-0.p-4
          .row.justify-content-start.align-items-center.bg-fondo-15.p-3.p-md-4.position-relative.h-100
            .col-lg-7.col-md-7.col-sm-8.col-12.z-2
              h4.mb-2 Video sugerido. Despacho de mercancía
              p.mb-3 A continuación, lo invitamos a consultar el siguiente video para fortalecer los conocimientos relacionados en fundamentos de la preparación de pedidos.

              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=79pYC1EWsJE'" target="_blank")
                span ir al recurso
            img(src="@/assets/curso/tema1/img30.png", alt="", style="position: absolute; bottom: -20px; right: 20px; width: 220px; pointer-events: none;").d-none.d-lg-flex

        .col-xl-5.col-lg-6.col-md-12.col-12.mb-0.p-4
          .row.justify-content-start.align-items-center.bg-fondo-16.p-3.p-md-4.position-relative.h-100
            .col-lg-7.col-md-7.col-sm-8.col-12.z-2
              h4.mb-2 Lectura sugerida. Sistemas de almacenaje y <em>picking</em>
              p.mb-3 Se invita al aprendiz a profundizar en fundamentos de la preparación de pedidos, a través la lectura de siguiente texto (Página 238 – 252).

              a.boton.color-acento-botones(:href="'https://gc.scalahed.com/recursos/files/r161r/w25735w/LIBROAlmacen.pdf'" target="_blank")
                span ir al recurso
            img(src="@/assets/curso/tema1/img31.png", alt="", style="position: absolute; bottom: -20px; right: 20px; width: 220px; pointer-events: none;").d-none.d-lg-flex

    









































  //

    .bg-full-width.bg-fondo-02.px-5.py-4
      img(src="@/assets/curso/tema1/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text En la gestión de la distribución comercial, la logística cumple un papel fundamental al coordinar los procesos que permiten el flujo eficiente de productos desde el origen hasta el cliente. Su adecuada planificación y ejecución impactan directamente en los costos, tiempos de entrega y nivel de servicio, convirtiéndose en un factor clave de competitividad empresarial.


    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto

    .row.mb-lg-5.mb-4.justify-content-center
      .col-lg-7.mb-4.mb-lg-0
        .bg-fondo-03.br-15.mb-0.h-100.align-content-center.p-2
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-auto.d-none.d-lg-flex
              img(src="@/assets/curso/tema1/img02.svg").mx-auto
            .col-lg
              p.mb-0 La logística se entiende como el conjunto de actividades encargadas de planificar, implementar y controlar el flujo eficiente de productos, información y recursos desde el punto de origen hasta el consumidor final.
      
      .col-lg-5
        p.mb-0 Este proceso integra funciones como transporte, almacenamiento, gestión de inventarios, manejo de pedidos y distribución física. Su propósito es garantizar que el producto llegue en las condiciones adecuadas, en el lugar y momento requeridos, optimizando costos y niveles de servicio.
       
    .container
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .row.align-items-center.bg-fondo-04.p-4
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 150px").mx-auto
            .col-lg
              p.mb-0 En el contexto empresarial, Amazon ha desarrollado sistemas logísticos avanzados con centros de distribución automatizados y entregas rápidas, mientras que Servientrega gestiona procesos logísticos que permiten la distribución de productos a nivel nacional.

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Funciones


    p.mb-2 La logística cumple diversas funciones que permiten coordinar el proceso de distribución y garantizar que los productos lleguen al cliente en el momento oportuno, con la calidad esperada y al menor costo posible. Estas funciones integran actividades relacionadas con el transporte, el almacenamiento, el control de inventarios y el manejo de la información, favoreciendo la eficiencia de la cadena de suministro.
    p.mb-4 Entre las principales funciones de la logística se encuentran:

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure.mb-3
          img(src="@/assets/curso/tema1/img04.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Transporte").align-content-center
            p.mb-0 Comprende el traslado de los productos desde el lugar de origen hasta el punto de entrega, asegurando que lleguen de manera oportuna a los clientes, distribuidores o puntos de venta.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Almacenamiento").align-content-center
            p.mb-0 Consiste en conservar los productos en condiciones adecuadas mientras son requeridos para su comercialización, utilizando bodegas o centros de distribución que faciliten su organización y protección.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Gestión de inventarios").align-content-center
            p.mb-0 Permite controlar las existencias disponibles, planificar la reposición de mercancías y evitar tanto el desabastecimiento como el exceso de inventario.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Procesamiento de pedidos").align-content-center
            p.mb-0 Incluye la recepción, preparación, verificación y despacho de los pedidos, garantizando que cada solicitud sea atendida de manera correcta y dentro de los tiempos establecidos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Manejo de la información").align-content-center
            p.mb-0 Comprende el registro, seguimiento y análisis de los datos relacionados con las operaciones logísticas mediante sistemas de información, como los ERP y otras plataformas digitales, facilitando la toma de decisiones.

  
    .bg-full-width.bg-fondo-1
      .row.mb-lg-4.mb-3.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .cajon.bg-color-c1.p-4
            p.mb-0 En la práctica, Mercado Libre gestiona funciones logísticas mediante centros de <em>fulfillment</em>, mientras que Éxito coordina almacenamiento, inventarios y distribución para abastecer sus puntos de venta.

      separador

      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.3 Actores


      .bloque-texto-g.bg-color-01.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img05.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los actores de la logística desempeñan funciones específicas que permiten coordinar el flujo de bienes, información y recursos a lo largo de la cadena de distribución. La participación articulada de cada uno garantiza que los productos lleguen al consumidor final de manera eficiente, oportuna y con el nivel de servicio esperado.
      
      p.mb-4 Los principales actores de la logística son:

      

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5.text-bold.mb-2 Tabla 1.
            span Actores de la logística
          .tabla-a.tb-custom.mb-0
            table
              thead
                tr
                  th Actor
                  th Concepto
                  th Ejemplo
              tbody
                tr
                  td Proveedor
                  td Suministra materias primas, productos, insumos o servicios requeridos por una organización para desarrollar sus actividades. Su desempeño influye en aspectos como disponibilidad, calidad, costos y cumplimiento de los tiempos establecidos para el abastecimiento.
                  td Un proveedor entrega semanalmente frutas y verduras a una cadena de supermercados según las cantidades solicitadas.
                tr
                  td Operador logístico
                  td Gestiona por encargo de otra empresa una o varias actividades logísticas, como transporte, almacenamiento, preparación de pedidos, manejo de inventarios o distribución, utilizando recursos especializados para facilitar el flujo eficiente de los productos.
                  td Una empresa contrata un operador logístico para almacenar sus productos, preparar los pedidos y distribuirlos entre diferentes ciudades.
                tr
                  td Distribuidor
                  td Facilita la llegada de los productos desde fabricantes o proveedores hasta diferentes mercados y puntos de venta. Puede encargarse de comprar, almacenar, transportar y comercializar mercancías, contribuyendo a ampliar la cobertura y disponibilidad de la oferta.
                  td Un distribuidor recibe bebidas del fabricante y abastece supermercados, restaurantes y tiendas ubicadas en diferentes municipios.
                tr
                  td Minorista
                  td Comercializa productos directamente al consumidor final, generalmente en cantidades adecuadas para el consumo individual o familiar. Constituye uno de los últimos eslabones de la cadena y facilita el acceso mediante establecimientos físicos o canales digitales.
                  td Un supermercado adquiere productos de diferentes distribuidores y los ofrece en sus puntos de venta directamente a los consumidores.
                tr
                  td Cliente
                  td Adquiere productos o servicios para satisfacer una necesidad y constituye el destinatario de las actividades desarrolladas a lo largo de la cadena. Sus requerimientos de disponibilidad, calidad, precio, entrega y servicio orientan las decisiones del plan de distribución.
                  td Un consumidor realiza una compra en línea y espera recibir el producto solicitado, en buenas condiciones, dentro del plazo establecido.


    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-c1.p-4
          p.mb-0 En el contexto actual, empresas como DHL y FedEx actúan como operadores logísticos globales, mientras que plataformas como Rappi integran actores logísticos en servicios de última milla.

    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Beneficios
    

    .container
      .row.mb-lg-4.mb-3.justify-content-center.align-items-center.bg-color-06
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-2.p-0
          figure
            img(src="@/assets/curso/tema1/img06.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") La logística genera beneficios que fortalecen el desempeño de las organizaciones al optimizar los procesos relacionados con el almacenamiento, el transporte y la distribución de productos. Una adecuada gestión logística no solo contribuye a reducir costos, sino que también mejora el nivel de servicio, incrementa la competitividad y facilita la toma de decisiones estratégicas.

    p.mb-4 Entre los principales beneficios de la logística se destacan:

    .bg-full-width.bg-fondo-05.px-5.py-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema1/img07.png", data-aos="zoom-in", alt="")
        .col-lg-8.order-2.order-lg-2.col-md-12.mb-4.mb-lg-0
          SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-3")
            .tarjeta.bg-fondo-07.p-4.h-100.br-15
              img(src='@/assets/curso/tema1/img08.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center Reducción de costos
              p.text-center.mb-0 Optimiza el uso de los recursos humanos, tecnológicos y financieros mediante una mejor planificación y ejecución de las operaciones logísticas, favoreciendo la rentabilidad de la organización.

            .tarjeta.bg-fondo-07.p-4.h-100.br-15
              img(src='@/assets/curso/tema1/img09.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center Mejora del servicio
              p.text-center.mb-0 Garantiza que los productos lleguen al cliente en el momento, lugar y condiciones requeridas, incrementando la satisfacción y fortaleciendo la relación con los consumidores.

            .tarjeta.bg-fondo-07.p-4.h-100.br-15
              img(src='@/assets/curso/tema1/img10.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center Mayor competitividad
              p.text-center.mb-0 Permite responder con rapidez a las necesidades del mercado, adaptarse a los cambios del entorno y ofrecer un servicio más eficiente frente a la competencia.

            .tarjeta.bg-fondo-07.p-4.h-100.br-15
              img(src='@/assets/curso/tema1/img11.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
              h4.text-center Control de las operaciones
              p.text-center.mb-0 Facilita el seguimiento de las actividades logísticas mediante indicadores y sistemas de información, apoyando la toma de decisiones y la mejora continua de los procesos.
     
    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .row.align-items-center.bg-fondo-04.p-4
            .col-lg-auto.order-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img03.svg", style="max-width: 150px").mx-auto
            .col-lg.order-1
              p.mb-0 Empresas como Zara han logrado ventajas competitivas mediante sistemas logísticos eficientes que permiten rápida reposición de productos, mientras que Amazon ha consolidado su liderazgo gracias a su capacidad logística y tiempos de entrega reducidos.


    .row.align-items-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-08.p-3.mb-4
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
              img(src="@/assets/curso/tema1/img12.svg")
            .col-12.col-lg.mb-2.mb-lg-0
              h4.mb-2.mx-lg-0.text-lg-start ¿Qué es la gestión logística? Significado, importancia y estrategias / tendencia logística
              p.mb-0 Para comprender la logística aplicada en empresas reales ir al siguiente enlace:
            .col-12.col-lg-auto.text-center
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=SCK26hVa1AM'" target="_blank")
                span Ir al recurso

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
