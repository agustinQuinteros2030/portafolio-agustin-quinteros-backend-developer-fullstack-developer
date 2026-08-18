const proyectos = [
  {
    id: 1,
    titulo: "Foro Web",
    categoria: "Aplicación Web Full Stack",
    descripcion:
      "Aplicación web académica para la administración de un foro con usuarios, categorías, entradas, preguntas, respuestas y reacciones.",
    detalles:
      "Implementé autenticación mediante ASP.NET Identity, autorización basada en roles, operaciones CRUD, persistencia con Entity Framework Core y reglas de negocio para publicaciones públicas y privadas, solicitudes de acceso, preguntas, respuestas, likes y dislikes.",
    imagen: "/assets/foroWeb.png",

    tecnologias: [
      "C#",
      ".NET 8",
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "ASP.NET Identity",
      "SQL Server",
      "Razor",
      "Bootstrap",
    ],

    github:
      "https://github.com/agustinQuinteros2030/proyecto-foro.net",

    demo: null,
  },

  {
    id: 2,
    titulo: "FitnessApp",
    categoria: "Aplicación Mobile",
    descripcion:
      "Aplicación móvil desarrollada en equipo para la gestión de entrenadores, clientes, rutinas, bloques, días y ejercicios.",
    detalles:
      "Implementé autenticación, persistencia segura de sesión, navegación basada en roles, operaciones CRUD, integración con ExerciseDB y políticas Row Level Security. También participé en el diseño de la base de datos y la gestión de relaciones entre usuarios y rutinas.",
    imagen: "/assets/fitnessApp.png",

    tecnologias: [
      "React Native",
      "TypeScript",
      "Expo",
      "Expo Router",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "RLS",
    ],

    github:
      "https://github.com/agustinQuinteros2030/2026-1C-PersonalTrainer",

    demo: null,
  },

  {
    id: 3,
    titulo: "GIF Search App",
    categoria: "Aplicación Web",
    descripcion:
      "Aplicación web para buscar GIFs mediante la API de Giphy, desarrollada con React y TypeScript.",
    detalles:
      "Incluye paginación de resultados, historial de búsquedas, caché para evitar solicitudes repetidas y manejo de errores producidos por los límites de peticiones de la API.",
    imagen: "/assets/gifSearchAapp.png",

    tecnologias: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Giphy API",
      "REST API",
      "Vercel",
    ],

    github:
      "https://github.com/agustinQuinteros2030/gif-app-2026-react",

    demo:
      "https://gif-app-2026-react.vercel.app/",
  },
];

export const Proyectos = () => {
  return (
    <section
      id="proyectos"
      className="bg-[#07110f] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* ======================== */}
        {/* ENCABEZADO */}
        {/* ======================== */}

        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            <span className="font-mono text-[#4fe3c1]">[ </span>
            Proyectos
            <span className="font-mono text-[#4fe3c1]"> ]</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
            Una selección de proyectos donde apliqué desarrollo backend,
            frontend, mobile, bases de datos, autenticación e integración
            con APIs.
          </p>
        </div>

        {/* ======================== */}
        {/* LISTADO DE PROYECTOS */}
        {/* ======================== */}

        <div className="space-y-28">

          {proyectos.map((proyecto, index) => (
            <article
              key={proyecto.id}
              className={`
                grid items-center gap-12
                lg:grid-cols-2
                ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >

              {/* ======================== */}
              {/* IMAGEN */}
              {/* ======================== */}

              <div className="group relative">

                {/* Brillo */}
                <div
                  className="
                    absolute -inset-4
                    rounded-3xl
                    bg-[#4fe3c1]/5
                    opacity-0
                    blur-2xl
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    relative overflow-hidden
                    rounded-2xl
                    border border-[#4fe3c1]/20
                    bg-[#101323]
                    p-2
                    shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                    transition-all duration-500
                    group-hover:-translate-y-2
                    group-hover:border-[#4fe3c1]/50
                  "
                >
                  {/* Barra estilo navegador */}
                  <div className="flex items-center gap-2 px-3 py-3">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />

                    <div
                      className="
                        ml-3 flex-1
                        rounded-md
                        bg-white/5
                        px-4 py-1
                        font-mono
                        text-xs
                        text-gray-500
                      "
                    >
                      {proyecto.titulo.toLowerCase().replaceAll(" ", "-")}
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={proyecto.imagen}
                      alt={`Captura del proyecto ${proyecto.titulo}`}
                      className="
                        h-auto w-full
                        object-cover
                        transition-transform duration-700
                        group-hover:scale-[1.03]
                      "
                    />
                  </div>
                </div>
              </div>

              {/* ======================== */}
              {/* INFORMACIÓN */}
              {/* ======================== */}

              <div>

                {/* Número */}
                <p className="mb-3 font-mono text-sm font-semibold text-[#4fe3c1]">
                  0{index + 1} — {proyecto.categoria}
                </p>

                {/* Nombre */}
                <h3 className="text-3xl font-bold md:text-4xl">
                  {proyecto.titulo}
                </h3>

                {/* Línea */}
                <div className="my-6 h-[2px] w-16 bg-[#4fe3c1]" />

                {/* Descripción */}
                <p className="text-lg leading-8 text-gray-300">
                  {proyecto.descripcion}
                </p>

                <p className="mt-5 leading-7 text-gray-400">
                  {proyecto.detalles}
                </p>

                {/* Tecnologías */}
                <div className="mt-8">

                  <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Tecnologías
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {proyecto.tecnologias.map((tecnologia) => (
                      <span
                        key={tecnologia}
                        className="
                          rounded-md
                          border border-[#4fe3c1]/30
                          bg-[#4fe3c1]/10
                          px-3 py-2
                          text-xs
                          font-semibold
                          text-[#4fe3c1]
                        "
                      >
                        {tecnologia}
                      </span>
                    ))}
                  </div>

                </div>

                {/* ======================== */}
                {/* BOTONES */}
                {/* ======================== */}

                <div className="mt-9 flex flex-wrap gap-4">

                  {/* GitHub */}
                  <a
                    href={proyecto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      rounded-lg
                      border-2 border-[#4fe3c1]
                      px-6 py-3
                      font-semibold
                      text-[#4fe3c1]
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:bg-[#4fe3c1]/10
                    "
                  >
                    Ver código ↗
                  </a>

                  {/* Demo: solamente aparece si existe */}
                  {proyecto.demo && (
                    <a
                      href={proyecto.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        rounded-lg
                        bg-[#4fe3c1]
                        px-6 py-3
                        font-semibold
                        text-[#07110f]
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:bg-[#68efd1]
                      "
                    >
                      Ver demo ↗
                    </a>
                  )}

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};