# Demo de portafolio — Crespos Sala de Belleza

**Autor:** Andrés Mauricio Solanilla Hoyos — Desarrollador de software.

Sitio estático de cinco páginas desarrollado con HTML5, CSS3 y JavaScript. Incluye diseño adaptable, navegación semántica, carrusel con pausa y movimiento reducido, y contactos del salón en cada pie de página.

**Demo:** [Ver Crespos Sala de Belleza](https://andressolanilla07.github.io/crespos-website/). GitHub Pages configurado desde `main` y la raíz del repositorio.

Esta es una demostración técnica para el portafolio del desarrollador, no un lanzamiento oficial del salón. Servicios, precios, fotografías y promociones permanecen pendientes de validación. El aviso de prototipo se conserva visible.

Abrir `index.html` para probarlo localmente. Los recursos usan rutas relativas. No hay framework, backend, reservas, pagos ni integración automática con Instagram.

No se concede una licencia pública de reutilización. La marca del salón se distingue de la autoría del código.

## Registro de desarrollo anterior

Las referencias a repositorio privado y ausencia de despliegue del registro siguiente corresponden al estado anterior a esta preparación de publicación.

# Crespos Sala de Belleza

Repositorio privado para la documentación y el futuro website de Crespos Sala de Belleza.

**Estado:** prototipo local creado; no listo para publicar. Sin despliegue.
**Fecha:** 2026-10-11. **Rama prevista:** `main`.

## Propósito y alcance

Crear un portafolio del salón que muestre su trabajo, servicios y equipo, y facilite el contacto por WhatsApp e Instagram. El MVP contempla un carrusel de promociones y servicios, seis servicios con precios publicados fijos y cinco profesionales (Carolina Chico, dueña, y cuatro especialistas).

Los nombres, descripciones, valores y moneda de los servicios están pendientes de validación. Los nombres y especialidades del equipo (cinco profesionales) provienen del material aportado por el usuario el 2026-10-11; las fotografías del equipo siguen pendientes. La tienda y los servicios adicionales permanecen pendientes de definición.

## Contacto

Suministrados por el usuario el 2026-10-11:

- Teléfono y WhatsApp: +57 304 2382609
- WhatsApp Business: @CresposBelleza
- Enlace de WhatsApp: https://wa.me/573042382609
- Instagram: @crespossaladebelleza
- Enlace de Instagram: https://www.instagram.com/crespossaladebelleza/
- Ubicación provisional: Jardín 2, Pereira (suministrada por el usuario el 2026-10-11; pendiente de validación)

Los datos provienen del usuario; los enlaces faltan por probar antes de publicar. No se deduce horario, servicios, precios ni catálogo de esta información. La ubicación es provisional: no se muestra dirección exacta ni horarios.

## Decisiones técnicas

HTML5, CSS3, JavaScript y JSON; sin framework, backend ni base de datos en el MVP. El desarrollador realizará aproximadamente 2–3 actualizaciones mensuales. No habrá panel de administración en este alcance.

## Prototipo local (2026-10-11)

Prototipo estático multipágina, no apto para publicar. **Decisión del usuario (2026-10-11): páginas separadas**, que reemplaza la página única del prototipo anterior. Archivos: `index.html` (presentación y carrusel), `servicios.html`, `portafolio.html`, `equipo.html`, `contacto.html`, `css/estilos.css` compartido y `js/main.js` (carrusel, solo en Inicio; HTML5, CSS3 y JavaScript puro, sin dependencias).

- Cabecera común: solo el logo compacto sin fondo (`docs/img/logotres.png`, letras oscuras sobre superficie crema), enlazado al Inicio, con texto alternativo accesible; sin el nombre textual repetido; menú con la página actual marcada (`aria-current="page"`).
- Portada: el logo a color (`docs/img/logouno.png`) completo y protagonista como imagen (sin recortes, sin textos ni tarjetas encima; `h1` «Crespos Sala de Belleza» accesible visualmente oculto); debajo, «Conoce nuestro trabajo y nuestro equipo» y los botones «Escribir por WhatsApp» (principal) y «Ver nuestro Instagram» (secundario), ambos con apertura en pestaña nueva; el carrusel va después, sobre fondo crema limpio, con tamaño equilibrado. La firma «Crespos by Carolina Chico» no aparece en la portada.
- Equipo: cinco fichas (Carolina Chico, dueña, en primer lugar; Valentina Sánchez, Dolly Fernández, Jacqueline Muñoz y Erika Osorio) con cargo y especialidad tomados del material del usuario; sin biografías ni años inventados; espacios reservados para fotografía 1:1. Las especialidades describen al equipo y no son el catálogo definitivo de servicios.
- Portafolio: galería concebida con archivos locales y enlaces directos (sin incrustaciones ni actualización automática); cada foto enlazará a su publicación original de Instagram. Aún no hay fotografías autorizadas ni direcciones de publicación: los seis espacios se conservan sin enlaces ficticios, con botón general «Ver más en Instagram» hacia el perfil oficial.
- Contenido: marcadores breves de servicios, precios y equipo; espacios reservados para fotografías con proporciones definidas (carrusel 16:9, portafolio 4:3, equipo 1:1); no se encontraron imágenes autorizadas en el repositorio; sin promociones ficticias; sin crédito del desarrollador ni licencia.
- Sin JavaScript: la navegación entre páginas, el contenido y los enlaces de contacto siguen disponibles; en Inicio, el carrusel muestra las tres diapositivas apiladas.
- Pie de página común en las cinco páginas, sobre fondo oscuro: navegación; firma «Crespos by Carolina Chico» como texto elegante en dorado (sin etiqueta verde); y fila compacta de contactos (WhatsApp enlazado, Instagram enlazado y «Jardín 2, Pereira — ubicación provisional»). Sin el nombre del salón repetido en el pie.
- El mismo día se simplificaron avisos y tarjetas, y se mejoraron tipografía, composición y proporciones.

Verificaciones del prototipo multipágina (2026-10-11): sintaxis de JavaScript correcta; menú y enlaces entre las cinco páginas completos; la página actual marcada con `aria-current="page"` en el menú superior e inferior; ancla «saltar al contenido» válida en cada página; la cabecera fija no tapa el contenido al navegar. Tras el refino de diseño: sin desbordamiento a 320, 375, 768 y 1280 px en las cinco páginas (medición con iframes, 20/20 correctas); los 15 enlaces externos usan `target="_blank"`, `rel="noopener noreferrer"` e indicación accesible de pestaña nueva; `https://wa.me/573042382609` resuelve a la página de contacto de «Sala de belleza Crespos» sin enviar mensajes; `https://www.instagram.com/crespossaladebelleza/` responde y sirve su página (el contenido completo del perfil no se pudo confirmar en navegador sin sesión); el nombre del salón ya no aparece repetido en cabeceras ni pies (solo en `title`, texto alternativo y `h1` oculto de la portada); contraste: firma dorado sobre oscuro 6.4:1 (AA); las reglas de foco visible existen en el CSS, pero no se probó el recorrido con teclado en modo sin cabeza (limitación declarada). El contraste general de la paleta está registrado en CR-004.

Logos (2026-10-11): el usuario aportó y organizó las versiones en `docs/img/`. `logotres.png` (2172×724, 32 bpp con alfa; transparencia verificada: alfa mínimo 0, ≈99,7 % de píxeles de muestra transparentes) es la versión sin fondo para la cabecera; el archivo llegó sin extensión (`logotres`) y se renombró a `logotres.png`. `logouno.png` (1774×887, sin alfa; fondo crema y verde) es la versión para la portada: corresponde al antiguo `crespos-logo-original-mejorado.png`, renombrado por el usuario. `logodos.png` (2172×724, fondo blanco opaco) y `crespos-logo-original-mejoradoii` (idéntico, sin extensión) son variantes sin usar; los archivos originales no se alteran.

Cómo abrir: doble clic en `index.html` (o `start index.html`). No requiere servidor; cualquier servidor estático local también sirve.

## Documentación

- [CR-000: visión y alcance](docs/CR-000-vision-alcance.md)
- [CR-001: requisitos](docs/CR-001-requisitos.md)
- [CR-004: identidad visual](docs/CR-004-identidad-visual.md)
- [ADR-001: stack tecnológico](docs/adr/ADR-001-stack-tecnologico.md)

## Próximos pasos

Validar el catálogo de seis servicios y sus precios, confirmar el equipo, recopilar imágenes autorizadas, completar la prueba de los enlaces de contacto en dispositivos reales y aprobar la identidad visual. Elegir dominio y alojamiento antes de publicar. El prototipo local está implementado pero no está listo para publicar; falta reemplazar el contenido provisional con datos aprobados.

## Licencia

No se incorpora una licencia pública por ahora. La elección de licencia queda pendiente.

## Fuente y control de información

Decisiones del usuario en la conversación «Plan técnico de arquitectura» y su solicitud de inicialización. Los datos comerciales no confirmados se mantienen como pendientes; no deben publicarse valores o afirmaciones inventados.


