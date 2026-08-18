export const PantallaCarga = () => {
  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]

        flex
        min-h-screen
        flex-col
        items-center
        justify-center

        bg-[#07110f]
        text-white
      "
    >
      {/* Logo */}
      <div className="mb-10 font-mono text-3xl font-bold tracking-wide">
        <span className="text-[#ff6868]">&lt;</span>

        <span className="mx-3 text-[#4fe3c1]">
          AgustinQ
        </span>

        <span className="text-[#ff6868]">/&gt;</span>
      </div>

      {/* Spinner */}
      <div
        className="
          h-12
          w-12

          animate-spin

          rounded-full

          border-4
          border-[#4fe3c1]/20
          border-t-[#4fe3c1]
        "
      />

      {/* Texto */}
      <p
        className="
          mt-7
          font-mono
          text-sm
          text-gray-400
          md:text-base
        "
      >
        Cargando experiencia
        <span className="loading-dots">...</span>
      </p>
    </div>
  );
};