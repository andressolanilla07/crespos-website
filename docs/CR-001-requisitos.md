# CR-001 — Requisitos

**Fecha:** 2026-10-11  
**Estado:** decisiones iniciales y pendientes de validación. Existe un prototipo local (2026-10-11); no está listo para publicar.  
**Referencia:** [visión y alcance](CR-000-vision-alcance.md).

## Requisitos funcionales acordados

| ID | Requisito | Estado |
| --- | --- | --- |
| RF-01 | Presentar el salón mediante un portafolio de sus trabajos. | Acordado; galería con archivos locales y enlaces directos a las publicaciones de Instagram; faltan fotografías autorizadas y la dirección de cada publicación. |
| RF-02 | Mostrar un carrusel principal de promociones y servicios. | Acordado; contenido y condiciones pendientes. |
| RF-03 | Mostrar seis servicios con precios publicados fijos. | Acordado; catálogo, importes y moneda pendientes de validación. |
| RF-04 | Presentar cinco profesionales (dueña y especialistas). | Nombres y especialidades del material aportado por el usuario el 2026-10-11; fotografías y confirmación pendientes. |
| RF-05 | Permitir contacto mediante enlaces oficiales de WhatsApp e Instagram. | Acordado; destinos suministrados por el usuario el 2026-10-11; enlaces pendientes de prueba. |
| RF-06 | Permitir 2–3 actualizaciones mensuales realizadas por el desarrollador. | Acordado; sin panel de administración. |

## Catálogo pendiente

Las siguientes filas son identificadores de levantamiento, no nombres comerciales ni productos listos para publicar.

| Registro | Nombre y descripción | Precio fijo publicado | Moneda |
| --- | --- | --- | --- |
| Servicio 01 | Pendiente de validación | Pendiente | Pendiente |
| Servicio 02 | Pendiente de validación | Pendiente | Pendiente |
| Servicio 03 | Pendiente de validación | Pendiente | Pendiente |
| Servicio 04 | Pendiente de validación | Pendiente | Pendiente |
| Servicio 05 | Pendiente de validación | Pendiente | Pendiente |
| Servicio 06 | Pendiente de validación | Pendiente | Pendiente |

No usar importes de ejemplo como precios reales. Confirmar alcance, condiciones y vigencia de cada precio antes de publicar. Los servicios adicionales quedan pendientes.

## Equipo

| Registro | Información aportada | Validación pendiente |
| --- | --- | --- |
| Carolina Chico | Dueña; estilista profesional y colorista; micropigmentadora; peinados y trenzas. | Fotografía y confirmación. |
| Valentina Sánchez | Manicurista y barbera; acrílicas esculpidas. | Fotografía y confirmación. |
| Dolly Fernández | Estilista profesional; cepillados y corte para caballeros. | Fotografía y confirmación. |
| Jacqueline Muñoz | Estilista profesional y colorista; color y cepillados. | Fotografía y confirmación. |
| Erika Osorio | Estilista profesional, lashista y recepcionista; peinados y planchados. | Fotografía y confirmación. |

Nombres y especialidades proceden del material aportado por el usuario el 2026-10-11; la dueña, Carolina Chico, se presenta en primer lugar. No se inventan biografías, años de experiencia ni fotografías. Estas especialidades describen al equipo y no equivalen al catálogo definitivo de seis servicios (RF-03); los nombres finales, precios y moneda de servicios siguen pendientes.

## Contactos

Suministrados por el usuario el 2026-10-11:

| Canal | Dato |
| --- | --- |
| Teléfono y WhatsApp | +57 304 2382609 |
| WhatsApp Business | @CresposBelleza |
| Enlace de WhatsApp | https://wa.me/573042382609 |
| Instagram | @crespossaladebelleza |
| Enlace de Instagram | https://www.instagram.com/crespossaladebelleza/ |
| Ubicación provisional | Jardín 2, Pereira |

Los datos provienen del usuario; los enlaces deben probarse en móvil y escritorio antes de publicar. La ubicación es provisional y pendiente de validación; no se muestra dirección exacta ni horarios. No se deduce horario, servicios, precios ni catálogo de esta información.

## Tienda

Pendiente de conocer productos, objetivos y alcance. No asumir catálogo, inventario, carrito, pagos ni venta en línea para el MVP.

## Requisitos de calidad propuestos

- Diseño adaptable a móvil y escritorio.
- Navegación por teclado, textos alternativos e indicadores de foco.
- Carrusel con controles accesibles, posibilidad de pausa y respeto por movimiento reducido.
- Contraste de texto y controles verificado antes de aprobar combinaciones de la paleta.
- Imágenes optimizadas; no publicar material sin autorización.
- Enlaces de contacto probados en móvil y escritorio.
- No incluir secretos ni datos privados de clientes en archivos o JSON.

Estos criterios de calidad son propuestas técnicas iniciales; no representan datos comerciales confirmados.

## Mantenimiento propuesto

El desarrollador recibe contenido aprobado, modifica archivos estáticos y JSON cuando existan, revisa cambios y enlaces, registra un commit y publica mediante el alojamiento que se elija. Frecuencia prevista: 2–3 actualizaciones mensuales. El flujo de despliegue queda pendiente de elegir el alojamiento.

## Aceptación del futuro MVP

Verificar los seis servicios y precios aprobados; confirmar datos y fotografías del equipo aportados; comprobar portafolio y carrusel; probar enlaces oficiales; revisar adaptación y accesibilidad. No publicar contenido pendiente como si estuviera confirmado.
