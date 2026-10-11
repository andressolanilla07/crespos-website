# ADR-001 — Stack tecnológico del MVP

**Fecha:** 2026-10-11  
**Estado:** aceptado para la planificación del MVP.  
**Proyecto:** Crespos Sala de Belleza.

## Contexto

El proyecto es un portafolio de salón de belleza con carrusel de promociones y servicios, catálogo con precios fijos validados, equipo y enlaces a WhatsApp e Instagram. Se prevén 2–3 actualizaciones mensuales por el desarrollador. La tienda continúa pendiente.

## Decisión

Usar HTML5 para estructura semántica, CSS3 para presentación adaptable, JavaScript para interacciones y JSON para contenido estructurado que lo requiera. JSON es un formato de datos, no una base de datos.

No usar framework, backend ni base de datos en el MVP. No incluir panel de administración. El website se implementará en una etapa posterior; esta inicialización solo contiene documentación.

## Motivos

Mantener una solución sencilla, compatible y adecuada al alcance de portafolio. La edición por el desarrollador y la baja frecuencia de actualizaciones permiten mantener contenido en archivos estáticos sin añadir una aplicación de administración.

## Consecuencias

- El contenido se actualizará mediante cambios versionados por el desarrollador.
- Los archivos del website y JSON publicados serán visibles para los visitantes; no deben contener secretos ni datos privados.
- Los contactos se resolverán mediante enlaces oficiales validados.
- El alojamiento estático, dominio y despliegue quedan pendientes de elección.
- Reservas, autenticación, pagos, inventario o comercio electrónico requerirán revisar alcance y arquitectura mediante un nuevo ADR.

## Alternativas fuera de esta decisión

Un framework, CMS o backend añadiría capacidades y mantenimiento que no se necesitan en el alcance inicial. Su adopción podrá reevaluarse si cambian las necesidades; no se incorporan ahora.

## Validación futura

Comprobar la adaptación a móviles, accesibilidad, rendimiento de imágenes, funcionamiento del carrusel y enlaces de contacto cuando exista implementación.
