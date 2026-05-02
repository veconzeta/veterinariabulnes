import { CLINICA } from "@/lib/constants";

const credenciales = [
  { label: "Casa de estudios", valor: "Universidad de Chile" },
  { label: "Especialización", valor: "Perros, Gatos y Animales Exóticos" },
  { label: "Modalidad", valor: "Atención individual y personalizada" },
  { label: "Ubicación", valor: `${CLINICA.direccion}, Santiago` },
];

export default function SobreElDr() {
  return (
    <section id="doctor" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1fr_320px] gap-20 items-start">

        {/* Columna izquierda — Statement */}
        <div>
          <span className="section-label">Sobre el profesional</span>
          <div className="section-divider" />
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 leading-snug mb-8">
            Más de medio siglo<br />dedicado a la salud de tu mascota.
          </h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            {CLINICA.doctor} es Médico Veterinario titulado de la{" "}
            <strong className="text-navy-800">{CLINICA.universidad}</strong>, con más
            de {CLINICA.experiencia} de ejercicio profesional ininterrumpido en Santiago.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Atiende de forma individual cada caso, sin intermediarios, brindando
            a cada paciente la atención directa de un profesional con décadas
            de experiencia clínica acumulada.
          </p>
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

          {/* Stat destacada */}
          <div className="mt-8 bg-navy-800 text-white p-6 flex items-end gap-4">
            <p className="text-5xl font-bold leading-none">50+</p>
            <p className="text-white/60 text-sm leading-tight">años de<br />experiencia</p>
          </div>
        </div>

      </div>
    </section>
  );
}
