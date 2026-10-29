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
          .row.justify-content-around.align-items-center.p-2
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-md-0.mx-auto.mx-md-0.text-center.d-none.d-lg-flex
              img(src="@/assets/curso/tema5/img21.png", style="max-width: 140px; margin-bottom: -15px; margin-top: -10px;").mx-auto
            .col-12.col-md-12.col-lg-7.col-xl-8.mb-3.mb-md-2
              h4.mb-2 Video sugerido. Sistemas y equipos de preparación de pedido
              p.mb-0 Para fortalecer los conocimientos sobre las tecnologías utilizadas en la preparación de pedidos, se invita a consultar el siguiente video, que complementa los conceptos abordados y favorece su aplicación en los procesos logísticos.
            .col-12.col-md-auto.text-start.text-md-start.text-lg-center
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=cplU3TV9sdM'" target="_blank")
                span Ir al recurso

        .tarjeta.bg-fondo-21.p-3.p-md-4.mb-4
          .row.justify-content-around.align-items-center.p-2
            .col-12.col-md-12.col-lg-7.col-xl-8.mb-3.mb-md-2.order-2.order-md-1
              h4.mb-2 Lectura sugerida. Código de barras 2D en el punto de venta Retail
              p.mb-0 Para profundizar en los sistemas de identificación automática de productos, se recomienda consultar la guía de GS1 Colombia sobre códigos de barras bidimensionales (2D). Este material permite ampliar los conocimientos sobre su aplicación en la identificación y trazabilidad de mercancías.
            .col-12.col-md-auto.text-start.text-md-start.text-lg-center.order-3.order-md-2
              a.boton.color-acento-botones(:href="'https://gs1co.org/sites/default/files/libreria-archivos/guia-inicio-codigo-barras-2d-en-punto-venta-retail-gs1-colombia.pdf'" target="_blank")
                span Ir al recurso
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-md-0.mx-auto.mx-md-0.text-center.order-1.order-md-3.d-none.d-lg-flex
              img(src="@/assets/curso/tema5/img23.png", style="max-width: 160px; margin-bottom: -15px; margin-top: -10px;").mx-auto

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
