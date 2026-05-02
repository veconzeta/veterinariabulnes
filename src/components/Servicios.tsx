import { SERVICIOS } from "@/lib/constants";

const iconos = [
  // Estetoscopio
  <svg key="s1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0 4.142-3.358 7.5-7.5 7.5S4.5 16.142 4.5 12m7.5 7.5V21m0 0h3m-3 0H9M3 5.5A2.5 2.5 0 0 1 5.5 3h.75A2.75 2.75 0 0 1 9 5.75v5A5.25 5.25 0 0 0 14.25 16h.75A2.75 2.75 0 0 0 17.75 13V8.25A2.75 2.75 0 0 1 20.5 5.5h0A2.5 2.5 0 0 1 23 8v1" />
  </svg>,
  // Animal / pata
  <svg key="s2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2ZM8 6.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2ZM5 10.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2ZM15 10.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2ZM7.5 15.5c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5-2.015 3.5-4.5 3.5-4.5-1.015-4.5-3.5Z" />
  </svg>,
  // Bisturí / cirugía
  <svg key="s3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75l9 9m0 0l-4.5 4.5m4.5-4.5H12m-4.5 9l-3-3m0 0l9-9M4.5 18.75l3-3" />
  </svg>,
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <span className="section-label">Lo que ofrecemos</span>
        <div className="section-divider" />
        <h2 className="section-title max-w-lg">Servicios de atención veterinaria</h2>
        <p className="section-sub">
          Diagnóstico, tratamiento y cuidado con la dedicación de un médico que ha dedicado su vida a la salud animal.
        </p>

        <div className="grid md:grid-cols-3 gap-0 border border-gray-200">
          {SERVICIOS.map((s, i) => (
            <div
              key={s.titulo}
              className={`p-10 bg-white flex flex-col gap-5 ${i < SERVICIOS.length - 1 ? "border-b md:border-b-0 md:border-r border-gray-200" : ""}`}
            >
              <div className="text-navy-800">
                {iconos[i]}
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-3">{s.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.descripcion}</p>
              </div>
              {s.nota && (
                <p className="text-xs text-navy-600 font-medium border-l-2 border-navy-800 pl-3">
                  {s.nota}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
