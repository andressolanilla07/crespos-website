# CR-004 — Identidad visual

**Fecha:** 2026-10-11  
**Estado:** paleta provisional; pendiente de aprobación.

## Paleta propuesta en la conversación

| Color | Valor |
| --- | --- |
| Beige | `#E9CFAC` |
| Dorado | `#C3A267` |
| Verde suave | `#9DA88B` |
| Oscuro | `#252420` |
| Claro | `#FAF5ED` |

Los nombres son etiquetas descriptivas. Estos colores no constituyen una identidad definitiva.

## Aplicación sugerida, pendiente de validación

Usar el claro como fondo principal y el oscuro para texto; explorar beige, dorado y verde como superficies y acentos. Verificar contraste de cada combinación antes de usarla para texto, botones o estados interactivos. No dar por aprobada la accesibilidad de toda la paleta.

## Logotipo y firma de marca (2026-10-11)

- Versión sin fondo (cabecera): `docs/img/logotres.png` (2172×724, PNG 32 bpp **con alfa real**: letras oscuras, mechón dorado y «SALA DE BELLEZA»; transparencia verificada por muestreo, alfa mínimo 0 y ≈99,7 % de píxeles transparentes). El archivo fue aportado sin extensión como `logotres` y se renombró a `logotres.png`; el contenido no se altera. Como las letras son oscuras, se coloca sobre una superficie crema en la cabecera oscura; la cabecera muestra solo el logo (con texto alternativo accesible), sin el nombre textual repetido.
- Versión con fondo (fondo de la portada): `docs/img/logouno.png` (1774×887, PNG 24 bpp sin alfa; panel crema y franja verde). Es el antiguo `crespos-logo-original-mejorado.png`, renombrado por el usuario. En el prototipo (2026-10-11) se usa como **fondo de la sección de inicio** (`background-image` sobre `logouno-web.webp`): `background-size: contain` y `background-position: center top` conservan proporciones sin recortes ni deformación; `background-attachment: fixed` en escritorio (≥48 rem) y desplazamiento normal en móvil. Una capa clara `rgba(250, 245, 237, 0.75)` (pseudo-elemento) cubre el fondo para legibilidad; la presentación y el carrusel se muestran encima en tarjetas suaves (`rgba(250, 245, 237, 0.93)`, borde dorado, sombra ligera).
- Copias optimizadas para web (2026-10-11, generadas sin alterar los originales): `logouno-web.webp` (1600×800, ≈35,8 KB frente a 1,36 MB del original, −97 %) y `logotres-web.webp` (480×160, ≈19,8 KB frente a 461 KB, −96 %); mismas proporciones que los originales, con `width`/`height` declarados en el HTML. Las páginas usan las copias webp; los PNG originales se conservan en el repositorio.
- Variantes sin usar: `logodos.png` y `crespos-logo-original-mejoradoii` (2172×724, fondo blanco opaco).
- Firma de marca: «Crespos by Carolina Chico», como texto del pie (cursiva, dorado sobre oscuro, 6.4:1), sin etiqueta verde y sin incorporarla dentro de ninguna imagen.

## Pendientes de identidad

Tipografías y permisos de uso, estilo de fotografías, tono de textos, composición visual y aprobación final de la paleta. No inventar logotipo, eslogan ni afirmaciones comerciales.

## Material gráfico

Recopilar fotografías reales del salón, servicios y profesionales con autorización de uso. Las imágenes del carrusel deben corresponder a promociones y servicios aprobados; sus condiciones y vigencia deben validarse antes de publicación.

## Verificación de contraste en el prototipo local (2026-10-11)

| Combinación | Relación | Resultado |
| --- | --- | --- |
| Texto oscuro (`#252420`) sobre claro (`#FAF5ED`) | 14.3:1 | AAA |
| Texto oscuro sobre beige (`#E9CFAC`) | 10.3:1 | AAA |
| Texto oscuro sobre dorado (`#C3A267`) | 6.4:1 | AA |
| Texto oscuro sobre verde (`#9DA88B`) | 6.2:1 | AA |
| Texto dorado sobre oscuro | 6.4:1 | AA |
| Beige, dorado o verde como texto sobre claro | 1.4:1 a 2.3:1 | No usado como texto |

El prototipo usa el oscuro para todo el texto; el claro y el beige como fondos; el dorado como bordes, acentos y fondos de botón con texto oscuro; el verde en etiquetas de estado con texto oscuro. El foco visible usa oscuro sobre fondos claros y claro sobre fondos oscuros. Estos resultados corresponden al prototipo local; la paleta sigue pendiente de aprobación final.
