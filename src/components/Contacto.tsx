import { CLINICA, WA_URL } from "@/lib/constants";

export default function Contacto() {
  return (
    <section id="contacto" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        <span className="section-label">Contáctanos</span>
        <div className="section-divider" />
        <h2 className="section-title">Estamos para ayudarte</h2>
        <p className="section-sub">
          El Dr. Pozo responde personalmente cada consulta.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
          {/* WhatsApp */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white hover:bg-navy-800 p-8 flex flex-col gap-4 transition-colors duration-200"
          >
            <div className="text-navy-800 group-hover:text-white transition-colors">
              <PhoneIcon />
            </div>
            <div>
              <h3 className="font-bold text-navy-900 group-hover:text-white text-sm tracking-wide uppercase mb-1 transition-colors">WhatsApp</h3>
              <p className="text-gray-400 group-hover:text-white/60 text-sm transition-colors">{CLINICA.telefonoDisplay}</p>
            </div>
            <span className="text-xs text-navy-600 group-hover:text-green-400 font-semibold uppercase tracking-wider transition-colors">
              Escribir →
            </span>
          </a>

          {/* Teléfono */}
          <a
            href={`tel:${CLINICA.telefono}`}
            className="group bg-white hover:bg-navy-800 p-8 flex flex-col gap-4 transition-colors duration-200"
          >
            <div className="text-navy-800 group-hover:text-white transition-colors">
              <CallIcon />
            </div>
            <div>
              <h3 className="font-bold text-navy-900 group-hover:text-white text-sm tracking-wide uppercase mb-1 transition-colors">Teléfono</h3>
              <p className="text-gray-400 group-hover:text-white/60 text-sm transition-colors">{CLINICA.telefonoDisplay}</p>
            </div>
            <span className="text-xs text-navy-600 group-hover:text-green-400 font-semibold uppercase tracking-wider transition-colors">
              Llamar →
            </span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${CLINICA.email}`}
            className="group bg-white hover:bg-navy-800 p-8 flex flex-col gap-4 transition-colors duration-200"
          >
            <div className="text-navy-800 group-hover:text-white transition-colors">
              <MailIcon />
            </div>
            <div>
              <h3 className="font-bold text-navy-900 group-hover:text-white text-sm tracking-wide uppercase mb-1 transition-colors">Correo</h3>
              <p className="text-gray-400 group-hover:text-white/60 text-sm break-all transition-colors">{CLINICA.email}</p>
            </div>
            <span className="text-xs text-navy-600 group-hover:text-green-400 font-semibold uppercase tracking-wider transition-colors">
              Escribir →
            </span>
          </a>

          {/* Métodos de pago */}
          <div className="bg-white p-8 flex flex-col gap-4">
            <div className="text-navy-800">
              <PayIcon />
            </div>
            <div>
              <h3 className="font-bold text-navy-900 text-sm tracking-wide uppercase mb-3">Métodos de pago</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-navy-800 inline-block" />
                  Transferencia bancaria
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-navy-800 inline-block" />
                  Efectivo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8.25 5.25h7.5A2.25 2.25 0 0 1 18 7.5v9a2.25 2.25 0 0 1-2.25 2.25h-7.5A2.25 2.25 0 0 1 6 16.5v-9A2.25 2.25 0 0 1 8.25 5.25Z" />
    </svg>
  );
}

function CallIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

function PayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
    </svg>
  );
}
