<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Organización logística y contexto empresarial

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img01.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") La organización logística integra los recursos humanos, físicos, tecnológicos y los procesos necesarios para gestionar el flujo de mercancías e información desde el abastecimiento hasta la entrega al cliente. 
        .container
          .row.align-items-center.bg-fondo-09.br-15.mb-0.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img02.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 Su funcionamiento debe responder a las características, políticas y objetivos de cada empresa, de manera que las operaciones de almacenamiento, preparación de pedidos y despacho contribuyan a la productividad, la calidad del servicio y la competitividad organizacional.
          

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Identidad corporativa

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img03.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La identidad corporativa comprende el conjunto de características, principios y valores que definen a una organización y orientan su funcionamiento. Se expresa mediante su misión, visión, valores, cultura organizacional y otros elementos que permiten establecer su propósito, sus objetivos y la manera como desarrolla sus actividades.


    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema2/img04.svg", style="max-width: 150px").mx-auto
      .col-lg
        p.mb-0 En el ámbito logístico, la identidad corporativa influye en la definición de políticas, procedimientos y estándares para gestionar el abastecimiento, el almacenamiento y la distribución de mercancías. Por ejemplo, una organización que prioriza la calidad y la satisfacción del cliente debe establecer controles que garanticen la exactitud de los pedidos, la conservación de los productos y el cumplimiento de los tiempos de entrega.

    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-07.p-4
            p.mb-0 La identidad corporativa está conformada por elementos que orientan las decisiones y el comportamiento de una organización. Su conocimiento permite comprender cómo los principios empresariales se relacionan con las responsabilidades del personal y la ejecución de las operaciones logísticas. A continuación, se presentan sus principales elementos y su aplicación en el contexto empresarial.

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1.d-lg-block.d-md-none
        figure.mb-3
          img(src="@/assets/curso/tema2/img05.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Misión").align-content-center
            p.mb-0 Define la razón de ser de la organización, su actividad principal y el propósito que orienta sus operaciones. En logística, permite comprender cómo los procesos de abastecimiento, almacenamiento y distribución contribuyen al cumplimiento de los compromisos adquiridos con los clientes.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Visión").align-content-center
            p.mb-0 Expresa la proyección de la organización hacia el futuro y los objetivos que espera alcanzar. En el ámbito logístico, orienta decisiones relacionadas con el crecimiento de la capacidad operativa, la incorporación de tecnologías y el mejoramiento de los procesos de distribución.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Valores corporativos").align-content-center
            p.mb-0 Son los principios que orientan el comportamiento y las decisiones de quienes integran la organización. Valores como la responsabilidad, la honestidad y el compromiso se reflejan en el manejo adecuado de las mercancías, la confiabilidad de los registros y el cumplimiento de los procedimientos logísticos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Cultura organizacional").align-content-center
            p.mb-0 Comprende las prácticas, hábitos y formas de trabajo compartidas por los integrantes de una empresa. En las operaciones logísticas, se manifiesta mediante el trabajo en equipo, la comunicación entre áreas, el cumplimiento de las normas de seguridad y la disposición hacia la mejora continua.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Imagen institucional").align-content-center
            p.mb-0 Corresponde a la percepción que los diferentes públicos construyen sobre la organización a partir de sus actuaciones, comunicaciones y experiencias. En logística, esta percepción puede fortalecerse mediante entregas oportunas, productos en buenas condiciones y una atención adecuada a las solicitudes de los clientes.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Principios éticos").align-content-center
            p.mb-0 Establecen criterios de conducta que promueven la transparencia, la integridad y el cumplimiento de las responsabilidades empresariales. En logística, orientan prácticas como el registro confiable de inventarios, el manejo responsable de los recursos y el cumplimiento de las disposiciones aplicables.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Responsabilidad social").align-content-center
            p.mb-0 Comprende los compromisos de la organización frente a los impactos de sus actividades en las personas, la comunidad y el entorno. En logística, puede reflejarse en la gestión adecuada de residuos, el uso eficiente de recursos, las condiciones laborales seguras y la adopción de prácticas de distribución responsables.

    

    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-start.align-items-center.bg-fondo-12
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa comercializadora establece entre sus valores corporativos la responsabilidad, la calidad y el compromiso con el cliente. Para aplicar estos principios en sus operaciones logísticas, implementa procedimientos de verificación de pedidos, controles de inventario y mecanismos de seguimiento de las entregas. 
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto


    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-10.col-md-12.mb-0
        p.mb-0 El personal del almacén participa en estas actividades mediante el registro adecuado de mercancías, la preparación correcta de los pedidos y el cumplimiento de las normas de seguridad. De esta manera, las actividades operativas se articulan con la identidad corporativa y contribuyen al cumplimiento de los objetivos empresariales.

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Contexto comercial de la organización
  
    .bg-full-width.bg-fondo-03.px-5.py-4
      img(src="@/assets/curso/tema2/img06.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text El contexto comercial comprende el conjunto de factores internos y externos que influyen en el funcionamiento de una empresa y en el desarrollo de sus operaciones logísticas. Estos factores determinan la forma en que la organización responde a las necesidades del mercado, administra sus recursos y establece relaciones con clientes, proveedores y aliados estratégicos.

      
    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-07.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img07.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 Entre los factores internos se encuentran la estructura organizacional, los recursos humanos, la infraestructura, la capacidad tecnológica y los procesos operativos. Por su parte, los factores externos incluyen el comportamiento del mercado, la competencia, la legislación, las condiciones económicas, las tendencias de consumo y los avances tecnológicos.


    p.mb-4 Analizar el contexto comercial permite identificar oportunidades de mejora, optimizar los procesos logísticos y fortalecer la capacidad de respuesta frente a las exigencias del mercado.

    .bg-full-width.bg-fondo-11.px-5.py-4.mb-4
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2.p-0
            figure
              img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0.p-4.bg-color-white.br-15
            .tarjeta.br-15.p-4.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 Una empresa dedicada al comercio electrónico experimenta un crecimiento sostenido en la demanda de productos a través de sus canales digitales. Para responder a esta situación, amplía la capacidad de sus centros de distribución, incorpora tecnologías de automatización y optimiza los procesos de almacenamiento, preparación de pedidos y despacho de mercancías.
 
    .row.mb-lg-3.mb-4.justify-content-center.align-items-center
      .col-lg-10.col-md-12.mb-0
        p.mb-0 Estas acciones permiten mejorar la capacidad operativa, reducir los tiempos de procesamiento y fortalecer los servicios de entrega. De esta manera, la organización adapta su estructura logística a las necesidades del mercado, favoreciendo la eficiencia de sus operaciones y la satisfacción del cliente.

    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Objetivos, misión, visión y políticas organizacionales


    .container
      .row.mb-lg-5.mb-4.justify-content-center.align-items-center.bg-color-08
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/tema2/img08.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-4
          p.mb-0(data-aos="fade-right") Toda organización establece una dirección estratégica que orienta sus actividades y facilita el cumplimiento de sus metas. Esta dirección está representada por la misión, la visión, los objetivos y las políticas organizacionales, elementos que sirven de guía para la planeación y ejecución de los procesos logísticos.

    p.mb-4 La misión expresa la razón de ser de la organización; la visión define el estado futuro que desea alcanzar; los objetivos establecen resultados concretos y medibles; mientras que las políticas determinan los lineamientos generales que deben seguir los colaboradores en el desarrollo de sus funciones.
      
    .container
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .row.align-items-center.bg-fondo-13.p-4
            .col-lg-auto.order-1
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img09.svg", style="max-width: 150px").mx-auto
            .col-lg.order-2
              p.mb-0 En logística, estos elementos permiten definir prioridades relacionadas con la eficiencia operativa, el nivel de servicio, la seguridad de las mercancías, el cumplimiento de los tiempos de entrega y la satisfacción del cliente.

    .container
      .row.mb-3.justify-content-center.align-items-center.p-lg-4.p-3
        .col-lg-10.col-md-12.mb-0.p-0
          .row.justify-content-start.align-items-center.bg-fondo-12
            .col-lg-12.col-xl-8.p-4
              h4 Ejemplo aplicado
              p.mb-0 Una empresa de mensajería establece como objetivo reducir los tiempos de entrega y mejorar la satisfacción del cliente. Para lograrlo, implementa procedimientos estandarizados de recolección, clasificación y distribución de mercancías, apoyados en herramientas tecnológicas de seguimiento. Estas acciones permiten relacionar los objetivos y las políticas organizacionales con la eficiencia de sus operaciones logísticas.
            .col-xl-4.d-none.d-xl-flex.p-0
              figure
                img(src="@/assets/curso/tema5/img-bg.png", alt="").mx-auto


    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Estrategias aplicadas al proceso logístico

    .bloque-texto-g.bg-color-10.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las estrategias logísticas son acciones planificadas que buscan mejorar el desempeño de la cadena de suministro mediante el uso eficiente de los recursos disponibles. Su propósito es incrementar la productividad, reducir costos, optimizar los tiempos de respuesta y fortalecer la competitividad de la organización.

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-5.mb-4.mb-lg-0
        p.mb-4 Estas estrategias pueden orientarse hacia la automatización de procesos, la optimización de inventarios, la reorganización de bodegas, la implementación de tecnologías, la mejora de las rutas de distribución o el fortalecimiento de las relaciones con proveedores y clientes.
        p.mb-0 La selección de una estrategia depende de las características de la organización, el comportamiento del mercado y los objetivos definidos por la dirección empresarial.
      .col-lg-7
        .bg-fondo-17.p-4.p-md-5
          h5.mb-4 Estrategias logísticas más utilizadas
          .row
            .col-md-6.col-12.mb-2.mb-md-0
              ul.lista-ul.mb-0
                li.mb-2
                  i.fas.fa-circle.circle-secundario
                  | Automatización de procesos.
                li.mb-2
                  i.fas.fa-circle.circle-secundario
                  | Optimización del almacenamiento.
                li.mb-2
                  i.fas.fa-circle.circle-secundario
                  | Gestión eficiente de inventarios.
                li.mb-0
                  i.fas.fa-circle.circle-secundario
                  | Integración tecnológica.
            .col-md-6.col-12
              ul.lista-ul.mb-0
                li.mb-2
                  i.fas.fa-circle.circle-secundario
                  | Planeación de rutas.
                li.mb-2
                  i.fas.fa-circle.circle-secundario
                  | Mejora continua.
                li.mb-2
                  i.fas.fa-circle.circle-secundario
                  | Gestión colaborativa con proveedores.
                li.mb-0
                  i.fas.fa-circle.circle-secundario
                  | Sostenibilidad logística.


    .bg-full-width.bg-fondo-11.px-5.py-4.mb-4
      .container
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2.p-0
            figure
              img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in", alt="").w-md-75-img.mx-auto
          .col-lg-9.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0.p-4.bg-color-white.br-15
            .tarjeta.br-15.p-4.mb-0.h-100
              h4 Ejemplo aplicado
              p.mb-0 Una empresa de comercio electrónico incorpora tecnologías de automatización en sus centros de distribución, como robots móviles y sistemas inteligentes de gestión de inventarios. Estas herramientas permiten optimizar los recorridos dentro del almacén, reducir los tiempos de preparación de pedidos y agilizar su despacho. De esta manera, la organización mejora la eficiencia operativa y fortalece la calidad del servicio al cliente.



    .container
      .row.mb-lg-3.mb-4.justify-content-center
        .col-xl-5.col-lg-6.col-md-12.col-12.mb-0.p-4
          .row.justify-content-start.align-items-center.bg-fondo-15.p-3.p-md-4.position-relative.h-100
            .col-lg-7.col-md-7.col-sm-8.col-12.z-2
              h4.mb-2 Video sugerido. Estrategias en operaciones logísticas
              p.mb-3 A continuación, lo invitamos a consultar el siguiente video para fortalecer los conocimientos relacionados con organización logística y contexto empresarial.

              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=zlfzD4XGyKU&t=2538s'" target="_blank")
                span Ir al recurso
            img(src="@/assets/curso/tema1/img30.png", alt="", style="position: absolute; bottom: -20px; right: 20px; width: 220px; pointer-events: none;").d-none.d-lg-flex

        .col-xl-5.col-lg-6.col-md-12.col-12.mb-0.p-4
          .row.justify-content-start.align-items-center.bg-fondo-16.p-3.p-md-4.position-relative.h-100
            .col-lg-7.col-md-7.col-sm-8.col-12.z-2
              h4.mb-2 Lectura sugerida. Planificación estratégica logística
              p.mb-3 Se invita al aprendiz a profundizar en lo relacionado con organización logística y contexto empresarial, a través del siguiente documento.

              a.boton.color-acento-botones(:href="'https://www.marcialpons.es/media/pdf/9791387764746.pdf'" target="_blank")
                span Ir al recurso
            img(src="@/assets/curso/tema1/img31.png", alt="", style="position: absolute; bottom: -20px; right: 20px; width: 220px; pointer-events: none;").d-none.d-lg-flex

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
