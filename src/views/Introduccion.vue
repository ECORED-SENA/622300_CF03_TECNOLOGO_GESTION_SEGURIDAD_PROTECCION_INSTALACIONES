<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center           
        .col-xl.mb-4.mb-lg-0
          p La seguridad privada ha experimentado una transformación significativa gracias a la incorporación de nuevas tecnologías que fortalecen la protección de personas, bienes e instalaciones. Actualmente, herramientas como la inteligencia artificial, el internet de las cosas, la analítica de datos, la biometría y los sistemas avanzados de videovigilancia permiten optimizar los procesos de monitoreo, mejorar la capacidad de respuesta y anticipar riesgos de manera más eficiente.
          .caja-1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/intro/img1.jpg', alt='').m-auto
              .col-xl.caja_container
                p.mb-0 En este contexto, resulta fundamental que los profesionales del sector desarrollen competencias relacionadas con la operación de sistemas tecnológicos de seguridad, la identificación de sus características técnicas y la integración de estos recursos en planes de seguridad ajustados a las necesidades organizacionales. Asimismo, es necesario comprender los procedimientos de gestión del riesgo, el análisis de vulnerabilidades y la implementación de estrategias orientadas a la mejora continua.
          p.mb-0 Este componente formativo proporciona los conocimientos esenciales para monitorear sistemas de seguridad y ajustar planes de protección mediante metodologías técnicas, contribuyendo al fortalecimiento de entornos seguros, eficientes y alineados con las exigencias actuales del sector.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='').m-auto
          

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
