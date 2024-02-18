import Navbar from "./navbar";

import { ReactNode, useState } from "react";
import DraggableApp from "./draggableApp";

export interface aplicacion {
  id: number;
  minimized: Boolean;
  startx: number;
  starty: number;
  lastx: number;
  lasty: number;
  z: number;
  component: ReactNode;
}

const Inicio = () => {
  const [aplicaciones, setAplicaciones] = useState<aplicacion[]>([]);
  const [activa, setAplicacionActiva] = useState<number>(0);

  return (
    <div className="relative overflow-hidden h-screen w-screen">
      {aplicaciones &&
        aplicaciones.map((app: aplicacion, index) => {
          return (
            <DraggableApp
              aplicaciones={aplicaciones}
              aplicacionActual={app}
              setAplicaciones={setAplicaciones}
              index={index}
              currentActiva={index == activa}
              activa={activa}
              setActiva={setAplicacionActiva}
            />
          );
        })}
      <div className="flex h-screen w-screen justify-center bg-[#070420] ">
        <img className="h-screen" src="/fondo.png"></img>
      </div>
      <div className="absolute left-5 top-5">
        <Navbar aplicaciones={aplicaciones} setAplicaciones={setAplicaciones} />
      </div>
    </div>
  );
};

export default Inicio;
