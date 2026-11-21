/*
 * index.js — El "motor" del blog.
 *
 * 1. Router: lee la dirección (#/epcot) y decide qué página mostrar.
 * 2. Pintado: construye el HTML de la portada y de cada entrada.
 * 3. Galería: abre las fotos en un visor y permite pasarlas con el teclado.
 * 4. Imprescindibles: guarda en localStorage lo que se va marcando.
 * 5. Reloj: muestra la hora actual en Orlando.
 *
 * Los datos (el array PARQUES) vienen de posts.js, que se carga antes.
 */

const TITULO_BLOG = 'Cuatro parques y una familia';

// Referencias a los elementos del HTML que vamos a usar
const contenido = document.getElementById('contenido');
const enlacesMenu = document.querySelectorAll('.menu a');
const visor = document.getElementById('visor');
const visorImg = document.getElementById('visor-img');
const visorPie = document.getElementById('visor-pie');
const visorContador = document.getElementById('visor-contador');
const reloj = document.getElementById('reloj');


/* ---------- 1. Router ---------- */

function mostrarPagina() {
  const ruta = location.hash.slice(2);   // "#/epcot" → "epcot"
  const parque = PARQUES.find(p => p.id === ruta);

  if (ruta === '') {
    pintarInicio();
  } else if (ruta === 'como-esta-hecho') {
    pintarComoEstaHecho();
  } else if (parque) {
    pintarEntrada(parque);
  } else {
    pintarNoEncontrado();
  }

  marcarMenu();
  window.scrollTo(0, 0);
}

// Resalta en el menú el enlace de la página actual
function marcarMenu() {
  const actual = location.hash || '#/';
  enlacesMenu.forEach(enlace => {
    if (enlace.getAttribute('href') === actual) {
      enlace.setAttribute('aria-current', 'page');
    } else {
      enlace.removeAttribute('aria-current');
    }
  });
}

// Cambia el color de toda la web (ver [data-park] en styles.css)
function cambiarTema(clave) {
  document.body.dataset.park = clave;
}


/* ---------- 2. Pintado de páginas ---------- */

function pintarInicio() {
  cambiarTema('inicio');
  document.title = TITULO_BLOG;

  contenido.innerHTML = `
    <section class="intro">
      <h1>Hola, bienvenidos a nuestro cuaderno de viaje</h1>
      <p>Somos una familia que se fue a Orlando a recorrer los cuatro parques de Walt Disney World. Este blog no es una guía oficial: son nuestros recuerdos, nuestras fotos y los consejos que nos habría gustado leer antes de ir con niños.</p>
      <p>Todas las entradas siguen el mismo orden: los datos básicos del parque, cómo nos fue, una galería de fotos, una lista de imprescindibles que se puede ir marcando y un consejo para familias.</p>
    </section>

    <ul class="tarjetas">
      ${PARQUES.map(pintarTarjeta).join('')}
    </ul>
  `;
}

function pintarTarjeta(parque) {
  const marcados = contarMarcados(parque);
  const total = parque.imprescindibles.length;

  return `
    <li class="tarjeta" data-park="${parque.clave}">
      <a href="#/${parque.id}">
        <img src="${parque.portada.src}" alt="${parque.portada.alt}" loading="lazy">
        <span class="sello">${parque.nombre}</span>
        <h2>${parque.titulo}</h2>
        <p>${parque.resumen}</p>
        <p class="tarjeta__progreso">${marcados} de ${total} imprescindibles marcados</p>
      </a>
    </li>
  `;
}

function pintarEntrada(parque) {
  cambiarTema(parque.clave);
  document.title = `${parque.nombre} · ${TITULO_BLOG}`;

  // Entradas anterior y siguiente para navegar en orden
  const posicion = PARQUES.indexOf(parque);
  const anterior = PARQUES[posicion - 1];
  const siguiente = PARQUES[posicion + 1];

  contenido.innerHTML = `
    <article class="entrada">
      <header class="entrada__cabecera">
        <a class="volver" href="#/">&larr; Todas las entradas</a>
        <p class="sello">${parque.nombre}</p>
        <h1>${parque.titulo}</h1>
        <p class="entrada__fecha">Publicado el <time datetime="${parque.fecha}">${formatearFecha(parque.fecha)}</time></p>
      </header>

      <figure class="entrada__portada">
        <img src="${parque.portada.src}" alt="${parque.portada.alt}">
      </figure>

      <section>
        <h2>Lo que hay que saber</h2>
        <dl class="datos">
          ${parque.datos.map(([nombre, valor]) => `
            <div>
              <dt>${nombre}</dt>
              <dd>${valor}</dd>
            </div>
          `).join('')}
        </dl>
      </section>

      <section>
        <h2>Nuestra visita</h2>
        ${parque.visita.map(parrafo => `<p>${parrafo}</p>`).join('')}
      </section>

      <section>
        <h2>Galería</h2>
        <p class="ayuda">Haz clic en una foto para verla en grande. Con las flechas del teclado pasas a la siguiente.</p>
        <ul class="galeria">
          ${parque.fotos.map((foto, i) => `
            <li>
              <button class="galeria__foto" data-indice="${i}" aria-label="Ver foto: ${foto.pie}">
                <img src="${foto.src}" alt="${foto.pie}" loading="lazy">
              </button>
            </li>
          `).join('')}
        </ul>
      </section>

      <section>
        <h2>Imprescindibles</h2>
        <p class="ayuda">Marca lo que ya has hecho (o quieres hacer). Se guarda en este navegador.</p>
        <ul class="lista-imprescindibles">
          ${parque.imprescindibles.map((texto, i) => {
            const id = `${parque.clave}-${i}`;
            const marcado = leerMarcados().includes(id) ? 'checked' : '';
            return `
              <li>
                <label>
                  <input type="checkbox" data-id="${id}" ${marcado}>
                  ${texto}
                </label>
              </li>
            `;
          }).join('')}
        </ul>
        <p class="progreso" id="progreso">${contarMarcados(parque)} de ${parque.imprescindibles.length} marcados</p>
      </section>

      <aside class="consejo">
        <h2>Consejo para ir con niños</h2>
        <p>${parque.consejo}</p>
      </aside>

      <nav class="entrada__pasos" aria-label="Otras entradas">
        ${anterior ? `<a href="#/${anterior.id}">&larr; ${anterior.nombre}</a>` : '<span></span>'}
        ${siguiente ? `<a href="#/${siguiente.id}">${siguiente.nombre} &rarr;</a>` : '<a href="#/como-esta-hecho">Cómo está hecho &rarr;</a>'}
      </nav>
    </article>
  `;
}

