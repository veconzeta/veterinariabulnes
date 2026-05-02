import { SERVICIOS } from "@/lib/constants";

export default function Servicios() {
  return (
    <section id="servicios" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-navy-600 font-semibold text-sm uppercase tracking-widest mb-2">
          Lo que hacemos
        </p>
        <h2 className="section-title mx-auto">Nuestros Servicios</h2>
        <p className="section-sub mx-auto text-center">
          Atención profesional para el bienestar de tu mascota, con décadas de
          experiencia y dedicación.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-4">
          {SERVICIOS.map((s) => (
            <div
              key={s.titulo}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center gap-4 hover:shadow-lg transition-shadow"
            >
              {/* Círculo navy con ícono */}
              <div className="w-20 h-20 rounded-full bg-navy-800 flex items-center justify-center shadow-md">
                <span className="text-3xl">{s.icono}</span>
              </div>
              <h3 className="text-xl font-bold text-navy-800 text-center">{s.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 text-center">
                {s.descripcion}
              </p>
              {s.nota && (
                <span className="inline-block bg-amber-50 text-amber-700 text-xs font-medium px-3 py-1 rounded-full border border-amber-200">
                  ⚠️ {s.nota}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
