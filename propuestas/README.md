# Crespos · propuestas para revisión de la propietaria

Preparado el 16 de octubre de 2026. **Solo local; no se ha publicado ni subido a GitHub.**

## Estado comprobado antes de editar

- Repositorio encontrado: `andressolanilla07/crespos-website`.
- GitHub lo reportó **público**, no privado. El README existente indica GitHub Pages desde `main` y la raíz. No subir este prototipo allí mientras esa publicación y la privacidad sigan sin resolverse.
- Copia limpia desde `main`, commit base `4f446dd` (`feat: actualizar marca, equipo y galería enlazada a Instagram`). Rama local `propuesta/elegancia-botanica-local`.
- Se añadieron únicamente archivos dentro de `propuestas/`. La web anterior, fotografías y documentos permanecen intactos.
- La conversación de referencia pudo leerse, pero los mensajes del asistente contienen referencias de contenido sin el mockup ni sus archivos. Estas propuestas interpretan la descripción del usuario y la identidad documentada; no se afirma fidelidad visual al mockup inaccesible.

## Revisión

Abrir `propuestas/index.html` para comparar. V2 es la propuesta principal: marfil, champaña, dorado, salvia, carbón e imágenes editoriales botánicas generadas con IA. V1 es una alternativa nueva de elegancia clásica, con tonos champaña y más contraste. Ambas comparten estructura, imágenes y datos para comparar la dirección visual. No se ha renombrado la web previa como V1 ni sobrescrito su trabajo.

Se reutiliza el logo aportado en `docs/img/logotres-web.webp`: cabecera, esquina inferior de portada y pie. No se cargan fuentes, fotografías ni servicios externos. Por solicitud del usuario, se añadieron cuatro imágenes provisionales con la herramienta integrada de generación de imágenes: rizos, ondas, manicure e interior conceptual. Se sirven desde `assets/images/`; portada y galería las identifican como IA. La galería reutiliza dos imágenes con encuadres diferentes. El interior es ficticio, no representa el salón real; la sección del equipo conserva perfiles sin asignarles rostros ficticios. Los prompts completos y las fuentes están en `assets/images/GENERACION.md`. No se reutilizan las fotos de Instagram existentes porque no se verificó autorización para estas propuestas.

Los seis nombres, descripciones y valores de servicios son **ejemplos de diseño no aprobados**, en COP provisional. Los roles del equipo son propuestas; no se atribuyen a personas. No hay testimonios, promociones comerciales con descuentos, productos, pagos, formularios ni reservas reales. La tienda es un estado vacío.

## Ejecutar

Requiere Node.js 20 o posterior. Desde la raíz del repositorio:

```sh
node propuestas/scripts/build.mjs
node propuestas/scripts/serve.mjs
```

Abrir `http://127.0.0.1:4173/propuestas/`. El servidor escucha únicamente en la interfaz local. Detener con Ctrl+C. También es posible abrir los HTML directamente: contenido, navegación y carrusel funcionan; la carga de contactos requiere HTTP local. Sin JavaScript quedan visibles las tres diapositivas, navegación, seis servicios y el resto del contenido.

## Cambiar contenido

Editar `propuestas/data/site.json` y ejecutar el generador. Este escribe solo los HTML de V1/V2, la comparación y `assets/contacts.json`; no editar los archivos generados a mano. CSS y JavaScript son compartidos. No hay dependencias de producción, backend, paquetes descargados ni compilación de framework.

Contactos recuperados del README previo: WhatsApp `573042382609`, Instagram `crespossaladebelleza`. Se guardan con `contacts.validated: false`. **Permanecen desactivados** hasta confirmación. Para habilitarlos tras validar propietario, número y perfil, cambiar `validated` a `true` en el JSON fuente y regenerar. El navegador valida formato, codifica el mensaje y solo acepta dominios fijos `wa.me` y `www.instagram.com`; usa pestaña nueva y `noopener noreferrer`. Si falta la configuración o es inválida, el canal queda desactivado. No se envían mensajes automáticamente.

## Pruebas

```sh
node --check propuestas/assets/site.js
node --check propuestas/scripts/build.mjs
node --check propuestas/scripts/serve.mjs
node --check propuestas/scripts/verify.mjs
git diff --check
node propuestas/scripts/verify.mjs
```

La verificación de navegador requiere Playwright y Microsoft Edge locales (solo para desarrollo). Si Playwright no está en la resolución de módulos, definir `PLAYWRIGHT_MODULE` con la ruta a esa instalación. `BROWSER_CHANNEL` puede seleccionar otro canal instalado. El script inicia y cierra su servidor local en el puerto 4174; no visita sitios externos ni modifica el JSON de contactos. Simula contactos aprobados mediante una respuesta interceptada en el navegador.

Resultados automatizados en `VERIFICACION.txt`; capturas completas de escritorio y móvil en `v1/preview-1280.png`, `v1/preview-375.png`, `v2/preview-1280.png` y `v2/preview-375.png`.

Cobertura: 320, 375, 768 y 1280 px por versión, desbordes, carga de logos, seis servicios, siguiente/anterior/ciclo de carrusel, bloqueo de contactos, apertura/cierre de menú y Escape con retorno de foco, salto al contenido con Tab, contenido sin JavaScript y habilitación simulada de enlaces. No equivale a una auditoría WCAG completa: falta lector de pantalla, dispositivos físicos y aprobación visual de la propietaria. No se probaron contactos externos ni permisos fotográficos.

## Publicación del prototipo

No se agregó workflow de despliegue ni se modificó GitHub Pages. `noindex,nofollow` evita solicitar indexación, **no proporciona privacidad**.

1. Confirmar si este es el repositorio correcto: actualmente es público. Para revisión de datos pendientes, usar un alojamiento con autenticación real y acceso privado; un enlace difícil de adivinar o `robots` no bastan.
2. Recuperar el mockup aprobado y confirmar la versión elegida. Aprobar servicios, valores, moneda, equipo y cualquier texto comercial; sustituir y autorizar cada fotografía con registro de fuente y permiso. Confirmar contactos y condiciones de promociones. Definir ubicación y horarios antes de mostrarlos.
3. Revisar ambas versiones en móvil y con teclado. Regenerar y repetir las pruebas después de cambios.
4. Para una revisión privada, servir la raíz de esta copia detrás de autenticación y abrir `/propuestas/`; se requieren los logos de `docs/img/`. No publicar toda la copia en un alojamiento público porque contiene la web anterior y sus fotografías. Para un paquete independiente, copiar únicamente `propuestas/` y `docs/img/logotres-web.webp`, conservando las rutas.
5. Solo después de validar datos y aprobar la publicación, preparar rama y PR con estos archivos. Verificar las reglas de Pages antes de subir: aunque no se fusione a `main`, el repositorio público hace público el código de una rama.
6. La integración de la versión elegida como portada y un eventual despliegue público son pasos pendientes; no se ejecutaron en esta entrega.
