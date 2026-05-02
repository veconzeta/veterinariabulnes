import { CLINICA } from "@/lib/constants";

const stats = [
  { valor: "50+", etiqueta: "Años de experiencia" },
  { valor: "U. de Chile", etiqueta: "Casa de estudios" },
  { valor: "Gatos & Perros", etiqueta: "Especialización principal" },
  { valor: "Individual", etiqueta: "Atención personalizada" },
];

export default function SobreElDr() {
  return (
    <section id="doctor" className="paw-pattern py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* Círculo decorativo con borde punteado */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 rounded-full border-4 border-dashed border-navy-300 bg-white flex items-center justify-center shadow-xl">
            <span className="text-[100px]">🩺</span>
            <div className="absolute -bottom-4 -right-4 bg-navy-800 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
              {CLINICA.experiencia} de experiencia
            </div>
          </div>
        </div>

        {/* Texto */}
        <div>
          <p className="text-navy-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Sobre el profesional
          </p>
          <h2 className="section-title">{CLINICA.doctor}</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            Médico Veterinario titulado de la <strong className="text-navy-800">{CLINICA.universidad}</strong>,
            con más de {CLINICA.experiencia} dedicado a la salud animal.
            Su clínica, ubicada en el corazón de Santiago, se ha convertido en
            un referente de confianza para familias que buscan atención
            veterinaria cercana, honesta y de calidad.
          </p>
          <p className="text-gray-500 leading-relaxed mb-10">
            Trabaja de forma individual para ofrecer una atención personalizada
            en cada consulta, asegurando que tanto el paciente como su familia
            reciban toda la atención y cuidado que merecen.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.etiqueta} className="bg-navy-800 rounded-xl p-4 text-white">
                <p className="text-xl font-bold">{s.valor}</p>
                <p className="text-sm text-white/70 mt-1">{s.etiqueta}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
