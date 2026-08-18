import { Footer } from "./Footer";
import { useContactoForm } from "../hooks/useContactoForm";

export const Contacto = () => {
  const {
    register,
    handleSubmit,
    onSubmit,

    errors,
    isSubmitting,
    isValid,

    estadoEnvio,
  } = useContactoForm();

  return (
    <section
      id="contacto"
      className="bg-[#101323] px-6 pt-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* ======================== */}
        {/* ENCABEZADO */}
        {/* ======================== */}

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            ¿Hablamos?
          </h2>

          <p className="mt-5 text-base text-gray-400 md:text-lg">
            Estoy abierto a nuevas oportunidades, colaboraciones y desafíos
            profesionales.
          </p>

          <p className="mt-4 font-mono text-lg font-semibold text-[#4fe3c1]">
            Agustín Quinteros | Backend Developer
          </p>

        </div>

        {/* ======================== */}
        {/* CONTENIDO */}
        {/* ======================== */}

        <div className="grid gap-16 lg:grid-cols-2">

          {/* ======================== */}
          {/* COLUMNA IZQUIERDA */}
          {/* ======================== */}

          <div className="space-y-6">

            {/* EMAIL */}

            <div
              className="
                rounded-xl
                border border-[#4fe3c1]/30
                bg-[#15203d]
                p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#4fe3c1]/60
              "
            >
              <div className="flex gap-5">

                <div
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-lg
                    bg-[#4fe3c1]/10
                    text-xl
                  "
                >
                  ✉️
                </div>

                <div>

                  <h3 className="text-xl font-bold text-[#4fe3c1]">
                    Email
                  </h3>

                  <a
                    href="mailto:agustinquinteros84@gmail.com?subject=Contacto%20desde%20tu%20portfolio"
                    className="
                      mt-2 inline-block
                      break-all
                      text-gray-300
                      underline-offset-4
                      transition-colors
                      hover:text-[#4fe3c1]
                      hover:underline
                    "
                  >
                    agustinquinteros84@gmail.com
                  </a>

                  <p className="mt-2 text-sm font-semibold italic text-[#4fe3c1]">
                    Contacto profesional
                  </p>

                </div>

              </div>
            </div>

            {/* LINKEDIN */}

            <div
              className="
                rounded-xl
                border border-[#4fe3c1]/30
                bg-[#15203d]
                p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#4fe3c1]/60
              "
            >
              <div className="flex gap-5">

                <div
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-lg
                    bg-[#4fe3c1]/10
                    text-xl
                  "
                >
                  💼
                </div>

                <div>

                  <h3 className="text-xl font-bold text-[#4fe3c1]">
                    LinkedIn
                  </h3>

                  <a
                    href="https://www.linkedin.com/in/agustin-quinteros-serra-7a2a95251"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-2 inline-block
                      text-gray-300
                      underline-offset-4
                      transition-colors
                      hover:text-[#4fe3c1]
                      hover:underline
                    "
                  >
                    Agustín Quinteros Serra ↗
                  </a>

                  <p className="mt-2 text-sm font-semibold italic text-[#4fe3c1]">
                    Conectemos profesionalmente
                  </p>

                </div>

              </div>
            </div>

            {/* GITHUB */}

            <div
              className="
                rounded-xl
                border border-[#4fe3c1]/30
                bg-[#15203d]
                p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#4fe3c1]/60
              "
            >
              <div className="flex gap-5">

                <div
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-lg
                    bg-[#4fe3c1]/10
                    text-xl
                  "
                >
                  💻
                </div>

                <div>

                  <h3 className="text-xl font-bold text-[#4fe3c1]">
                    GitHub
                  </h3>

                  <a
                    href="https://github.com/agustinQuinteros2030"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-2 inline-block
                      text-gray-300
                      underline-offset-4
                      transition-colors
                      hover:text-[#4fe3c1]
                      hover:underline
                    "
                  >
                    agustinQuinteros2030 ↗
                  </a>

                  <p className="mt-2 text-sm font-semibold italic text-[#4fe3c1]">
                    Mirá mis proyectos y código
                  </p>

                </div>

              </div>
            </div>

            {/* DISPONIBILIDAD */}

            <div
              className="
                rounded-xl
                border border-[#4fe3c1]/30
                bg-[#15203d]
                p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#4fe3c1]/60
              "
            >
              <div className="flex gap-5">

                <div
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-lg
                    bg-[#4fe3c1]/10
                    text-xl
                  "
                >
                  🚀
                </div>

                <div>

                  <h3 className="text-xl font-bold text-[#4fe3c1]">
                    Disponibilidad
                  </h3>

                  <p className="mt-2 font-semibold text-gray-300">
                    Abierto a nuevas oportunidades
                  </p>

                  <p className="mt-2 text-sm font-semibold italic text-[#4fe3c1]">
                    Backend Developer / Full Stack Developer
                  </p>

                </div>

              </div>
            </div>

          </div>

          {/* ======================== */}
          {/* FORMULARIO */}
          {/* ======================== */}

          <div>

            <h3 className="text-2xl font-bold text-[#4fe3c1]">
              Contactame
            </h3>

            <p className="mt-3 text-gray-400">
              Si tenés una oportunidad laboral, una propuesta o simplemente
              querés conectar, podés escribirme.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-9 space-y-6"
              noValidate
            >

              {/* ======================== */}
              {/* NOMBRE + EMPRESA */}
              {/* ======================== */}

              <div className="grid gap-5 sm:grid-cols-2">

                {/* NOMBRE */}

                <div>

                  <label
                    htmlFor="nombre"
                    className="mb-2 block text-sm font-semibold text-[#4fe3c1]"
                  >
                    Nombre
                    <span className="text-red-400">
                      {" "}*
                    </span>
                  </label>

                  <input
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    {...register("nombre")}
                    className={`
                      w-full
                      rounded-lg
                      border
                      bg-[#15203d]
                      px-4 py-4
                      text-white
                      outline-none
                      transition-colors
                      placeholder:text-gray-500

                      ${
                        errors.nombre
                          ? "border-red-400"
                          : "border-white/10 focus:border-[#4fe3c1]"
                      }
                    `}
                  />

                  {errors.nombre && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.nombre.message}
                    </p>
                  )}

                </div>

                {/* EMPRESA */}

                <div>

                  <label
                    htmlFor="empresa"
                    className="mb-2 block text-sm font-semibold text-[#4fe3c1]"
                  >
                    Empresa
                  </label>

                  <input
                    id="empresa"
                    type="text"
                    placeholder="Empresa (opcional)"
                    {...register("empresa")}
                    className={`
                      w-full
                      rounded-lg
                      border
                      bg-[#15203d]
                      px-4 py-4
                      text-white
                      outline-none
                      transition-colors
                      placeholder:text-gray-500

                      ${
                        errors.empresa
                          ? "border-red-400"
                          : "border-white/10 focus:border-[#4fe3c1]"
                      }
                    `}
                  />

                  {errors.empresa && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.empresa.message}
                    </p>
                  )}

                </div>

              </div>

              {/* ======================== */}
              {/* EMAIL */}
              {/* ======================== */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#4fe3c1]"
                >
                  Email
                  <span className="text-red-400">
                    {" "}*
                  </span>
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="tu@gmail.com"
                  autoComplete="email"
                  {...register("email")}
                  className={`
                    w-full
                    rounded-lg
                    border
                    bg-[#15203d]
                    px-4 py-4
                    text-white
                    outline-none
                    transition-colors
                    placeholder:text-gray-500

                    ${
                      errors.email
                        ? "border-red-400"
                        : "border-white/10 focus:border-[#4fe3c1]"
                    }
                  `}
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}

              </div>

              {/* ======================== */}
              {/* MOTIVO */}
              {/* ======================== */}

              <div>

                <label
                  htmlFor="motivo"
                  className="mb-2 block text-sm font-semibold text-[#4fe3c1]"
                >
                  Motivo del contacto
                  <span className="text-red-400">
                    {" "}*
                  </span>
                </label>

                <select
                  id="motivo"
                  {...register("motivo")}
                  className={`
                    w-full
                    rounded-lg
                    border
                    bg-[#15203d]
                    px-4 py-4
                    text-white
                    outline-none
                    transition-colors

                    ${
                      errors.motivo
                        ? "border-red-400"
                        : "border-white/10 focus:border-[#4fe3c1]"
                    }
                  `}
                >

                  <option value="">
                    Seleccioná una opción
                  </option>

                  <option value="Oportunidad laboral">
                    Oportunidad laboral
                  </option>

                  <option value="Colaboración">
                    Colaboración
                  </option>

                  <option value="Proyecto">
                    Proyecto
                  </option>

                  <option value="Otro">
                    Otro
                  </option>

                </select>

                {errors.motivo && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.motivo.message}
                  </p>
                )}

              </div>

              {/* ======================== */}
              {/* MENSAJE */}
              {/* ======================== */}

              <div>

                <label
                  htmlFor="mensaje"
                  className="mb-2 block text-sm font-semibold text-[#4fe3c1]"
                >
                  Mensaje
                  <span className="text-red-400">
                    {" "}*
                  </span>
                </label>

                <textarea
                  id="mensaje"
                  rows={6}
                  maxLength={1000}
                  placeholder="Contame sobre la oportunidad, propuesta o consulta..."
                  {...register("mensaje")}
                  className={`
                    w-full
                    resize-none
                    rounded-lg
                    border
                    bg-[#15203d]
                    px-4 py-4
                    text-white
                    outline-none
                    transition-colors
                    placeholder:text-gray-500

                    ${
                      errors.mensaje
                        ? "border-red-400"
                        : "border-white/10 focus:border-[#4fe3c1]"
                    }
                  `}
                />

                {errors.mensaje && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.mensaje.message}
                  </p>
                )}

                <p className="mt-2 text-xs text-gray-500">
                  Máximo 1000 caracteres
                </p>

              </div>

              {/* ======================== */}
              {/* ÉXITO */}
              {/* ======================== */}

              {estadoEnvio === "success" && (
                <div
                  className="
                    rounded-lg
                    border border-[#4fe3c1]/30
                    bg-[#4fe3c1]/10
                    px-5 py-4
                    text-sm
                    text-[#4fe3c1]
                  "
                >
                  ✓ Mensaje enviado correctamente. ¡Gracias por contactarme!
                </div>
              )}

              {/* ======================== */}
              {/* ERROR */}
              {/* ======================== */}

              {estadoEnvio === "error" && (
                <div
                  className="
                    rounded-lg
                    border border-red-400/30
                    bg-red-400/10
                    px-5 py-4
                    text-sm
                    text-red-400
                  "
                >
                  No se pudo enviar el mensaje. Intentá nuevamente.
                </div>
              )}

              {/* ======================== */}
              {/* BOTÓN */}
              {/* ======================== */}

              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="
                  w-full
                  rounded-lg
                  bg-[#4fe3c1]
                  px-6 py-4
                  font-bold
                  text-[#07110f]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#68efd1]

                  disabled:cursor-not-allowed
                  disabled:opacity-40
                  disabled:hover:translate-y-0
                "
              >
                {isSubmitting
                  ? "Enviando..."
                  : "Enviar mensaje"}
              </button>

            </form>

          </div>

        </div>

      </div>

      <Footer />

    </section>
  );
};