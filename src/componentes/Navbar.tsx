import { useState } from "react";

export const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#07110f]/95 backdrop-blur-md">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo / Nombre */}
        <a
          href="#inicio"
          onClick={cerrarMenu}
          className="font-mono text-xl font-bold text-white transition-colors hover:text-emerald-400"
        >
          {"<AgustinQ />"}
        </a>

        {/* ========================= */}
        {/* NAVEGACIÓN DESKTOP */}
        {/* ========================= */}

        <div className="hidden items-center gap-8 lg:flex">
          <a
            href="#inicio"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-emerald-400"
          >
            Inicio
          </a>

          <a
            href="#proyectos"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-emerald-400"
          >
            Proyectos
          </a>

          <a
            href="#experiencia"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-emerald-400"
          >
            Experiencia
          </a>

          <a
            href="#sobre-mi"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-emerald-400"
          >
            Sobre mí
          </a>

          <a
            href="#contacto"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-emerald-400"
          >
            Contacto
          </a>

          {/* Descargar CV */}
          <a
            href="/assets/cv-agustin-quinteros.pdf"
            download="CV-Agustin-Quinteros.pdf"
            className="
              rounded-xl
              bg-emerald-500
              px-4 py-2
              text-sm font-semibold
              text-white
              shadow-lg
              shadow-emerald-500/20
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-emerald-400
            "
          >
            Descargar CV
          </a>
        </div>

        {/* ========================= */}
        {/* BOTÓN HAMBURGUESA MOBILE */}
        {/* ========================= */}

        <button
          type="button"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
          aria-expanded={menuAbierto}
          className="
            flex h-10 w-10
            flex-col
            items-center justify-center
            gap-[5px]
            rounded-lg
            border border-emerald-400/30
            lg:hidden
          "
        >
          {/* Línea 1 */}
          <span
            className={`
              h-[2px] w-5
              bg-emerald-400
              transition-all duration-300
              ${
                menuAbierto
                  ? "translate-y-[7px] rotate-45"
                  : ""
              }
            `}
          />

          {/* Línea 2 */}
          <span
            className={`
              h-[2px] w-5
              bg-emerald-400
              transition-all duration-300
              ${menuAbierto ? "opacity-0" : ""}
            `}
          />

          {/* Línea 3 */}
          <span
            className={`
              h-[2px] w-5
              bg-emerald-400
              transition-all duration-300
              ${
                menuAbierto
                  ? "-translate-y-[7px] -rotate-45"
                  : ""
              }
            `}
          />
        </button>

        {/* ========================= */}
        {/* MENÚ MOBILE */}
        {/* ========================= */}

        {menuAbierto && (
          <div
            className="
              absolute
              left-0 top-full
              w-full
              border-b border-white/10
              bg-[#07110f]
              px-6 py-6
              shadow-2xl
              lg:hidden
            "
          >
            <div className="flex flex-col gap-2">

              <a
                href="#inicio"
                onClick={cerrarMenu}
                className="
                  rounded-lg
                  px-4 py-3
                  font-medium
                  text-gray-300
                  transition-colors
                  hover:bg-emerald-400/10
                  hover:text-emerald-400
                "
              >
                Inicio
              </a>

              <a
                href="#proyectos"
                onClick={cerrarMenu}
                className="
                  rounded-lg
                  px-4 py-3
                  font-medium
                  text-gray-300
                  transition-colors
                  hover:bg-emerald-400/10
                  hover:text-emerald-400
                "
              >
                Proyectos
              </a>

              <a
                href="#experiencia"
                onClick={cerrarMenu}
                className="
                  rounded-lg
                  px-4 py-3
                  font-medium
                  text-gray-300
                  transition-colors
                  hover:bg-emerald-400/10
                  hover:text-emerald-400
                "
              >
                Experiencia
              </a>

              <a
                href="#sobre-mi"
                onClick={cerrarMenu}
                className="
                  rounded-lg
                  px-4 py-3
                  font-medium
                  text-gray-300
                  transition-colors
                  hover:bg-emerald-400/10
                  hover:text-emerald-400
                "
              >
                Sobre mí
              </a>

              <a
                href="#contacto"
                onClick={cerrarMenu}
                className="
                  rounded-lg
                  px-4 py-3
                  font-medium
                  text-gray-300
                  transition-colors
                  hover:bg-emerald-400/10
                  hover:text-emerald-400
                "
              >
                Contacto
              </a>

              <div className="my-3 h-[1px] bg-white/10" />

              {/* Descargar CV Mobile */}
              <a
                href="/assets/cv-agustin-quinteros.pdf"
                download="CV-Agustin-Quinteros.pdf"
                onClick={cerrarMenu}
                className="
                  rounded-xl
                  bg-emerald-500
                  px-4 py-3
                  text-center
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-emerald-500/20
                  transition-colors
                  hover:bg-emerald-400
                "
              >
                Descargar CV
              </a>

            </div>
          </div>
        )}

      </nav>
    </header>
  );
};