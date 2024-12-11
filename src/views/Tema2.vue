<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Configuración final
    .row.justify-content-center.align-items-center.bg2
      .col-lg-auto.pt-lg-0.pt-md-4
        img.img-a.img-t(src='@/assets/curso/temas/t2/1.png' alt='')
      .col.pt-lg-0.pt-md-4
        p.mb-0 La configuración final es una etapa del proceso de preparación de un equipo de cómputo antes de su entrega al usuario. Esta fase asegura que el equipo esté completamente listo para su uso, personalizado según las necesidades del usuario, y que todos los datos importantes estén respaldados y protegidos.
    Separador  
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Personalización del usuario
    p La personalización de usuario implica configurar el equipo de acuerdo con las necesidades y preferencias del usuario final. Esta etapa es adecuada para garantizar que el equipo sea funcional y eficiente desde el primer momento de uso. Para lograr un proceso exitoso, se sugiere seguir los pasos que describe la figura 1 a continuación:
    
    .titulo-sexto.color-acento-contenido.offset-0(data-aos="zoom-in")
      h5 Figura 1.
      span  Proceso para la configuración de  perfiles
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        figure
          img(src='@/assets/curso/temas/t2/2.svg', alt='La Figura 1 se denomina «Proceso para la configuración de perfiles» y presenta la secuencia detallada de los pasos que se deben seguir para garantizar un perfil seguro y exitosos.') 
        figcaption Fuente: OIT, 2024.

    TabsC.color-acento-contenido.mb-5
      .p-4.py-99.py-md-5(titulo="Instalación de aplicaciones personalizadas")
        .row.justify-content-center.bg3.p-4.brad
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/t2/3.png' alt='')
          .col-lg-7.mb-4.mb-md-0.p-4
            h4.mb-4 Instalación de aplicaciones personalizadas
            p.mb-3 La instalación de aplicaciones y programas que el usuario necesitará para su trabajo es un paso en la personalización de estos. 
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i Software] de productividad:] instalación de suites de oficina, herramientas de gestión de proyectos y otras aplicaciones de productividad.
              li 
                i.fas.fa-check-circle.color1
                span #[b Herramientas de desarrollo:] instalación de entornos de desarrollo integrados (IDEs), compiladores y otras herramientas de desarrollo.
              li 
                i.fas.fa-check-circle.color1
                span #[b Aplicaciones de diseño gráfico:] instalación de #[i software] de diseño gráfico, edición de video y otras aplicaciones creativas.

      .p-4.py-99.py-md-5(titulo="Configuración de interfaz")
        .row.justify-content-center.bg3.p-4.brad
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/t2/4.png' alt='')
          .col-lg-7.mb-4.mb-md-0.p-4
            h4.mb-4 Configuración de interfaz
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span #[b Temas y fondos de pantalla:] configuración de temas y fondos de pantalla según las preferencias del usuario.
              li 
                i.fas.fa-check-circle.color1
                span #[b Barras de herramientas:] personalización de las barras de herramientas y menús para facilitar el acceso a las funciones más utilizadas.
              
      .p-4.py-99.py-md-5(titulo="Configuración de accesos directos")
        .row.justify-content-center.bg3.p-4.brad
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/t2/5.png' alt='')
          .col-lg-7.mb-4.mb-md-0.p-4
            h4.mb-4 Configuración de accesos directos
            p.mb-3 Creación de accesos directos en el escritorio y en el menú de inicio para las aplicaciones más utilizadas.
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span #[b Configuración de red:] la configuración de las conexiones de red es necesario para asegurar que el usuario pueda acceder a los recursos de red necesarios. 
              li 
                i.fas.fa-check-circle.color1
                span #[b Configuración de #[i Wi-Fi]:] configuración de las conexiones #[i Wi-Fi] y asegurarse de que el equipo se conecte automáticamente a las redes conocidas.
              li 
                i.fas.fa-check-circle.color1
                span #[b Configuración de VPN:] configuración de conexiones VPN para asegurar la seguridad y el acceso remoto a los recursos de la empresa.
              li 
                i.fas.fa-check-circle.color1
                span #[b Configuración de impresoras y dispositivos periféricos:] configuración de impresoras, escáneres y otros dispositivos periféricos que el usuario necesitará.
    Separador  
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2	#[i Backup] y restauración
    p.mb-3 El #[i backup] y la restauración son procesos infalibles para asegurar que los datos del usuario estén protegidos y puedan ser recuperados en caso de fallo del sistema. Estos procesos garantizan la continuidad del trabajo y la seguridad de la información.

    .row.justify-content-center.mb-4
     .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/t2/6.png' alt='')         
     .col-lg-9.my-lg-0.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg3")
          div(titulo="Configuración de <i>backups </i>automáticos")
            p La configuración de #[i backups] automáticos es una práctica continua para asegurar que los datos del usuario estén protegidos y puedan ser recuperados en caso de fallo del sistema. Los #[i backups] automáticos eliminan la necesidad de intervención manual, reduciendo el riesgo de pérdida de datos debido a olvidos o errores humanos.
          div(titulo="Selección de la solución de <i>backup</i>") 
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span La elección de la solución de #[i backups] adecuada garantiza la eficacia y la seguridad del proceso de #[i backups].
              li
                i.fas.fa-check-circle.color1
                span #[b #[i Software] de #[i backups]:] selección de #[i Software] de #[i backups] confiable y con buenas críticas, como #[i Acronis] #[i True Image], Veeam #[i backups] & #[i Replication], o #[i Carbonite].
              li
                i.fas.fa-check-circle.color1
                span #[b Servicios en la nube:] consideración de servicios de almacenamiento en la nube como Google Drive, Dropbox, Microsoft OneDrive, o Amazon S3 para #[i backups] remotos.
              li
                i.fas.fa-check-circle.color1
                span #[b Dispositivos de almacenamiento local:] utilización de discos duros externos, unidades de estado sólido (SSD) o servidores de almacenamiento en red (NAS) para #[i backups] locales.

    h4.mb-4 Configuración de la frecuencia de #[i backup]
    p Para garantizar que los #[i backup] tengan un éxito y aseguren la información albergada, se debe mantener la configuración de la ubicación a través del proceso que se enseña a continuación:


    .titulo-sexto.color-acento-contenido.offset-0(data-aos="zoom-in")
      h5 Figura 2.
      span  Proceso configuración de la ubicación de #[i backups]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        figure
          img(src='@/assets/curso/temas/t2/7.svg', alt='La Figura 2 se denomina «Proceso configuración de la ubicación de #[i backup] y presenta esta orientación a partir de cuatro acciones para prevenir daño en la información.') 
        figcaption Fuente: OIT, 2024.
    

    .row.justify-content-center.mb-4
     .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/t2/8.png' alt='')         
     .col-lg-9.my-lg-0.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg3")
          div(titulo="Configuración de la restauración de  <i>backups </i>")
            p La capacidad de restaurar los datos de los #[i backups] es un paso significativo para la continuidad del trabajo y la recuperación rápida en caso de fallo del sistema.
          div(titulo="Pruebas de restauración") 
            p La verificación de que los datos puedan ser restaurados correctamente en caso de fallo del sistema es considerable para garantizar la integridad de los #[i backups].
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span #[b Pruebas de restauración completa:] realización de pruebas de restauración completa para asegurar que todos los datos puedan ser recuperados.
              li
                i.fas.fa-check-circle.color1
                span #[b Servicios en la nube:] consideración de servicios de almacenamiento en la nube como Google Drive, Dropbox, Microsoft OneDrive, o Amazon S3 para #[i backups] remotos.
              li
                i.fas.fa-check-circle.color1
                span #[b Pruebas de restauración parcial:] realización de pruebas de restauración parcial para asegurar que datos específicos puedan ser recuperados sin problemas.
          div(titulo="Pruebas de restauración en diferentes dispositivos") 
            p Realización de pruebas de restauración en diferentes dispositivos para asegurar que los datos puedan ser recuperados en cualquier equipo.
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span #[b Almacenamiento seguro:] asegurarse de que los #[i backups] se almacenen en un lugar seguro y accesible para garantizar la protección de los datos, a través de las siguientes herramientas
              li 
                i.fas.fa-check-circle.color1
                span #[b Servicios de almacenamiento en la nube:] utilización de servicios de almacenamiento en la nube con medidas de seguridad adicionales como cifrado y autenticación de dos factores. 
              li 
                i.fas.fa-check-circle.color1
                span #[b Discos duros externos cifrados:] utilización de discos duros externos cifrados para asegurar que los datos estén protegidos contra accesos no autorizados.
              li 
                i.fas.fa-check-circle.color1
                span #[b Servidores locales con medidas de seguridad:] utilización de servidores locales con medidas de seguridad adicionales como #[i firewalls] y sistemas de detección de intrusos.
          div(titulo="Políticas de retención de datos") 
            P El establecimiento de políticas de retención de datos es importante para determinar cuánto tiempo se conservarán los #[i backups] y cuándo se eliminarán los datos antiguos.  
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span #[b Definición de períodos de retención:] establecimiento de períodos de retención para los #[i backups], determinando cuánto tiempo se conservarán los datos.  
              li 
                i.fas.fa-check-circle.color1
                span #[b Eliminación de datos antiguos:] definición de procedimientos para la eliminación de datos antiguos que ya no sean necesarios. 
              li 
                i.fas.fa-check-circle.color1
                span #[b Revisión periódica de las políticas:] realización de revisiones periódicas de las políticas de retención de datos para asegurar que sean adecuadas y estén actualizadas. 

    Separador  
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3	Proceso general de preparación de datos
    p.mb-3 Las actualizaciones finales aseguran que el equipo esté listo para su uso inmediato y que todos los componentes de software estén actualizados. Estas actualizaciones garantizan que el equipo funcione de manera óptima y esté protegido contra vulnerabilidades conocidas. A continuación, se detallan los principales aspectos de las actualizaciones finales:

    .row.bg5.align-items-center.mb-5
      .px-lg-5.px-4
        .bgw.brad.p-5.my-5
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Actualización Del Sistema Operativo
                p Asegurarse de que el sistema operativo esté actualizado a su última versión es para garantizar la seguridad y el rendimiento del equipo.
                ul.lista-ul.fa-ul.ps-4
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Actualizaciones de seguridad:] instalación de actualizaciones de seguridad que corrigen vulnerabilidades conocidas y protegen el sistema contra ataques cibernéticos.
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Mejoras de rendimiento:] instalación de actualizaciones que incluyen mejoras de rendimiento y optimizaciones del sistema.
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Nuevas funcionalidades:] instalación de actualizaciones que introducen nuevas funcionalidades y características que pueden mejorar la experiencia del usuario.
              
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/t2/9.png', alt='')  
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Actualización de controladores 
                p La instalación de los últimos controladores para todos los componentes de #[i hardware] es vital para garantizar que el #[i hardware] funcione de manera óptima.
                ul.lista-ul.fa-ul.ps-4
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Controladores de dispositivos:] instalación de los últimos controladores para dispositivos como la tarjeta gráfica, la tarjeta de red y otros componentes de #[i hardware].
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Controladores de periféricos:] instalación de los últimos controladores para periféricos como impresoras, escáneres y otros dispositivos externos.
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Controladores de firmware:] instalación de actualizaciones de #[i firmware] para componentes de #[i hardware], mejorando la seguridad y el rendimiento del #[i hardware].
              
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/t2/10.png', alt='')  
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Actualización del sistema operativo: 
                p Asegurarse de que el sistema operativo esté actualizado a su última versión es para garantizar la seguridad y el rendimiento del equipo. 
                ul.lista-ul.fa-ul.ps-4
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Actualizaciones de seguridad:] instalación de actualizaciones de seguridad que corrigen vulnerabilidades conocidas y protegen el sistema contra ataques cibernéticos.
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Mejoras de rendimiento:] instalación de actualizaciones que incluyen mejoras de rendimiento y optimizaciones del sistema.
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Nuevas funcionalidades:] instalación de actualizaciones que introducen nuevas funcionalidades y características que pueden mejorar la experiencia del usuario.
              
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/t2/11.png', alt='')  
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Configuración de actualizaciones automáticas 
                p El establecimiento de un sistema de actualizaciones automáticas para asegurar que el equipo y el #[i software] se mantengan actualizados en el futuro.
                ul.lista-ul.fa-ul.ps-4
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Actualizaciones automáticas del sistema operativo:] configuración de actualizaciones automáticas del sistema operativo para asegurar que el sistema esté siempre actualizado.
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Actualizaciones automáticas de controladores:] configuración de actualizaciones automáticas de controladores para asegurar que el #[i hardware] funcione de manera óptima.
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Actualizaciones automáticas de aplicaciones:] configuración de actualizaciones automáticas de aplicaciones para asegurar que el #[i software] esté siempre actualizado.
              
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/t2/12.png', alt='')  
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Verificación de compatibilidad 
                p Asegurarse de que todas las actualizaciones sean compatibles entre sí y con el hardware del equipo es necesario para garantizar que no haya conflictos entre las actualizaciones.
                ul.lista-ul.fa-ul.ps-4
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Pruebas de compatibilidad:] realización de pruebas de compatibilidad para asegurar que las actualizaciones no causen conflictos con el #[i hardware] o el #[i software] del equipo
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Revisión de notas de lanzamiento:] revisión de las notas de lanzamiento de las actualizaciones para identificar posibles problemas de compatibilidad.
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Pruebas de rendimiento:] Realización de pruebas de rendimiento para asegurar que las actualizaciones no afecten negativamente el rendimiento del equipo.
              
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/t2/13.png', alt='')    
            
              
</template>

<script>
import TabsC from '../bootstrap/TabsC'
import AcordionA from '../bootstrap/AcordionA'
import SlyderA from '../bootstrap/SlyderA'
export default {
  name: 'Tema2',
  components: { TabsC, AcordionA, SlyderA },
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
