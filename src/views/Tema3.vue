<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Documentación para la preparación y despacho


    .bg-full-width.bg-fondo-03.px-5.py-4
      img(src="@/assets/curso/tema3/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text La documentación logística constituye el soporte administrativo y operativo de las actividades de preparación y despacho de mercancías. Su correcta elaboración, verificación y conservación garantiza la trazabilidad de los productos, facilita el control de las operaciones y asegura el cumplimiento de los procedimientos. establecidos por la organización y la normatividad aplicable. 

    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Concepto e importancia de los documentos logísticos

    
    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img02.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") Los documentos logísticos son registros físicos o digitales que permiten planificar, ejecutar y controlar las operaciones relacionadas con el movimiento de mercancías. Su utilización facilita la verificación de pedidos, el control de inventarios, la autorización de despachos y el respaldo de las transacciones entre proveedores, empresas, transportadores y clientes.
        .container
          .row.align-items-center.bg-fondo-09.br-15.mb-0.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/img03.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 Estos documentos son fundamentales para garantizar la trazabilidad de las mercancías, ya que permiten registrar y consultar información sobre su recepción, almacenamiento, despacho y entrega. Asimismo, facilitan el control interno, la atención de reclamaciones y el cumplimiento de los procedimientos establecidos por la organización.

    p.mb-4 Actualmente, muchas empresas utilizan sistemas de planificación de recursos empresariales (Enterprise Resource Planning, ERP) y sistemas de gestión de almacenes (Warehouse Management System, WMS) para administrar digitalmente sus documentos, reducir errores y mejorar la disponibilidad de la información.

    
    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-start.align-items-center.bg-fondo-12
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa de transporte internacional utiliza documentos físicos y electrónicos para registrar la recepción, movilización y entrega de mercancías. Mediante un sistema de información, el personal consulta el estado de los envíos, verifica los datos del destinatario y registra la confirmación de entrega. Este procedimiento facilita la trazabilidad de los productos y contribuye a mejorar el control de las operaciones logísticas.
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto
    
    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Tipos de documentos logísticos


    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema3/img04.svg", style="max-width: 150px").mx-auto
      .col-lg
        p.mb-3 Las organizaciones utilizan diferentes documentos para registrar, controlar y respaldar las operaciones de abastecimiento, almacenamiento y distribución de mercancías. Cada documento cumple una función específica y facilita la trazabilidad de los productos, la coordinación entre las áreas y la comunicación con proveedores, transportadores y clientes.
        p.mb-0 Entre los principales documentos logísticos se encuentran:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 2.
          span Tipos de documentos logísticos
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th(style="width: 30%") Documento
                th Función
            tbody
              tr
                td Orden de compra
                td Formaliza la solicitud de productos o materiales realizada a un proveedor.
              tr
                td Orden de pedido
                td Registra los productos y cantidades solicitados por el cliente.
              tr
                td Lista de <em>picking</em>
                td Identifica los productos, cantidades y ubicaciones para su recolección en el almacén.
              tr
                td Remisión
                td Relaciona las mercancías entregadas o despachadas y permite verificar su recepción.
              tr
                td Factura
                td Respalda la operación comercial e informa los productos, cantidades y valores facturados.
              tr
                td Lista de empaque (<em>packing list</em>)
                td Detalla el contenido, las cantidades y las características de los bultos o unidades de carga.
              tr
                td Manifiesto de carga
                td Registra la información de la carga transportada, conforme a los requisitos aplicables.
              tr
                td Guía de transporte
                td Identifica el envío y contiene información necesaria para su movilización y seguimiento.
              tr
                td Acta de entrega
                td Deja constancia de la entrega de mercancías y de las novedades identificadas, cuando corresponda.
              tr
                td Comprobante de recepción
                td Confirma el recibo de las mercancías y permite registrar las cantidades y condiciones recibidas.

    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-04.p-4
          p.mb-0 La utilización adecuada de estos documentos permite mantener registros confiables, prevenir inconsistencias y facilitar el seguimiento de las mercancías. Su aplicación depende de las características de cada operación y de los requisitos establecidos por la organización y la normativa vigente.


    .bg-full-width.bg-fondo-14.px-5.py-4.mb-4
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1.p-0
            figure
              img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
            .tarjeta.tarjeta--blanca.br-15.p-5.p-md-4.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 Una empresa de transporte recibe mercancías destinadas a diferentes ciudades. Para gestionar los envíos, registra la información en las guías de transporte, utiliza los manifiestos de carga cuando corresponde y obtiene los comprobantes de entrega. Estos documentos permiten identificar los productos transportados, realizar el seguimiento de los despachos y confirmar su recepción por parte de los destinatarios.

    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Orden de pedido

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img05.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La orden de pedido es el documento mediante el cual un cliente solicita formalmente uno o varios productos a una organización. Contiene la información necesaria para iniciar el proceso de preparación del pedido y constituye el punto de partida de las operaciones logísticas de despacho.

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema3/img06.svg", style="max-width: 150px").mx-auto
      .col-lg
        p.mb-2 Generalmente, la orden de pedido incluye datos como el número del pedido, la identificación del cliente, las referencias de los productos, las cantidades solicitadas, la dirección de entrega, la fecha requerida y las condiciones comerciales acordadas. 
        p.mb-0 Antes de iniciar la preparación de la mercancía, el área logística debe verificar que la información consignada en la orden sea correcta y que exista disponibilidad de inventario para atender la solicitud.

    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-end.align-items-center.bg-fondo-08
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa distribuidora de productos lácteos recibe diariamente pedidos de supermercados y establecimientos comerciales. Mediante su sistema de información, registra las órdenes, verifica las referencias y cantidades solicitadas y confirma la disponibilidad de los productos. Una vez validados los pedidos, inicia su preparación y despacho, garantizando el cumplimiento de las condiciones de entrega.

    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Listas de <em>picking</em>



    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center.bg-color-08
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/tema3/img07.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") La lista de <em>picking</em> es un documento operativo que orienta la localización y recolección de los productos solicitados en un pedido. Contiene información sobre las referencias, cantidades y ubicaciones de las mercancías dentro del almacén, facilitando su selección y preparación.

    p.mb-4 Su utilización permite organizar los recorridos del personal, reducir desplazamientos y minimizar errores en la recolección. Estas listas pueden generarse mediante sistemas de gestión de almacenes (WMS) y consultarse en formatos físicos, dispositivos móviles o terminales de radiofrecuencia (RF).

    .bg-full-width.bg-fondo-11.px-5.py-4.mb-4
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2.p-0
            figure
              img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0.p-4.bg-color-white.br-15
            .tarjeta.br-15.p-4.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 Una empresa de comercio electrónico utiliza un sistema de gestión de almacenes que genera automáticamente las listas de <em>picking</em> y las transmite a los dispositivos móviles de los operarios. A partir de esta información, el personal identifica las ubicaciones y recoge los productos solicitados, optimizando los recorridos y reduciendo los tiempos de preparación de pedidos.

    separador
    
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Documentos de despacho y remisiones


    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/img08.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        .row.align-items-center.mb-3
          .col-lg-auto.d-none.d-lg-flex
            img(src="@/assets/curso/tema3/img09.svg", style="max-width: 150px").mx-auto
          .col-lg
            p.mb-0 Los documentos de despacho respaldan la salida de mercancías del almacén y permiten verificar los productos entregados al transportador o cliente. Su utilización facilita el control de las operaciones y el seguimiento de los pedidos durante el transporte y la recepción.
        .container
          .row.align-items-center.bg-fondo-09.br-15.mb-0.p-4
            .col-lg-12
              p.mb-0 Entre estos documentos se encuentra la remisión, que relaciona las referencias, cantidades y características de los productos despachados. Puede acompañar la factura y servir como soporte de entrega. Antes del despacho, es necesario comprobar que la información registrada coincida con el pedido autorizado y la mercancía preparada. 

    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-end.align-items-center.bg-fondo-08
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa de distribución prepara un pedido y genera la remisión correspondiente, en la que registra los productos y las cantidades despachadas. Al entregar la mercancía al transportador, verifica la documentación y registra la salida en su sistema. Posteriormente, obtiene la confirmación de recepción del cliente, fortaleciendo la trazabilidad de la operación.

    separador
    
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.6 Soportes documentales del proceso logístico



    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img10.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") Los soportes documentales son registros físicos o digitales que evidencian la ejecución de las actividades logísticas y permiten verificar el cumplimiento de los procedimientos establecidos por la organización.
        .container
          .row.align-items-center.bg-fondo-09.br-15.mb-3.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/img11.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 Incluyen comprobantes de recepción, registros de despacho, actas de inspección, fotografías, reportes de sistemas y confirmaciones electrónicas de entrega. Su adecuada organización y conservación facilita el control interno, las auditorías, la atención de reclamaciones y el cumplimiento de los requisitos legales aplicables.

        p.mb-0 Actualmente, los sistemas de gestión documental permiten almacenar, consultar y proteger estos registros, mejorando la disponibilidad de la información y reduciendo el uso de documentos impresos.


    .bg-full-width.bg-fondo-14.px-5.py-4.mb-4
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1.p-0
            figure
              img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
            .tarjeta.tarjeta--blanca.br-15.p-5.p-md-4.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 Una empresa comercial utiliza una plataforma digital para almacenar órdenes de pedido, remisiones y comprobantes de entrega. Cuando un cliente presenta una reclamación, el personal consulta los registros correspondientes para verificar las cantidades despachadas y las condiciones de recepción. Este procedimiento facilita la identificación de inconsistencias y permite gestionar oportunamente las novedades.

              
    .container
      .row.mb-lg-3.mb-4.justify-content-center
        .col-xl-6.col-lg-6.col-md-12.col-12.mb-0.p-4
          .row.justify-content-start.align-items-center.bg-fondo-15.p-3.p-md-4.position-relative.h-100
            .col-lg-7.col-md-7.col-sm-8.col-12.z-2
              h4.mb-2 Video sugerido. Optimiza la logística de tu deposito, aprovechando al máximo las posibilidades del ERP y el WMS
              p.mb-3 A continuación, lo invitamos a consultar el siguiente video para fortalecer los conocimientos relacionados con documentación para la preparación y despacho.

              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=poILG3vwohk'" target="_blank")
                span Ir al recurso
            img(src="@/assets/curso/tema1/img30.png", alt="", style="position: absolute; bottom: -20px; right: 20px; width: 220px; pointer-events: none;").d-none.d-lg-flex

        .col-xl-6.col-lg-6.col-md-12.col-12.mb-0.p-4
          .row.justify-content-start.align-items-center.bg-fondo-16.p-3.p-md-4.position-relative.h-100
            .col-lg-7.col-md-7.col-sm-8.col-12.z-2
              h4.mb-2 Lectura sugerida. Gestión de almacenes y tecnologías de la información y comunicación (TIC)
              p.mb-3 Se invita al aprendiz a profundizar en documentación para la preparación y despacho, a través del siguiente artículo (página 11 – 13).

              a.boton.color-acento-botones(:href="'https://www.icesi.edu.co/revistas/index.php/estudios_gerenciales/es/article/view/385/pdf'" target="_blank")
                span Ir al recurso
            img(src="@/assets/curso/tema1/img31.png", alt="", style="position: absolute; bottom: -20px; right: 20px; width: 220px; pointer-events: none;").d-none.d-lg-flex

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
