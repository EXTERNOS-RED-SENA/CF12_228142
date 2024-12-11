<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-4
      .col-lg-8.my-lg-0.my-3
        p La configuración y entrega de equipos de cómputo es un proceso complejo que involucra múltiples etapas y procedimientos para asegurar que los equipos funcionen de manera óptima y cumplan con las expectativas del usuario. Este proceso comienza con la validación de sistemas, que incluye pruebas de #[i hardware], verificación de <i>software</i> y <i>tests</i> de rendimiento. Las pruebas garantizan que todos los componentes físicos y digitales del equipo funcionen correctamente y estén configurados adecuadamente. La validación de sistemas es primordial para identificar y corregir cualquier problema antes de que el equipo sea entregado al usuario final.

        .row.justify-content-center.bg1.p-4.brad
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/introduccion/2.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 Una vez que el equipo ha pasado las pruebas de validación, se procede a la configuración final. Esta etapa incluye la personalización del equipo según las preferencias y necesidades específicas del usuario, así como la realización de <i>backups</i> y actualizaciones finales. La personalización de usuario asegura que el equipo esté listo para ser utilizado de manera inmediata, mientras que los <i>backups</i> y actualizaciones garantizan que los datos importantes estén protegidos y que el equipo tenga la última versión de <i>software</i> y parches de seguridad. Estas medidas mejoran el rendimiento y la protección del equipo.

      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/introduccion/1.png' alt='')  

       
    p Los protocolos de entrega son procedimientos estandarizados que aseguran una entrega eficiente y efectiva de los equipos de cómputo. Estos protocolos incluyen la verificación de requerimientos, la documentación de entrega y la capacitación básica. La verificación de requerimientos asegura que el equipo cumpla con las especificaciones y necesidades del usuario, mientras que la documentación de entrega proporciona un registro detallado del estado del equipo, las especificaciones técnicas y cualquier configuración realizada. La capacitación básica asegura que el usuario final comprenda cómo utilizar y mantener el equipo de manera adecuada.
    
    .row.justify-content-center.mb-3
     .col-lg-2.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/introduccion/3.png' alt='')        
     .col-lg-10.my-lg-0.my-3.bg2
      p.mb-0 Finalmente, el soporte post-entrega es una parte integral del proceso de configuración y entrega de equipos de cómputo. Este soporte incluye políticas de garantía, mantenimiento programado y gestión de incidencias. Las políticas de garantía establecen las condiciones bajo las cuales el proveedor se compromete a reparar o reemplazar un equipo defectuoso. El mantenimiento programado asegura que el equipo funcione de manera óptima durante su vida útil mediante tareas rutinarias y preventivas. La gestión de incidencias identifica, registra, clasifica y resuelve problemas que afectan el funcionamiento del equipo, proporcionando datos valiosos para la mejora continua del servicio. La integración de estos procesos asegura una gestión eficiente y efectiva de los equipos de cómputo, contribuyendo a la satisfacción del cliente y al rendimiento óptimo del equipo.


    .row.justify-content-center.bg1.p-4.brad.my-5.align-items-center
      .col-lg-auto.j1
        p.mb-0 #[b ¡Bienvenido a este viaje por la configuración y entrega de los equipos de cómputo!]
    
    .row.justify-content-center.align-items-center        
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/TQiFT6h6sf0?si=Gqd5URzStlexgdI-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  
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
