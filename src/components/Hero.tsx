import { CLINICA, WA_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen bg-white flex items-center pt-24">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* Columna izquierda — Autoridad primero */}
        <div>
          <span className="section-label">Médico Veterinario · Santiago, Chile</span>
          <div className="section-divider" />

          <h1 className="sr-only">Veterinaria Bulnes — Dr. Guillermo Pozo Ruiz</h1>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-navy-900 leading-tight mb-6">
            50 años al servicio<br />
            de la salud animal.
          </h2>

          <p className="text-gray-500 text-base leading-relaxed mb-2 max-w-md">
            {CLINICA.doctor}
          </p>
          <p className="text-gray-400 text-sm mb-10 max-w-md">
            Médico Veterinario titulado de la {CLINICA.universidad} · {CLINICA.direccion}, Santiago
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-wsp">
              <WhatsAppIcon /> Agendar por WhatsApp
            </a>
            <a href={`tel:${CLINICA.telefono}`} className="btn-outline">
              Llamar al consultorio
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex gap-8 text-sm text-gray-400">
            <span>{CLINICA.horario}</span>
            <span>{CLINICA.metro}</span>
          </div>
        </div>

        {/* Columna derecha — Tarjeta de credenciales */}
        <div className="hidden md:flex justify-end">
          <div className="bg-navy-800 text-white p-10 w-80">
            <div className="border-b border-white/20 pb-8 mb-8">
              <p className="text-6xl font-bold leading-none">50+</p>
              <p className="text-white/60 text-sm tracking-widest uppercase mt-2">Años de experiencia</p>
            </div>
            <div className="border-b border-white/20 pb-8 mb-8">
              <p className="text-sm font-semibold tracking-wide">Universidad de Chile</p>
              <p className="text-white/50 text-xs mt-1">Médico Veterinario Titulado</p>
            </div>
            <div className="border-b border-white/20 pb-8 mb-8">
              <p className="text-sm font-semibold tracking-wide">{CLINICA.direccion}</p>
              <p className="text-white/50 text-xs mt-1">{CLINICA.ciudad}</p>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide">{CLINICA.telefonoDisplay}</p>
              <p className="text-white/50 text-xs mt-1">Teléfono y WhatsApp</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.551 4.103 1.513 5.831L.057 23.215a.75.75 0 0 0 .92.92l5.403-1.46A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.73 9.73 0 0 1-4.98-1.367l-.356-.214-3.696.998.986-3.595-.233-.37A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
    </svg>
  );
}
