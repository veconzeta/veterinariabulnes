import { CLINICA, NAV_LINKS, WA_URL } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white/70 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Marca */}
          <div>
            <p className="text-white font-bold text-lg mb-2">🐾 {CLINICA.nombre}</p>
            <p className="text-sm">{CLINICA.doctor}</p>
            <p className="text-sm mt-1">{CLINICA.direccion} · {CLINICA.ciudad}</p>
          </div>

          {/* Navegación */}
          <div>
            <p className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Navegación
            </p>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Contacto
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`tel:${CLINICA.telefono}`} className="hover:text-white transition-colors">
                  📞 {CLINICA.telefonoDisplay}
                </a>
              </li>
              <li>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${CLINICA.email}`} className="hover:text-white transition-colors">
                  ✉️ {CLINICA.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <p>© {year} {CLINICA.nombre} · {CLINICA.web}</p>
          <p>{CLINICA.horario}</p>
        </div>
      </div>
    </footer>
  );
}
