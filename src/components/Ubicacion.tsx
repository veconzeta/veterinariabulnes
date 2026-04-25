import { CLINICA } from "@/lib/constants";

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="bg-cream py-20">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-2">
          Encuéntranos
        </p>
        <h2 className="section-title">Cómo llegar</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-navy-800 mb-3">Dirección</h3>
              <p className="text-gray-700">
                {CLINICA.direccion}
                <br />
                {CLINICA.ciudad}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-navy-800 mb-3">Metro más cercano</h3>
              <p className="text-gray-700 flex items-center gap-2">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">M</span>
                {CLINICA.metro} — a pasos de la clínica
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-navy-800 mb-3">Horario de atención</h3>
              <p className="text-gray-700">{CLINICA.horario}</p>
            </div>
          </div>

          {/* Mapa */}
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 h-80 bg-gray-200 flex items-center justify-center">
            <iframe
              title="Ubicación Veterinaria Bulnes"
              src={`https://www.google.com/maps?q=${encodeURIComponent(CLINICA.direccion + ", " + CLINICA.ciudad)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
