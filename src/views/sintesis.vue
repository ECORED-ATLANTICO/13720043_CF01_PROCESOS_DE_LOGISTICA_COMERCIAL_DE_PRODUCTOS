<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

   
    .bg-full-width.bg-fondo-03.px-5.py-4
      img(src="@/assets/curso/intro/img03.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text El componente formativo Preparación de pedidos y despacho de mercancías aborda los fundamentos de la organización de los procesos de preparación de pedidos, incluyendo las operaciones logísticas, los procesos de recibo y despacho de mercancías, así como las actividades y procedimientos asociados. Continúa con la organización logística y el contexto empresarial, considerando la identidad corporativa, el contexto comercial, los objetivos, la misión, la visión, las políticas y las estrategias organizacionales. 
        
    p.mb-4 Este componente también desarrolla la documentación requerida para la preparación y despacho, las especificaciones de materiales y mercancías, la normativa aplicable a los productos y las herramientas tecnológicas utilizadas en la gestión logística. 
        
             
    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-04.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/intro/img04.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 Finalmente, profundiza en la gestión de pedidos mediante el estudio del ciclo del pedido, los métodos de preparación, la consolidación, la verificación y las rutas de alistamiento, integrando indicadores para el seguimiento y control del desempeño logístico, con el propósito de organizar eficientemente las operaciones de preparación y despacho de mercancías conforme a los procedimientos establecidos por la organización.
        

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="El componente formativo Preparación de pedidos y despacho de mercancías aborda los procesos logísticos de recibo, preparación y despacho, la organización empresarial, la documentación, las características de las mercancías y la normativa aplicable. Integra herramientas tecnológicas, métodos de preparación, consolidación, verificación y distribución de pedidos, así como indicadores de gestión para fortalecer la eficiencia operativa y el cumplimiento de los procedimientos organizacionales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis


</template>

<script>
export default {
  name: 'Sintesis',
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
