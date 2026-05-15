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
    texto: "Es un veterinario con verdadera vocación. Cuando he llevado mis gatos han confiado plenamente en él y no se han resistido a que los revise. Salvó la vida de mi gatita, que tuvo una hepatitis horrible y casi muere. Estaré eternamente agradecida del doctor Guillermo Pozo, tiene un enorme conocimiento y mucha humildad. Lo que hace falta hoy en día.",
  },
  {
    nombre: "Srta Floyd",
    estrellas: 5,
    fecha: "hace 1 año",
    texto: "Conocí al dr en un día muy difícil para mí, mi gatita había sido desahuciada en una clínica. El doctor la atendió con mucho cariño y profesionalismo. Gracias a él mi gatita sigue con vida.",
  },
  {
    nombre: "Enzo Traslaviña",
    estrellas: 5,
    fecha: "hace 2 años",
    texto: "Excelente atención, certero y con un trato que ya no es habitual, se nota una persona con clase y profesional.",
  },
];
