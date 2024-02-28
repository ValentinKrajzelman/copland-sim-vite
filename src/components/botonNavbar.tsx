"use client";
import { ReactNode } from "react";
import { aplicacion } from "./inicio";

interface props {
  aplicaciones: aplicacion[];
  setAplicaciones: Function;
  nombre: String;
  descripcion: String;
  component: ReactNode;
  x: number;
  y: number;
  id: number;
}

const BotonNavbar = ({nombre, x, y, descripcion, component, aplicaciones, setAplicaciones, id}: props) => {


  const handleClick = () => {
    if (aplicaciones.length != 0 && !aplicaciones.find((aplicacion)=>{ return (aplicacion.id == id && aplicacion.minimized==false)})) {
      setAplicaciones([
        ...aplicaciones,
        {
          id: id,
          nombre: nombre,
          minimized: false,
          startx: x,
          starty: y,
          z: 1,
          component: component,
        },
      ]);
    } else if (!(aplicaciones.length != 0)){
      setAplicaciones([
        {
          id: id,
          nombre: nombre,
          minimized: false,
          startx: x,
          starty: y,
          z: 1,
          component: component,
        },
      ]);
    }
  };

  return (
    <button
      onClick={() => {
        handleClick();
      }}
      className="flex justify-start px-3 pl-7 py-1 text-white hover:bg-[#217553]"
    >
      {nombre + ": " + descripcion}
    </button>
  );
};

export default BotonNavbar;
