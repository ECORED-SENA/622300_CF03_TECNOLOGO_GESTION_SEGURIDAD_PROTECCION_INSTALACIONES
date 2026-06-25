<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Tecnología aplicada a la seguridad privada
      p.mb-5 La tecnología aplicada a la seguridad privada permite optimizar la vigilancia, anticipar riesgos y mejorar la respuesta ante incidentes mediante herramientas como inteligencia artificial, biometría, IoT y videovigilancia inteligente.
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Evolución tecnológica en la seguridad privada
      .row.justify-content-center.align-items-center.mb-5      
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-1(data-aos="zoom-in").mb-3
            p.mb-0 La tecnología ha transformado la seguridad privada mediante herramientas como la inteligencia artificial, la automatización y la ciberseguridad, fortaleciendo la protección de bienes y personas. Este avance impulsa servicios más eficientes, preventivos y adaptados a las necesidades actuales (Lateris, 2024). 
          p.mb-0 Seguidamente, se presentan los principales aspectos que evidencian la evolución tecnológica de la seguridad privada y su impacto en los servicios actuales.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img1.jpg', alt='').m-auto
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Evolución tecnológica
                  p.mb-0 La seguridad privada ha evolucionado para responder a nuevas necesidades de protección de bienes, personas, datos e instalaciones mediante soluciones más eficientes y especializadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Tecnologías que impulsan el cambio
                  p.mb-0 La inteligencia artificial, el Internet de las Cosas, la automatización y la ciberseguridad permiten fortalecer el monitoreo, el análisis de riesgos y la respuesta ante incidentes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Servicios tecnológicos de seguridad
                  p Los servicios tecnológicos de seguridad más representativos son:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Monitoreo en tiempo real mediante cámaras y sistemas de CCTV. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Control de acceso con tecnología biométrica o tarjetas inteligentes. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Detección de intrusos a través de sensores y alarmas. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Supervisión remota desde centros de control especializados. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Integración con aplicaciones móviles para gestión a distancia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Respuesta y personalización
                  p.mb-0 La tecnología permite prevenir incidentes, responder con mayor rapidez ante riesgos y adaptar las soluciones de seguridad según las necesidades de cada cliente u organización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Seguridad privada en Colombia
                  p.mb-0 En Colombia, la seguridad privada se ha fortalecido mediante soluciones que integran talento humano y tecnología avanzada, consolidando servicios más innovadores y eficientes (Lateris, 2024).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img6.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Transformación tecnológica del mercado de seguridad privada
      p.mb-5 En el siguiente pódcast descubra cómo la tecnología está revolucionando la seguridad privada y conozca las herramientas que permiten anticipar riesgos, fortalecer la protección y optimizar la toma de decisiones en entornos actuales.
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.caja-3(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t1/img7.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Transformación tecnológica del mercado de seguridad privada"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t1/img8.png" ).m-auto
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Inteligencia artificial aplicada a la vigilancia
      p.mb-5 La inteligencia artificial fortalece la seguridad privada al automatizar procesos, analizar información en tiempo real, detectar comportamientos anómalos, reducir falsas alarmas y optimizar recursos disponibles (Lateris, 2024; Nova Seguridad, s.f.). Para ampliar este tema, se presentan las principales aplicaciones de la inteligencia artificial en la vigilancia y su aporte a la seguridad privada.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Reconocimiento facial")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img9.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Reconocimiento facial
              p.mb-0 La inteligencia artificial permite identificar personas mediante el análisis de rasgos faciales, fortaleciendo el control de acceso y la verificación de identidad en espacios vigilados.
        .py-3.py-md-4(titulo="Detección de comportamientos anómalos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img10.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Detección de comportamientos anómalos
              p.mb-0 Los sistemas inteligentes pueden reconocer movimientos o conductas inusuales, generando alertas tempranas que facilitan la prevención de incidentes y la respuesta oportuna.
        .py-3.py-md-4(titulo="Análisis de video en tiempo real")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img11.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Análisis de video en tiempo real
              p.mb-0 La IA permite examinar imágenes captadas por cámaras de seguridad de forma inmediata, identificando eventos relevantes y apoyando la toma de decisiones operativas.
        .py-3.py-md-4(titulo="Reducción de falsas alarmas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img12.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Reducción de falsas alarmas
              p.mb-0 Mediante el análisis de datos y patrones, la inteligencia artificial ayuda a diferenciar situaciones reales de eventos no críticos, evitando alertas innecesarias.
        .py-3.py-md-4(titulo="Optimización de recursos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img13.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Optimización de recursos
              p.mb-0 La automatización de tareas permite que el personal de seguridad se concentre en actividades críticas, mejorando la eficiencia operativa y el uso de recursos.
        .py-3.py-md-4(titulo="Apoyo a la ciberseguridad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img14.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Apoyo a la ciberseguridad
              p.mb-0 La inteligencia artificial también contribuye a detectar vulnerabilidades, amenazas digitales y posibles ataques informáticos, fortaleciendo la protección de sistemas e información.
      p.mb-0 La inteligencia artificial impulsa una seguridad privada más preventiva, precisa y eficiente, al integrar análisis de datos, automatización y respuesta temprana frente a riesgos.
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Internet de las Cosas (IoT) en la protección de activos
      p.mb-5 El Internet de las Cosas (IoT) fortalece la protección de activos mediante dispositivos interconectados que permiten monitoreo en tiempo real, automatización y respuesta oportuna ante riesgos, optimizando la gestión de la seguridad (Lateris, 2024; Boeckl et al., 2019). A continuación, se presentan los principales aportes, aplicaciones y desafíos del Internet de las Cosas en la protección de activos organizacionales.
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Interconexión y monitoreo inteligente
                  p.mb-0 El IoT permite conectar cámaras, sensores, alarmas y otros dispositivos de seguridad en una misma red, facilitando la vigilancia permanente y el intercambio de información en tiempo real. Esta integración mejora la detección temprana de incidentes y fortalece la capacidad de respuesta ante eventos de riesgo (Lateris, 2024).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Protección de activos e infraestructuras críticas
                  p.mb-0 La tecnología IoT contribuye a la protección de instalaciones, equipos e infraestructuras críticas como sistemas de energía, agua y transporte. Mediante sensores inteligentes, es posible detectar anomalías, generar alertas automáticas y activar medidas preventivas para reducir impactos y garantizar la continuidad operativa (Lateris, 2024).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Supervisión remota y toma de decisiones
                  p.mb-0 Los dispositivos conectados permiten supervisar instalaciones desde cualquier ubicación mediante plataformas digitales y aplicaciones móviles. Esto facilita el acceso a información en tiempo real y mejora la toma de decisiones relacionadas con la gestión de la seguridad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Eficiencia operativa y automatización
                  p.mb-0 La automatización de procesos mediante IoT optimiza los recursos disponibles y reduce tiempos de respuesta. Los sistemas pueden ejecutar acciones automáticas ante determinadas condiciones, fortaleciendo la vigilancia y mejorando la eficiencia de las operaciones de seguridad (Lateris, 2024).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Riesgos y desafíos de ciberseguridad
                  p.mb-0 Aunque el IoT ofrece múltiples beneficios, los dispositivos conectados pueden estar expuestos a vulnerabilidades que comprometan la seguridad de la información y el funcionamiento de los sistemas. Por esta razón, es fundamental implementar controles de ciberseguridad, mecanismos de autenticación y estrategias de protección que reduzcan los riesgos asociados (Boeckl et al., 2019).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Importancia del IoT en la seguridad moderna
                  p.mb-0 El Internet de las Cosas impulsa una gestión de seguridad más inteligente, preventiva y basada en datos. Su capacidad para integrar dispositivos, automatizar procesos y generar información en tiempo real lo convierte en una herramienta estratégica para la protección de activos en entornos organizacionales actuales (Lateris, 2024).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img20.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Drones, robots y tecnologías emergentes en seguridad
      p.mb-5 Los drones, robots y tecnologías emergentes han transformado la seguridad privada al incorporar herramientas que fortalecen la vigilancia, optimizan los procesos de monitoreo y mejoran la capacidad de respuesta ante riesgos. Estas soluciones permiten ampliar la cobertura de protección, incrementar la eficiencia operativa y apoyar la toma de decisiones mediante información obtenida en tiempo real (Lateris, 2024). A continuación, se presentan las principales aplicaciones y beneficios de los drones, robots y tecnologías emergentes en los procesos actuales de seguridad.
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Drones en vigilancia
                  p.mb-0 Los drones permiten realizar vigilancia aérea y monitoreo en tiempo real mediante cámaras, sensores y sistemas de transmisión de datos. Su utilización facilita la supervisión de grandes áreas, perímetros, eventos masivos y zonas de difícil acceso, mejorando la detección temprana de riesgos y la respuesta ante incidentes (Lateris, 2024).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Robots de seguridad
                  p.mb-0 Los robots de seguridad pueden ejecutar patrullajes autónomos, inspeccionar instalaciones y apoyar la detección de amenazas sin exponer directamente al personal. Estas herramientas fortalecen la vigilancia continua y permiten operar en entornos que representan riesgos para las personas (IFC, 2017).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Tecnologías emergentes
                  p.mb-0 Las tecnologías emergentes, como la inteligencia artificial, la analítica de datos, la realidad aumentada y blockchain, contribuyen a una gestión de seguridad más inteligente y preventiva. Estas herramientas permiten procesar información en tiempo real, identificar patrones de riesgo y fortalecer la protección de activos e infraestructura crítica (Lateris, 2024).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Beneficios operativos
                  p.mb-0 La incorporación de estas tecnologías mejora la cobertura de vigilancia, optimiza recursos, incrementa la precisión en la detección de amenazas y reduce los tiempos de respuesta ante incidentes. Además, fortalece la capacidad de supervisión y facilita la toma de decisiones basada en información confiable (Lateris, 2024).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img24.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Retos de implementación
                  p.mb-0 La adopción de drones, robots y tecnologías emergentes requiere inversión en infraestructura, capacitación del personal y cumplimiento de requisitos normativos. Asimismo, es necesario garantizar la protección de datos, la privacidad y el uso ético de la información generada por estos sistemas (Boeckl et al., 2019).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img25.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.6 Reconocimiento facial, biometría y ciberseguridad
      p.mb-5 El reconocimiento facial, la biometría y la ciberseguridad fortalecen la seguridad privada al mejorar la identificación de personas, proteger accesos y salvaguardar la información frente a amenazas físicas y digitales (Lateris, 2024). Posteriormente, se presentan las principales aplicaciones y beneficios de estas tecnologías para fortalecer la protección física y digital en las organizaciones.
      TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Reconocimiento facial")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img26.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Reconocimiento facial
              p.mb-0 El reconocimiento facial identifica personas mediante el análisis de rasgos únicos del rostro, facilitando el control de acceso, la detección de personas no autorizadas y la integración con sistemas de videovigilancia (Lateris, 2024).
        .py-3.py-md-4(titulo="Biometría")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img27.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Biometría
              p.mb-0 La biometría autentica la identidad mediante características únicas como huellas dactilares, iris, voz o rostro, ofreciendo mayor seguridad que tarjetas o contraseñas tradicionales (Lateris, 2024).
        .py-3.py-md-4(titulo="Ciberseguridad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img28.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ciberseguridad
              p.mb-0 La ciberseguridad protege redes, sistemas y datos frente a amenazas digitales como #[i ransomware], robo de información, accesos no autorizados y ataques informáticos (Lateris, 2024; Boeckl et al., 2019).
        .py-3.py-md-4(titulo="Integración y beneficios")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img29.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Integración y beneficios
              p.mb-0 La integración de estas tecnologías permite fortalecer el control de acceso, mejorar la vigilancia, proteger información crítica y reducir riesgos físicos y digitales en la organización (Lateris, 2024).
      Separador
      #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.7 Analítica de datos, #[i blockchain] e inteligencia geoespacial
      p.mb-5 La transformación digital ha incorporado tecnologías avanzadas que permiten analizar información, proteger datos, optimizar operaciones y fortalecer la gestión de riesgos mediante soluciones inteligentes y conectadas (Lateris, 2024). Ahora se dará paso a estudiar algunas tecnologías emergentes que fortalecen la vigilancia, la protección de activos y la toma de decisiones en seguridad.
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Analítica de datos
                  p.mb-0 La analítica de datos permite procesar grandes volúmenes de información para identificar patrones, detectar amenazas, generar alertas tempranas y apoyar la toma de decisiones. Además, contribuye a optimizar recursos, mejorar la respuesta ante emergencias y fortalecer la prevención de riesgos mediante análisis predictivos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img30.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 #[i Blockchain]
                  p.mb-0 #[i Blockchain] permite almacenar información mediante registros cifrados e inalterables, fortaleciendo la integridad de datos relacionados con accesos, registros operativos y comunicaciones. También favorece la transparencia, las auditorías y la verificación segura de identidades digitales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img31.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Inteligencia geoespacial
                  p.mb-0 La inteligencia geoespacial combina información geográfica y tecnologías de geolocalización para monitorear áreas, analizar movimientos y anticipar riesgos. Su integración con cámaras, sensores y drones permite una vigilancia más precisa y una mejor gestión de emergencias.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img32.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Realidad aumentada y realidad virtual
                  p.mb-0 La realidad aumentada y la realidad virtual fortalecen la formación del personal mediante simulaciones inmersivas y escenarios de entrenamiento que permiten desarrollar habilidades para responder a incidentes y situaciones de emergencia de forma segura y efectiva.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img33.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Automatización operativa
                  p.mb-0 La automatización integra cámaras inteligentes, sensores y sistemas de control para realizar monitoreo continuo, detectar anomalías y generar alertas automáticas. Esto mejora la eficiencia operativa, reduce errores humanos y optimiza los tiempos de respuesta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img34.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Tecnologías emergentes en la gestión de riesgos
                  p.mb-0 La combinación de inteligencia artificial, analítica de datos, IoT, #[i nblockchain] y otras tecnologías emergentes permite una gestión de riesgos más proactiva, facilitando la identificación temprana de amenazas y fortaleciendo la capacidad de respuesta de las organizaciones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img35.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.8 Retos de la seguridad frente a la tecnología
      p.mb-5 La incorporación de nuevas tecnologías ha fortalecido significativamente la seguridad privada; sin embargo, también ha generado desafíos relacionados con la inversión, la innovación, la protección de la información y la adaptación de los sistemas a entornos cada vez más complejos y digitalizados (Nova Seguridad, s.f.). En este apartado, se abordan los retos tecnológicos que influyen en la seguridad privada y en la gestión de riesgos organizacionales.
      .row.align-items-center.mb-0
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img36.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Inversión y costos tecnológicos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La implementación de tecnologías avanzadas, como sistemas biométricos, cámaras inteligentes, sensores y plataformas de monitoreo, requiere inversiones en infraestructura, mantenimiento y capacitación. Por ello, las organizaciones deben garantizar que estas herramientas se integren adecuadamente con los procesos de seguridad existentes para maximizar sus beneficios (Nova Seguridad, s.f.).
            .row(titulo="Innovación y actualización permanente").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La rápida evolución tecnológica exige que las empresas de seguridad mantengan sus sistemas actualizados e incorporen constantemente nuevas herramientas para responder a riesgos emergentes. Esto implica adoptar soluciones innovadoras que fortalezcan la confianza de los clientes y mejoren la competitividad organizacional (Nova Seguridad, s.f.).
            .row(titulo="Adaptación tecnológica a cada organización").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Cada organización posee necesidades, riesgos e infraestructuras diferentes, por lo que la implementación de nuevas tecnologías requiere procesos de adaptación y personalización. Un adecuado análisis de las necesidades permite integrar las soluciones tecnológicas de manera eficiente y reducir posibles vulnerabilidades (Nova Seguridad, s.f.).
            .row(titulo="Protección de la información y ciberseguridad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El acceso masivo a internet y el creciente volumen de datos han incrementado los riesgos asociados al fraude electrónico, robo de información y ataques cibernéticos. Por esta razón, las organizaciones deben implementar medidas de ciberseguridad que protejan los sistemas, los datos y las comunicaciones utilizadas en los procesos de seguridad (Nova Seguridad, s.f.).
            .row(titulo="Gestión integral de la seguridad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La creciente conciencia sobre los problemas de seguridad ha impulsado el desarrollo de sistemas electrónicos avanzados, como lectores biométricos, reconocimiento facial, controles de acceso, cámaras, sensores, monitoreo en tiempo real, georreferenciación, alarmas, software de seguimiento, automatización de procesos y protección de datos. Estas herramientas fortalecen la gestión integral de la seguridad y permiten responder mejor a los riesgos actuales (Nova Seguridad, s.f.).
      
</template>

<script>
import audio1 from '@/assets/componentes/audios/audio-ej.mp3'
export default {
  name: 'Tema1',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
