const experiencias = [
  {
    empresa: "Supermercados Vea",
    organizacion: "Cencosud",
    puesto: "Cajero",
    periodo: "Actualidad",
    descripcion:
      "Atención al cliente, manejo de caja y resolución de situaciones cotidianas en un entorno dinámico. Experiencia trabajando con responsabilidad, organización y contacto constante con clientes.",
    habilidades: [
      "Atención al cliente",
      "Responsabilidad",
      "Comunicación",
      "Trabajo en equipo",
    ],
    icono: "🛒",
  },
  {
    empresa: "Ejército Argentino",
    organizacion: "Fuerzas Armadas",
    puesto: "Soldado Voluntario",
    periodo: "Experiencia previa",
    descripcion:
      "Experiencia en un entorno de alta disciplina y responsabilidad, desarrollando capacidad de adaptación, cumplimiento de objetivos y trabajo coordinado dentro de un equipo.",
    habilidades: [
      "Disciplina",
      "Trabajo en equipo",
      "Adaptabilidad",
      "Organización",
      "Responsabilidad",
    ],
    icono: "🪖",
  },
];

export const Experiencia = () => {
  return (
    <section
      id="experiencia"
      className="bg-[#101323] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Encabezado */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            <span className="font-mono text-[#4fe3c1]">[ </span>
            Experiencia
            <span className="font-mono text-[#4fe3c1]"> ]</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
            Actualmente enfocado en realizar mi transición profesional hacia
            el desarrollo de software, aplicando mi formación y experiencia en
            proyectos para especializarme en{" "}
            <span className="font-semibold text-white">
              Backend con .NET
            </span>{" "}
            y desarrollo{" "}
            <span className="font-semibold text-white">
              Full Stack con React
            </span>
            .
          </p>
        </div>

        {/* Experiencias */}
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {experiencias.map((experiencia) => (
            <article
              key={experiencia.empresa}
              className="
                group relative overflow-hidden rounded-2xl
                border border-white/5
                bg-[#080b0a]
                p-8
                transition-all duration-300
                hover:-translate-y-2
                hover:border-[#4fe3c1]/30
                hover:shadow-[0_20px_60px_rgba(79,227,193,0.06)]
              "
            >
              {/* Línea superior */}
              <div className="absolute left-0 top-0 h-[3px] w-full bg-[#4fe3c1]" />

              {/* Header */}
              <div className="mb-8 flex items-start gap-4">

                {/* Icono */}
                <div
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-lg
                    border-2 border-[#4fe3c1]
                    bg-[#4fe3c1]/5
                    text-xl
                  "
                >
                  {experiencia.icono}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {experiencia.empresa}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {experiencia.organizacion}
                  </p>

                  <span
                    className="
                      mt-3 inline-block
                      rounded-full
                      bg-[#4fe3c1]
                      px-3 py-1
                      text-xs font-semibold
                      text-[#07110f]
                    "
                  >
                    {experiencia.periodo}
                  </span>
                </div>
              </div>

              {/* Puesto */}
              <h4 className="mb-4 text-lg font-semibold text-[#4fe3c1]">
                {experiencia.puesto}
              </h4>

              {/* Descripción */}
              <p className="leading-7 text-gray-300">
                {experiencia.descripcion}
              </p>

              {/* Separador */}
              <div className="my-7 h-[1px] w-full bg-white/10" />

              {/* Habilidades */}
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                Habilidades desarrolladas
              </p>

              <div className="flex flex-wrap gap-2">
                {experiencia.habilidades.map((habilidad) => (
                  <span
                    key={habilidad}
                    className="
                      rounded-md
                      border border-[#4fe3c1]/25
                      bg-[#4fe3c1]/10
                      px-3 py-2
                      text-xs font-semibold
                      text-[#4fe3c1]
                    "
                  >
                    {habilidad}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Mensaje de transición */}
        <div className="mx-auto mt-14 max-w-5xl">
          <div
            className="
              rounded-2xl
              border border-[#4fe3c1]/20
              bg-[#4fe3c1]/5
              px-6 py-5
              text-center
            "
          >
            <p className="font-mono text-sm leading-7 text-gray-300 md:text-base">
              <span className="text-[#4fe3c1]">&gt;</span>{" "}
              Mi próximo objetivo profesional es incorporarme a un equipo de
              desarrollo donde pueda seguir creciendo como{" "}
              <strong className="text-white">
                Backend / Full Stack Developer
              </strong>
              .
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};