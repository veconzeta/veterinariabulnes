import { CLINICA, WA_URL } from "@/lib/constants";

export default function Contacto() {
  return (
    <section id="contacto" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-2">
          Contáctanos
        </p>
        <h2 className="section-title">Estamos para ayudarte</h2>
        <p className="section-sub">
          Escríbenos o llámanos. El Dr. Pozo responde personalmente cada
          consulta.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* WhatsApp */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-cream rounded-2xl p-6 flex flex-col gap-3 hover:bg-green-50 border border-transparent hover:border-green-200 transition-all"
          >
            <span className="text-3xl">💬</span>
            <h3 className="font-bold text-navy-800">WhatsApp</h3>
            <p className="text-sm text-gray-600">{CLINICA.telefonoDisplay}</p>
            <span className="text-green-600 text-sm font-semibold group-hover:underline">
              Escribir →
            </span>
          </a>

          {/* Teléfono */}
          <a
            href={`tel:${CLINICA.telefono}`}
            className="group bg-cream rounded-2xl p-6 flex flex-col gap-3 hover:bg-navy-800 hover:text-white border border-transparent hover:border-navy-700 transition-all"
          >
            <span className="text-3xl">📞</span>
            <h3 className="font-bold text-navy-800 group-hover:text-white">Teléfono</h3>
            <p className="text-sm text-gray-600 group-hover:text-white/70">
              {CLINICA.telefonoDisplay}
            </p>
            <span className="text-navy-600 group-hover:text-green-400 text-sm font-semibold">
              Llamar →
            </span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${CLINICA.email}`}
            className="group bg-cream rounded-2xl p-6 flex flex-col gap-3 hover:bg-navy-800 hover:text-white border border-transparent hover:border-navy-700 transition-all"
          >
            <span className="text-3xl">✉️</span>
            <h3 className="font-bold text-navy-800 group-hover:text-white">Correo</h3>
            <p className="text-sm text-gray-600 group-hover:text-white/70 break-all">
              {CLINICA.email}
            </p>
            <span className="text-navy-600 group-hover:text-green-400 text-sm font-semibold">
              Escribir →
            </span>
          </a>

          {/* Métodos de pago */}
          <div className="bg-cream rounded-2xl p-6 flex flex-col gap-3">
            <span className="text-3xl">💳</span>
            <h3 className="font-bold text-navy-800">Métodos de pago</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✓ Transferencia bancaria</li>
              <li>✓ Efectivo</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
