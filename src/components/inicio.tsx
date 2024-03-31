import Navbar from "./navbar";

import { ReactNode, useEffect, useRef, useState } from "react";
import DraggableApp from "./draggableApp";

import Appbar from "./appbar";
import Time from "./time";
// import DataRand from "./dataRand";

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

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Autoplay with muted for better browser compatibility
    video.muted = true;
    video.autoplay = true;

    // Play the video
    video.play().catch((error) => {
      // Handle autoplay failure
      console.error('Failed to autoplay:', error);
    });
  }, []);



  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* <video className="absolute top-0 left-0 z-10" src="/copland inicio.mp4"/> */}
      <div className="absolute z-10 bg-white"
              style={{
                animation: "degradadoFinal 5s linear 1 forwards",
              }}>

      <div
        className="flex h-screen w-screen justify-center bg-black "
        style={{
          animation: "degradadoInicial 4s linear 1 forwards",
        }}
        >
        <video
          src="/OP.mp4"
          ref={videoRef}
          autoPlay
          style={{ width: "auto", height: "100vh" }}
          ></video>
      </div>
          </div>
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
      
      <div className="selector flex h-screen w-screen justify-center bg-[#070420] ">
        <img className="selector h-screen" src="/fondo.png"></img>
      </div>
      <div className="absolute left-5 top-5">
        <Navbar aplicaciones={aplicaciones} setAplicaciones={setAplicaciones} />
      </div>
      <div className="absolute bottom-5 left-5">
        <Appbar aplicaciones={aplicaciones} />
      </div>
      <div className="absolute bottom-5 right-5">
        <Time />
      </div>
      {/* <div className="absolute right-5 top-5">
        <DataRand />
      </div> */}
    </div>
  );
};

export default Inicio;
