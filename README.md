# Demo de portafolio — Crespos Sala de Belleza

**Autor:** Andrés Mauricio Solanilla Hoyos — Desarrollador de software.

**Demo pública:** [Ver Crespos](https://andressolanilla07.github.io/crespos-website/).

Proyecto multipágina desarrollado con HTML5, CSS3 y JavaScript. Demostración en desarrollo: servicios, precios y contenido institucional pendientes de validación; no representa un lanzamiento oficial del salón.

GitHub Pages publica desde `main` y la raíz del repositorio. Las fotografías se sirven localmente y enlazan a sus publicaciones originales de Instagram; no se actualizan automáticamente.

## Registro del desarrollo local

El registro siguiente conserva el contexto de las rondas locales previas a la publicación. Las referencias a repositorio privado o ausencia de despliegue corresponden a esas etapas.

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

- Cabecera común: solo el logo compacto sin fondo (`docs/img/logotres-web.webp`, versión web de `logotres.png`, letras oscuras sobre superficie crema), enlazado al Inicio, con texto alternativo accesible; sin el nombre textual repetido; menú con la página actual marcada (`aria-current="page"`).
- Portada: el logo a color (`docs/img/logouno-web.webp`, versión web de `logouno.png`) se usa como **fondo** de la sección de inicio (`background-image` con proporciones conservadas: `contain`, sin recortes ni deformación), no como bloque de imagen separado; una capa clara (`rgba(250,245,237,0.75)`) encima garantiza la legibilidad del texto. Sobre ese fondo van la presentación (tarjeta suave con `h1` «Crespos Sala de Belleza» visible y la línea «Conoce nuestro trabajo y nuestro equipo») y el carrusel, ambos en tarjetas suaves (fondo casi crema translúcido, borde dorado, sombra ligera) con espacio suficiente entre ellas. En escritorio el fondo permanece fijo (`background-attachment: fixed` desde 48 rem); en móvil se adapta con desplazamiento normal, sin desbordes.
- Carrusel: inmediatamente después de la portada, retitulado «Nuestro trabajo»; tres espacios reservados (16:9) para fotografías de trabajos con nota discreta sobre la publicación de Instagram pendiente; controles accesibles (anterior/siguiente, puntos, pausa) que se ocultan sin JavaScript; debajo, enlaces de texto «Contactar por WhatsApp» y «Ver más en Instagram» (sin botones voluminosos en la portada).
- Misión y visión: sección en fondo beige con dos columnas en escritorio y una en móvil; textos aprobados por el usuario para el prototipo (CR-001), sujetos a adopción institucional por revisión de Carolina.
- Equipo: cinco fichas (Carolina Chico, dueña, en primer lugar; Valentina Sánchez, Dolly Fernández, Jacqueline Muñoz y Erika Osorio) con cargo y especialidad tomados del material del usuario; sin biografías ni años inventados; espacios reservados para fotografía 1:1. Las especialidades describen al equipo y no son el catálogo definitivo de servicios.
- Portafolio: galería concebida con archivos locales y enlaces directos (sin incrustaciones ni actualización automática); cada foto enlazará a su publicación original de Instagram. Aún no hay fotografías autorizadas ni direcciones de publicación: los seis espacios se conservan sin enlaces ficticios, con botón general «Ver más en Instagram» hacia el perfil oficial.
- Contenido: marcadores breves de servicios, precios y equipo; espacios reservados para fotografías con proporciones definidas (carrusel 16:9, portafolio 4:3, equipo 1:1); no se encontraron imágenes autorizadas en el repositorio; sin promociones ficticias; sin crédito del desarrollador ni licencia.
- Sin JavaScript: la navegación entre páginas, el contenido y los enlaces de contacto siguen disponibles; en Inicio, el carrusel muestra las tres diapositivas apiladas.
- Pie de página común en las cinco páginas, sobre fondo oscuro: navegación; el nombre «Crespos Sala de Belleza» en crema y, debajo, «by Carolina Chico» en dorado discreto; y fila compacta de contactos (WhatsApp enlazado, Instagram enlazado y «Jardín 2, Pereira — ubicación provisional»).
- El mismo día se simplificaron avisos y tarjetas, y se mejoraron tipografía, composición y proporciones.

Verificaciones del prototipo multipágina (2026-10-11): sintaxis de JavaScript correcta (`node --check`); menú y enlaces entre las cinco páginas completos; la página actual marcada con `aria-current="page"` en el menú superior e inferior; ancla «saltar al contenido» válida en cada página; la cabecera fija no tapa el contenido al navegar. Tras el refino de diseño: sin desbordamiento a 320, 375, 768 y 1280 px en las cinco páginas (medición con iframes, 20/20 correctas); los 15 enlaces externos usan `target="_blank"`, `rel="noopener noreferrer"` e indicación accesible de pestaña nueva; `https://wa.me/573042382609` resuelve a la página de contacto de «Sala de belleza Crespos» sin enviar mensajes; `https://www.instagram.com/crespossaladebelleza/` responde y sirve su página (el contenido completo del perfil no se pudo confirmar en navegador sin sesión); el nombre del salón ya no aparece repetido en cabeceras ni pies (solo en `title`, texto alternativo y `h1` oculto de la portada); consola sin errores en las cinco páginas (Edge sin cabeza, registro de consola); sin JavaScript, la navegación, el contenido y los enlaces siguen disponibles y el carrusel muestra las tres diapositivas apiladas con los controles ocultos por CSS (verificación estática de las reglas `.js` del CSS, ya que Edge sin cabeza no produjo volcado con `scriptEnabled=false`; limitación declarada); contraste: firma dorado sobre oscuro 6.4:1 (AA); las reglas de foco visible existen en el CSS, pero no se probó el recorrido con teclado en modo sin cabeza (limitación declarada). El contraste general de la paleta está registrado en CR-004.

Capturas de verificación (2026-10-11, carpeta temporal del entorno, no versionadas): portada, misión/visión y pie en escritorio (1280 px) y móvil (375 px); el navegador sin cabeza de este equipo aplica un ancho mínimo de ~492 DIP, por lo que las capturas móviles se tomaron dentro de iframes de 375 px y se recortaron.

Logos (2026-10-11): el usuario aportó y organizó las versiones en `docs/img/`. `logotres.png` (2172×724, 32 bpp con alfa; transparencia verificada: alfa mínimo 0, ≈99,7 % de píxeles de muestra transparentes) es la versión sin fondo para la cabecera; el archivo llegó sin extensión (`logotres`) y se renombró a `logotres.png`. `logouno.png` (1774×887, sin alfa; fondo crema y verde) es la versión para la portada: corresponde al antiguo `crespos-logo-original-mejorado.png`, renombrado por el usuario. Para web se generaron copias optimizadas sin alterar los originales: `logouno-web.webp` (1600×800, ≈35,8 KB, −97 % respecto a los 1,36 MB del original) y `logotres-web.webp` (480×160, ≈19,8 KB, −96 %), con proporciones idénticas y atributos `width`/`height` declarados en el HTML; los originales se conservan intactos. `logodos.png` (2172×724, fondo blanco opaco) y `crespos-logo-original-mejoradoii` (idéntico, sin extensión) son variantes sin usar.

Cómo abrir: doble clic en `index.html` (o `start index.html`). No requiere servidor; cualquier servidor estático local también sirve.

## Documentación

- [CR-000: visión y alcance](docs/CR-000-vision-alcance.md)
- [CR-001: requisitos](docs/CR-001-requisitos.md)
- [CR-004: identidad visual](docs/CR-004-identidad-visual.md)
- [ADR-001: stack tecnológico](docs/adr/ADR-001-stack-tecnologico.md)

## Próximos pasos

Validar el catálogo de seis servicios y sus precios, confirmar el equipo, recopilar imágenes autorizadas, completar la prueba de los enlaces de contacto en dispositivos reales y aprobar la identidad visual. Para el carrusel «Nuestro trabajo» y la galería faltan las fotografías autorizadas con la dirección de cada publicación de Instagram. La adopción institucional de los textos de misión y visión queda pendiente de revisión por parte de Carolina. Elegir dominio y alojamiento antes de publicar. El prototipo local está implementado pero no está listo para publicar; falta reemplazar el contenido provisional con datos aprobados.

## Licencia

No se incorpora una licencia pública por ahora. La elección de licencia queda pendiente.

## Fuente y control de información

Decisiones del usuario en la conversación «Plan técnico de arquitectura» y su solicitud de inicialización. Los datos comerciales no confirmados se mantienen como pendientes; no deben publicarse valores o afirmaciones inventados.

## Fotografías de Instagram integradas
Se incorporaron seis fotografías del perfil suministrado por el usuario: tres en el carrusel y seis en la galería. Cada imagen local enlaza a su publicación original. Las fuentes figuran en img/portafolio/fuentes.json. Sin sincronización automática. Esta integración local todavía no está desplegada.

