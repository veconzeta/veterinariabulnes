import { SERVICIOS } from "@/lib/constants";

export default function Servicios() {
  return (
    <section id="servicios" className="bg-cream py-20">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-2">
          Lo que hacemos
        </p>
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-sub text-gray-600">
          Atención profesional para el bienestar de tu mascota, con décadas de
          experiencia y dedicación.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICIOS.map((s) => (
            <div
              key={s.titulo}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <span className="text-5xl">{s.icono}</span>
              <h3 className="text-xl font-bold text-navy-800">{s.titulo}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
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
