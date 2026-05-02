import { SERVICIOS } from "@/lib/constants";

const iconos = [
  // Portapapeles con líneas — consulta / ficha médica
  <svg key="s1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 3.75 3.75 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 0 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
  </svg>,

  // Gecko/lagartija — animales exóticos
  <svg key="s2" viewBox="0 0 24 24" className="w-8 h-8">
    {/* cabeza */}
    <circle cx="12" cy="4.5" r="1.75" fill="currentColor" />
    {/* cuerpo */}
    <ellipse cx="12" cy="11.5" rx="2.25" ry="3.75" fill="currentColor" />
    {/* cola */}
    <path d="M11.5 15 Q10 18 11 21" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* patas izquierdas */}
    <path d="M9.75 9.5 L6 7.5M9.75 13 L5.5 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* patas derechas */}
    <path d="M14.25 9.5 L18 7.5M14.25 13 L18.5 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,

  // Bisturí — cirugía menor
  <svg key="s3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
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
