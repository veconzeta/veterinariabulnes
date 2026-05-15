export interface Review {
  nombre: string;
  estrellas: 1 | 2 | 3 | 4 | 5;
  fecha: string;
  texto: string;
  foto?: string;
}

export const RATING_GLOBAL = 4.6;
export const TOTAL_RESENAS = 39;

export const reviews: Review[] = [
  {
    nombre: "Rita Margarita",
    estrellas: 5,
    fecha: "hace 5 meses",
    texto: "Es un veterinario con verdadera vocación. Cuando he llevado en mis gatos han confiado plenamente en él y no se han resistido a que los revise. Salvó la vida de mi gatita, que tuvo una hepatitis horrible y casi muere. Estaré eternamente agradecida del doctor Guillermo Pozo, tiene un enorme conocimiento y mucha humildad. Lo que hace falta hoy en día.",
  },
  {
    nombre: "Srta Floyd",
    estrellas: 5,
    fecha: "hace 1 año",
    texto: "Conocí al dr en un día muy difícil para mí, mi gatita había sido desahuciada en una clínica en ñuñoa. La lleve a casa para que la familia pudiera despedirse y al llevarla a los veterinarios mas cercanos tuve muchas dificultades para realizar la eutanasia, muchos querían hacer sus propios exámenes, invalidaban los exámenes que yo presentaba y ponían primero los precios alargando no solo el sufrimiento de mi gatita sino también el de mi familia. Tuve la suerte de encontrar al dr Guillermo quien nos atendió fuera de horario con mucha calidez y respeto. Agradezco mucho la compasión que tuvo con mi gatita y con nosotros al darse el tiempo de revisar los exámenes que indicaban el mal estado de nuestra pequeña. Solo decir gracias y ojalá hubieran mas profesionales como ud.",
  },
  {
    nombre: "Israel Ferreira",
    estrellas: 5,
    fecha: "hace 4 años",
    texto: "Excelente veterinario. Buen vínculo con los pacientes, preocupado por su estado de salud y revisión completa. Con su experiencia uno se va \"a la segura\".",
  },
  {
    nombre: "Jhose Castro",
    estrellas: 5,
    fecha: "hace 3 años",
    texto: "El doctor es muy amable, se le nota la disposición y el interés por el bienestar de los perritos, la actitud que tiene es super agradable, muchas gracias.",
  },
  {
    nombre: "Villarroel – Susan",
    estrellas: 5,
    fecha: "hace 2 años",
    texto: "El mejor veterinario que he podido encontrar. Experiencia, asertividad y eficacia. Trato super amable.",
  },
  {
    nombre: "Ruth Romero",
    estrellas: 5,
    fecha: "hace 5 años",
    texto: "El médico Veterinario Dr Pozo es maravilloso como profesional y como persona, es nuestro veterinario desde hace unos 32 años.",
  },
  {
    nombre: "Salome Carol Aguilar Meneses",
    estrellas: 5,
    fecha: "hace 3 años",
    texto: "El doctor es muy bueno, atiende con mucho amor a las mascotas y tiene experiencia.",
  },
  {
    nombre: "Diego Pozo",
    estrellas: 5,
    fecha: "hace 4 años",
    texto: "Más de 40 años atendiendo mascotas con la mayor experiencia. Excelente atención y toda la profesionalidad del Dr. Guillermo.",
  },
  {
    nombre: "Ignacio Nicolás Parra Torres",
    estrellas: 5,
    fecha: "hace 6 años",
    texto: "Excelente el servicio de don Guillermo. Se nota que sabe sobre gatos y es una persona animalista. 100% recomendado.",
  },
  {
    nombre: "Ximena",
    estrellas: 5,
    fecha: "hace 8 años",
    texto: "Absolutamente profesional calificado, atiende a los animalitos con amor y más higiénico que cualquiera. Veterinario consecuente con su profesión y barrio.",
  },
  {
    nombre: "Leonardo Calderón Riveros",
    estrellas: 5,
    fecha: "hace 3 años",
    texto: "Buena atención y el Dr. Pozo muy amable y mucho conocimiento. Y cariñoso con la mascota.",
  },
  {
    nombre: "kharoline vargas",
    estrellas: 5,
    fecha: "hace 6 años",
    texto: "Excelente veterinario con vocación y amor profundo a los animales, precios bastante económicos.",
  },
  {
    nombre: "James Eagle",
    estrellas: 5,
    fecha: "hace 6 años",
    texto: "Profesional empático y con alto conocimiento, mi mascota se sintió muy cómodo, además el tratamiento fue efectivo.",
  },
  {
    nombre: "Lily Urrea",
    estrellas: 5,
    fecha: "hace 5 años",
    texto: "Fui a comprar comida renal Hills en lata la cual tiene un precio mas bajo a diferencia de otros lugares. Buena atención.",
  },
  {
    nombre: "Marisol Chea",
    estrellas: 5,
    fecha: "hace 5 años",
    texto: "Muy buena la atención... Que bueno que cuenten con los medicamentos, eso agiliza el tratamiento... Gracias.",
  },
  {
    nombre: "Rodrigo",
    estrellas: 5,
    fecha: "hace 2 años",
    texto: "El Dr. Pozo es un excelente profesional, mucha experiencia y conocimiento, lo recomiendo.",
  },
  {
    nombre: "Mabel Chea",
    estrellas: 5,
    fecha: "hace 8 años",
    texto: "Buen veterinario, totalmente recomendable, mucha experiencia.",
  },
  {
    nombre: "Enzo Traslaviña",
    estrellas: 5,
    fecha: "hace 2 años",
    texto: "Excelente atención, certero y con un trato que ya no es habitual, se nota una persona con clase y profesional.",
  },
  {
    nombre: "Sator Chile",
    estrellas: 5,
    fecha: "hace 2 años",
    texto: "Excelente atención, un crack el doctor, lo recomiendo.",
  },
  {
    nombre: "Maria de la Luz Rayneld-Franco",
    estrellas: 5,
    fecha: "hace 7 años",
    texto: "El veterinario es excelente, con verdadera vocación.",
  },
  {
    nombre: "Marietta Pesce",
    estrellas: 5,
    fecha: "hace 4 años",
    texto: "Muy buen veterinario.",
  },
  {
    nombre: "Elizabeth Araya",
    estrellas: 5,
    fecha: "hace 6 años",
    texto: "Conocimiento y expertiz del veterinario.",
  },
  {
    nombre: "Patricia Ortuzar",
    estrellas: 5,
    fecha: "hace 5 años",
    texto: "Muy buena, la recomiendo a todos.",
  },
  {
    nombre: "Carlos Maturana",
    estrellas: 5,
    fecha: "hace 6 años",
    texto: "Excelente veterinario.",
  },
  {
    nombre: "Maria Eugenia Pozo Ruiz",
    estrellas: 4,
    fecha: "hace 4 años",
    texto: "Excelente.",
  },
  {
    nombre: "Catalina Aranda",
    estrellas: 5,
    fecha: "hace 8 años",
    texto: "Bueno y amoroso con los animales.",
  },
  {
    nombre: "Jacky O.",
    estrellas: 5,
    fecha: "hace 8 años",
    texto: "Serio y amable.",
  },
  {
    nombre: "Ignacio Cifuentes",
    estrellas: 5,
    fecha: "hace 4 años",
    texto: "¡Excelente!",
  },
  {
    nombre: "Florencia Pozo",
    estrellas: 5,
    fecha: "hace 4 años",
    texto: "Aspectos positivos: Capacidad de respuesta, Fiabilidad, Profesionalismo y Valor.",
  },
  {
    nombre: "Monse Castro R.",
    estrellas: 5,
    fecha: "hace 1 año",
    texto: "",
  },
  {
    nombre: "Catalina Salas",
    estrellas: 5,
    fecha: "hace 2 años",
    texto: "",
  },
  {
    nombre: "Nicole Lastra",
    estrellas: 5,
    fecha: "hace 2 años",
    texto: "",
  },
  {
    nombre: "Rafael",
    estrellas: 5,
    fecha: "hace 4 años",
    texto: "",
  },
  {
    nombre: "Laura Orellana",
    estrellas: 5,
    fecha: "hace 4 años",
    texto: "",
  },
  {
    nombre: "Betsabe",
    estrellas: 5,
    fecha: "hace 5 años",
    texto: "",
  },
  {
    nombre: "Jeniffer Muhlenbrock",
    estrellas: 5,
    fecha: "hace 6 años",
    texto: "",
  },
  {
    nombre: "Bernarda Hilda Gallagher Hermosilla",
    estrellas: 5,
    fecha: "hace 8 años",
    texto: "",
  },
];
