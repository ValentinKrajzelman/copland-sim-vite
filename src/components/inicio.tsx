import Navbar from "./navbar";

import { ReactNode, useEffect, useState } from "react";
import DraggableApp from "./draggableApp";

import Appbar from "./appbar";
import DataRand from "./dataRand";

import { consulta } from "../api/chatCall";

export interface aplicacion {
  id: number;
  nombre: string;
  minimized: Boolean;
  startx: number;
  starty: number;
  z: number;
  component: ReactNode;
}

const Inicio = () => {
  const [aplicaciones, setAplicaciones] = useState<aplicacion[]>([]);
  const [activa, setAplicacionActiva] = useState<number>(0);
  // const [Laconsulta, setConsulta] = useState(consulta('asdf'));
  

  useEffect(()=>{
    consulta('asdf').then(
      (res)=>{console.log(res)}
    )
    // console.log();
  },[])

  return (
    <div className="relative overflow-hidden h-screen w-screen">
      {aplicaciones &&
        aplicaciones.map((app: aplicacion, index) => {
          return (
            <DraggableApp
              key={index}
              aplicaciones={aplicaciones}
              aplicacionActual={app}
              setAplicaciones={setAplicaciones}
              index={index}
              activa={activa}
              currentActiva={index == activa}
              setActiva={setAplicacionActiva}
            />
          );
        })}
      <div className="flex h-screen w-screen justify-center bg-[#070420] ">
        {/* <img className="h-screen" src="/fondo.png"></img> */}
      </div>
      <div className="absolute left-5 top-5">
        <Navbar aplicaciones={aplicaciones} setAplicaciones={setAplicaciones} />
      </div>
      <div className="absolute left-5 bottom-5">
        <Appbar aplicaciones={aplicaciones} />
      </div>
      <div className="absolute right-5 top-5">
        < DataRand />
      </div>
    </div>
  );
};

export default Inicio;
