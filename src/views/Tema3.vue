<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Protocolos de entrega
    .row.justify-content-center.align-items-center.bg1
      .col.pt-lg-0.pt-md-4.p-4
        p.mb-0 Los protocolos de entrega son procedimientos estructurados que aseguran que los equipos de cómputo se entreguen de manera eficiente y efectiva al usuario final. Estos protocolos garantizan que el equipo cumpla con los requisitos especificados, que toda la documentación necesaria esté completa y que el usuario esté capacitado para utilizar el equipo de manera adecuada.
      .col-lg-auto.pt-lg-0.pt-md-4
        img.img-a.img-t(src='@/assets/curso/temas/t3/1.png' alt='')
    Separador  
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1	Verificación de requerimientos
    p La verificación de requerimientos es un paso para asegurar que el equipo de cómputo cumpla con las especificaciones y necesidades del usuario final. Este proceso implica revisar y confirmar que todos los componentes y funcionalidades del equipo sean adecuados y estén en buen estado. 

    TabsC.color-acento-contenido.mb-5
      .p-4.py-99.py-md-5(titulo="Revisión de especificaciones")
        .row.justify-content-center.bg3.p-4.brad
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/t3/2.png' alt='')
          .col-lg-7.mb-4.mb-md-0.p-4
            h4.mb-4 Revisión de especificaciones
            p.mb-3 La revisión de especificaciones implica verificar que el equipo cumpla con las especificaciones técnicas requeridas por el usuario. 
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i Hardware]:] verificación de que el #[i hardware] del equipo, como la CPU, la memoria RAM, el disco duro y la tarjeta gráfica, cumpla con las especificaciones técnicas requeridas.
              li 
                i.fas.fa-check-circle.color1
                span #[b #[i Software]:] verificación de que el #[i software] instalado, incluyendo el sistema operativo y las aplicaciones, cumpla con las especificaciones y requisitos del usuario.
              li 
                i.fas.fa-check-circle.color1
                span #[b Periféricos:] verificación de que todos los periféricos, como impresoras, escáneres y otros dispositivos externos, estén incluidos y funcionen correctamente.

      .p-4.py-99.py-md-5(titulo="Pruebas de funcionalidad")
        .row.justify-content-center.bg3.p-4.brad
          .col-lg-5
             img.img-a.img-t(src='@/assets/curso/temas/t3/3.png' alt='')
          .col-lg-7.mb-4.mb-md-0.p-4
            h4.mb-4 Pruebas de funcionalidad
            p Las pruebas de funcionalidad aseguran que el equipo pueda realizar todas las tareas necesarias de manera efectiva.
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span #[b Pruebas de rendimiento:] evaluación del rendimiento del equipo bajo diferentes condiciones de uso para asegurar que cumpla con las expectativas del usuario.
              li 
                i.fas.fa-check-circle.color1
                span #[b Pruebas de compatibilidad:] verificación de que el equipo sea compatible con otros sistemas y dispositivos que el usuario necesitará utilizar.
              li
                i.fas.fa-check-circle.color1
                span #[b Pruebas de usabilidad:] evaluación de la facilidad de uso del equipo y la interfaz de usuario para asegurar que el usuario pueda utilizar el equipo de manera efectiva.
              

      .p-4.py-99.py-md-5(titulo="Revisión de documentación ")
        .row.justify-content-center.bg3.p-4.brad
          .col-lg-5
            img.img-a.img-t(src='@/assets/curso/temas/t3/4.png' alt='')
          .col-lg-7.mb-4.mb-md-0.p-4
            h4.mb-4 Revisión de documentación
            p.mb-3 La revisión de documentación implica verificar que toda la documentación necesaria esté completa y correcta.
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span #[b Manuales de usuario:] verificación de que los manuales de usuario estén completos y sean adecuados para el equipo y el software instalado.
              li 
                i.fas.fa-check-circle.color1
                span #[b Garantías:] verificación de que toda la documentación relacionada con la garantía del equipo esté completa y correcta.
              li 
                i.fas.fa-check-circle.color1
                span #[b Licencias de #[i software]:] verificación de que todas las licencias de software estén incluidas y sean válidas.
            
    Separador  
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2	Documentación de entrega
    p.mb-3 La documentación de entrega es un componente propio de los protocolos de entrega, ya que proporciona al usuario toda la información necesaria para utilizar y mantener el equipo de manera efectiva. A continuación, se describen los aspectos que se deben tener en cuenta para la documentación de entrega:

    .row.justify-content-center.mb-4
     .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/t3/5.png' alt='')         
     .col-lg-9.my-lg-0.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg3")
          div(titulo="Manuales de usuario")
            p Los manuales de usuario son documentos detallados que proporcionan instrucciones sobre cómo utilizar el equipo y el #[i software] instalado.
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span #[b Instrucciones de uso:] provisión de instrucciones detalladas sobre cómo utilizar el equipo y el #[i software] instalado.
              li 
                i.fas.fa-check-circle.color1
                span #[b Guías de instalación:] instrucciones detalladas para la instalación y configuración del equipo y el #[i software].
              li 
                i.fas.fa-check-circle.color1
                span #[b Solución de problemas:] provisión de guías de solución de problemas para ayudar al usuario a resolver problemas comunes que puedan surgir.
              li 
                i.fas.fa-check-circle.color1
                span #[b Guías de instalación:] las guías de instalación proporcionan instrucciones detalladas para la instalación y configuración del equipo y el #[i software]. 
              li 
                i.fas.fa-check-circle.color1
                span #[b Instalación de #[i hardware]:] instrucciones detalladas para la instalación y configuración del #[i hardware] del equipo.
              li 
                i.fas.fa-check-circle.color1
                span #[b Instalación de #[i software]:] instrucciones detalladas para la instalación y configuración del #[i software], incluyendo el sistema operativo y las aplicaciones.
              li 
                i.fas.fa-check-circle.color1
                span #[b Configuración de red:] instrucciones detalladas para la configuración de las conexiones de red, incluyendo la configuración de #[i Wi-Fi], VPN y otros ajustes de red.
          div(titulo="Documentación de garantía") 
           p  La documentación de garantía proporciona al usuario toda la información necesaria sobre la garantía del equipo.
            ul.lista-ul.fa-ul.ps-4.mt-3
              li 
                i.fas.fa-check-circle.color1
                span #[b Cobertura de garantía:] explicación de los términos y condiciones de la garantía, incluyendo qué está cubierto y qué no está cubierto.
              li
                i.fas.fa-check-circle.color1
                span #[b Procedimientos de reclamación:] instrucciones sobre cómo hacer una reclamación bajo la garantía, incluyendo los pasos a seguir y la información necesaria.
              li
                i.fas.fa-check-circle.color1
                span #[b Extensión de garantía:] opciones para extender la garantía más allá del período inicial, incluyendo los costos y los beneficios adicionales.
          div(titulo="Documentación de licencias") 
           p La documentación de licencias proporciona al usuario toda la información necesaria sobre las licencias de #[i software] instaladas en el equipo, se recomienda conocer.
            ul.lista-ul.fa-ul.ps-4.mt-3
              li 
                i.fas.fa-check-circle.color1
                span #[b Términos de licencia:] explicación de los términos y condiciones de las licencias de #[i software], incluyendo los derechos y obligaciones del usuario.
              li
                i.fas.fa-check-circle.color1
                span #[b Activación de licencias:] instrucciones sobre cómo activar las licencias de #[i software], incluyendo los códigos de activación y los pasos a seguir.
              li
                i.fas.fa-check-circle.color1
                span #[b Renovación de licencias:] opciones para renovar las licencias de #[i software], incluyendo los costos y los beneficios adicionales.
    .row.justify-content-center.mb-4   
      .col-lg-9.my-lg-0.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg3")
          div(titulo="Capacitación básica ")
            p La capacitación básica es un componente infalible de los protocolos de entrega, ya que asegura que el usuario pueda utilizar el equipo de manera efectiva. 
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span #[b Instrucción sobre el uso del equipo:] la instrucción sobre el uso del equipo proporciona al usuario las habilidades y conocimientos necesarios para utilizar el equipo de manera efectiva.
                
              li 
                i.fas.fa-check-circle.color1
                span #[b Funciones básicas:] explicación de las funciones básicas del equipo y el #[i software] instalado, incluyendo cómo encender y apagar el equipo, cómo iniciar sesión y cómo utilizar las aplicaciones básicas.
                
              li 
                i.fas.fa-check-circle.color1
                span #[b Funciones avanzadas:] explicación de las funciones avanzadas del equipo y el #[i software] instalado, incluyendo cómo utilizar las herramientas de productividad, las aplicaciones de diseño gráfico y otras funcionalidades avanzadas.
              li 
                i.fas.fa-check-circle.color1
                span #[b Personalización del equipo:] instrucción sobre cómo personalizar el equipo y el #[i software] instalado, incluyendo la configuración de perfiles de usuario, la personalización de la interfaz de usuario y la configuración de aplicaciones personalizadas.
          div(titulo="Explicación de funciones clave ")
            p La explicación de funciones clave proporciona al usuario una comprensión detallada de las características y funcionalidades más importantes del equipo y el #[i software] instalado.
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span #[b Funciones de seguridad:] explicación de las funciones de seguridad del equipo y el #[i software] instalado, incluyendo cómo configurar y utilizar las herramientas de seguridad, como los antivirus, los #[i firewalls] y las políticas de seguridad.
              li 
                i.fas.fa-check-circle.color1
                span #[b Funciones de productividad:] explicación de las funciones de productividad del equipo y el #[i software] instalado, incluyendo cómo utilizar las herramientas de gestión de proyectos, las suites de oficina y otras aplicaciones de productividad.
              li 
                i.fas.fa-check-circle.color1
                span #[b Funciones de conectividad:] explicación de las funciones de conectividad del equipo y el #[i software] instalado, incluyendo cómo configurar y utilizar las conexiones de red, las VPN y otros ajustes de red.
          div(titulo="Resolución de problemas básicos")
            p La instrucción sobre la resolución de problemas básicos proporciona al usuario las habilidades y conocimientos necesarios para resolver problemas comunes que puedan surgir.
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span #[b Problemas de #[i hardware]:] instrucción sobre cómo resolver problemas comunes de #[i hardware], incluyendo cómo reemplazar componentes defectuosos, cómo solucionar problemas de conectividad y cómo realizar diagnósticos de #[i hardware].
              li 
                i.fas.fa-check-circle.color1
                span #[b Problemas de #[i software]:] instrucción sobre cómo resolver problemas comunes de #[i software], incluyendo cómo reinstalar aplicaciones, cómo solucionar problemas de compatibilidad y cómo realizar diagnósticos de #[i software].
              li 
                i.fas.fa-check-circle.color1
                span #[b Problemas de red:] instrucción sobre cómo resolver problemas comunes de red, incluyendo cómo solucionar problemas de conectividad, cómo configurar y utilizar las VPN y cómo realizar diagnósticos de red.


      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/t3/6.png' alt='')   
    Separador  
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3	Capacitación básica 
    .row.justify-content-center.align-items-center.mb-4
      .col.pt-lg-0.pt-md-4
        p.mb-0 La documentación de entrega de equipos de cómputo es un proceso que asegura la correcta transmisión de información y especificaciones entre el proveedor y el usuario final. Esta documentación incluye detalles técnicos, configuraciones previas a la entrega, instrucciones sobre el uso de los equipos, y los parámetros de garantía. La entrega debe incluir tanto los equipos como los documentos de soporte que permitan al usuario comprender el funcionamiento básico y las configuraciones personalizadas del dispositivo. En este contexto, es importante que se detallen las configuraciones del hardware y software que el equipo incluye al momento de la entrega. De igual manera, la documentación debe cubrir aspectos como el mantenimiento preventivo, las condiciones de servicio y las pruebas realizadas antes de la entrega.
      .col-lg-auto.pt-lg-0.pt-md-4
        img.img-a.img-t(src='@/assets/curso/temas/t3/7.png' alt='')

    .row.justify-content-center.mb-4
      .col-lg-4.my-2
        .bgt1.p-4.brad.h-100.bg3

          p.mb-0 La capacitación en configuración y entrega de equipos de cómputo abarca un conjunto de actividades orientadas a preparar al usuario para manejar el equipo correctamente. Esto involucra procesos como la instalación de sistemas operativos, aplicaciones y configuraciones personalizadas, que deben realizarse antes de la entrega. Además, es importante que los técnicos impartan formación sobre cómo realizar pruebas operativas para garantizar que los equipos funcionen correctamente. Estas pruebas pueden incluir verificaciones de la conectividad de red, la calidad del sistema de refrigeración, el rendimiento del sistema y las configuraciones de seguridad. 
      .col-lg-4.my-2
        .col-lg-auto.h-100
          img.img-t.mb-4(src='@/assets/curso/temas/t3/8.png' alt='')

      .col-lg-4.my-2
        .bgt1.p-4.brad.h-100.bg4

          p.mb-0 En cuanto a los protocolos, se deben seguir pasos establecidos para asegurar que cada equipo se configure de acuerdo con las especificaciones técnicas y operativas requeridas. Esto implica seguir procedimientos estandarizados para la entrega y garantizar que todos los equipos pasen las pruebas necesarias antes de llegar a manos del usuario final. Además, la capacitación debería abordar cómo interpretar los resultados de las pruebas, cómo proceder en caso de fallos y cómo gestionar posibles incidencias post-entrega.

    .row.justify-content-center.bg1.p-4.brad
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/t3/9.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 Adicionalmente las pruebas deben ser documentadas y los resultados deben ser registrados para asegurar que cualquier problema detectado pueda ser corregido antes de la entrega. La capacitación también debe abordar la importancia de la comunicación con el usuario final, asegurando que el equipo sea entregado con todas las instrucciones necesarias para su uso y mantenimiento.
  

</template>

<script>
import TabsC from '../bootstrap/TabsC'
import AcordionA from '../bootstrap/AcordionA'
import SlyderA from '../bootstrap/SlyderA'
export default {
  name: 'Tema3',
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
