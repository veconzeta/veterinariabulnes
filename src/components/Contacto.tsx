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
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CLINICA.email}`}
            target="_blank"
            rel="noopener noreferrer"
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
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.551 4.103 1.513 5.831L.057 23.215a.75.75 0 0 0 .92.92l5.403-1.46A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.73 9.73 0 0 1-4.98-1.367l-.356-.214-3.696.998.986-3.595-.233-.37A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
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
