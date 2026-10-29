<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Gestión de pedidos

  
    .bg-full-width.bg-fondo-03.px-5.py-4
      img(src="@/assets/curso/tema6/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text La gestión de pedidos comprende el conjunto de actividades orientadas a planificar, controlar y ejecutar el flujo de mercancías desde que el cliente realiza una solicitud hasta que recibe el producto. Una gestión eficiente permite optimizar los recursos, garantizar la disponibilidad de los productos y cumplir los tiempos de entrega establecidos por la organización.

    separador
    
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Ciclo del pedido

    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema6/img02.svg", style="max-width: 150px").mx-auto
      .col-lg
        p.mb-3 El ciclo del pedido es la secuencia de actividades que inicia con la solicitud de compra del cliente y finaliza con la entrega de la mercancía y su correspondiente confirmación. Integra procesos de ventas, inventarios, almacenamiento, transporte y servicio al cliente.
        p.mb-0 Su adecuada gestión permite coordinar el flujo de información y mercancías, reducir errores y realizar el seguimiento de cada solicitud. Actualmente, los sistemas de información facilitan la actualización del estado de los pedidos y la comunicación entre las áreas involucradas.

    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-end.align-items-center.bg-fondo-08
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa de comercio electrónico recibe un pedido mediante su plataforma digital. El sistema verifica la disponibilidad del producto, genera la orden de preparación y registra su despacho. Posteriormente, el transportador actualiza el estado del envío hasta confirmar la entrega al cliente. Este procedimiento facilita la trazabilidad y el control del ciclo del pedido.

    separador
    
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Métodos y sistemas de preparación de pedidos


    .container
      .row.align-items-center.bg-fondo-07.br-15.mb-5.p-4
        .col-lg-auto.order-1
          img.d-none.d-lg-flex(src="@/assets/curso/tema6/img03.svg", style="max-width: 150px").mx-auto
        .col-lg.order-2
          p.mb-0 La preparación de pedidos puede realizarse mediante diferentes métodos, seleccionados según el volumen de operaciones, las características de las mercancías y la organización del almacén. Su finalidad es optimizar la recolección de productos, reducir desplazamientos y garantizar la precisión de los pedidos.

    p.mb-4 Entre los métodos más utilizados se encuentran:

    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 4.
          span Preparación de pedidos: métodos y sistemas
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th(style="width: 30%") Método
                th Descripción
            tbody
              tr
                td Preparación individual
                td El operario recoge los productos correspondientes a un pedido antes de iniciar el siguiente.
              tr
                td Preparación por lotes
                td Se recolectan simultáneamente productos destinados a varios pedidos, que posteriormente se separan.
              tr
                td Preparación por zonas
                td El almacén se divide en áreas y cada operario recoge los productos ubicados en la zona asignada.
              tr
                td Preparación por olas
                td Los pedidos se agrupan y procesan en períodos definidos, según prioridades o condiciones de despacho.


    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-04.p-4
          p.mb-0 Estos métodos pueden apoyarse en sistemas de gestión de almacenes (WMS), lectores de códigos de barras y otras herramientas tecnológicas que facilitan el control de las operaciones.

    .bg-full-width.bg-fondo-11.px-5.py-4.mb-4
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2.p-0
            figure
              img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0.p-4.bg-color-white.br-15
            .tarjeta.br-15.p-4.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora de artículos para el hogar organiza su almacén por zonas. Cada operario recolecta los productos ubicados en el área asignada y los traslada a un punto de consolidación. Este método reduce desplazamientos innecesarios y permite preparar varios pedidos de manera coordinada.

    separador
    
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Armado y consolidación de pedidos

    p.mb-4 El armado y la consolidación de pedidos comprenden las actividades de organización y agrupación de los productos seleccionados para conformar un pedido completo antes de su despacho.

    
    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema6/img04.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-fondo-09.br-15.mb-3.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema6/img05.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 Durante el armado se consideran las características de las mercancías, como peso, dimensiones, fragilidad y compatibilidad. Posteriormente, se reúnen los productos correspondientes a cada pedido, se verifica su integridad y se preparan para el embalaje, etiquetado y despacho.

        p.mb-0 Estas actividades permiten reducir errores, aprovechar el espacio de carga y facilitar la entrega de mercancías en condiciones adecuadas.


    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-start.align-items-center.bg-fondo-12
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa comercializadora de productos para el hogar recibe un pedido que incluye artículos de vidrio, utensilios y pequeños electrodomésticos. Durante la consolidación, el personal reúne las referencias solicitadas y organiza los productos según su peso y fragilidad. Posteriormente, utiliza materiales de protección y verifica el contenido antes de cerrar y etiquetar los paquetes.
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto

    separador
    
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Fases de preparación del pedido

    p.mb-4 La preparación de pedidos comprende actividades organizadas que permiten seleccionar, verificar y acondicionar las mercancías antes de su despacho. A continuación, se presentan las principales fases de este proceso.

    
    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure.mb-3
          img(src="@/assets/curso/tema6/img06.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Recepción de la orden").align-content-center
            p.mb-0 Se recibe la solicitud del cliente y se verifican las referencias, cantidades y condiciones de entrega para iniciar la preparación del pedido. Se confirma la disponibilidad de los productos y se genera la orden de alistamiento.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Localización y recolección").align-content-center
            p.mb-0 Se identifican las ubicaciones de los productos y se recogen las cantidades solicitadas, siguiendo los procedimientos establecidos. Se verifica la identificación de cada producto para evitar errores.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Verificación del pedido").align-content-center
            p.mb-0 Se comprueba que las referencias, cantidades y condiciones de los productos coincidan con la información registrada en la orden. También se inspecciona su estado físico antes del embalaje.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Embalaje y etiquetado").align-content-center
            p.mb-0 Se acondicionan las mercancías con materiales de protección y se colocan las etiquetas necesarias para su identificación y transporte. Se asegura el contenido para prevenir daños durante la manipulación.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Preparación para el despacho").align-content-center
            p.mb-0 Se organiza el pedido, se comprueba la documentación y se traslada la mercancía a la zona de salida para su entrega al transportador. Se confirma que esté completo y listo para su despacho.


    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-10
          p.mb-0 El desarrollo ordenado de estas fases contribuye a reducir errores, proteger las mercancías y garantizar que los pedidos sean entregados conforme a las condiciones establecidas.

    .bg-full-width.bg-fondo-14.px-5.py-4.mb-4
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1.p-0
            figure
              img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
            .tarjeta.tarjeta--blanca.br-15.p-5.p-md-4.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora de productos de aseo recibe una orden de pedido y asigna su preparación al personal del almacén. Los operarios recolectan las referencias solicitadas, verifican las cantidades y acondicionan los productos. Finalmente, etiquetan los paquetes y los trasladan a la zona de despacho junto con la documentación correspondiente.

    separador
    
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.5 Métodos de verificación

    
    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center.bg-color-08
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-2.p-0
          figure
            img(src="@/assets/curso/tema6/img07.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") La verificación de pedidos consiste en comprobar que las mercancías preparadas coincidan con la información registrada en la orden correspondiente. Este procedimiento permite identificar diferencias en referencias, cantidades o condiciones de los productos antes del despacho.

    p.mb-4 La verificación puede realizarse mediante revisión manual, comparación documental o herramientas tecnológicas, como lectores de códigos de barras y terminales de radiofrecuencia. La selección del método depende de las características de la operación y de los recursos disponibles. 


    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-end.align-items-center.bg-fondo-08
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora de repuestos utiliza lectores de códigos de barras para verificar los pedidos antes de su despacho. El personal escanea cada producto y compara la información con la orden registrada en el sistema. Cuando identifica una diferencia, realiza la corrección correspondiente antes de autorizar la salida de la mercancía.

    separador
    
    #t_6_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.6 Rutas de reparto

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema6/img08.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las rutas de reparto son recorridos planificados para distribuir mercancías desde un centro de despacho hasta los puntos de entrega. Su organización considera factores como ubicación de los clientes, distancias, condiciones del tráfico, capacidad de los vehículos y horarios de entrega.

    p.mb-4 Una planificación adecuada permite optimizar los recorridos, reducir costos de transporte y mejorar el cumplimiento de los tiempos establecidos. Para ello, las organizaciones pueden utilizar herramientas de georreferenciación y sistemas de planificación de rutas que facilitan la asignación y el seguimiento de las entregas.
    
    .bg-full-width.bg-fondo-14.px-5.py-4.mb-4
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1.p-0
            figure
              img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
            .tarjeta.tarjeta--blanca.br-15.p-5.p-md-4.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora de productos de consumo organiza diariamente las entregas a diferentes establecimientos comerciales. Mediante un sistema de planificación, agrupa los destinos por sectores, considera la capacidad de los vehículos y establece los recorridos. Esta organización permite reducir desplazamientos innecesarios y mejorar la puntualidad de las entregas.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p.mb-0 La preparación y distribución de pedidos requiere coordinar actividades de recepción, recolección, consolidación, verificación y transporte. La aplicación de métodos adecuados y herramientas tecnológicas contribuye a optimizar los recursos, reducir errores y garantizar que las mercancías lleguen a su destino en las condiciones acordadas. 
        


    .row.align-items-center.justify-content-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-20.p-3.p-md-4.mb-5
          .row.justify-content-around.align-items-center.p-2
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-md-0.mx-auto.mx-md-0.text-center.d-none.d-lg-flex.order-3
              img(src="@/assets/curso/tema5/img21.png", style="max-width: 140px; margin-bottom: -15px; margin-top: -10px;").mx-auto
            .col-12.col-md-12.col-lg-7.col-xl-8.mb-3.mb-md-2.order-1
              h4.mb-2 Video sugerido. Fases de la preparación de pedidos
              p.mb-0 Para fortalecer los conocimientos sobre la gestión de pedidos y su importancia en las operaciones logísticas, se invita a consultar el siguiente video, que complementa los conceptos relacionados con la preparación, el seguimiento y la distribución de mercancías.
            .col-12.col-md-auto.text-start.text-md-start.text-lg-center.order-2
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=6mZ8m1nM6rI'" target="_blank")
                span Ir al recurso

        .tarjeta.bg-fondo-21.p-3.p-md-4.mb-5
          .row.justify-content-around.align-items-center.p-2
            .col-12.col-md-12.col-lg-7.col-xl-8.mb-3.mb-md-2.order-2.order-md-1.order-lg-2
              h4.mb-2 Lectura sugerida. Conceptos teóricos en la optimización de rutas
              p.mb-0 Para profundizar en la planificación y optimización de las rutas de reparto, se recomienda consultar el siguiente documento, que complementa los conocimientos sobre la organización de recorridos, el aprovechamiento de los recursos y la eficiencia en la distribución de mercancías.
            .col-12.col-md-auto.text-start.text-md-start.text-lg-center.order-3.order-md-2.order-lg-3
              a.boton.color-acento-botones(:href="'https://logispyme.com/wp-content/uploads/2014/02/optimizacic3b3n-rutas-de-transporte.pdf'" target="_blank")
                span Ir al recurso
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-md-0.mx-auto.mx-md-0.text-center.order-1.order-md-3.d-none.d-lg-flex.order-lg-1
              img(src="@/assets/curso/tema5/img23.png", style="max-width: 160px; margin-bottom: -15px; margin-top: -10px;").mx-auto



    .container
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .row.bg-fondo-22.align-items-center.justify-content-center.br-15.p-0
            .col-md-8.col-lg-5.mb-3.mb-lg-0.order-2.order-md-2.order-lg-2.p-0
              figure
                img(src="@/assets/curso/tema4/img11.png", data-aos="fade-right").mx-auto.w-md-75-img
            .col-lg-6.order-1.order-md-1.order-lg-1.p-4.p-lg-4
              p(data-aos="fade-left").mb-4 Para complementar los conocimientos sobre los procesos logísticos, se invita a consultar el pódcast
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="Control e innovación en el despacho de mercancías"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast2.mp3')"
              )
              p.mb-0 Que permite profundizar en la importancia del control operativo y la incorporación de tecnologías para mejorar la eficiencia y precisión en el despacho de productos.

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
