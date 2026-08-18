export const Inicio = () => {
  return (
    <section
      id="inicio"
      className="
        min-h-screen
        overflow-hidden
        bg-[#07110f]
        px-4
        pt-24
        text-white
        sm:px-6
        sm:pt-28
      "
    >
      <div
        className="
          mx-auto
          grid
          min-h-[calc(100vh-6rem)]
          max-w-7xl
          items-center
          gap-14
          lg:min-h-[calc(100vh-7rem)]
          lg:grid-cols-2
          lg:gap-16
        "
      >

        {/* ============================= */}
        {/* LADO IZQUIERDO */}
        {/* ============================= */}

        <div className="w-full">

          {/* Presentación */}
          <p
            className="
              mb-5
              font-mono
              text-sm
              font-semibold
              tracking-wide
              text-[#4fe3c1]
              sm:mb-6
              md:text-base
            "
          >
            <span className="cursor-blink">_</span>{" "}
            Hola, soy Agustín Quinteros
          </p>

          {/* Título principal */}
          <h1
            className="
              text-4xl
              font-bold
              leading-[1.05]
              tracking-tight
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Backend

            <span className="block text-[#4fe3c1]">
              Developer
            </span>

            <span className="block">
              .NET & React
            </span>
          </h1>

          {/* Subtítulo */}
          <div
            className="
              my-7
              flex
              items-center
              gap-3
              sm:my-8
              sm:gap-4
            "
          >
            <span className="h-[2px] w-7 bg-[#4fe3c1] sm:w-10" />

            <p
              className="
                font-mono
                text-sm
                font-semibold
                tracking-wide
                text-[#4fe3c1]
                sm:text-base
              "
            >
              Software Developer
            </p>

            <span className="h-[2px] w-7 bg-[#4fe3c1] sm:w-10" />
          </div>

          {/* Descripción */}
          <p
            className="
              max-w-xl
              text-sm
              leading-7
              text-gray-300
              sm:text-base
              sm:leading-8
              md:text-lg
            "
          >
            Desarrollo aplicaciones web modernas utilizando{" "}
            <strong className="font-semibold text-white">
              .NET, React y TypeScript
            </strong>
            , enfocándome en crear soluciones escalables, mantenibles y con
            buenas prácticas de desarrollo.
          </p>

          {/* Botones */}
          <div
            className="
              mt-8
              flex
              flex-col
              gap-3
              sm:mt-10
              sm:flex-row
              sm:flex-wrap
              sm:gap-4
            "
          >
            <a
              href="#proyectos"
              className="
                w-full
                rounded-lg
                bg-[#4fe3c1]
                px-6
                py-3.5
                text-center
                font-semibold
                text-[#07110f]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#68efd1]
                sm:w-auto
                sm:px-8
                sm:py-4
              "
            >
              Ver Proyectos
            </a>

            <a
              href="#contacto"
              className="
                w-full
                rounded-lg
                border-2
                border-[#4fe3c1]
                px-6
                py-3.5
                text-center
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#4fe3c1]/10
                sm:w-auto
                sm:px-8
                sm:py-4
              "
            >
              Contactame
            </a>
          </div>

          {/* ============================= */}
          {/* TECNOLOGÍAS */}
          {/* ============================= */}

          <div
            className="
              mt-10
              grid
              w-full
              max-w-lg
              grid-cols-3
              items-stretch
              sm:mt-12
            "
          >

            {/* .NET */}
            <div
              className="
                flex
                min-w-0
                flex-col
                items-center
                justify-center
                px-1
                text-center
                sm:items-start
                sm:px-0
                sm:text-left
              "
            >
              <p
                className="
                  font-mono
                  text-lg
                  font-bold
                  text-[#4fe3c1]
                  min-[360px]:text-xl
                  sm:text-2xl
                  md:text-3xl
                "
              >
                .NET
              </p>

              <p className="mt-1 text-[11px] text-gray-400 sm:text-sm">
                Backend
              </p>
            </div>

            {/* React */}
            <div
              className="
                flex
                min-w-0
                flex-col
                items-center
                justify-center
                border-x
                border-[#4fe3c1]/40
                px-2
                text-center
                sm:px-6
              "
            >
              <p
                className="
                  font-mono
                  text-lg
                  font-bold
                  text-[#4fe3c1]
                  min-[360px]:text-xl
                  sm:text-2xl
                  md:text-3xl
                "
              >
                React
              </p>

              <p className="mt-1 text-[11px] text-gray-400 sm:text-sm">
                Frontend
              </p>
            </div>

            {/* TypeScript */}
            <div
              className="
                flex
                min-w-0
                flex-col
                items-center
                justify-center
                px-1
                text-center
                sm:items-start
                sm:px-6
                sm:text-left
              "
            >
              <p
                className="
                  font-mono
                  text-lg
                  font-bold
                  text-[#4fe3c1]
                  min-[360px]:text-xl
                  sm:text-2xl
                  md:text-3xl
                "
              >
                TS
              </p>

              <p className="mt-1 text-[11px] text-gray-400 sm:text-sm">
                TypeScript
              </p>
            </div>

          </div>
        </div>

        {/* ============================= */}
        {/* LADO DERECHO */}
        {/* ============================= */}

        <div
          className="
            flex
            min-h-[420px]
            flex-col
            items-center
            justify-center
            sm:min-h-[500px]
            lg:min-h-[570px]
          "
        >

          {/* ============================= */}
          {/* CÓDIGO DECORATIVO */}
          {/* ============================= */}

          <div
            className="
              developer-float

              mb-14
              hidden

              w-full
              max-w-[350px]

              rounded-xl

              border
              border-[#4fe3c1]/10

              bg-[#07110f]/25

              p-5

              font-mono
              text-sm
              leading-7
              text-[#4fe3c1]/25

              backdrop-blur-sm

              xl:block
              xl:translate-x-20
            "
          >
            <p>
              const developer = {"{"}
            </p>

            <p className="pl-5">
              name: "Agustín Quinteros",
            </p>

            <p className="pl-5">
              role: "Backend Developer",
            </p>

            <p className="pl-5">
              stack: [".NET", "React", "TypeScript"],
            </p>

            <p className="pl-5">
              passion: "crear soluciones"
            </p>

            <p>
              {"};"}
            </p>
          </div>

          {/* ============================= */}
          {/* CONTENEDOR FOTO */}
          {/* ============================= */}

          <div className="group relative">

            {/* Luz detrás de la foto */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                -z-10

                h-[280px]
                w-[280px]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-[#4fe3c1]/10
                blur-3xl

                min-[360px]:h-[320px]
                min-[360px]:w-[320px]

                sm:h-[350px]
                sm:w-[350px]

                md:h-[420px]
                md:w-[420px]
              "
            />

            {/* Marco foto */}
            <div
              className="
                h-60
                w-60

                overflow-hidden

                rounded-full

                border-[8px]
                border-[#4fe3c1]

                bg-[#07110f]

                shadow-[0_0_60px_rgba(79,227,193,0.12)]

                transition-all
                duration-500
                ease-out

                group-hover:scale-105
                group-hover:border-[#68efd1]
                group-hover:shadow-[0_0_90px_rgba(79,227,193,0.25)]

                min-[360px]:h-64
                min-[360px]:w-64

                sm:h-72
                sm:w-72
                sm:border-[10px]

                md:h-80
                md:w-80

                lg:h-[360px]
                lg:w-[360px]
              "
            >
              <img
                src="/assets/perfil.jpeg"
                alt="Agustín Quinteros"
                className="
                  h-full
                  w-full

                  object-cover
                  object-center

                  transition-transform
                  duration-700
                  ease-out

                  group-hover:scale-110
                "
              />
            </div>

            {/* Etiqueta */}
            <div
              className="
                absolute
                -bottom-5
                left-1/2

                -translate-x-1/2

                whitespace-nowrap

                rounded-full

                border
                border-[#4fe3c1]/30

                bg-[#0d1b26]

                px-4
                py-2

                font-mono
                text-xs
                font-semibold
                text-[#4fe3c1]

                shadow-lg

                transition-all
                duration-300

                group-hover:-bottom-6
                group-hover:border-[#4fe3c1]/60

                sm:px-6
                sm:text-sm
              "
            >
              Agustín Quinteros
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};