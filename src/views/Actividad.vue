<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
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
      tema: 'Evaluación de conocimientos sobre tecnología y planes de seguridad.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Verificar la comprensión de los conceptos relacionados con las tecnologías aplicadas a la seguridad privada, los sistemas de videovigilancia y los elementos fundamentales para el diseño e implementación de planes de seguridad.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es uno de los principales beneficios de la inteligencia artificial en la seguridad privada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Automatiza tareas y detecta patrones de riesgo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplaza totalmente al personal de vigilancia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elimina la necesidad de sistemas tecnológicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituye todos los controles de acceso existentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué permite el Internet de las Cosas (IoT) en los sistemas de seguridad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el uso de dispositivos electrónicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Conectar equipos para monitoreo en tiempo real.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar completamente los riesgos operativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir los protocolos de seguridad empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es una ventaja principal del uso de drones en vigilancia?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permiten cubrir grandes áreas rápidamente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducen la necesidad de supervisión constante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Funcionan únicamente en espacios cerrados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminan los costos de operación tecnológica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué característica distingue al reconocimiento facial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utiliza únicamente tarjetas electrónicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Requiere supervisión manual permanente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Funciona solo en ambientes controlados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identifica personas mediante rasgos únicos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es el objetivo principal de la ciberseguridad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proteger redes, sistemas y datos digitales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar exclusivamente la vigilancia física.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir las medidas de seguridad tradicional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar únicamente el acceso a edificios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué aporta la analítica de datos a la seguridad privada?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuye la capacidad de supervisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplaza las auditorías organizacionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elimina la necesidad de monitoreo continuo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Permite anticipar amenazas y riesgos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál es una aplicación de la realidad virtual en seguridad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir los sistemas de videovigilancia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar completamente la formación práctica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Simular escenarios para capacitación segura.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar la evaluación del desempeño laboral.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué función cumple la automatización tecnológica operativa?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la dependencia de procesos manuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la vigilancia de áreas estratégicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejorar la eficiencia de los procesos de seguridad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Limitar el uso de sensores y dispositivos digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es una característica del blockchain aplicado a seguridad?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reduce la trazabilidad de la información crítica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Permite modificar registros sin restricciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Requiere eliminar los controles de acceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Protege datos mediante registros inalterables.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué permite la inteligencia geoespacial en vigilancia?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir todos los sistemas de monitoreo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Analizar ubicaciones y anticipar riesgos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de personal operativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar el uso de tecnologías de localización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Cuál es la función principal de una cámara tipo domo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar matrículas vehiculares automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Detectar temperaturas en procesos industriales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cubrir únicamente espacios exteriores extensos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vigilar de forma discreta áreas amplias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué ventaja ofrecen las cámaras PTZ?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Operan únicamente con lentes fijos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Funcionan solo en interiores comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permiten movimiento y acercamiento remoto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Requieren varias cámaras para una cobertura total.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Cuál es la función principal de un DVR?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestionar exclusivamente cámaras IP.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Controlar sistemas de acceso biométrico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Transmitir señales inalámbricas de vigilancia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Grabar y administrar video de seguridad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué característica distingue a un NVR?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utiliza únicamente señales analógicas tradicionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gestiona video digital proveniente de redes IP.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Funciona exclusivamente con cintas magnéticas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Carece de acceso remoto a las grabaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Cuál es una ventaja de la fibra óptica en videovigilancia?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presenta menor velocidad de transmisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Limita la transmisión a cortas distancias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Es inmune a interferencias electromagnéticas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Requiere exclusivamente sistemas analógicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué representa la resolución en una cámara CCTV?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La nitidez y detalle de las imágenes captadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La cantidad de energía consumida diariamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El nivel de protección frente al vandalismo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tiempo máximo de almacenamiento disponible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Cuál es el propósito principal de un plan de seguridad?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar únicamente la productividad laboral.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir las normas internas de la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar completamente todos los riesgos existentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Proteger personas, activos e información crítica.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué permite el diagnóstico organizacional?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir el análisis de vulnerabilidades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identificar riesgos y oportunidades de mejora.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de auditorías internas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar la participación de las áreas operativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué incluye el análisis de vulnerabilidades?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El estudio de debilidades y amenazas potenciales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente la evaluación de infraestructura física.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solamente el análisis de recursos tecnológicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivamente la valoración del talento humano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Cuál es el objetivo de la mejora continua en seguridad?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener sin cambios los procedimientos establecidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la supervisión de los sistemas de control.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Actualizar y fortalecer permanentemente el sistema.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Limitar la implementación de nuevas tecnologías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
