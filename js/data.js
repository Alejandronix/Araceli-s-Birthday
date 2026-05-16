// Datos de ejemplo para la aplicación
const lettersData = [
  {
    id: 1,
    stamp: '🌸',
    date: 'Abril 2025',
    from: 'Alejandro',
    subject: 'El lugar que nos unió',
    salute: 'Mi querida amiga,',
    text: 'Querida Araceli...A veces me pongo a pensar en cómo empiezan algunas amistades sin que uno se dé cuenta de lo importantes que llegarán a ser. Y sinceramente, todavía recuerdo aquel primer día en la iglesia cuando te conocí. Creo que al principio yo era bastante tímido, quizá hasta un poco callado, pero aun así poco a poco comenzamos a hablar y compartir momentos que terminaron significando mucho para mí. Nunca imaginé que conocería a alguien con quien no solo compartiría conversaciones, sino también estudios bíblicos, risas, consejos y momentos tan bonitos dentro de la iglesia. Y creo que eso es lo que más valoro... que nuestra amistad nació en un lugar tan especial, creciendo como amigos, pero también como hermanos en Cristo.',
    signature: 'Con todo mi Cariño'
  },
  {
    id: 2,
    stamp: '⭐',
    date: 'Enero 2026',
    from: 'Amigo',
    subject: 'Lo que nunca digo',
    salute: 'Ara Ara Ara:',
    text: 'Y aunque tal vez no lo diga, pero estoy realmente agradecido por haberte conocido. Porque en medio de tantas personas, Dios permitió que nuestras vidas coincidieran y eso no lo veo como algo cualquiera (Predestinados🙀). Tu amistad llegó a ser una de esas cosas que uno aprecia sinceramente en el corazón. A veces me da un poco de tristeza pensar en cómo pasa el tiempo tan rápido. Uno hubiera querido quedarse un poco más en esos momentos tan bello como los estudios, las conversaciones, las risas, incluso esos silencios tranquilos que no se sienten incómodos cuando estás con alguien que aprecias de verdad.',
    signature: 'Tu Amigo, que te quiere sin palabras.'
  },
  {
    id: 3,
    stamp: '🌙',
    date: 'Febrero 2026',
    from: 'De mi para ti',
    subject: 'Una carta sincera',
    salute: 'Ara...',
    text: 'También quería decirte algo que he tenido guardado desde hace un tiempo. Estos últimos meses siento que las cosas cambiaron un poco entre nosotros. Tal vez ya no hablamos como antes y bueno siendo sincero, sé que en gran parte de eso fue porque yo mismo me alejé. Tuve algunas dudas, preocupaciones y pensamientos en mi cabeza que me hicieron cerrar un poco mi corazón y apartarme más de lo que debía. Creo que uno no sabe cómo explicar lo que siente y termina guardándose todo en silencio como yoo. Y aunque nunca fue porque dejara de apreciar nuestra amistad, entiendo que quizás eso pudo haberte hecho sentir distante conmigo también. Aveces siento cierta frialdad y, sinceramente, no te culpo. Supongo que cuando alguien se aleja sin saber explicar bien lo que le pasa, inevitablemente algo cambia. Pero aun así quería que supieras que nunca te guardé nada malo y nunca lo hare porsupuesto y bueno que el cariño que te tengo sigue siendo muy sincero. Hay personas que dejan una huella tranquila pero profunda en la vida de alguien yyy wow tú eres una de ellas para mí. Más allá de la distancia o del tiempo que haya pasado, sigo agradeciendo haberte conocido. Y aunque quizás ya las cosas ya no sean igual como antes, los recuerdos, el aprecio y el respeto que te tengo a vos siguen estando ahí. Solo quería abrir un poquititito mi corazón y ser honesto contigo.',
    signature: 'Con fe, yo mismo'
  },
  {
    id: 4,
    stamp: '🎉',
    date: 'mayo 2026',
    from: 'De invitado al cumple (yo)',
    subject: 'Una carta sincera',
    salute: 'Querida cumpleañera,',
    text: 'De verdad espero que hoy sea un día muy bonito para ti, lleno de alegría, sonrisas y mucho cariño de las personas que te quieren obviamentee. Me alegra muchísimo haberte conocido en la iglesia y haber compartido contigo tantos momentos lindos, estudios bíblicos con los chicos y recuerdos que guardo con mucho cariñito. Naah y Bueno sinceramente gracias por tu amistad y por la persona tan bonita que eres. Deseo de corazón que Dios siga bendiciendo tu vida, guiando cada paso que des y llenando tus 31 años? con paz, gozo y muchas cosas buenas. Disfruta muchísimo tu día y nunca olvides lo especial y porque claro Cristo derramó su sangre por vos y por lo cual eres valiosaaa.',
    signature: 'Con muchisimo Cariño, Alejandro'
  }
];

