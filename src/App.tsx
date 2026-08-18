import { useEffect, useState } from "react";



import { Inicio } from "./secciones/Inicio";
import { Proyectos } from "./secciones/Proyectos";
import { Experiencia } from "./secciones/Experiencia";
import { SobreMi } from "./secciones/SobreMi";
import { Contacto } from "./secciones/Contacto";
import { PantallaCarga } from "./componentes/PantallaCarga";
import { Navbar } from "./componentes/Navbar";
import { VolverArriba } from "./componentes/VolverArriba";

function App() {
  const [cargando, setCargando] = useState<boolean>(true);

  useEffect(() => {
    const timer: number = window.setTimeout(() => {
      setCargando(false);
    }, 800);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  if (cargando) {
    return <PantallaCarga />;
  }

  return (
    <>
      <Navbar />

      <main>
        <Inicio />
        <Proyectos />
        <Experiencia />
        <SobreMi />
        <Contacto />
      </main>

      <VolverArriba />
    </>
  );
}

export default App;