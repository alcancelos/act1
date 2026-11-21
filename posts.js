/*
 * posts.js — Los datos del blog.
 *
 * Cada entrada es un objeto dentro del array PARQUES. El archivo index.js
 * recorre este array y construye el HTML de cada página.
 * Para añadir una entrada nueva basta con añadir otro objeto aquí.
 */

const PARQUES = [
  {
    id: 'magic-kingdom',          // se usa en la URL: #/magic-kingdom
    clave: 'mk',                  // prefijo de las imágenes y del tema de color
    nombre: 'Magic Kingdom',
    titulo: 'Magic Kingdom: el castillo, los fuegos y contar cabezas',
    fecha: '2026-11-14',
    resumen: 'El castillo, los fuegos artificiales y el desafío de no perder a nadie entre la multitud.',
    portada: {
      src: 'img/mk-portada.jpg',
      alt: 'La familia saludando en Main Street U.S.A. con el castillo de Cenicienta al fondo'
    },
    datos: [
      ['Inauguración', '1 de octubre de 1971'],
      ['Símbolo', 'Castillo de Cenicienta'],
      ['Zonas temáticas', '6'],
      ['Ideal para', 'Los más pequeños y los nostálgicos']
    ],
    visita: [
      'Magic Kingdom es el parque que todos imaginamos cuando alguien dice «Disney»: una calle principal, Main Street U.S.A., y al fondo el castillo de Cenicienta. Verlo por primera vez en persona es de esos momentos que se quedan grabados. Además nos tocó la celebración del 50 aniversario del parque, y se notaba en cada rincón.',
      'Lo que no sale en las postales es la cantidad de gente. Las filas para las atracciones más conocidas se miden en horas, y por la noche, para los fuegos artificiales, Main Street se convierte en un mar de personas. Confieso que pasé buena parte del día contando cabezas: el estrés de no perder a los chicos entre la multitud fue muy real.',
      'Aun así, valió cada minuto. Disfrutamos de los clásicos de toda la vida, como <em>it’s a small world</em>, ese paseo en el que das la vuelta al mundo rodeado de muñecos que cantan la misma canción en todos los idiomas. Y el cierre con los fuegos artificiales sobre el castillo es, sencillamente, el final perfecto para un día en el parque.'
    ],
    fotos: [
      { src: 'img/mk-01.jpg', pie: 'Foto de grupo con Goofy, todos juntos y nadie perdido (todavía).' },
      { src: 'img/mk-02.jpg', pie: 'El castillo iluminado y Main Street a reventar: así se ve la hora de los fuegos.' },
      { src: 'img/mk-03.jpg', pie: 'Los chicos con Goofy.' },
      { src: 'img/mk-04.jpg', pie: 'Donald en versión encantador de serpientes.' },
      { src: 'img/mk-05.jpg', pie: 'Frente a la estación del tren, en plena celebración del 50 aniversario.' },
      { src: 'img/mk-06.jpg', pie: 'Main Street U.S.A. a primera hora, antes de que llegue la multitud.' }
    ],
    imprescindibles: [
      'Una foto frente al castillo de Cenicienta',
      'Los fuegos artificiales desde Main Street',
      'it’s a small world',
      'Pirates of the Caribbean',
      'Haunted Mansion',
      'Peter Pan’s Flight',
      'Seven Dwarfs Mine Train'
    ],
    consejo: 'Antes de entrar, conviene sacar una foto a cada niño con el móvil: si alguno se pierde, esa foto muestra exactamente cómo va vestido ese día. Y acordar un punto de encuentro fácil de reconocer, por ejemplo la entrada de una atracción concreta.'
  },

  {
    id: 'epcot',
    clave: 'ep',
    nombre: 'Epcot',
    titulo: 'Epcot: princesas, países y tres caballeros',
    fecha: '2026-11-15',
    resumen: 'Un parque para dar la vuelta al mundo, encontrarse con princesas y reencontrarse con un recuerdo de infancia.',
    portada: {
      src: 'img/ep-portada.jpg',
      alt: 'El grupo posando delante de la gran esfera de Spaceship Earth'
    },
    datos: [
      ['Inauguración', '1 de octubre de 1982'],
      ['Símbolo', 'Spaceship Earth'],
      ['World Showcase', '11 países'],
      ['Ideal para', 'Curiosos y fans de las princesas']
    ],
    visita: [
      'Epcot es un parque distinto a los demás. Por un lado está la parte dedicada al futuro y la ciencia, presidida por la gran esfera de Spaceship Earth. Por otro, World Showcase: un paseo alrededor de un lago con pabellones de once países, cada uno con su arquitectura, su comida y sus tiendas.',
      'Para los más pequeños fue el parque de las princesas. Estaban por todas partes: Rapunzel, Blancanieves firmando autógrafos… y las nenas del grupo, disfrazadas para la ocasión, no se lo podían creer.',
      'Para mí, el gran momento estuvo en el pabellón de México. Allí está <em>Gran Fiesta Tour</em>, un paseo en barca protagonizado por <em>Los tres caballeros</em>: el Pato Donald, José Carioca y Panchito. Es una película de 1944 que yo veía de chiquito, con 4 años, porque mi papá la proyectaba en casa con su proyector de Super 8. Encontrarme a Donald con su sombrero y su poncho tantos años después, y ahora con mis hijos, fue como cerrar un círculo.'
    ],
    fotos: [
      { src: 'img/ep-01.jpg', pie: 'Rapunzel rodeada de pequeñas princesas.' },
      { src: 'img/ep-02.jpg', pie: 'Blancanieves firmando un autógrafo.' },
      { src: 'img/ep-03.jpg', pie: 'Donald, con sombrero y poncho, en el pabellón de México.' },
      { src: 'img/ep-04.jpg', pie: 'Con Minnie y su vestido de lunares.' }
    ],
    imprescindibles: [
      'Spaceship Earth',
      'Gran Fiesta Tour (Los tres caballeros)',
      'Frozen Ever After',
      'Soarin’',
      'Test Track',
      'Remy’s Ratatouille Adventure',
      'Dar la vuelta completa a World Showcase'
    ],
    consejo: 'World Showcase es enorme y se recorre a pie: calzado cómodo, agua y paciencia. Convertir el paseo en un juego, como buscar algo típico de cada país, ayuda mucho a que los chicos no se cansen.'
  },

  {
    id: 'animal-kingdom',
    clave: 'ak',
    nombre: 'Animal Kingdom',
    titulo: 'Animal Kingdom: mi bautismo de simulador',
    fecha: '2026-11-16',
    resumen: 'Volar sobre Pandora con los ojos cerrados y la primera montaña rusa de uno de mis hijos.',
    portada: {
      src: 'img/ak-portada.jpg',
      alt: 'La familia en la entrada de Animal Kingdom'
    },
    datos: [
      ['Inauguración', '22 de abril de 1998 (Día de la Tierra)'],
      ['Símbolo', 'El Árbol de la Vida'],
      ['Pandora', 'Abrió en 2017'],
      ['Ideal para', 'Amantes de los animales y de la adrenalina']
    ],
    visita: [
      'Animal Kingdom es el parque temático más grande de Disney en el mundo y mezcla atracciones con animales de verdad. Su símbolo es el Árbol de la Vida, un árbol artificial enorme con cientos de animales tallados en el tronco.',
      'Pero mi recuerdo de este parque tiene nombre propio: <em>Avatar Flight of Passage</em>, en la zona de Pandora. Me subí con uno de mis hijos y fue el primer simulador de mi vida. Vas sentado en una especie de moto, con unas gafas 3D, y de repente estás volando a lomos de un banshee. Tuve que cerrar los ojos la mitad del trayecto. Después me fui adaptando, y terminé entendiendo por qué la gente hace horas de fila para subir.',
      'El otro gran momento lo protagonizó mi otro hijo en <em>Expedition Everest</em>, una montaña rusa que atraviesa el Himalaya… con yeti incluido. Era su primera montaña rusa. Se bajó un poco en shock, pero orgulloso de haberse animado. Esa mezcla de susto y orgullo no se olvida.'
    ],
    fotos: [
      { src: 'img/ak-01.jpg', pie: 'Con Baloo y el rey Louie.' },
      { src: 'img/ak-02.jpg', pie: 'Un elefante a pocos metros: aquí los animales son de verdad.' },
      { src: 'img/ak-03.jpg', pie: 'Las montañas flotantes de Pandora.' },
      { src: 'img/ak-04.jpg', pie: 'Explorando Pandora en brazos.' },
      { src: 'img/ak-05.jpg', pie: 'El Árbol de la Vida, el símbolo del parque.' }
    ],
    imprescindibles: [
      'Avatar Flight of Passage',
      'Na’vi River Journey',
      'Expedition Everest',
      'Kilimanjaro Safaris',
      'Ver de cerca el Árbol de la Vida',
      'Festival of the Lion King'
    ],
    consejo: 'Flight of Passage y Expedition Everest tienen una altura mínima de 112 cm. Conviene medir a los chicos antes del viaje para evitar desilusiones en la fila. Y para Flight of Passage, mejor ir a primera hora: suele ser la fila más larga del parque.'
  },

  {
    id: 'hollywood-studios',
    clave: 'hs',
    nombre: 'Hollywood Studios',
    titulo: 'Hollywood Studios: mi favorito (y tengo mis motivos)',
    fecha: '2026-11-17',
    resumen: 'Star Wars: Galaxy’s Edge, un bar en otro planeta y unos vasos que todavía guardo.',
    portada: {
      src: 'img/hs-portada.jpg',
      alt: 'Pareja posando delante del Halcón Milenario en Galaxy’s Edge'
    },
    datos: [
      ['Inauguración', '1 de mayo de 1989 (como Disney-MGM Studios)'],
      ['Nombre actual', 'Desde 2008'],
      ['Galaxy’s Edge', 'Abrió en 2019'],
      ['Ideal para', 'Fans del cine y de Star Wars']
    ],
    visita: [
      'Lo digo sin rodeos: Hollywood Studios es mi parque preferido, y la culpa la tiene Star Wars. En <em>Galaxy’s Edge</em> recrearon Batuu, un planeta de la galaxia, a escala real: el Halcón Milenario aparcado, naves de la Primera Orden, stormtroopers patrullando y hasta Chewbacca paseándose entre los visitantes.',
      'Para alguien que creció con la saga, caminar por ahí es como meterse dentro de la película. En <em>Rise of the Resistance</em> la atracción te lleva hasta el hangar de un destructor estelar, rodeado de filas y filas de stormtroopers. La foto de la galería lo dice todo.',
      'Y luego está Oga’s Cantina, el bar ambientado como la cantina de un puerto espacial, con un droide pinchando música y bebidas de nombres imposibles. Ahí conseguí un set de vasos de recuerdo que todavía conservo en casa. Cada vez que los veo vuelvo un poquito a Batuu.'
    ],
    fotos: [
      { src: 'img/hs-01.jpg', pie: 'Selfie con Chewbacca. Momento fan, sin vergüenza.' },
      { src: 'img/hs-02.jpg', pie: 'Un stormtrooper de la Primera Orden pidiendo la documentación.' },
      { src: 'img/hs-03.jpg', pie: 'Dentro del hangar en Rise of the Resistance.' },
      { src: 'img/hs-04.jpg', pie: 'Los chicos delante de un caza TIE.' },
      { src: 'img/hs-05.jpg', pie: 'Foto de familia con el Halcón Milenario.' },
      { src: 'img/hs-06.jpg', pie: 'Black Spire Outpost, el pueblo de Batuu.' }
    ],
    imprescindibles: [
      'Star Wars: Rise of the Resistance',
      'Millennium Falcon: Smugglers Run',
      'Una visita a Oga’s Cantina',
      'Toy Story Mania!',
      'The Twilight Zone Tower of Terror',
      'Fantasmic!'
    ],
    consejo: 'Galaxy’s Edge se disfruta mejor con calma: más allá de las atracciones, vale la pena pasear, mirar los detalles y buscar a los personajes. Para Oga’s Cantina conviene reservar con antelación; los niños también pueden entrar.'
  }
];
