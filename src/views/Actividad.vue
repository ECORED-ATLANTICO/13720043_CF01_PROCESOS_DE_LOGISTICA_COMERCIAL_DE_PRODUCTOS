<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos de la preparación de pedidos y despacho de mercancías',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de los conceptos fundamentales asociados a la preparación de pedidos, el despacho de mercancías y los procesos logísticos que garantizan la eficiencia de la operación.',
      barajarPreguntas: true,
      titulo_aprobado: '¡EXCELENTE!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      mensaje_aprobado:
        '¡Felicitaciones! Ha aprobado satisfactoriamente la actividad de aprendizaje. Su resultado evidencia la apropiación de los conceptos relacionados con la verificación y el control del despacho de mercancías. Lo invitamos a continuar con el desarrollo de las siguientes actividades del componente formativo.',
      mensaje_reprobado:
        'Aún puede fortalecer sus conocimientos. Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con proveedores, recursos, programación, procedimientos técnicos, verificación, control y mejora del despacho de mercancías. Posteriormente podrá presentar nuevamente la actividad para evidenciar el logro de los resultados de aprendizaje.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de la preparación de pedidos dentro del proceso logístico?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar la correcta selección, alistamiento y verificación de los productos solicitados por el cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Incrementar el tiempo de almacenamiento de las mercancías.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la cantidad de pedidos recibidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir las actividades de transporte por procesos administrativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La preparación de pedidos permite seleccionar, verificar y alistar correctamente las mercancías para su posterior despacho.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con la preparación de pedidos y su importancia dentro del proceso logístico.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes documentos se utiliza para orientar la selección de productos durante la preparación de pedidos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Factura de compra.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Lista de <em>picking</em>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Balance general.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estado de resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La lista de <em>picking</em> orienta la ubicación, referencia y cantidad de productos que deben prepararse para cada pedido.',
          mensaje_incorrecto:
            'Revise nuevamente la documentación utilizada durante la preparación de pedidos.',
        },
        {
          id: 3,
          texto:
            '¿Qué herramienta tecnológica permite capturar rápidamente la información de un producto mediante su identificación automática?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Radio portátil.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sistema de iluminación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Lector de códigos de barras.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Calculadora electrónica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El lector de códigos de barras captura la información de los productos de manera rápida y precisa durante las operaciones logísticas.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con las herramientas tecnológicas para la preparación de pedidos.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una ventaja de utilizar terminales de radiofrecuencia (RF) en un almacén?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el consumo de papel.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar completamente el inventario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la capacidad del almacén.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Actualizar la información de las operaciones en tiempo real.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Las terminales de radiofrecuencia permiten registrar y consultar información en tiempo real durante las operaciones logísticas.',
          mensaje_incorrecto:
            'Revise nuevamente el funcionamiento y las ventajas de las terminales de radiofrecuencia.',
        },
        {
          id: 5,
          texto:
            '¿Qué actividad corresponde a la extracción de mercancías dentro de la gestión de pedidos?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Retirar del almacén los productos solicitados para atender un pedido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Elaborar los estados financieros de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registrar la nómina del personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La extracción consiste en localizar y retirar las mercancías requeridas para preparar un pedido.',
          mensaje_incorrecto:
            'Revise nuevamente el proceso de extracción de mercancías dentro de la gestión de pedidos.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el objetivo principal de las rutas de alistamiento en un almacén?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar los recorridos del personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la velocidad de preparación de pedidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Optimizar los desplazamientos durante la preparación de pedidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentar el número de inventarios físicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las rutas de alistamiento buscan disminuir desplazamientos y optimizar el tiempo empleado en la preparación de pedidos.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con las rutas de alistamiento en los procesos logísticos.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes indicadores permite evaluar el porcentaje de pedidos preparados correctamente, sin diferencias en referencias o cantidades?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rotación de inventarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Nivel de devoluciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exactitud en la preparación de pedidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Costo de almacenamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La exactitud en la preparación de pedidos mide el porcentaje de pedidos preparados correctamente y contribuye a mejorar la calidad del servicio.',
          mensaje_incorrecto:
            'Revise nuevamente los indicadores utilizados para evaluar la preparación y el despacho de mercancías.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el propósito de consolidar un pedido antes del despacho?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la cantidad de documentos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reunir y organizar todos los productos correspondientes a un mismo pedido para facilitar su despacho.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Disminuir la capacidad de almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar el proceso de embalaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La consolidación reúne las mercancías de un mismo pedido para facilitar su verificación, embalaje y despacho.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el armado y la consolidación de pedidos.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de los siguientes factores influye directamente en el tiempo de preparación de un pedido?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El diseño y la organización del almacén.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El logotipo de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El color del uniforme del operario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La decoración de las oficinas administrativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La distribución física del almacén influye en los recorridos y en el tiempo requerido para preparar los pedidos.',
          mensaje_incorrecto:
            'Revise nuevamente los factores que afectan los tiempos de preparación de pedidos.',
        },
        {
          id: 10,
          texto:
            '¿Qué método de preparación de pedidos consiste en que cada operario trabaja únicamente en un área específica del almacén?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Preparación por oleadas (<em>Wave Picking</em>).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Preparación por pedido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Preparación por zonas (<em>Zone Picking</em>).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Preparación por lotes (<em>Batch Picking</em>).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La preparación por zonas asigna a cada operario un área específica del almacén para optimizar la operación.',
          mensaje_incorrecto:
            'Revise nuevamente los métodos utilizados para la preparación de pedidos.',
        },
        {
          id: 11,
          texto:
            '¿Qué se debe verificar antes de autorizar el despacho de un pedido?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El diseño del empaque publicitario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La coincidencia entre las referencias, cantidades y documentación del pedido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El presupuesto anual del área comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La programación de vacaciones del personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La verificación confirma que las mercancías y la documentación correspondan al pedido antes del despacho.',
          mensaje_incorrecto:
            'Revise nuevamente los métodos de verificación aplicados durante el despacho de mercancías.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es uno de los principales beneficios de clasificar los pedidos antes del despacho?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el número de devoluciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el espacio de almacenamiento disponible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Organizar las órdenes para optimizar la programación y distribución de las entregas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar el uso de documentos logísticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La clasificación facilita la organización de los pedidos y mejora la programación de los despachos.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con la clasificación de pedidos.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es el objetivo principal de planificar las rutas de reparto?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Optimizar los recorridos y cumplir los tiempos de entrega establecidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar el consumo de combustible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar el número de vehículos utilizados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la capacidad de carga de los vehículos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La planificación de rutas busca optimizar los recorridos y mejorar la eficiencia en la distribución de mercancías.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con las rutas de reparto.',
        },
        {
          id: 14,
          texto:
            '¿Qué información proporciona el indicador de exactitud en la preparación de pedidos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El costo de transporte por vehículo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El porcentaje de utilización del almacén.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La cantidad de horas trabajadas por los operarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El porcentaje de pedidos preparados correctamente sin errores de referencia o cantidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Este indicador permite evaluar la precisión con la que se preparan los pedidos y detectar oportunidades de mejora en el proceso logístico.',
          mensaje_incorrecto:
            'Revise nuevamente los indicadores utilizados para evaluar la preparación y el despacho de mercancías.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es el propósito principal de utilizar indicadores logísticos en el proceso de preparación y despacho de mercancías?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evaluar el desempeño de los procesos para apoyar la toma de decisiones y la mejora continua.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar el número de documentos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir los procedimientos operativos establecidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de controlar el inventario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los indicadores permiten medir el desempeño de las operaciones logísticas e identificar oportunidades de mejora.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con los indicadores logísticos y su importancia dentro de la gestión del despacho.',
        },
        {
          id: 16,
          texto:
            '¿Qué característica debe cumplir un indicador para que facilite la toma de decisiones?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser complejo y difícil de interpretar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ser medible, objetivo y confiable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Presentar únicamente información cualitativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Utilizarse únicamente cuando existan errores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Un indicador debe ser medible, objetivo y confiable para proporcionar información útil sobre el desempeño del proceso.',
          mensaje_incorrecto:
            'Revise nuevamente las características que deben cumplir los indicadores logísticos.',
        },
        {
          id: 17,
          texto:
            '¿Qué actividad hace parte del seguimiento de los procesos logísticos?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar los registros de las operaciones finalizadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Analizar los resultados obtenidos mediante los indicadores para identificar oportunidades de mejora.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Suspender el control del inventario después del despacho.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Incrementar el tiempo destinado a la preparación de pedidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El seguimiento permite analizar el comportamiento de los indicadores para fortalecer el desempeño de los procesos logísticos.',
          mensaje_incorrecto:
            'Revise nuevamente el proceso de seguimiento aplicado a las operaciones logísticas.',
        },
        {
          id: 18,
          texto:
            '¿Cuál de las siguientes acciones contribuye a la mejora continua del proceso de despacho?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener procedimientos sin realizar evaluaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ignorar los resultados de los indicadores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Implementar acciones correctivas y preventivas con base en el análisis de los resultados obtenidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar los registros históricos de la operación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La mejora continua se fundamenta en el análisis de los resultados y la implementación de acciones para optimizar el proceso.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con la mejora continua de los procesos logísticos.',
        },
        {
          id: 19,
          texto:
            '¿Qué herramienta es utilizada para apoyar el seguimiento visual de los indicadores logísticos en tiempo real?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Panel de control (<em>Dashboard</em>).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Manual de funciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organigrama institucional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reglamento interno de trabajo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los paneles de control permiten visualizar el comportamiento de los indicadores y facilitar el seguimiento de las operaciones logísticas.',
          mensaje_incorrecto:
            'Revise nuevamente las herramientas utilizadas para el seguimiento y control de los procesos logísticos.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el principal beneficio de aplicar procesos de mejora continua en la preparación y el despacho de mercancías?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar los tiempos de respuesta al cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la utilización de herramientas tecnológicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Optimizar los procesos, fortalecer la calidad del servicio y mejorar la satisfacción del cliente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Eliminar los procedimientos de control establecidos por la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La mejora continua permite optimizar los procesos logísticos, incrementar la eficiencia y fortalecer la satisfacción del cliente.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con la mejora continua aplicada a la preparación y el despacho de mercancías.',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>
