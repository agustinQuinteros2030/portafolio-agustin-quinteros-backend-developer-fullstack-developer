export const SobreMi = () => {
  return (
    <section
      id="sobre-mi"
      className="bg-[#070908] px-6 py-28 text-white"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">

        {/* ======================= */}
        {/* LADO IZQUIERDO */}
        {/* ======================= */}

        <div>
          <h2 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
            Sobre Mí
          </h2>

          {/* Nombre / Rol */}
          <div className="mb-9 flex flex-wrap items-center gap-4">
            <p className="text-lg font-bold text-white">
              Agustín
            </p>

            <span className="h-6 w-[1px] bg-[#4fe3c1]" />

            <p className="font-mono text-lg font-semibold text-[#4fe3c1]">
              Backend Developer
            </p>
          </div>

          {/* Descripción */}
          <div className="max-w-xl space-y-6 text-base leading-8 text-gray-300 md:text-lg">

            <p>
              ¡Hola! Soy{" "}
              <strong className="font-semibold text-white">
                Agustín Quinteros
              </strong>
              , desarrollador enfocado principalmente en el{" "}
              <strong className="font-semibold text-white">
                desarrollo Backend
              </strong>{" "}
              y en la construcción de aplicaciones web.
            </p>

            <p>
              Cuento con formación como{" "}
              <strong className="font-semibold text-white">
                Analista Programador
              </strong>{" "}
              y continúo desarrollando mi perfil profesional mientras avanzo
              en la carrera de Analista de Sistemas. Me interesa especialmente
              trabajar con{" "}
              <strong className="font-semibold text-white">
                C#, .NET, React y TypeScript
              </strong>
              , combinando backend, frontend y bases de datos para construir
              soluciones completas.
            </p>

            <p>
              Actualmente estoy enfocado en seguir fortaleciendo mis
              conocimientos mediante proyectos reales y académicos, buscando
              dar el siguiente paso profesional e incorporarme a un equipo de
              desarrollo donde pueda aportar, aprender y continuar creciendo.
            </p>

          </div>

          {/* Frase */}
          <div
            className="
              relative mt-9
              max-w-xl
              rounded-r-xl
              border-l-[3px] border-[#4fe3c1]
              bg-[#4fe3c1]/10
              px-6 py-6
            "
          >
            <p className="pr-8 text-sm font-semibold italic leading-7 text-gray-200 md:text-base">
              Creo en el aprendizaje constante y en construir proyectos que no
              solo funcionen, sino que también reflejen buenas prácticas,
              organización y mejora continua.
            </p>

            <span className="absolute right-5 top-5 text-xl">
              💡
            </span>
          </div>
        </div>

        {/* ======================= */}
        {/* LADO DERECHO */}
        {/* ======================= */}

        <div
          className="
            overflow-hidden
            rounded-2xl
            border border-[#4fe3c1]/30
            bg-[#15203d]
            shadow-[0_25px_80px_rgba(0,0,0,0.35)]
          "
        >

          {/* Barra superior del editor */}
          <div
            className="
              flex items-center justify-between
              border-b border-[#4fe3c1]/20
              px-6 py-4
            "
          >
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <span className="font-mono text-sm font-semibold text-[#4fe3c1]">
              agustin.ts
            </span>
          </div>

          {/* Código */}
          <div className="overflow-x-auto px-7 py-8">
            <pre className="font-mono text-sm leading-7 md:text-[15px]">
              <code>

                {/* Comentario */}
                <div className="text-gray-500">
                  // Agustín Quinteros
                </div>

                <div>
                  <span className="text-red-400">const</span>{" "}
                  <span className="text-blue-300">developer</span>{" "}
                  <span className="text-white">= {"{"}</span>
                </div>

                <div className="pl-4">
                  <span className="text-[#4fe3c1]">name</span>
                  <span className="text-white">: </span>
                  <span className="text-lime-300">
                    'Agustín Quinteros'
                  </span>
                  <span className="text-white">,</span>
                </div>

                <div className="pl-4">
                  <span className="text-[#4fe3c1]">role</span>
                  <span className="text-white">: </span>
                  <span className="text-lime-300">
                    'Backend Developer'
                  </span>
                  <span className="text-white">,</span>
                </div>

                <div className="pl-4">
                  <span className="text-[#4fe3c1]">focus</span>
                  <span className="text-white">: </span>
                  <span className="text-lime-300">
                    '.NET & Full Stack'
                  </span>
                  <span className="text-white">,</span>
                </div>

                <div className="pl-4">
                  <span className="text-[#4fe3c1]">principles</span>
                  <span className="text-white">: {"{"}</span>
                </div>

                <div className="pl-8">
                  <span className="text-[#4fe3c1]">cleanCode</span>
                  <span className="text-white">: </span>
                  <span className="text-orange-300">true</span>
                  <span className="text-white">,</span>
                </div>

                <div className="pl-8">
                  <span className="text-[#4fe3c1]">continuousLearning</span>
                  <span className="text-white">: </span>
                  <span className="text-orange-300">true</span>
                  <span className="text-white">,</span>
                </div>

                <div className="pl-8">
                  <span className="text-[#4fe3c1]">teamwork</span>
                  <span className="text-white">: </span>
                  <span className="text-orange-300">true</span>
                </div>

                <div className="pl-4 text-white">
                  {"},"}
                </div>

                <div className="pl-4">
                  <span className="text-[#4fe3c1]">stack</span>
                  <span className="text-white">: [</span>
                </div>

                <div className="pl-8 text-lime-300">
                  '.NET',
                </div>

                <div className="pl-8 text-lime-300">
                  'C#',
                </div>

                <div className="pl-8 text-lime-300">
                  'React',
                </div>

                <div className="pl-8 text-lime-300">
                  'TypeScript',
                </div>

                <div className="pl-8 text-lime-300">
                  'SQL'
                </div>

                <div className="pl-4 text-white">
                  ]
                </div>

                <div className="text-white">
                  {"};"}
                </div>

                <br />

                <div className="text-gray-500">
                  // Próximo objetivo profesional
                </div>

                <div>
                  <span className="text-blue-300">developer</span>
                  <span className="text-white">.</span>
                  <span className="text-[#4fe3c1]">startCareer</span>
                  <span className="text-white">();</span>
                </div>

              </code>
            </pre>
          </div>

        </div>

      </div>
    </section>
  );
};