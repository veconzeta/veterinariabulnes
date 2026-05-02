import { CLINICA, WA_URL } from "@/lib/constants";

const pasos = [
  {
    num: "01",
    titulo: "Contacta al Dr. Pozo",
    desc: `Escríbenos por WhatsApp o llama al ${CLINICA.telefonoDisplay} para consultar disponibilidad de horarios.`,
  },
  {
    num: "02",
    titulo: "Confirma con depósito",
    desc: "Para asegurar tu reserva, el doctor te indicará los pasos para realizar un depósito previo. Este monto se descuenta del valor total de la consulta.",
  },
  {
    num: "03",
    titulo: "Asiste a tu consulta",
    desc: "Llega a nuestra clínica en Gral. Bulnes 28-A. El saldo restante se cancela al momento de la atención (transferencia o efectivo).",
  },
];

export default function Agendamiento() {
  return (
    <section id="agendar" className="bg-navy-800 py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-green-400 font-semibold text-sm uppercase tracking-widest mb-2">
          Reserva tu hora
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¿Cómo agendar?
        </h2>
        <p className="text-white/70 text-lg mb-12 max-w-2xl">
          El agendamiento se realiza exclusivamente por teléfono o WhatsApp.
          Seguimos este proceso para garantizarte una atención de calidad.
        </p>

        {/* Pasos */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pasos.map((p) => (
            <div key={p.num} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <span className="text-green-400 font-bold text-3xl">{p.num}</span>
              <h3 className="text-lg font-bold mt-3 mb-2">{p.titulo}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Política */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-10">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span>📋</span> Política de reagendamiento
          </h3>
          <ul className="text-white/70 text-sm leading-relaxed space-y-3">
            <li className="flex gap-3">
              <span className="text-green-400 shrink-0">✓</span>
              <span>
                Si necesitas cambiar tu hora, comunícate con al menos{" "}
                <strong className="text-white">24 horas de anticipación</strong>.
                Solo se permite un reagendamiento por reserva.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-400 shrink-0">⚠</span>
              <span>
                En caso de <strong className="text-white">no presentarse o no avisar</strong>{" "}
                dentro del plazo, el depósito no será reembolsado. Este sistema
                nos permite asegurar la disponibilidad del Dr. Pozo para todos
                nuestros pacientes.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 shrink-0">✓</span>
              <span>
                Agradecemos tu comprensión. Esto nos permite brindar una
                atención de calidad y puntual a cada mascota.
              </span>
            </li>
          </ul>
        </div>

        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-wsp text-base">
          <WhatsAppIcon /> Agendar ahora por WhatsApp
        </a>
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
