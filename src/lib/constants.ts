export const CLINICA = {
  nombre: "Veterinaria Bulnes",
  nombreCompleto: "Clínica Veterinaria Bulnes",
  doctor: "Dr. Guillermo Pozo Ruiz",
  experiencia: "50 años",
  universidad: "Universidad de Chile",
  direccion: "Gral. Bulnes 28-A",
  ciudad: "Santiago, Chile",
  metro: "Metro República",
  telefono: "+56998205598",
  telefonoDisplay: "+56 9 9820 5598",
  email: "drpozo@gmail.com",
  web: "www.veterinariabulnes.cl",
  horario: "Lunes a Viernes · 10:00 – 19:00", // ← A confirmar con cliente (Google dice hasta 21:00)
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.7!2d-70.6528!3d-33.4556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGral.+Bulnes+28-A%2C+Santiago!5e0!3m2!1ses!2scl!4v1",
} as const;

export const WA_MESSAGE = encodeURIComponent(
  `Hola ${CLINICA.doctor}, me gustaría agendar una consulta para mi mascota. ¿Podría indicarme disponibilidad y los pasos para reservar mi hora?`
);

export const WA_URL = `https://wa.me/${CLINICA.telefono.replace(/\D/g, "")}?text=${WA_MESSAGE}`;

export const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#doctor", label: "El Dr. Pozo" },
  { href: "#agendar", label: "Agendar" },
  { href: "#ubicacion", label: "Cómo llegar" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const SERVICIOS = [
  {
    titulo: "Consulta Veterinaria General",
    descripcion:
      "Atención médica completa para perros y gatos. Diagnóstico, tratamiento y seguimiento con más de 50 años de experiencia respaldando cada consulta.",
    icono: "🐾",
    nota: null,
  },
  {
    titulo: "Animales Exóticos",
    descripcion:
      "Atención especializada para animales no convencionales. La consulta está sujeta a disponibilidad y confirmación previa.",
    icono: "🦎",
    nota: "Requiere confirmación telefónica previa",
  },
  {
    titulo: "Cirugía Menor",
    descripcion:
      "Procedimientos quirúrgicos menores realizados con la máxima atención y cuidado por un médico veterinario titulado.",
    icono: "🩺",
    nota: null,
  },
] as const;
