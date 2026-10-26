<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/intro/img01.svg", style="max-width: 120px").mx-auto
      .col-lg
        p.mb-0 El componente formativo Preparación de pedidos y despacho desarrolla los fundamentos técnicos y operativos necesarios para comprender la organización de los procesos de preparación de pedidos y el despacho de mercancías dentro de la gestión logística.


    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/intro/img02.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        .bg-fondo-01.br-15.mb-3.p-4
          p.mb-0 Su estudio permite reconocer la importancia de planificar las operaciones, gestionar la documentación logística, identificar las características de los materiales y mercancías, aplicar la normativa correspondiente y utilizar herramientas tecnológicas que contribuyen a la eficiencia de las operaciones de despacho.
        
        p.mb-3(data-aos="fade-right") Su importancia radica en que proporciona las bases para organizar y ejecutar el ciclo de preparación de pedidos conforme a los procedimientos establecidos por la organización, favoreciendo la trazabilidad, la optimización de los recursos, el cumplimiento de los tiempos de entrega y la satisfacción de los clientes.
        p.mb-0 Asimismo, fortalece la capacidad para seleccionar métodos de preparación, consolidar pedidos, verificar la información logística y realizar el seguimiento del desempeño mediante indicadores que apoyan la mejora continua de los procesos.
    
    .container
      .row.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-02.p-4
            p.mb-0 El componente se desarrollará de manera progresiva, iniciando con los fundamentos de la preparación de pedidos y la organización logística, continuando con la documentación, las especificaciones de materiales y mercancías, la normativa aplicable, las herramientas tecnológicas y la gestión de pedidos, para finalizar con el análisis de los indicadores y el control del proceso de preparación y despacho de mercancías.

    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
