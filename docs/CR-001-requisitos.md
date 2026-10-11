# CR-001 — Requisitos

**Fecha:** 2026-10-11  
**Estado:** decisiones iniciales y pendientes de validación.  
**Referencia:** [visión y alcance](CR-000-vision-alcance.md).

## Requisitos funcionales acordados

| ID | Requisito | Estado |
| --- | --- | --- |
| RF-01 | Presentar el salón mediante un portafolio de sus trabajos. | Acordado; textos e imágenes pendientes. |
| RF-02 | Mostrar un carrusel principal de promociones y servicios. | Acordado; contenido y condiciones pendientes. |
| RF-03 | Mostrar seis servicios con precios publicados fijos. | Acordado; catálogo, importes y moneda pendientes de validación. |
| RF-04 | Presentar cuatro profesionales provisionales. | Composición, nombres, imágenes y especialidades pendientes. |
| RF-05 | Permitir contacto mediante enlaces oficiales de WhatsApp e Instagram. | Acordado; destinos pendientes. |
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

## Equipo provisional

| Registro | Información aportada | Validación pendiente |
| --- | --- | --- |
| Profesional 01 | Posible manicurista. | Nombre, rol, fotografía y confirmación. |
| Profesional 02 | Posible manicurista. | Nombre, rol, fotografía y confirmación. |
| Profesional 03 | Posible estilista de peinados y cortes. | Nombre, especialidades y fotografía. |
| Profesional 04 | Dueña; posiblemente especializada en cortes y peinados. | Nombre, especialidades y fotografía. |

El total de cuatro personas, incluida la dueña, es provisional. La conversación menciona «ambas opciones» para presentar el equipo, pero no detalla las opciones en el contexto recuperado; su formato debe aclararse antes de implementar.

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

Verificar los seis servicios y precios aprobados; confirmar el equipo; comprobar portafolio y carrusel; probar enlaces oficiales; revisar adaptación y accesibilidad. No publicar contenido pendiente como si estuviera confirmado.
