<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Plan de seguridad
      p.mb-5 El plan de seguridad es una herramienta de gestión integral que orienta la administración de recursos, procedimientos y protocolos para proteger personas, bienes, información y continuidad operativa. Además, permite identificar, prevenir, responder y mitigar riesgos según el nivel de amenaza y el contexto de la organización (IFC, 2017; Sevilla, 2024).
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Concepto, diseño y propósito del plan de seguridad
      p.mb-5 En el siguiente video conocerá la importancia del plan de seguridad como herramienta estratégica para proteger personas, bienes e información, mediante acciones organizadas que fortalecen la prevención y la respuesta ante riesgos.
      figure(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Diseño y proposito del plan de seguridad
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Alcance, características y elementos del plan
      p.mb-5 El plan de seguridad establece el marco de actuación para la protección de personas, bienes, información y operaciones. Su alcance, características y elementos deben responder a las necesidades específicas de la organización y a los riesgos presentes en su entorno; las cuales, son estudiadas en la presente unidad.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img34.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Alcance del plan
      p.mb-5 El alcance del plan de seguridad debe adaptarse a las características de cada área, proceso o activo de la organización, considerando que los riesgos no se presentan de manera uniforme. Por ello, las medidas de protección deben ajustarse a las necesidades específicas de cada entorno, garantizando una cobertura proporcional y pertinente frente a las amenazas identificadas (Siete24, 2016).
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img34.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características del plan de seguridad
      p.mb-5 Las características del plan permiten establecer las acciones, recursos y mecanismos necesarios para gestionar la seguridad de manera integral. Estas son:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Evaluación de riesgos
                  p.mb-0 Identifica amenazas, vulnerabilidades y posibles impactos para establecer medidas de protección adecuadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img1.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Acciones preventivas y correctivas
                  p.mb-0 Incluye controles físicos, tecnológicos y procedimientos destinados a prevenir o responder ante incidentes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Infraestructura humana y tecnológica
                  p.mb-0 Define responsabilidades del personal y los recursos tecnológicos necesarios para la gestión de la seguridad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Protocolos ante emergencias
                  p.mb-0 Establece procedimientos para evacuación, atención de incidentes y coordinación con organismos de apoyo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Formación continua
                  p.mb-0 Promueve la capacitación permanente del personal en temas de seguridad y respuesta ante emergencias.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sistemas de control y mejora
                  p.mb-0 Incorpora auditorías, inspecciones y actualizaciones para fortalecer continuamente el plan (Sevilla, 2024).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img6.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img34.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos del plan de seguridad
      p.mb-5 Todo plan de seguridad debe contener componentes mínimos que permitan planificar, ejecutar y evaluar las medidas de protección implementadas.
      .bg-carrusel
        .px-5
          .row.align-items-center
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img7.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img8.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Identificación de activos críticos
                    p.mb-0.text-center Reconoce los recursos, procesos e instalaciones que requieren protección prioritaria.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img9.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Análisis de riesgos
                    p.mb-0.text-center Determina amenazas, vulnerabilidades y niveles de riesgo asociados a los activos.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img10.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Políticas y procedimientos
                    p.mb-0.text-center Define lineamientos y acciones para prevenir y responder ante incidentes.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img11.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Recursos y responsabilidades
                    p.mb-0.text-center Establece funciones, responsables y medios necesarios para ejecutar el plan.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img12.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Capacitación
                    p.mb-0.text-center Fortalece las competencias del personal para actuar adecuadamente frente a situaciones de riesgo.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img13.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Evaluación y mejora continua
                    p.mb-0.text-center Permite revisar periódicamente la efectividad del plan e implementar acciones de mejora (MXE Estrategia, 2023).
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Diagnóstico organizacional y análisis de vulnerabilidades
      p.mb-5 El diagnóstico organizacional y el análisis de vulnerabilidades permiten conocer la situación actual de la organización, identificar factores de riesgo y establecer medidas orientadas a fortalecer la seguridad y la protección de los activos institucionales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img34.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Diagnóstico organizacional
      p.mb-5 El diagnóstico organizacional proporciona información relevante sobre el funcionamiento de la organización y facilita la identificación de aspectos que pueden influir en la gestión de la seguridad.
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Evaluación de la organización
                    p.mb-0 Analiza de manera integral los procesos, recursos y condiciones internas y externas que influyen en el desempeño institucional.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img14.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img15.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Identificación de fortalezas
                    p.mb-0 Permite reconocer capacidades, recursos y buenas prácticas que favorecen el cumplimiento de los objetivos organizacionales.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Detección de áreas de mejora
                    p.mb-0 Facilita identificar debilidades, brechas y oportunidades para fortalecer la gestión y la seguridad.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img16.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img17.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Apoyo a la toma de decisiones
                    p.mb-0 Proporciona información objetiva que contribuye a la formulación de estrategias y planes de acción.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Base para la gestión de la seguridad
                    p.mb-0 Sirve como punto de partida para diseñar medidas de protección acordes con las necesidades de la organización.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img18.png', alt='' style="width: 300px").m-auto
          p.mb-5 Una vez conocido el contexto organizacional, es necesario identificar las debilidades que podrían ser aprovechadas por amenazas internas o externas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img34.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Análisis de vulnerabilidades
      p.mb-5 El análisis de vulnerabilidades permite identificar y evaluar las debilidades que pueden afectar la seguridad de la organización y comprometer sus activos.
      .row.align-items-center.mb-2
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img19.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Vulnerabilidades físicas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponden a debilidades relacionadas con instalaciones, infraestructura, accesos, cerramientos y controles de seguridad física.
            .row(titulo="Vulnerabilidades tecnológicas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluyen fallas o debilidades en equipos, redes, sistemas de información y tecnologías utilizadas por la organización.
            .row(titulo="Vulnerabilidades humanas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se relacionan con errores, descuidos, desconocimiento de procedimientos o comportamientos inseguros del personal.
      .row.align-items-center.mb-0
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Vulnerabilidades procedimentales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponden a deficiencias en normas, protocolos, controles y procedimientos de seguridad.
            .row(titulo="Evaluación del riesgo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite analizar la probabilidad de ocurrencia de una amenaza y el impacto que podría generar sobre la organización.
            .row(titulo="Medidas de mitigación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende las acciones orientadas a reducir, controlar o eliminar los riesgos identificados.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img20.png", alt="" ).m-auto
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Seguridad física y procedimientos operativos
      p.mb-5 La seguridad física y los procedimientos operativos constituyen elementos esenciales para la protección de personas, instalaciones, activos e información. Su adecuada implementación permite prevenir incidentes, controlar riesgos y garantizar la continuidad de las operaciones mediante medidas de protección y protocolos de actuación definidos. En esta sección se estudiará la seguridad física y los procedimientos operativos de seguridad.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img34.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Seguridad física
      p.mb-5 La seguridad física comprende las medidas, recursos y controles destinados a prevenir accesos no autorizados y proteger los activos de la organización frente a amenazas internas y externas. Las medidas son las siguientes:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Barreras perimetrales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Barreras perimetrales
              p.mb-0 Son elementos físicos como cerramientos, muros, cercas y puertas que delimitan y protegen las instalaciones frente a accesos no autorizados.
        .py-3.py-md-4(titulo="Sistemas de videovigilancia")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img22.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Sistemas de videovigilancia
              p.mb-0 Permiten monitorear áreas estratégicas mediante cámaras de seguridad, facilitando la detección de incidentes y el registro de eventos.
        .py-3.py-md-4(titulo="Control de acceso")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img23.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Control de acceso
              p.mb-0 Incluye mecanismos para regular el ingreso y salida de personas, vehículos y materiales mediante tarjetas, biometría o registros de autorización.
        .py-3.py-md-4(titulo="Iluminación de seguridad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img24.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Iluminación de seguridad
              p.mb-0 Contribuye a mejorar la visibilidad, reducir zonas vulnerables y fortalecer las labores de vigilancia durante horarios nocturnos.
        .py-3.py-md-4(titulo="Sensores y sistemas de detección")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img25.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Sensores y sistemas de detección
              p.mb-0 Permiten identificar movimientos, aperturas no autorizadas, incendios u otras condiciones de riesgo que requieran atención inmediata.
        .py-3.py-md-4(titulo="Centros de monitoreo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img26.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Centros de monitoreo
              p.mb-0 Son espacios desde donde se supervisan los sistemas de seguridad y se coordinan las acciones de respuesta ante incidentes.
      p.mb-5 Las medidas de seguridad física requieren procedimientos que orienten la actuación del personal y garanticen una respuesta uniforme ante diferentes situaciones.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img34.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Procedimientos operativos de seguridad
      p.mb-5 Los procedimientos operativos establecen las actividades y protocolos que deben seguirse para ejecutar las operaciones de seguridad de manera organizada y eficiente.
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Rondas de vigilancia
                  p.mb-0 Consisten en recorridos programados para verificar condiciones de seguridad, identificar novedades y prevenir incidentes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img27.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Control de accesos
                  p.mb-0 Define las actividades necesarias para autorizar, registrar y supervisar el ingreso y salida de personas, vehículos y materiales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img28.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Respuesta ante incidentes
                  p.mb-0 Establece las acciones que deben ejecutarse frente a situaciones como intrusiones, emergencias o eventos que afecten la seguridad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img29.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Patrullajes
                  p.mb-0 Comprenden recorridos preventivos realizados en áreas internas o externas para fortalecer la vigilancia y disuasión.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img30.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Seguridad en viajes
                  p.mb-0 Incluye medidas para proteger a personas, vehículos e información durante desplazamientos corporativos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img31.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Manejo de materiales peligrosos
                  p.mb-0 Define protocolos para el almacenamiento, transporte y manipulación segura de sustancias o elementos que representen riesgos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img32.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comunicaciones operativas
                  p.mb-0 Establece los canales y medios utilizados para reportar novedades, coordinar actividades y responder a incidentes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img33.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Gestión del talento humano y atención a usuarios
      p.mb-5 La gestión del talento humano y la atención a usuarios son componentes fundamentales de los planes de seguridad, ya que contribuyen al fortalecimiento de las competencias del personal y al establecimiento de relaciones adecuadas con clientes, usuarios y demás grupos de interés. Por lo anterior, en esta sección se abordarán la gestión y el desarrollo del talento humano, así como la atención y participación de clientes y usuarios.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img34.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Gestión y desarrollo del talento humano
      p.mb-5 La gestión del talento humano busca garantizar que el personal de seguridad cuente con las competencias, los recursos y la supervisión necesarios para desempeñar sus funciones de manera eficiente. Para lograrlo, se requiere lo siguiente:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img34.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img35.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Selección y contratación
                    p.mb-0.text-center Definición de perfiles, verificación de antecedentes y vinculación del personal.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img36.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Dotación y equipamiento
                    p.mb-0.text-center Asignación de uniformes, equipos y herramientas para el cumplimiento de las funciones.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img37.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Capacitación continua
                    p.mb-0.text-center Formación técnica, operativa, ética y legal para fortalecer el desempeño profesional.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img38.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Supervisión y control
                    p.mb-0.text-center Seguimiento al cumplimiento de procedimientos y responsabilidades asignadas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img34.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Atención y participación de clientes y usuarios 
      p.mb-5 La atención a usuarios busca fortalecer la comunicación, la confianza y la participación de los diferentes grupos de interés en los procesos de seguridad. Para ello, es necesario:
      .row.justify-content-center.mb-0
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img39.png', alt="" ).m-auto
              h4.text-center Comunicación
              .caja-6_p
                p.mb-0.text-center Canales para suministrar información clara y oportuna.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img40.png', alt="" ).m-auto
              h4.text-center Consulta y participación
              .caja-6_p
                p.mb-0.text-center Mecanismos para conocer necesidades y expectativas de los usuarios.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img41.png', alt="" ).m-auto
              h4.text-center Quejas y reclamos
              .caja-6_p
                p.mb-0.text-center Procedimientos para reportar incidentes, inconformidades o sugerencias.
      Separador
      #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.6 Investigación de incidentes e innovación tecnológica
      p.mb-5 La investigación de incidentes y la innovación tecnológica permiten fortalecer la capacidad de respuesta de las organizaciones, mejorar los procesos de seguridad y prevenir la ocurrencia de eventos similares en el futuro. Para ello, se presentarán los pasos que se deben tener en cuenta durante una investigación de incidentes, así como la manera en que la innovación tecnológica contribuye al fortalecimiento de la seguridad.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img34.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Investigación de incidentes
      .bg-2
        .px-5
          p.mb-5 La investigación de incidentes permite identificar las causas de los eventos ocurridos, analizar sus consecuencias y establecer acciones que contribuyan a prevenir su repetición. Los pasos son los siguientes:
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="l")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Registro del incidente
                    p.mb-0 Documentación inicial de los hechos ocurridos.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img42.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img43.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Recolección de evidencias
                    p.mb-0 Obtención de información, registros y evidencias relacionadas.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Análisis de causas
                    p.mb-0 Identificación de factores que originaron el incidente.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img44.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img45.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Medidas correctivas
                    p.mb-0 Definición de acciones para evitar la repetición del evento.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img34.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Innovación tecnológica 
          p.mb-5 La innovación tecnológica favorece la incorporación de nuevas herramientas y estrategias que contribuyen al fortalecimiento de los sistemas y procesos de seguridad. Entre sus principales aplicaciones se encuentran:
      .row.justify-content-center.mb-0
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img46.png', alt="" ).m-auto
              h4.text-center Automatización
              .caja-6_p
                p.mb-0.text-center Uso de tecnologías para optimizar procesos.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img47.png', alt="" ).m-auto
              h4.text-center Analítica de datos
              .caja-6_p
                p.mb-0.text-center Procesamiento de información para apoyar decisiones.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img48.png', alt="" ).m-auto
              h4.text-center Nuevas tecnologías
              .caja-6_p
                p.mb-0.text-center Implementación de soluciones innovadoras para fortalecer la seguridad.
      Separador
      #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.7 Evaluación y mejora continua
      p.mb-5 La evaluación y mejora continua permiten verificar la efectividad del plan de seguridad y promover acciones orientadas al fortalecimiento permanente de los procesos de protección. Las lograrlo, se aplican acciones orientadas al seguimiento, análisis y actualización permanente del plan de seguridad, entre las cuales se encuentran:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-0
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img49.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img50.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Auditorías internas
                    p.mb-0.text-center Verificación del cumplimiento de procedimientos y controles.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img51.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Indicadores de desempeño
                    p.mb-0.text-center Medición de resultados y niveles de cumplimiento.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img52.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Análisis de incidentes
                    p.mb-0.text-center Evaluación de eventos ocurridos para identificar oportunidades de mejora.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img53.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Retroalimentación
                    p.mb-0.text-center Recopilación de observaciones de usuarios y partes interesadas.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t3/img54.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Actualización del plan
                    p.mb-0.text-center Implementación de ajustes conforme cambian las condiciones del entorno.
      Separador
      #t_3_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.8 Ventajas de implementar un plan integral de seguridad
      p.mb-5 La implementación de un plan integral de seguridad aporta beneficios operativos y estratégicos que contribuyen a la protección de los activos, la continuidad de las operaciones y el fortalecimiento de la organización. Estos beneficios se reflejan en diferentes aspectos de la gestión organizacional, entre los cuales se destacan:
      .row.align-items-center.mb-0
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Calidad del servicio").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La experiencia del usuario se ha consolidado como un factor crítico para que las empresas demuestren su capacidad y solidez en el mercado. La implementación de un sistema especializado de videovigilancia y control garantiza la prestación del servicio en condiciones óptimas de seguridad, incrementando la confianza y fidelidad del cliente. Una experiencia de usuario positiva fortalece la reputación y el posicionamiento de la marca (Siete24, 2016).
            .row(titulo="Optimización de procedimientos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La revisión sistemática y periódica de los procesos internos permite identificar y mitigar riesgos que puedan comprometer la productividad organizacional. Este enfoque preventivo constituye un pilar de la mejora continua, optimizando los flujos de trabajo y reduciendo la probabilidad de incidentes operativos (Siete24, 2016).
            .row(titulo="Eficiencia del personal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La dotación de herramientas y sistemas de seguridad especializados proporciona a los trabajadores un entorno laboral seguro y condiciones óptimas para el desarrollo de sus funciones. Esto incrementa la competitividad, eleva la productividad y mejora la calidad del trabajo ejecutado (Siete24, 2016).
            .row(titulo="Aprovechamiento de recursos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La correcta gestión y uso de los recursos en materia de seguridad contribuye a maximizar la productividad de la organización, permitiendo prevenir y mitigar riesgos de forma proactiva. La innovación constante en soluciones de seguridad incrementa la capacidad de respuesta y adaptación frente a amenazas emergentes. (Siete 24, 2016).
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img55.png", alt="" ).m-auto
      
</template>

<script>
export default {
  name: 'Tema3',
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
