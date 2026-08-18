import { useEffect, useState } from "react";

export const VolverArriba = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const controlarScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", controlarScroll);

    return () => {
      window.removeEventListener("scroll", controlarScroll);
    };
  }, []);

  const subir = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={subir}
      aria-label="Volver arriba"
      className="
        fixed
        bottom-6
        right-6
        z-50

        flex
        h-14
        w-14
        items-center
        justify-center

        rounded-full
        bg-emerald-500
        text-2xl
        font-bold
        text-[#07110f]

        shadow-lg
        shadow-emerald-500/30

        transition-all
        duration-300

        hover:-translate-y-1
        hover:bg-emerald-400

        active:scale-95
      "
    >
      ↑
    </button>
  );
};