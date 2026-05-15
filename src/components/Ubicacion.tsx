import { CLINICA } from "@/lib/constants";
import ResenasGoogle from "./ResenasGoogle";

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.572!2d-70.6553!3d-33.4572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a36bc15aa3%3A0x2e28af8da8df93fa!2sGral.%20Bulnes%2028-A%2C%20Santiago!5e0!3m2!1ses!2scl!4v1715000000000!5m2!1ses!2scl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <ResenasGoogle />
      </div>
    </section>
  );
}
