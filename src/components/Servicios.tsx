import { SERVICIOS } from "@/lib/constants";

const iconos = [
  // Corazón — consulta / cuidado veterinario
  <svg key="s1" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
  </svg>,
  // Estrella / destellos — animales especiales / exóticos
  <svg key="s2" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036a2.63 2.63 0 0 0 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258a2.63 2.63 0 0 0-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.63 2.63 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.63 2.63 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395a1.5 1.5 0 0 0-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395a1.5 1.5 0 0 0 .948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
  </svg>,
  // Cruz médica — cirugía
  <svg key="s3" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path fillRule="evenodd" d="M11.25 3a.75.75 0 0 1 1.5 0v6.75H19.5a.75.75 0 0 1 0 1.5h-6.75V18a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V3Z" clipRule="evenodd" />
  </svg>,
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <span className="section-label">Lo que ofrecemos</span>
        <div className="section-divider" />
        <h2 className="section-title max-w-lg">Servicios de atención veterinaria</h2>
        <p className="section-sub max-w-none">
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
