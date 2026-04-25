import { CLINICA } from "@/lib/constants";

const stats = [
  { valor: "50+", etiqueta: "años de experiencia" },
  { valor: "U. de Chile", etiqueta: "casa de estudios" },
  { valor: "Gatos & Perros", etiqueta: "especialización principal" },
  { valor: "Individual", etiqueta: "atención personalizada" },
];

export default function SobreElDr() {
  return (
    <section id="doctor" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* Decoración */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 rounded-full bg-navy-800 flex items-center justify-center">
              <span className="text-[100px]">🩺</span>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow">
              {CLINICA.experiencia} de experiencia
            </div>
          </div>
        </div>

        {/* Texto */}
        <div>
          <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Sobre el profesional
          </p>
          <h2 className="section-title">{CLINICA.doctor}</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Médico Veterinario titulado de la <strong>{CLINICA.universidad}</strong>,
            con más de {CLINICA.experiencia} dedicado a la salud animal.
            Su clínica, ubicada en el corazón de Santiago, se ha convertido en
            un referente de confianza para familias que buscan atención
            veterinaria cercana, honesta y de calidad.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            Trabaja de forma individual para ofrecer una atención personalizada
            en cada consulta, asegurando que tanto el paciente como su familia
            reciban toda la atención y cuidado que merecen.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.etiqueta} className="bg-cream rounded-xl p-4">
                <p className="text-2xl font-bold text-navy-800">{s.valor}</p>
                <p className="text-sm text-gray-500 mt-1">{s.etiqueta}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
