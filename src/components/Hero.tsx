import { CLINICA, WA_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen bg-white flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center w-full">

        {/* Columna izquierda */}
        <div>
          <span className="section-label">Médico Veterinario · Santiago, Chile</span>
          <div className="section-divider" />

          <h1 className="text-3xl md:text-[2.25rem] lg:text-[2.6rem] font-bold text-navy-900 leading-tight mb-5 whitespace-nowrap">
            {CLINICA.doctor}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light mb-8 leading-relaxed">
            50 años al servicio de la salud animal.
          </p>
          <p className="text-gray-400 text-base mb-12 leading-relaxed">
            Médico Veterinario titulado de la {CLINICA.universidad}<br />
            {CLINICA.direccion}, Santiago · {CLINICA.metro}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-wsp text-base">
              <WhatsAppIcon /> Agendar por WhatsApp
            </a>
            <a href={`tel:${CLINICA.telefono}`} className="btn-outline text-base">
              Llamar al consultorio
            </a>
          </div>
        </div>

        {/* Columna derecha — Tarjeta credenciales (desktop) */}
        <div className="hidden md:flex justify-end">
          <div className="bg-navy-800 text-white p-10 w-80">
            <div className="border-b border-white/20 pb-8 mb-8">
              <p className="text-6xl font-bold leading-none">50+</p>
              <p className="text-white/60 text-sm tracking-widest uppercase mt-2">Años de experiencia</p>
            </div>
            <div className="border-b border-white/20 pb-6 mb-6">
              <p className="text-sm font-semibold tracking-wide">{CLINICA.universidad}</p>
              <p className="text-white/50 text-xs mt-1">Médico Veterinario Titulado</p>
            </div>
            <div className="border-b border-white/20 pb-6 mb-6">
              <p className="text-sm font-semibold tracking-wide">{CLINICA.direccion}</p>
              <p className="text-white/50 text-xs mt-1">{CLINICA.ciudad}</p>
            </div>
            <div className="border-b border-white/20 pb-6 mb-6">
              <p className="text-sm font-semibold tracking-wide">{CLINICA.telefonoDisplay}</p>
              <p className="text-white/50 text-xs mt-1">Teléfono y WhatsApp</p>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide">Lunes a Sábado · 15:00 – 20:00</p>
              <p className="text-sm font-semibold tracking-wide mt-0.5">Solo con agendamiento previo</p>
              <p className="text-white/50 text-xs mt-1">Horario de atención</p>
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
