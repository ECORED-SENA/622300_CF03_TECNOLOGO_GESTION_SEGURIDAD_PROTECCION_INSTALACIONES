<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Sistemas, equipos y conexiones para la videovigilancia
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-4.ajuste-2(data-aos="fade-right")
            p.mb-0 Los sistemas de videovigilancia permiten monitorear, registrar y supervisar actividades en tiempo real para proteger personas, bienes e instalaciones. Integran equipos, dispositivos y medios de transmisión que facilitan la detección de incidentes y la gestión eficiente de la seguridad.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img1.jpg', alt='').m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t2/img2.svg', alt='' style="width: 70px")
          p.mb-0 Antes de abordar los componentes tecnológicos de la videovigilancia, es importante conocer algunos los siguientes aspectos normativos relacionados con su prestación y utilización:
      .bg-1
        .px-5
          .row.justify-content-center
            .col-xl-10
              .row.justify-content-center.mb-0
                .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
                  .caja-5.h-100
                    .row.justify-content-center.mb-3
                      .col-7
                        figure.mb-4(data-aos="fade-right")
                          img(src='@/assets/curso/temas/t2/img3.svg', alt="" style="max-width: 90px").m-auto
                      h4.text-center Servicios tecnológicos complementarios
                      p.mb-0 El artículo 4 del Decreto 073 de 2002 establece que servicios como monitoreo de alarmas, circuitos cerrados de televisión (CCTV), equipos de visión o escucha remota, sistemas de detección, controles de acceso y protección perimetral constituyen servicios adicionales al servicio de vigilancia privada. Por esta razón, su prestación debe ser acordada entre las partes y su valor debe establecerse de manera independiente a la tarifa del servicio de vigilancia.
                .col-xl-6.col-md-9(data-aos="zoom-in")
                  .caja-5.h-100
                    .row.justify-content-center.mb-3
                      .col-7
                        figure.mb-4(data-aos="fade-left")
                          img(src='@/assets/curso/temas/t2/img4.svg', alt="" style="max-width: 90px").m-auto
                      h4.text-center Disposiciones de la Superintendencia de Vigilancia y Seguridad Privada
                      p.mb-0 La Superintendencia de Vigilancia y Seguridad Privada, mediante la Circular Externa 007 de 2002, aclaró que los servicios tecnológicos complementarios representan costos adicionales y no deben ofrecerse gratuitamente cuando ello afecte las condiciones económicas de la prestación del servicio. Asimismo, señaló que las estrategias comerciales que generen impactos negativos sobre los salarios, prestaciones sociales o derechos laborales del personal de vigilancia podrán dar lugar a las sanciones correspondientes por parte de la entidad competente.
          Separador
          #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.1 Sistemas de circuito cerrado de televisión (CCTV)
          p.mb-5 El circuito cerrado de televisión (CCTV) es un sistema de videovigilancia que permite captar, transmitir, visualizar y almacenar imágenes de áreas específicas para apoyar las labores de seguridad, control y monitoreo. Su funcionamiento se basa en la integración de cámaras, equipos de grabación, dispositivos de visualización y medios de transmisión que facilitan la supervisión permanente de personas, bienes e instalaciones. Para comprender el funcionamiento de un sistema CCTV, es importante identificar los componentes que intervienen en la captura, transmisión y visualización; estos son:
      .bg-2
        .px-5
          .row.justify-content-center
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Cámaras de videovigilancia
                    p.mb-0 Son los dispositivos encargados de captar imágenes y videos de las áreas monitoreadas. Dependiendo de sus características, pueden utilizarse en espacios interiores o exteriores y ofrecer diferentes niveles de resolución y cobertura.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img5.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img6.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Equipos de grabación
                    p.mb-0 Permiten almacenar las imágenes captadas por las cámaras para su consulta posterior. Entre los más utilizados se encuentran los DVR (Digital Video Recorder) y NVR (Network Video Recorder).
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Monitores de visualización
                    p.mb-0 Son los equipos que permiten observar en tiempo real las imágenes transmitidas por las cámaras, facilitando el seguimiento y control de las actividades monitoreadas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img7.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img8.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Medios de transmisión
                    p.mb-0 Corresponden a los canales utilizados para transportar la señal de video entre los diferentes componentes del sistema. Pueden emplearse cables coaxiales, cableado de red o conexiones inalámbricas.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Centro de monitoreo
                    p.mb-0 Es el espacio donde se integran los equipos de visualización, grabación y control, permitiendo supervisar el funcionamiento del sistema y coordinar las acciones de seguridad.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img9.png', alt='' style="width: 300px").m-auto
          Separador
          #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.2 Tipos de cámaras de videovigilancia
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img10.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Las cámaras de videovigilancia constituyen el principal elemento de captura de imágenes dentro de un sistema CCTV. Su diseño, alcance y funcionalidades varían según las necesidades de monitoreo, las condiciones del entorno y los objetivos de seguridad, por lo que es fundamental conocer sus características para seleccionar la alternativa más adecuada en cada instalación.
      p.mb-5 Los sistemas de videovigilancia emplean diversos tipos de cámaras, cada una diseñada para responder a necesidades específicas de vigilancia y control; estas son:
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cámara domo
                  p.mb-0 Las cámaras domo incorporan un lente gran angular protegido por una carcasa semiesférica resistente. Pueden instalarse en interiores y exteriores, ofreciendo una vigilancia discreta y una amplia cobertura, por lo que son comunes en tiendas, centros comerciales y edificios institucionales. Aunque su orientación no puede modificarse fácilmente una vez instalada, constituyen una solución eficaz para supervisar áreas abiertas (Avigilon, s.f.).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cámara bala
                  p.mb-0 Las cámaras bala poseen una estructura cilíndrica visible que contribuye al efecto disuasivo frente a posibles intrusos. Son utilizadas principalmente en exteriores para vigilar perímetros, accesos y estacionamientos, destacándose por su facilidad de instalación y capacidad de visión nocturna (Avigilon, s.f.).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cámara PTZ
                  p.mb-0 Las cámaras PTZ permiten mover el lente horizontal y verticalmente, además de realizar acercamientos mediante zoom. Esta capacidad facilita el monitoreo dinámico de grandes espacios y reduce la necesidad de instalar múltiples cámaras, siendo ampliamente utilizadas en almacenes, edificios y zonas comerciales (Avigilon, s.f.).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cámara torreta
                  p.mb-0 Las cámaras torreta cuentan con un sistema de soporte que facilita la orientación del lente y proporciona imágenes de alta definición. Son utilizadas en áreas de tránsito, vestíbulos y espacios comerciales, combinando una apariencia discreta con una amplia cobertura visual (Avigilon, s.f.).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cámara ojo de pez
                  p.mb-0 Las cámaras ojo de pez ofrecen un campo de visión de hasta 360 grados, permitiendo cubrir grandes espacios con un solo dispositivo. Son ideales para áreas abiertas donde se requiere una visión panorámica del entorno (Avigilon, s.f.).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cámara infrarroja
                  p.mb-0 Las cámaras infrarrojas utilizan iluminación infrarroja para capturar imágenes en condiciones de poca o ninguna luz. Gracias a esta característica, son ampliamente empleadas en vigilancia nocturna y monitoreo perimetral continuo (Avigilon, s.f.).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cámara térmica
                  p.mb-0 Las cámaras térmicas detectan la radiación infrarroja emitida por personas y objetos, permitiendo la vigilancia en completa oscuridad o condiciones climáticas adversas. Son utilizadas en seguridad perimetral, entornos industriales y operaciones de búsqueda y rescate (Avigilon, s.f.).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cámara con lente varifocal
                  p.mb-0 Estas cámaras permiten ajustar el nivel de zoom y el ángulo de visión para adaptarse a diferentes necesidades de monitoreo. Son especialmente útiles en accesos, entradas y áreas donde se requiere observar detalles específicos (Avigilon, s.f.).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cámaras ANPR y LPR
                  p.mb-0 Las cámaras ANPR (Automatic Number Plate Recognition) y LPR (License Plate Recognition) están diseñadas para capturar y reconocer matrículas de vehículos. Son utilizadas en estacionamientos, accesos vehiculares y sistemas de control de tráfico, permitiendo automatizar registros y fortalecer la gestión de seguridad (Avigilon, s.f.).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img19.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Parámetros técnicos para la selección de cámaras
      p.mb-5 La selección de una cámara de videovigilancia requiere analizar diversos parámetros técnicos relacionados con el entorno, las condiciones de operación y los objetivos de seguridad. Factores como la ubicación, la iluminación, la resolución de imagen, la cobertura y la infraestructura disponible influyen directamente en el desempeño del sistema y en la calidad de la vigilancia (Avigilon, s. f.). La elección adecuada de una cámara depende de diversos los siguientes criterios técnicos:
      .bg-3
        .px-5
          .row.justify-content-center
            .col-lg-10
              PasosA.color-acento-contenido(tipo="l")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Entorno de instalación
                    p.mb-0 La ubicación define el tipo de cámara requerida. En interiores suelen usarse cámaras domo por su discreción, mientras que en exteriores se recomiendan cámaras bala por su resistencia y efecto disuasivo.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img20.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img21.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Condiciones de iluminación
                    p.mb-0 La iluminación influye en la calidad de imagen. En espacios con poca luz o cambios constantes, se recomiendan cámaras con visión nocturna, infrarroja o ajuste automático.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Resolución de imagen
                    p.mb-0 La resolución determina el nivel de detalle capturado. Las cámaras HD sirven para vigilancia general, mientras que Full HD o 4K permiten identificar rostros o placas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img22.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img23.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Cobertura y vigilancia requerida
                    p.mb-0 El área para monitorear define si se necesita una cámara de cobertura amplia, como ojo de pez, o una cámara enfocada en puntos específicos.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Movilidad y seguimiento
                    p.mb-0 Cuando se requiere observar áreas extensas o seguir personas y vehículos, las cámaras PTZ son adecuadas por su movimiento horizontal, vertical y zoom.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img24.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img25.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Audio como complemento
                    p.mb-0 El audio puede aportar información adicional en recepciones, oficinas o zonas críticas, donde sonidos o conversaciones ayudan a comprender mejor los eventos.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Infraestructura y almacenamiento
                    p.mb-0 La cámara debe ser compatible con la red, los grabadores y la capacidad de almacenamiento disponible, para garantizar una integración eficiente del sistema.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img26.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img27.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Planeación y análisis de necesidades
                    p.mb-0 No existe una solución única. La selección debe considerar riesgos, iluminación, nivel de detalle, infraestructura disponible, presupuesto y necesidades de seguridad.
          Separador
          #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.4 Sistemas de grabación y almacenamiento
      p.mb-5 Los sistemas de grabación y almacenamiento permiten conservar, gestionar y consultar las imágenes captadas por las cámaras de videovigilancia, garantizando la disponibilidad de la información y el análisis de eventos relevantes. Las principales tecnologías son:
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img34.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Digital Video Recorder (DVR)
      p.mb-5 El DVR es uno de los sistemas de grabación más utilizados en la videovigilancia analógica, gracias a sus capacidades de almacenamiento, administración y consulta de imágenes. A continuación, se presentan sus principales características y aplicaciones.
      .bg-carrusel.mb-5
        .px-5
          .row.align-items-center
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img28.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img29.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text ¿Qué es?
                    p.mb-0.text-center El DVR es un dispositivo que recibe, graba y almacena las imágenes captadas por cámaras analógicas, permitiendo su consulta y gestión posterior (Argüello, 2024).
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img30.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Funciones
                    p.mb-0.text-center Permite visualizar video en tiempo real, programar grabaciones, buscar registros específicos y gestionar múltiples cámaras desde un mismo equipo.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img31.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Almacenamiento
                    p.mb-0.text-center Guarda las grabaciones en discos duros, unidades SSD o sistemas de almacenamiento externos, permitiendo conservar información durante largos períodos.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img32.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Acceso remoto
                    p.mb-0.text-center Incorpora funciones de servidor IP que permiten visualizar cámaras y grabaciones desde computadores o dispositivos móviles conectados a la red.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img33.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Aplicaciones
                    p.mb-0.text-center Es ampliamente utilizado en viviendas, comercios, oficinas y pequeñas empresas que emplean sistemas de videovigilancia analógica.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img34.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Network Video Recorder (NVR) 
      p.mb-5 El NVR constituye una solución de grabación diseñada para sistemas de videovigilancia IP, permitiendo gestionar video de alta calidad mediante redes de datos. A continuación, se describen sus principales características y funcionalidades.
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-8(data-aos="fade-right")
              SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img35.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text ¿Qué es?
                    p.mb-0.text-center El NVR es un dispositivo diseñado para grabar y gestionar video proveniente de cámaras IP conectadas mediante redes de datos (Obregón, 2017).
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img36.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Funcionamiento
                    p.mb-0.text-center Recibe las imágenes transmitidas por las cámaras IP a través de la red y las almacena para su visualización y consulta posterior.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img37.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Calidad de video
                    p.mb-0.text-center Permite gestionar grabaciones de alta resolución, ofreciendo imágenes más detalladas para la identificación de personas, objetos y eventos.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img38.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Administración remota
                    p.mb-0.text-center Facilita la supervisión y gestión de cámaras desde diferentes ubicaciones mediante plataformas web o aplicaciones móviles.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img39.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Aplicaciones
                    p.mb-0.text-center Se utiliza en empresas, edificios corporativos, instituciones educativas, centros comerciales y proyectos de videovigilancia de mediana escala.
            .col-xl-4(data-aos="fade-left")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img40.png', alt='' style="max-width: 350px").m-auto
      p.mb-0 La eficacia de los sistemas de grabación depende de una adecuada capacidad de almacenamiento, mecanismos de compresión eficientes y medidas de protección que garanticen la disponibilidad e integridad de las grabaciones generadas por el sistema de videovigilancia.
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Monitores, visualización y control de cámaras
      p.mb-5 Los sistemas de videovigilancia no solo dependen de las cámaras para captar imágenes, sino también de los equipos y herramientas que permiten visualizarlas, administrarlas y supervisarlas de manera eficiente. Los monitores, sistemas de control y centros de monitoreo facilitan el seguimiento de eventos en tiempo real y apoyan la toma de decisiones durante las operaciones de seguridad. A continuación, se presentan los principales elementos que intervienen en la visualización, administración y control de imágenes dentro de un sistema CCTV.
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Monitores de visualización
                  p.mb-0 Los monitores de operación continua constituyen la pantalla principal de los sistemas CCTV. A diferencia de los televisores convencionales, están diseñados para funcionar las 24 horas del día, ofreciendo mayor durabilidad, estabilidad y calidad de imagen para garantizar una supervisión permanente y confiable (García, 2010).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img41.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sistemas de visualización
                  p.mb-0 Las matrices de video, secuenciadores y procesadores tipo QUAD permiten organizar y distribuir las imágenes provenientes de múltiples cámaras. Estas tecnologías facilitan visualizar una o varias señales simultáneamente, alternar imágenes automáticamente y optimizar la supervisión de grandes instalaciones (García, 2010; Data Técnica, s.f.).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img42.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Visualización en tiempo real
                  p.mb-0 La visualización en tiempo real permite observar de forma inmediata las imágenes captadas por las cámaras, utilizando formatos como pantalla completa, mosaicos o múltiples ventanas. Esta capacidad proporciona información clara y actualizada para reaccionar oportunamente ante cualquier situación de riesgo (Data Técnica Especializada, s.f.).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img43.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Control de cámaras
                  p.mb-0 Los sistemas de control permiten gestionar múltiples cámaras desde un mismo punto de supervisión. Cuando se utilizan cámaras PTZ, el operador puede moverlas, inclinarlas, acercar la imagen y activar posiciones predefinidas para mejorar la vigilancia y el seguimiento de eventos (SuperVigilancia, 2010).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img44.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Supervisión centralizada
                  p.mb-0 El centro de control concentra la visualización y administración de todo el sistema de videovigilancia. Desde este espacio, varios operadores pueden supervisar simultáneamente diferentes áreas, coordinar acciones de seguridad y ampliar la capacidad operativa conforme crecen las necesidades de la instalación (SuperVigilancia, 2010).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img45.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.6 Medios de transmisión y conectividad
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img46.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Los medios de transmisión y conectividad permiten transportar las señales de video desde las cámaras hacia los equipos de grabación, visualización y control. Su adecuada selección influye en la calidad de imagen, la estabilidad del sistema, la velocidad de transmisión y la posibilidad de integrar acceso remoto, monitoreo en tiempo real y otros sistemas de seguridad (García, 2010; Bosch Security Systems, 2023).
      p.mb-5 Las funciones de conectividad permiten transmitir información, supervisar eventos en tiempo real e integrar diferentes sistemas para optimizar las operaciones de videovigilancia; estas son:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Transmisión de video en tiempo real
                  p.mb-0 Consiste en enviar de forma inmediata las imágenes captadas por las cámaras hacia los equipos de visualización y grabación. Su objetivo es garantizar una supervisión continua, con mínima latencia y alta calidad de imagen.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img47.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Acceso remoto
                  p.mb-0 Permite supervisar cámaras desde cualquier ubicación mediante internet, VPN o redes móviles. Esta funcionalidad facilita el monitoreo en tiempo real y requiere mecanismos de seguridad para proteger la información transmitida.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img48.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Integración con sistemas de seguridad
                  p.mb-0 Los sistemas de videovigilancia pueden conectarse con controles de acceso, alarmas, sensores y plataformas de automatización. Esta integración mejora la coordinación de respuestas y facilita la administración centralizada de la seguridad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img49.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Para que estas funciones operen correctamente, es necesario contar con medios de transmisión capaces de transportar la información de manera segura y eficiente; tales como:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Cable coaxial")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img50.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Cable coaxial
              p.mb-0 Tradicionalmente utilizado en sistemas analógicos, permite transmitir señales de video con buena estabilidad y resistencia a interferencias. Aunque sigue utilizándose, ha sido desplazado gradualmente por tecnologías más modernas.
        .py-3.py-md-4(titulo="Par trenzado")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img51.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Par trenzado
              p.mb-0 Es uno de los medios más utilizados en sistemas IP. Permite transportar video, datos y alimentación eléctrica mediante tecnología PoE, aprovechando la infraestructura de red existente.
        .py-3.py-md-4(titulo="Fibra óptica")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img52.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Fibra óptica
              p.mb-0 Utiliza pulsos de luz para transmitir información a grandes distancias con alta velocidad y sin interferencias electromagnéticas. Es ideal para instalaciones extensas y entornos que requieren máxima confiabilidad.
        .py-3.py-md-4(titulo="Conexiones inalámbricas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img53.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Conexiones inalámbricas
              p.mb-0 Transmiten información mediante señales de radio, eliminando la necesidad de cableado físico. Tecnologías como Wi-Fi, microondas y redes 4G/5G ofrecen soluciones flexibles para instalaciones temporales o ubicaciones de difícil acceso.
      p.mb-0 La conectividad adecuada permite que el sistema de videovigilancia funcione con mayor estabilidad, cobertura y seguridad, facilitando el monitoreo continuo y la gestión eficiente de la información.
      Separador
      #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.7 Características técnicas de los equipos
      p.mb-5 Las características técnicas de los equipos de videovigilancia determinan su desempeño, calidad de imagen y capacidad operativa. Por ello, este apartado aborda las especificaciones principales de las cámaras y de los sistemas de grabación.
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Resolución de imagen
                    p.mb-0 La resolución determina el nivel de detalle que puede capturar una cámara. En sistemas analógicos se mide en TVL y en sistemas digitales en megapíxeles (MP). Una mayor resolución permite obtener imágenes más nítidas y precisas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img54.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img55.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Sensibilidad lumínica (LUX)
                    p.mb-0 Indica la cantidad mínima de luz necesaria para generar una imagen útil. Cuanto menor sea el valor en lux, mejor será el desempeño de la cámara en condiciones de poca iluminación.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Visión infrarroja (IR)
                    p.mb-0 Permite captar imágenes en entornos con ausencia total de luz mediante iluminación infrarroja invisible al ojo humano, facilitando la vigilancia nocturna.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img56.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img57.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Formato de video
                    p.mb-0 Corresponde al estándar utilizado para codificar y transmitir imágenes. Su correcta selección garantiza compatibilidad entre cámaras, grabadores y sistemas de visualización.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Alimentación eléctrica
                    p.mb-0 Las cámaras pueden operar mediante fuentes de alimentación convencionales o tecnologías como PoE, que permiten transmitir energía y datos a través de un mismo cable.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img58.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img59.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Protección ambiental (IP66/IP67)
                    p.mb-0 Estas certificaciones indican el nivel de resistencia frente al polvo, humedad y agua, garantizando un funcionamiento adecuado en exteriores y ambientes exigentes.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Distancia focal y ángulo de visión
                    p.mb-0 La distancia focal determina el nivel de acercamiento y el ángulo de cobertura de la cámara. Estos factores influyen directamente en la cantidad de área que puede monitorearse.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img60.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img61.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Lentes y control de luz
                    p.mb-0 Los lentes pueden ser fijos o varifocales, mientras que sistemas como Auto Iris ajustan automáticamente la entrada de luz para mantener imágenes claras en diferentes condiciones de iluminación.
          p.mb-5 Además de las características propias de las cámaras, los sistemas de grabación incorporan especificaciones técnicas que permiten almacenar, gestionar y recuperar la información generada durante las operaciones de videovigilancia; estas son:
      .bg-carrusel
        .px-5
          .row.align-items-center
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img62.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img63.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Modos de grabación
                    p.mb-0.text-center Los sistemas pueden grabar de forma continua, programada o activada por eventos, adaptándose a diferentes necesidades operativas.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img64.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Almacenamiento de video
                    p.mb-0.text-center Permite conservar grabaciones mediante discos duros, unidades SSD o soluciones en la nube, garantizando disponibilidad de la información.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img65.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Revisión de grabaciones
                    p.mb-0.text-center Facilita la búsqueda, reproducción y exportación de videos mediante filtros por fecha, hora o eventos específicos.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img66.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Gestión de eventos
                    p.mb-0.text-center Incluye funciones inteligentes como detección de movimiento, pérdida de señal y generación automática de alertas.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img67.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Entradas y salidas de alarma
                    p.mb-0.text-center Permiten integrar sensores, sirenas, luces y otros dispositivos para automatizar respuestas ante eventos de seguridad.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img68.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Puerto de red (LAN)
                    p.mb-0.text-center Proporciona conectividad IP para la administración remota, transmisión de información y comunicación con otros equipos de la red.
      Separador
      #t_2_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.8 Infraestructura de red y funcionalidad de los sistemas de monitoreo
      .row.justify-content-center.align-items-center.mb-5      
        .col-xl.mb-4.mb-lg-0
          .caja-2.color-1.ajuste-1(data-aos="zoom-in").mb-3
            p.mb-0 La infraestructura de red constituye la base tecnológica que permite la comunicación entre cámaras, grabadores, estaciones de monitoreo y demás dispositivos de seguridad. Asimismo, los sistemas de monitoreo incorporan funcionalidades que facilitan la supervisión, el control y la gestión de eventos en tiempo real.
          p.mb-0 A continuación, se presentan los principales elementos de infraestructura de red y las funcionalidades que permiten optimizar la operación de los sistemas de monitoreo.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img69.jpg', alt='').m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img70.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Cableado estructurado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El cableado estructurado organiza la infraestructura física de la red mediante estándares que garantizan orden, compatibilidad, facilidad de administración y posibilidades de crecimiento para los sistemas de videovigilancia (TIA-568, 2020).
            .row(titulo="Conectividad IP").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La conectividad IP permite integrar cámaras, grabadores y estaciones de monitoreo dentro de una misma red. Para ello utiliza protocolos de comunicación que facilitan la transmisión de video y el acceso remoto seguro (TIA-568, 2020).
            .row(titulo="Escalabilidad y compatibilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La escalabilidad permite ampliar el sistema sin reemplazar completamente la infraestructura existente, mientras que la compatibilidad facilita la integración de dispositivos de diferentes fabricantes mediante estándares abiertos como ONVIF (ONVIF Consortium, 2021).
      p.mb-5 Una infraestructura de red adecuada permite aprovechar al máximo las capacidades operativas de los sistemas de monitoreo y fortalecer los procesos de supervisión y control. Las funcionalidades de los equipos de monitoreo son las siguientes:
      .bg-carrusel
        .px-5
          .row.align-items-center
            .col-xl-8(data-aos="fade-right")
              SlyderF(columnas="col-lg-6 col-xl-6")(data-aos="zoom-in")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img71.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Vigilancia continua
                    p.mb-0.text-center Permite supervisar permanentemente áreas críticas para reducir riesgos y detectar situaciones que requieran atención inmediata.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img72.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Supervisión remota
                    p.mb-0.text-center Facilita el acceso a las cámaras desde diferentes ubicaciones, optimizando la capacidad de respuesta ante incidentes.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img73.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Registro de eventos
                    p.mb-0.text-center Las grabaciones generan evidencias que pueden utilizarse en investigaciones, auditorías o procesos legales.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img74.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Monitoreo del personal
                    p.mb-0.text-center Permite verificar el cumplimiento de procedimientos, protocolos y actividades operativas dentro de la organización.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img75.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Control de procesos productivos
                    p.mb-0.text-center Facilita la supervisión de actividades industriales y operativas, contribuyendo al control de calidad y la identificación de anomalías.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img76.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Vigilancia disuasiva y encubierta
                    p.mb-0.text-center Las cámaras visibles pueden actuar como elemento preventivo, mientras que las discretas permiten recopilar información sin alertar a los involucrados.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img77.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Seguimiento de sospechosos
                    p.mb-0.text-center Facilita la identificación y el seguimiento de personas o comportamientos que representen posibles riesgos para la seguridad.
            .col-xl-4(data-aos="fade-left")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img78.png', alt='' style="max-width: 350px").m-auto
      
</template>

<script>
export default {
  name: 'Tema2',
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
