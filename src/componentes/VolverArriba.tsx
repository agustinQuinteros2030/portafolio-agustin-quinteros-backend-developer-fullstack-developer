import { useEffect, useState } from "react";

export const VolverArriba = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const controlarScroll = (): void => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", controlarScroll);

    controlarScroll();

    return () => {
      window.removeEventListener("scroll", controlarScroll);
    };
  }, []);

  const subir = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={subir}
      aria-label="Volver arriba"
      title="Volver arriba"
      className="
        group

        fixed
        bottom-5
        right-4
        z-50

        flex
        h-12
        w-12
        items-center
        justify-center

        rounded-full

        border
        border-[#4fe3c1]/40

        bg-[#4fe3c1]

        text-[#07110f]

        shadow-[0_8px_30px_rgba(79,227,193,0.25)]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-1
        hover:scale-110
        hover:bg-[#68efd1]
        hover:shadow-[0_10px_40px_rgba(79,227,193,0.4)]

        active:scale-95

        sm:bottom-6
        sm:right-6
        sm:h-14
        sm:w-14
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="
          h-5
          w-5

          transition-transform
          duration-300

          group-hover:-translate-y-0.5

          sm:h-6
          sm:w-6
        "
      >
        <path d="M12 19V5" />
        <path d="M6 11L12 5L18 11" />
      </svg>
    </button>
  );
};