function pintarComoEstaHecho() {
  cambiarTema('inicio');
  document.title = `Cómo está hecho · ${TITULO_BLOG}`;

  // Copiamos el contenido del <template> del HTML y lo ponemos en <main>
  const plantilla = document.getElementById('plantilla-como');
  contenido.replaceChildren(plantilla.content.cloneNode(true));
}

function pintarNoEncontrado() {
  cambiarTema('inicio');
  document.title = `Página no encontrada · ${TITULO_BLOG}`;

  contenido.innerHTML = `
    <section class="intro">
      <h1>Esta atracción no existe</h1>
      <p>La página que buscas no está en el blog. <a href="#/">Volver al inicio</a>.</p>
    </section>
  `;
}

// "2026-11-14" → "14 de noviembre de 2026"
function formatearFecha(fecha) {
  return new Date(fecha + 'T12:00').toLocaleDateString('es-ES', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
}


/* ---------- 3. Galería (visor de fotos) ---------- */

let fotosActuales = [];
let indiceActual = 0;

function abrirVisor(indice) {
  const parque = PARQUES.find(p => p.clave === document.body.dataset.park);
  fotosActuales = parque.fotos;
  indiceActual = indice;
  mostrarFoto();
  visor.showModal();
}

function mostrarFoto() {
  const foto = fotosActuales[indiceActual];
  visorImg.src = foto.src;
  visorImg.alt = foto.pie;
  visorPie.textContent = foto.pie;
  visorContador.textContent = `${indiceActual + 1} / ${fotosActuales.length}`;
}

// paso = 1 (siguiente) o -1 (anterior). Al llegar al final vuelve a empezar.
function moverFoto(paso) {
  const total = fotosActuales.length;
  indiceActual = (indiceActual + paso + total) % total;
  mostrarFoto();
}

// Delegación de eventos: un solo listener en <main> sirve para todas las fotos,
// aunque el contenido se vuelva a pintar cada vez que cambiamos de página.
contenido.addEventListener('click', evento => {
  const boton = evento.target.closest('.galeria__foto');
  if (boton) {
    abrirVisor(Number(boton.dataset.indice));
  }
});

visor.addEventListener('click', evento => {
  const accion = evento.target.dataset.accion;
  if (accion === 'anterior') moverFoto(-1);
  if (accion === 'siguiente') moverFoto(1);
  // Cerrar con el botón × o haciendo clic fuera de la foto (en el fondo oscuro)
  if (accion === 'cerrar' || evento.target === visor) visor.close();
});

// Flechas del teclado. La tecla Esc ya cierra el <dialog> por sí sola.
document.addEventListener('keydown', evento => {
  if (!visor.open) return;
  if (evento.key === 'ArrowLeft') moverFoto(-1);
  if (evento.key === 'ArrowRight') moverFoto(1);
});


/* ---------- 4. Imprescindibles (localStorage) ---------- */

const CLAVE_GUARDADO = 'imprescindibles-marcados';

// Devuelve un array con los ids marcados, por ejemplo ["mk-0", "ep-3"]
function leerMarcados() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_GUARDADO)) || [];
  } catch {
    return [];   // localStorage puede no estar disponible (modo privado, etc.)
  }
}

function guardarMarcados(marcados) {
  try {
    localStorage.setItem(CLAVE_GUARDADO, JSON.stringify(marcados));
  } catch {
    // Si no se puede guardar, la lista sigue funcionando mientras no se recargue
  }
}

function contarMarcados(parque) {
  return leerMarcados().filter(id => id.startsWith(parque.clave + '-')).length;
}

contenido.addEventListener('change', evento => {
  const casilla = evento.target;
  if (!casilla.matches('.lista-imprescindibles input')) return;

  let marcados = leerMarcados();
  if (casilla.checked) {
    marcados.push(casilla.dataset.id);
  } else {
    marcados = marcados.filter(id => id !== casilla.dataset.id);
  }
  guardarMarcados(marcados);

  // Actualizamos el texto "X de Y marcados"
  const total = contenido.querySelectorAll('.lista-imprescindibles input').length;
  const hechos = contenido.querySelectorAll('.lista-imprescindibles input:checked').length;
  document.getElementById('progreso').textContent = `${hechos} de ${total} marcados`;
});


/* ---------- 5. Reloj de Orlando ---------- */

const formatoOrlando = new Intl.DateTimeFormat('es-ES', {
  timeZone: 'America/New_York',
  hour: '2-digit', minute: '2-digit', second: '2-digit'
});

function actualizarReloj() {
  reloj.textContent = formatoOrlando.format(new Date());
}


/* ---------- Arranque ---------- */

window.addEventListener('hashchange', mostrarPagina);
mostrarPagina();
actualizarReloj();
setInterval(actualizarReloj, 1000);
