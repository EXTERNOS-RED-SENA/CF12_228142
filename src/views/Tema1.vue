<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Validación de sistemas
    .row.justify-content-center.align-items-center.bg1
      .col-lg-auto.pt-lg-0.pt-md-4
        img.img-a.img-t(src='@/assets/curso/temas/t01/t_01.png' alt='')
      .col.pt-lg-0.pt-md-4
        p.mb-0 Las validaciones de sistemas son procesos y pruebas diseñados para asegurar que un sistema de cómputo funcione correctamente y cumpla con los requisitos y expectativas establecidas. Estas validaciones son necesarias para garantizar la calidad, seguridad y rendimiento del sistema antes de su implementación o entrega al usuario final. Las validaciones de sistemas pueden incluir varias etapas y tipos de pruebas, cada una enfocada en diferentes aspectos del sistema. A continuación, se presentan los componentes de las validaciones de sistemas.

    Separador  
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Pruebas de <i>#[i hardware]</i>
    p.mb-4 Las pruebas de <i>#[i hardware]</i> se usan para garantizar que los componentes físicos del equipo de cómputo funcionen correctamente y cumplan con los requisitos de rendimiento. Estas pruebas se realizan para identificar posibles fallos, asegurar la compatibilidad y evaluar el rendimiento del sistema bajo diferentes condiciones. Estos son los componentes que se deben tener en cuenta a la hora de realizar un diagnóstico adecuado en varios componentes.

    .row.bg5.align-items-center.mb-5
      .px-lg-5.px-4
        .bgw.brad.p-5.my-5
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Diagnóstico de componentes: 
                p El diagnóstico de componentes implica la evaluación detallada de cada uno de los componentes críticos del equipo de cómputo.
                ul.lista-ul.fa-ul.ps-4
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b CPU (Unidad Central de Procesamiento):] verificación de la funcionalidad y rendimiento de la CPU mediante pruebas de #[i benchmarking] y diagnósticos específicos.
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Memoria RAM:] pruebas de memoria para detectar errores y asegurar que la RAM esté funcionando correctamente.
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Disco duro:] evaluación del estado del disco duro, incluyendo pruebas de lectura y escritura, y verificación de sectores defectuosos.
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Tarjeta gráfica: ]pruebas de rendimiento gráfico para asegurar que la tarjeta gráfica pueda manejar las tareas requeridas sin problemas.
              
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/t01/t_02.png', alt='')    

            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Pruebas de estrés 
                p Las pruebas de estrés evalúan el rendimiento del #[i hardware] bajo condiciones extremas para identificar posibles fallos o limitaciones. Estas pruebas incluyen:
                ul.lista-ul.fa-ul.ps-4
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Carga de trabajo intensiva:] simulación de cargas de trabajo intensivas para evaluar cómo responde el #[i hardware] bajo presión.
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Temperatura y voltaje:] monitoreo de la temperatura y el voltaje de los componentes bajo carga para asegurar que no se sobrecalienten o fallen.
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Estabilidad a largo plazo:]  pruebas de estabilidad durante períodos prolongados para identificar posibles fallos que no sean evidentes en pruebas cortas.
           
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/t01/t_03.png', alt='')   

            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Pruebas de compatibilidad 
                p Las pruebas de compatibilidad aseguran que todos los componentes del <i>#[i hardware]</i> sean compatibles entre sí y con el sistema operativo.
                ul.lista-ul.fa-ul.ps-4
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Verificación de controladores:] asegurarse de que los controladores de todos los componentes estén instalados y funcionen correctamente.
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Compatibilidad de #[i hardware]:] verificación de que todos los componentes sean compatibles entre sí y con el sistema operativo.
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Pruebas de integración:]  evaluación de cómo los diferentes componentes interactúan entre sí y con el <i>software</i> instalado.
           
            
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/t01/t_04.png', alt='') 

    

    Separador  
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Verificación de <i>software</i>
    p.mb-3 La verificación de <i>software</i> implica asegurarse de que todos los programas y aplicaciones instalados funcionen correctamente y cumplan con los requisitos del usuario.  Para garantizar esto, se debe tener en cuenta:

    .row.justify-content-center.mb-4
     .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/t01/5.png' alt='')         
     .col-lg-9.my-lg-0.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg3")
          div(titulo="Instalación de <i>software</i> ")
            p Asegurarse de que todos los programas necesarios estén instalados y configurados adecuadamente, atendiendo a la instalación de sistemas operativos, las aplicaciones necesarias teniendo en cuenta que estén configuradas adecuadamente. Así mismo, se hace necesarios que, dentro de la configuración de permisos, se garantice que todas las configuraciones de seguridad junto a los permisos del usuario estén debidamente establecidas.
          div(titulo="Pruebas de funcionalidad")
            p Verificar que todas las aplicaciones funcionen según lo esperado y que no haya conflictos entre ellas.
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span #[b Pruebas de funcionalidad básica:] verificación de que todas las funciones básicas de las aplicaciones funcionen correctamente.
              li 
                i.fas.fa-check-circle.color1
                span #[b Pruebas de integración:] asegurarse de que las aplicaciones interactúen correctamente entre sí y con el sistema operativo.
              li 
                i.fas.fa-check-circle.color1
                span #[b Pruebas de usabilidad:] evaluación de la facilidad de uso de las aplicaciones y la interfaz de usuario.
          div(titulo="Actualizaciones de <i>software</i>")
            p Comprobar de que todos los programas estén actualizados a sus últimas versiones Las actualizaciones de <i>software</i> no solo corrigen errores y mejoran la funcionalidad, sino que también protegen el sistema contra vulnerabilidades conocidas así garantizan la seguridad y el rendimiento óptimo.
          div(titulo="Actualizaciones de seguridad")
            p Las actualizaciones del sistema operativo a menudo incluyen parches de seguridad que corrigen vulnerabilidades conocidas. Estos parches son adecuados para proteger el sistema contra ataques cibernéticos.
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span #[b Mejoras de rendimiento:] las actualizaciones del sistema operativo pueden incluir mejoras de rendimiento que optimizan el uso de recursos y mejoran la eficiencia del sistema.
              li 
                i.fas.fa-check-circle.color1
                span #[b Nuevas funcionalidades:] las actualizaciones del sistema operativo a menudo introducen nuevas funcionalidades y características que pueden mejorar la experiencia del usuario y la productividad.
              li 
                i.fas.fa-check-circle.color1
                span #[b Compatibilidad con #[i hardware] y <i>software</i>:] las actualizaciones del sistema operativo pueden mejorar la compatibilidad con #[i hardware] y #[i software] más recientes, asegurando que el sistema pueda aprovechar al máximo las nuevas tecnologías.

    .row.justify-content-center.mb-4   
      .col-lg-9.my-lg-0.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg3")
          div(titulo="Actualizaciones de aplicaciones ")
            p Asegurarse de que todas las aplicaciones estén actualizadas a sus últimas versiones es igualmente importante para mantener la seguridad y el rendimiento del sistema.
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span #[b Corrección de errores:] las actualizaciones de aplicaciones a menudo corrigen errores y problemas conocidos, mejorando la estabilidad y el rendimiento de las aplicaciones.
              li 
                i.fas.fa-check-circle.color1
                span #[b Mejoras de seguridad:] las actualizaciones de aplicaciones pueden incluir parches de seguridad que corrigen vulnerabilidades conocidas, protegiendo el sistema contra ataques cibernéticos. 
              li 
                i.fas.fa-check-circle.color1
                span #[b Nuevas funcionalidades:] las actualizaciones de aplicaciones a menudo introducen nuevas funcionalidades y características que pueden mejorar la experiencia del usuario y la productividad.
              li 
                i.fas.fa-check-circle.color1
                span #[b Compatibilidad con el sistema operativo:] las actualizaciones de aplicaciones pueden mejorar la compatibilidad con el sistema operativo, asegurando que las aplicaciones funcionen correctamente y sin problemas.
          div(titulo="Parches de seguridad ")
            p La instalación de parches de seguridad es imperdible para proteger el sistema de vulnerabilidades conocidas.
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span #[b Corrección de vulnerabilidades:] los parches de seguridad corrigen vulnerabilidades conocidas en el sistema operativo y las aplicaciones, protegiendo el sistema contra ataques cibernéticos
              li 
                i.fas.fa-check-circle.color1
                span #[b Protección contra <i>malware</i>]: los parches de seguridad pueden incluir mejoras en la protección contra malware, asegurando que el sistema esté protegido contra amenazas conocidas
              li 
                i.fas.fa-check-circle.color1
                span #[b Actualizaciones de #[i firmware]:] los parches de seguridad pueden incluir actualizaciones de firmware para componentes de <i>#[i hardware]</i>, mejorando la seguridad y el rendimiento del #[i hardware]
              li 
                i.fas.fa-check-circle.color1
                span #[b Cumplimiento normativo:] la instalación de parches de seguridad puede ser necesaria para cumplir con regulaciones y normativas de seguridad, asegurando que el sistema esté en conformidad con los estándares de seguridad.
          div(titulo="Importancia de las actualizaciones de <i>software</i> ")
            p Las actualizaciones de <i>software</i> se deben hacer por varias razones ya que protegen aspectos como son la seguridad, rendimiento, compatibilidad y funcionalidad
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span #[b Seguridad]
                  p #[b Protección contra amenazas:] las actualizaciones de software incluyen parches de seguridad que protegen el sistema contra amenazas conocidas, como virus, malware y ataques cibernéticos. 
                  p #[b Corrección de vulnerabilidades:] las actualizaciones de software corrigen vulnerabilidades conocidas en el sistema operativo y las aplicaciones, reduciendo el riesgo de ataques cibernéticos. 
              li 
                i.fas.fa-check-circle.color1
                span #[b Rendimiento]
                  p #[b Optimización de recursos:] las actualizaciones de <i>software</i> pueden incluir mejoras de rendimiento que optimizan el uso de recursos y mejoran la eficiencia del sistema.
                  p #[b Corrección de errores:] las actualizaciones de <i>software</i> corrigen errores y problemas conocidos, mejorando la estabilidad y el rendimiento del sistema.
              li 
                i.fas.fa-check-circle.color1
                span #[b Compatibilidad]
                  p #[b Compatibilidad con <i>#[i hardware]</i> y <i>software</i>:] las actualizaciones de <i>software</i> pueden mejorar la compatibilidad con <i>#[i hardware]</i> y <i>software</i> más recientes, asegurando que el sistema pueda aprovechar al máximo las nuevas tecnologías.
                  p #[b Compatibilidad con otros sistemas:] las actualizaciones de <i>software</i> pueden mejorar la compatibilidad con otros sistemas y aplicaciones, asegurando que el sistema funcione correctamente en un entorno de TI más amplio.
              li 
                i.fas.fa-check-circle.color1
                span #[b Funcionalidad]
                  p #[b Nuevas funcionalidades:] las actualizaciones de <i>software</i> a menudo introducen nuevas funcionalidades y características que pueden mejorar la experiencia del usuario y la productividad.
                  p #[b Mejoras en la interfaz de usuario:] las actualizaciones de <i>software</i> pueden incluir mejoras en la interfaz de usuario, haciendo que el sistema sea más fácil de usar y más intuitivo.
              

      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/t01/6.png' alt='')    

    Separador  
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3	#[i Test] de rendimiento  

  
    TabsC.color-acento-contenido.mb-5
      .p-4.bg3.py-md-5(titulo="<em>Benchmarking</em>")
        .row.justify-content-center.p-4.brad
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/t01/7.png' alt='')
          .col-lg-7.mb-4.mb-md-0.p-4
            p.mb-3 Utilización de herramientas de #[i benchmarking] para medir el rendimiento del equipo en diferentes tareas, atendiendo a las siguientes pruebas: 
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span Pruebas de rendimiento de CPU: evaluación del rendimiento de la CPU en tareas específicas.
              li 
                i.fas.fa-check-circle.color1
                span Pruebas de rendimiento de GPU: evaluación del rendimiento de la tarjeta gráfica en tareas gráficas intensivas.
              li 
                i.fas.fa-check-circle.color1
                span Pruebas de rendimiento de almacenamiento: evaluación del rendimiento del disco duro o SSD en tareas de lectura y escritura.

      .p-4.bg3.py-md-5(titulo="Pruebas de carga")
        .row.justify-content-center.p-4.brad
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/t01/8.png' alt='')
          .col-lg-7.mb-4.mb-md-0.p-4
            p.mb-3 Evaluación del rendimiento del equipo bajo diferentes niveles de carga para identificar posibles cuellos de botella, son:
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span Pruebas de carga de red: evaluación del rendimiento del equipo bajo diferentes niveles de tráfico de red.
              li 
                i.fas.fa-check-circle.color1
                span Pruebas de carga de aplicaciones: evaluación del rendimiento del equipo bajo diferentes niveles de uso de aplicaciones.
              li 
                i.fas.fa-check-circle.color1
                span Pruebas de carga de usuarios: evaluación del rendimiento del equipo bajo diferentes niveles de usuarios concurrentes.

      .p-4.bg3.py-md-5(titulo="Pruebas de estabilidad")
        .row.justify-content-center.p-4.brad
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/t01/9.png' alt='')
          .col-lg-7.mb-4.mb-md-0.p-4
            p.mb-3 Asegurarse de que el equipo pueda funcionar de manera estable durante períodos prolongados sin fallos.
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span Pruebas de estabilidad a largo plazo: evaluación del rendimiento del equipo durante períodos prolongados de uso continuo.
              li 
                i.fas.fa-check-circle.color1
                span Pruebas de estabilidad bajo carga: evaluación del rendimiento del equipo bajo carga continua durante períodos prolongados.
              li 
                i.fas.fa-check-circle.color1
                span Pruebas de estabilidad de <i>software</i>: evaluación de la estabilidad del #[i software] instalado durante períodos prolongados de uso.
    
      .p-4.bg3.py-md-5(titulo="Importancia de las validaciones de sistemas")
        .row.justify-content-center.p-4.brad
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/t01/10.png' alt='')
          .col-lg-7.mb-4.mb-md-0.p-4
            p.mb-3 #[b Importancia de las validaciones de sistemas]
            p Las validaciones de sistemas se necesitan ya que garantizan la funcionalidad, seguridad, calidad y rendimiento de manera eficiente. según las normativas y regulaciones aplicables. Es de gran importancia, comprender que el sistema debe cumplir con los estándares de calidad establecidos y que para poder validar siempre el funcionamiento se sugiere realizar auditorías periódicas; esto no solamente permitirá garantizar la eficacia del sistema si no que traerá una gran satisfacción a los usuarios.
     

        
                              

          



    
              

      
</template>

<script>
import TabsC from '../bootstrap/TabsC'
import AcordionA from '../bootstrap/AcordionA'
import SlyderA from '../bootstrap/SlyderA'
export default {
  name: 'Tema1',
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
