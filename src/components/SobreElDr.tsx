"use client";
import { useState, useEffect, useRef } from "react";
import { CLINICA } from "@/lib/constants";

const AUTOPLAY_MS = 120_000; // 2 minutos entre slides
const RESUME_MS   = 120_000; // reanudar tras 2 minutos de inactividad

const credenciales = [
  { label: "Casa de estudios", valor: "Universidad de Chile" },
  { label: "Especialización", valor: "Perros, Gatos y Animales Exóticos" },
  { label: "Modalidad", valor: "Atención individual y personalizada" },
  { label: "Ubicación", valor: `${CLINICA.direccion}, Santiago` },
];

const slides = [
  {
    año: "1900",
    titulo: "Una clínica con historia",
    texto:
      "El terreno donde se levanta la Clínica Veterinaria Bulnes fue construido en 1900 por el abuelo materno del Dr. Pozo Ruiz. Desde sus inicios hasta hoy, la clínica ha permanecido en el mismo lugar: calle Bulnes Nº 28, en el corazón del Centro Norte de Santiago, en el histórico barrio Brasil.",
  },
  {
    año: "1970s",
    titulo: "Los primeros pasos",
    texto:
      "Al recibirse de veterinario, el Dr. Pozo instaló su consultorio para atender en las tardes — al igual que los médicos humanos de la época, quienes trabajaban por las mañanas en hospitales y por las tardes en sus consultas. Una tradición que marcó su estilo de atención cercana y personalizada desde el primer día.",
  },
  {
    año: "1979",
    titulo: "Fundador de MEVEPA",
    texto:
      "A fines de 1979, el Dr. Guillermo Pozo Ruiz fue uno de los cuatro médicos fundadores de la Agrupación de Médicos Veterinarios Especialistas en Clínica y Cirugía de Animales Menores — hoy conocida como MEVEPA. La primera reunión fue informal, en la calle. Cerca de 40 veterinarios se sumaron luego, dando forma a una organización que marcaría la historia de la medicina veterinaria en Chile.",
  },
  {
    año: "Hoy",
    titulo: "Defensa del bienestar animal",
    texto:
      "La trayectoria del Dr. Pozo ha estado siempre ligada a la defensa de los animales. Su ejercicio profesional se desarrolló en paralelo al fortalecimiento de la legislación protectora en Chile — como la Ley Nº 18.859, art. 291 bis, que sanciona con presidio menor los actos de crueldad o maltrato contra los animales.",
  },
];

export default function SobreElDr() {
  const [current, setCurrent]   = useState(0);
  const [paused, setPaused]     = useState(false);
  const inactivityRef           = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Al navegar manualmente: pausa y arranca contador de inactividad
  const handleManualNav = (fn: () => void) => {
    fn();
    setPaused(true);
    if (inactivityRef.current) clearTimeout(inactivityRef.current);
    inactivityRef.current = setTimeout(() => setPaused(false), RESUME_MS);
  };

  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  // Auto-avance cuando no está en pausa
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused]);

  // Limpieza del timer de inactividad al desmontar
  useEffect(() => () => { if (inactivityRef.current) clearTimeout(inactivityRef.current); }, []);

  return (
    <section id="doctor" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1fr_320px] gap-20 items-start">

        {/* Columna izquierda */}
        <div>
          <span className="section-label">Sobre el profesional</span>
          <div className="section-divider" />
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 leading-snug mb-8">
            Más de medio siglo dedicado<br />a la salud de tu mascota.
          </h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            {CLINICA.doctor} es Médico Veterinario titulado de la{" "}
            <strong className="text-navy-800">{CLINICA.universidad}</strong>, con más
            de {CLINICA.experiencia} de ejercicio profesional ininterrumpido en Santiago.
          </p>
          <p className="text-gray-500 leading-relaxed mb-10">
            Atiende de forma individual cada caso, sin intermediarios, brindando
            a cada paciente la atención directa de un profesional con décadas
            de experiencia clínica acumulada.
          </p>

          {/* Carrusel histórico */}
          <div className="border-t border-gray-100 pt-8">
            <p className="section-label mb-4">Historia</p>

            {/* Slide */}
            <div className="min-h-[140px]">
              <p className="text-xs font-bold text-navy-500 tracking-widest mb-2">
                {slides[current].año}
              </p>
              <h3 className="text-lg font-bold text-navy-900 mb-3">
                {slides[current].titulo}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {slides[current].texto}
              </p>
            </div>

            {/* Controles */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={() => handleManualNav(prev)}
                className="w-9 h-9 border border-gray-200 hover:border-navy-800 hover:bg-navy-800 hover:text-white text-navy-800 flex items-center justify-center transition-colors"
                aria-label="Anterior"
              >
                ‹
              </button>
              <button
                onClick={() => handleManualNav(next)}
                className="w-9 h-9 border border-gray-200 hover:border-navy-800 hover:bg-navy-800 hover:text-white text-navy-800 flex items-center justify-center transition-colors"
                aria-label="Siguiente"
              >
                ›
              </button>

              {/* Dots */}
              <div className="flex gap-1.5 ml-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleManualNav(() => setCurrent(i))}
                    className={`h-1.5 transition-all duration-300 ${
                      i === current ? "w-6 bg-navy-800" : "w-1.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Ir al slide ${i + 1}`}
                  />
                ))}
              </div>

              <span className="ml-auto flex items-center gap-2 text-xs text-gray-300">
                {paused && <span title="Reanuda en 2 min">⏸</span>}
                {current + 1} / {slides.length}
              </span>
            </div>
          </div>
        </div>

        {/* Columna derecha — Credenciales */}
        <div className="border-t-2 border-navy-800 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-500 mb-8">
            Credenciales
          </p>
          <div className="space-y-0">
            {credenciales.map((c, i) => (
              <div
                key={c.label}
                className={`py-5 ${i < credenciales.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{c.label}</p>
                <p className="text-navy-900 font-semibold">{c.valor}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-navy-800 text-white p-6 flex items-end gap-4">
            <p className="text-5xl font-bold leading-none">50+</p>
            <p className="text-white/60 text-sm leading-tight">años de<br />experiencia</p>
          </div>
        </div>

      </div>
    </section>
  );
}