// NUEVO: Galería con imágenes reales
const galleryData = [
  {
    image: 'images/gallery/primera1.jpeg',      // Ruta de la imagen
    fallbackEmoji: '🌻',                       // Emoji si la imagen no carga
    fallbackBg: 'linear-gradient(135deg, #FFF3C4, #FDE68A)',
    caption: 'Nuestra primera salida en grupo',
    date: '1 mayo 2025'
  },
  {
    image: 'images/gallery/primera2.jpeg',
    fallbackEmoji: '☕',
    fallbackBg: 'linear-gradient(135deg, #FEE4D0, #FCA57A)',
    caption: 'fuimos a pasear después del estudio',
    date: 'Todos los sabados'
  },
  {
    image: 'images/gallery/1911.jpeg',
    fallbackEmoji: '🎁',
    fallbackBg: 'linear-gradient(135deg, #BFDBFE, #60A5FA)',
    caption: 'Primer cumpleañooos',
    date: 'Mayo 2025'
  },
  {
    image: 'images/gallery/19.jpeg',
    fallbackEmoji: '🎂',
    fallbackBg: 'linear-gradient(135deg, #FCE7F3, #F9A8D4)',
    caption: 'Mi cumpleaños número 29',
    date: '16 de mayo 2025'
  },
  {
    image: 'images/gallery/juegos.jpeg',
    fallbackEmoji: '🍂',
    fallbackBg: 'linear-gradient(135deg, #FEF3C7, #D97706)',
    caption: 'Juegos en la casa de la hermana Glenda (era los negros)',
    date: 'Septiembre 2025'
  },
  {
    image: 'images/gallery/Sc.jpeg',
    fallbackEmoji: '🌙',
    fallbackBg: 'linear-gradient(135deg, #E0E7FF, #818CF8)',
    caption: 'Viaje a Santa Cruz',
    date: 'Noviembre 2025'
  },
  {
    image: 'images/gallery/fogata.jpeg',
    fallbackEmoji: '📚',
    fallbackBg: 'linear-gradient(135deg, #D1FAE5, #6EE7B7)',
    caption: 'Fogata en casa de Aldito',
    date: 'Ojala se repita'
  },
  {
    image: 'images/gallery/glenda.jpeg',
    fallbackEmoji: '🎵',
    fallbackBg: 'linear-gradient(135deg, #EDE9FE, #A78BFA)',
    caption: 'Se nos va Glenda',
    date: 'Mayo 2023'
  }
];

// NUEVO: Timeline con imágenes
const timelineData = [
  {
    date: '2025 — El comienzo',
    emoji: '🌱',
    image: 'images/timeline/comienzo.jpg',  // Imagen opcional
    title: 'El primer día de todo',
    desc: 'El día que sin saberlo, comenzó la historia de una amistad muy linda que tuve.',
    side: 'left'
  },
  {
    date: 'Mayo 2025',
    emoji: '🎓',
    image: 'images/timeline/viaje.jpg',
    title: 'Los primeros estudiooos',
    desc: 'Aprendimos muchas cosas juntos con nuestro hermano Alditoooo.',
    side: 'right'
  },
  {
    date: 'Agosto 2025',
    emoji: '💎',
    image: 'images/timeline/graduacion.jpg',
    title: 'Reforzamiento',
    desc: 'Nos hicimos muy buenos amigos y compañeros de reels.',
    side: 'left'
  },
  {
    date: 'Noviembre 2025',
    emoji: '🚌',
    image: 'images/timeline/pandemia.jpg',
    title: 'Un hermoso viaje aunque no perfecto',
    desc: 'El mundo se detuvo. Nosotros aprendimos a valorar lo que teníamos cerca.',
    side: 'right'
  },
  {
    date: 'Enero 2026',
    emoji: '💛',
    image: 'images/timeline/camino.jpg',
    title: 'Encontrar el camino propio',
    desc: 'Dejamos de tener mucho contacto pero aun te llevo en mi corazon en todo.',
    side: 'left'
  }
];