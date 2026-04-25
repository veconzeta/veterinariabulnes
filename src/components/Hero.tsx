import { CLINICA, WA_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-navy-800 flex items-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div className="text-white">
          <p className="text-green-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Clínica Veterinaria · Santiago Centro
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Veterinaria <br />
            <span className="text-green-400">Bulnes</span>
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-md leading-relaxed">
            Atención veterinaria de confianza para tu mascota. Más de{" "}
            <strong className="text-white">{CLINICA.experiencia} de experiencia</strong>{" "}
            respaldando cada diagnóstico.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-wsp text-base">
              <WhatsAppIcon /> Agendar por WhatsApp
            </a>
            <a href="#servicios" className="btn-primary bg-white/10 hover:bg-white/20 text-base">
              Ver servicios →
            </a>
          </div>

          <div className="mt-10 flex flex-col gap-2 text-white/60 text-sm">
            <span>📍 {CLINICA.direccion} · A pasos del {CLINICA.metro}</span>
            <span>📞 {CLINICA.telefonoDisplay}</span>
            <span>🕐 {CLINICA.horario}</span>
          </div>
        </div>

        {/* Ilustración / decoración */}
        <div className="hidden md:flex justify-center">
          <div className="w-72 h-72 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <span className="text-[120px] select-none">🐾</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.551 4.103 1.513 5.831L.057 23.215a.75.75 0 0 0 .92.92l5.403-1.46A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.73 9.73 0 0 1-4.98-1.367l-.356-.214-3.696.998.986-3.595-.233-.37A9.712 9.712 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
    </svg>
  );
}
