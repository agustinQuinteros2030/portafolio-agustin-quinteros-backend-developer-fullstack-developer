export const Inicio = () => {
    return (
        <section
            id="inicio"
            className="min-h-screen overflow-hidden bg-[#07110f] px-6 pt-28 text-white"
        >
            <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-16 lg:grid-cols-2">

                {/* ============================= */}
                {/* LADO IZQUIERDO */}
                {/* ============================= */}

                <div>

                    {/* Presentación */}
                    <p className="mb-6 font-mono text-sm font-semibold tracking-wide text-[#4fe3c1] md:text-base">
                        <span className="cursor-blink">_</span>{" "}
                        Hola, soy Agustín Quinteros
                    </p>

                    {/* Título principal */}
                    <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                        Backend

                        <span className="block text-[#4fe3c1]">
                            Developer
                        </span>

                        <span className="block">
                            .NET & React
                        </span>
                    </h1>

                    {/* Subtitulo */}
                    <div className="my-8 flex items-center gap-4">
                        <span className="h-[2px] w-10 bg-[#4fe3c1]" />

                        <p className="font-mono font-semibold tracking-wide text-[#4fe3c1]">
                            Software Developer
                        </p>

                        <span className="h-[2px] w-10 bg-[#4fe3c1]" />
                    </div>

                    {/* Descripción */}
                    <p className="max-w-xl text-base leading-8 text-gray-300 md:text-lg">
                        Desarrollo aplicaciones web modernas utilizando{" "}
                        <strong className="font-semibold text-white">
                            .NET, React y TypeScript
                        </strong>
                        , enfocándome en crear soluciones escalables, mantenibles y con
                        buenas prácticas de desarrollo.
                    </p>

                    {/* Botones */}
                    <div className="mt-10 flex flex-wrap gap-4">

                        <a
                            href="#proyectos"
                            className="
                rounded-lg
                bg-[#4fe3c1]
                px-8
                py-4
                font-semibold
                text-[#07110f]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#68efd1]
              "
                        >
                            Ver Proyectos
                        </a>

                        <a
                            href="#contacto"
                            className="
                rounded-lg
                border-2
                border-[#4fe3c1]
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#4fe3c1]/10
              "
                        >
                            Contactame
                        </a>

                    </div>

                    {/* ============================= */}
                    {/* TECNOLOGÍAS */}
                    {/* ============================= */}

                    <div className="mt-12 flex items-center gap-8">

                        {/* .NET */}
                        <div>
                            <p className="font-mono text-2xl font-bold text-[#4fe3c1] md:text-3xl">
                                .NET
                            </p>

                            <p className="mt-1 text-sm text-gray-400">
                                Backend
                            </p>
                        </div>

                        <div className="h-10 w-[1px] bg-[#4fe3c1]/60" />

                        {/* React */}
                        <div>
                            <p className="font-mono text-2xl font-bold text-[#4fe3c1] md:text-3xl">
                                React
                            </p>

                            <p className="mt-1 text-sm text-gray-400">
                                Frontend
                            </p>
                        </div>

                        <div className="hidden h-10 w-[1px] bg-[#4fe3c1]/60 sm:block" />

                        {/* TypeScript */}
                        <div className="hidden sm:block">
                            <p className="font-mono text-2xl font-bold text-[#4fe3c1] md:text-3xl">
                                TS
                            </p>

                            <p className="mt-1 text-sm text-gray-400">
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
            min-h-[570px]
            flex-col
            items-center
            justify-center
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

                h-[350px]
                w-[350px]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-[#4fe3c1]/10
                blur-3xl

                md:h-[420px]
                md:w-[420px]
              "
                        />

                        {/* ============================= */}
                        {/* MARCO FOTO */}
                        {/* ============================= */}

                        <div
                            className="
                h-72
                w-72

                overflow-hidden

                rounded-full

                border-[10px]
                border-[#4fe3c1]

                bg-[#07110f]

                shadow-[0_0_60px_rgba(79,227,193,0.12)]

                transition-all
                duration-500
                ease-out

                group-hover:scale-105
                group-hover:border-[#68efd1]
                group-hover:shadow-[0_0_90px_rgba(79,227,193,0.25)]

                md:h-80
                md:w-80

                lg:h-[360px]
                lg:w-[360px]
              "
                        >

                            {/* Foto */}
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

                        {/* ============================= */}
                        {/* ETIQUETA */}
                        {/* ============================= */}

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

                px-6
                py-2

                font-mono
                text-sm
                font-semibold
                text-[#4fe3c1]

                shadow-lg

                transition-all
                duration-300

                group-hover:-bottom-6
                group-hover:border-[#4fe3c1]/60
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