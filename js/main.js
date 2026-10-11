/* Autor: Andrés Mauricio Solanilla Hoyos — Desarrollador de software. */
(function () {
  'use strict';

  var carrusel = document.querySelector('[data-carrusel]');
  if (!carrusel) return;

  var pista = carrusel.querySelector('.carrusel__pista');
  var diapositivas = carrusel.querySelectorAll('.carrusel__diapositiva');
  var puntos = carrusel.querySelectorAll('[data-carrusel-punto]');
  var botonAnterior = carrusel.querySelector('[data-carrusel-anterior]');
  var botonSiguiente = carrusel.querySelector('[data-carrusel-siguiente]');
  var botonPausa = carrusel.querySelector('[data-carrusel-pausa]');

  if (!pista || diapositivas.length === 0 || !botonAnterior || !botonSiguiente || !botonPausa) return;

  var indice = 0;
  var temporizador = null;
  var temporizadorVoz = null;
  var enPausa = false;
  var ratonDentro = false;
  var movimientoReducido = window.matchMedia('(prefers-reduced-motion: reduce)');

  function mostrar(numero, anunciar) {
    indice = ((numero % diapositivas.length) + diapositivas.length) % diapositivas.length;

    if (anunciar) {
      pista.setAttribute('aria-live', 'polite');
      window.clearTimeout(temporizadorVoz);
      temporizadorVoz = window.setTimeout(function () {
        pista.removeAttribute('aria-live');
      }, 1000);
    }

    for (var i = 0; i < diapositivas.length; i += 1) {
      diapositivas[i].classList.toggle('es-activa', i === indice);
    }

    for (var j = 0; j < puntos.length; j += 1) {
      if (j === indice) {
        puntos[j].classList.add('es-activo');
        puntos[j].setAttribute('aria-current', 'true');
      } else {
        puntos[j].classList.remove('es-activo');
        puntos[j].removeAttribute('aria-current');
      }
    }
  }

  function detenerReproduccion() {
    if (temporizador !== null) {
      window.clearInterval(temporizador);
      temporizador = null;
    }
  }

  function iniciarReproduccion() {
    detenerReproduccion();
    if (enPausa || ratonDentro || movimientoReducido.matches || document.hidden) return;
    temporizador = window.setInterval(function () {
      mostrar(indice + 1, false);
    }, 7000);
  }

  botonAnterior.addEventListener('click', function () {
    mostrar(indice - 1, true);
    iniciarReproduccion();
  });

  botonSiguiente.addEventListener('click', function () {
    mostrar(indice + 1, true);
    iniciarReproduccion();
  });

  for (var k = 0; k < puntos.length; k += 1) {
    puntos[k].addEventListener('click', function (evento) {
      var destino = Number(evento.currentTarget.getAttribute('data-carrusel-punto'));
      mostrar(destino, true);
      iniciarReproduccion();
    });
  }

  botonPausa.addEventListener('click', function () {
    enPausa = !enPausa;
    botonPausa.textContent = enPausa ? 'Reproducir' : 'Pausar';
    if (enPausa) {
      detenerReproduccion();
    } else {
      iniciarReproduccion();
    }
  });

  carrusel.addEventListener('mouseenter', function () {
    ratonDentro = true;
    detenerReproduccion();
  });

  carrusel.addEventListener('mouseleave', function () {
    ratonDentro = false;
    iniciarReproduccion();
  });

  carrusel.addEventListener('focusin', function () {
    detenerReproduccion();
  });

  carrusel.addEventListener('focusout', function (evento) {
    if (!carrusel.contains(evento.relatedTarget)) {
      iniciarReproduccion();
    }
  });

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      detenerReproduccion();
    } else {
      iniciarReproduccion();
    }
  });

  function evaluarMovimientoReducido(evento) {
    if (evento.matches) {
      detenerReproduccion();
      botonPausa.hidden = true;
    } else {
      botonPausa.hidden = false;
      iniciarReproduccion();
    }
  }

  if (typeof movimientoReducido.addEventListener === 'function') {
    movimientoReducido.addEventListener('change', evaluarMovimientoReducido);
  }

  document.documentElement.classList.add('js');
  mostrar(0, false);

  if (movimientoReducido.matches) {
    botonPausa.hidden = true;
  } else {
    iniciarReproduccion();
  }
}());
